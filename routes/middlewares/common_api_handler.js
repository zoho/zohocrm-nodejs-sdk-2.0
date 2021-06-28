
const Initializer = require("../initializer").Initializer;
const APIHTTPConnector = require("../controllers/api_http_connector").APIHTTPConnector;
const JSONConverter = require("../../utils/util/json_converter").JSONConverter;
const XMLConverter = require("../../utils/util/xml_converter").XMLConverter;
const ParameterMap = require("../../routes/parameter_map").ParameterMap;
const HeaderMap = require("../../routes/header_map").HeaderMap;
const Param = require("../../routes/param").Param;
const Header = require("../../routes/header").Header;
const Path =  require ("path") ;
const Logger = require('winston');
const Constants = require("../../utils/util/constants").Constants;
const FormDataConverter = require("../../utils/util/form_data_converter").FormDataConverter;
const Downloader = require("../../utils/util/downloader").Downloader;
const os = require('os');
const SDKException = require("../../core/com/zoho/crm/api/exception/sdk_exception").SDKException;

/**
* This class is to process the API request and its response.
* Construct the objects that are to be sent as parameters or in the request body with the API.
* The Request parameter, header and body objects are constructed here.
* Process the response JSON and converts it to relevant objects in the library.
*/
class CommonAPIHandler{

	apiPath;

	parameters = new ParameterMap();

	headers = new HeaderMap();

	request;

	httpMethod;

	moduleAPIName;

	contentType;

	categoryMethod;

	mandatoryChecker;

	/**
	 * This is a setter method to set an API request content type.
	 * @param {string} contentType - A String containing the API request content type.
	 */
	set contentType(contentType) {

		this.contentType=contentType;
	}

	/**
	 * This is a setter method to set the Zoho CRM module API name.
	 * @param {string} moduleAPIName - A String containing the Zoho CRM module API name.
	 */
	set moduleAPIName(moduleAPIName) {

		this.moduleAPIName=moduleAPIName;
	}

	/**
	 * This is a getter method to get the Zoho CRM module API name.
	 * @returns A String representing the Zoho CRM module API name.
	 */
	get moduleAPIName() {

		return this.moduleAPIName;
	}

	/**
	 * This is a setter method to set the API request URL.
	 * @param {string} apiPath - A String containing the API request URL.
	 */
	set apiPath(apiPath) {

		this.apiPath = apiPath;
	}

	/**
	 * This is a getter method to get the API request URL.
	 * @returns {String} A String containing the API request URL.
	 */
	get apiPath() {
		return this.apiPath;
	}

	/**
	 * This is a setter method to set the API request parameter map.
	 * @param {ParameterMap} param - A ParameterMap class instance containing the API request parameter.
	 */
	set param(param) {
		if(param == null) {
			return;
		}

		if(this.parameters.parameterMap != null && this.parameters.parameterMap.size > 0) {
			for(let key of param.parameterMap.keys()) {
				this.parameters.parameterMap.set(key, param.parameterMap.get(key));
			}
		}
		else {
			this.parameters = param;
		}
	}

	/**
	 * This method is to add an API request parameter.
	 * @param {Param} paramInstance - A Param instance containing the API request parameter.
	 * @param {object} paramValue - An object containing the API request parameter value.
	 * @throws {SDKException}
	 */
	async addParam(paramInstance,paramValue) {
		if(paramValue == null) {
			return;
		}

		if(this.parameters == null) {
			this.parameters = new ParameterMap();
		}

		await this.parameters.add(paramInstance, paramValue);
	}

	/**
	 * This method is to add an API request header.
	 * @param {Header} headerInstance - A Header instance containing the API request header.
	 * @param {object} headerValue - An object containing the API request header value.
	 * @throws {SDKException}
	 */
	async addHeader(headerInstance, headerValue) {
		if(headerValue == null) {
			return;
		}

		if(this.headers == null) {
			this.headers = new HeaderMap();
		}

		await this.headers.add(headerInstance, headerValue);
	}

	/**
	 * This is a setter method to set the API request header map.
	 * @param {HeaderMap} header - A HeaderMap class instance containing the API request header.
	 */
	set header(header) {
		if(header == null) {
			return;
		}

		if(this.headers.headerMap != null && this.headers.headerMap.size > 0) {
			for(let key of header.headerMap.keys()) {
				this.headers.headerMap.set(key, header.headerMap.get(key));
			}
		}
		else {
			this.headers = header;
		}
	}

	/**
	 * This is a setter method to set the API request body object.
	 * @param {object} request - An Object containing the API request body object.
	 */
	set request(request) {
		this.request = request;
	}

	/**
	 * This is a setter method to set the HTTP API request method.
	 * @param {string} httpMethod - A String containing the HTTP API request method.
	 */
	set httpMethod(httpMethod) {
		this.httpMethod = httpMethod;
	}

	/**
	 * This is a getter method to get the HTTP API request method.
	 * @returns {string} A String containing the HTTP API request method.
	 */
	get httpMethod() {
		return this.httpMethod;
	}

	/**
	 * This method is used in constructing API request and response details. To make the Zoho CRM API calls.
	 * @param {class} className - A Class containing the method return type.
	 * @param {string} encodeType - A String containing the expected API response content type.
	 * @see APIHTTPConnector
	 * @returns {APIResponse} An instance of APIResponse representing the Zoho CRM API response
	 * @throws {SDKException}
	 */
	async apiCall(className,  encodeType) {

		let initializer = await Initializer.getInitializer();

		if(initializer == null) {
			throw new SDKException(Constants.SDK_UNINITIALIZATION_ERROR, Constants.SDK_UNINITIALIZATION_MESSAGE);
		}

		var connector = new APIHTTPConnector();

		try {
			await this.setAPIUrl(connector);
		}
		catch (error) {
			if(!(error instanceof SDKException)) {
				error = new SDKException(null, null, null, error);
			}

			Logger.error(Constants.SET_API_URL_EXCEPTION, error);

			throw error;
		}

		connector.requestMethod = this.httpMethod;

		connector.contentType = this.contentType;

		if(this.headers != null && this.headers.headerMap.size > 0){
			connector.headers = this.headers.headerMap;
		}

		if(this.parameters != null && this.parameters.parameterMap.size > 0){
			connector.parameters = this.parameters.parameterMap;
		}

		try {
			await initializer.token.authenticate(connector);
		}
		catch (error) {
			if(!(error instanceof SDKException)) {
				error = new SDKException(null, null, null, error);
			}

			Logger.error(Constants.AUTHENTICATION_EXCEPTION, error);

			throw error;
		}

		className = className.replace(/\\/g, '/');

		let baseName = className.split("/");

		let fileName = Path.basename(className).split('.').slice(0, -1).join('.');

		let index = baseName.indexOf(Constants.CORE);

		let packageNames = baseName.slice(index, baseName.length-1);

		packageNames.push(fileName);

		var pack = packageNames.join("/");

		var returnObject = null;

		var converterInstance = null;

		if(this.contentType != null && (this.httpMethod.toUpperCase() === Constants.REQUEST_METHOD_POST || this.httpMethod.toUpperCase() === Constants.REQUEST_METHOD_PUT || this.httpMethod.toUpperCase() === Constants.REQUEST_METHOD_PATCH)){

			let request = null;

			let baseName = pack.split("/");

			baseName.pop();

			try {
				converterInstance = this.getConverterClassInstance(this.contentType.toLowerCase());

				var className = converterInstance.getFileName(this.request.constructor.name);

				baseName.push(className);

				request = await converterInstance.formRequest(this.request, baseName.join("/"), null, null);

			}
			catch (error) {
				if(!(error instanceof SDKException)) {
					error = new SDKException(null, null, null, error);
				}

				Logger.error(Constants.FORM_REQUEST_EXCEPTION, error);

				throw error;
			}

			connector.requestBody = request;
		}

		try {
			connector.headers.set(Constants.ZOHO_SDK,os.platform() + "/" + os.release() + "/nodejs-2.0/" + process.version + ":" + Constants.SDK_VERSION);

			let response =  await connector.fireRequest(converterInstance);

			let headerMap = await this.getHeaders(response.headers);

			if(response.headers.hasOwnProperty(Constants.CONTENT_TYPE_HEADER.toLowerCase())) {
				let contentTypeHeader = response.headers[Constants.CONTENT_TYPE_HEADER.toLowerCase()];

				let contentType = contentTypeHeader.split(";")[0];

				converterInstance = this.getConverterClassInstance(contentType.toLowerCase());

				returnObject = await converterInstance.getWrappedResponse(response, pack);
			}
			else {
				Logger.info(Constants.API_ERROR_RESPONSE + response.statusCode.toString());
			}

			let APIResponse = require("../controllers/api_response").APIResponse;

			return new APIResponse(headerMap, response.statusCode, returnObject);
		}
		catch (error) {
			if(!(error instanceof SDKException)) {
				error = new SDKException(null, null, null, error);
			}

			Logger.error(Constants.API_CALL_EXCEPTION, error);

			throw error;
		}
	}

	async getHeaders(headers){
		let headerMap = new Map();

		if(Object.keys(headers).length > 0){
			for (let key in headers){
				headerMap.set(key, headers[key]);
			}
		}

		return headerMap;
	}


	async setAPIUrl(connector) {
		var apiPath = "";

		let initializer = await Initializer.getInitializer();

		if(this.apiPath.toString().includes(Constants.HTTP)) {
			if(this.apiPath.toString().includes(Constants.CONTENT_API_URL)) {
				apiPath = apiPath.concat(initializer.environment.fileUploadUrl)

				try {
					const myURL = new URL(this.apiPath);

					apiPath = apiPath.concat(myURL.pathname);

				} catch (error) {
					throw new SDKException(Constants.INVALID_URL_ERROR, null, null, error);
				}
			}
			else{
				if(this.apiPath.substring(0,1) == "/") {
					this.apiPath = this.apiPath.substring(1);
				}

				apiPath = apiPath.concat(this.apiPath);
			}
		}
		else {
			apiPath = apiPath.concat(initializer.environment.url);

			apiPath = apiPath.concat(this.apiPath);
		}

		connector.url = apiPath;
	}

	/**
	 * This method is used to get a Converter class instance.
	 * @param {string} encodeType - A String containing the API response content type.
	 * @returns A Converter class instance.
	 */
	getConverterClassInstance(encodeType) {
		var type = null;

		switch(encodeType) {
			case "application/json":
			case "text/plain":
			case "application/ld+json":
				type = new JSONConverter(this);
				break;

			case "application/xml":
			case "text/xml":
				type= new XMLConverter(this);
				break;

			case "multipart/form-data":
				type= new FormDataConverter(this);
				break;

			case "image/png":
			case "image/jpeg":
			case "image/gif":
			case "image/tiff":
			case "image/svg+xml":
			case "image/bmp":
			case "image/webp":
			case "text/csv":
			case "text/html":
			case "text/css":
			case "text/javascript":
			case "text/calendar":
			case "application/x-download":
			case "application/zip":
			case "application/pdf":
			case "application/java-archive":
			case "application/javascript":
			case "application/octet-stream":
			case "application/xhtml+xml":
			case "application/x-bzip":
			case "application/msword":
			case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
			case "application/gzip":
			case "application/x-httpd-php":
			case "application/vnd.ms-powerpoint":
			case "application/vnd.rar":
			case "application/x-sh":
			case "application/x-tar":
			case "application/vnd.ms-excel":
			case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
			case "application/x-7z-compressed":
			case "audio/mpeg":
			case "audio/x-ms-wma":
			case "audio/vnd.rn-realaudio":
			case "audio/x-wav":
			case "audio/3gpp":
			case "audio/3gpp2":
			case "video/mpeg":
			case "video/mp4":
			case "video/webm":
			case "video/3gpp":
			case "video/3gpp2":
			case "font/ttf":
				type = new Downloader(this);
				break;
		}

		return type;
	}

	/**
	 * This is a setter method to set mandatoryChecker
	 * @param {Bool} mandatoryChecker - A Boolean value
	 */
	set mandatoryChecker(mandatoryChecker) {
		this.mandatoryChecker = mandatoryChecker;
	}

	/**
	 * This is a getter method to get mandatoryChecker
	 * @returns {Boolean} - A Boolean value representing mandatoryChecker
	 */
	get mandatoryChecker() {
		return this.mandatoryChecker;
	}

	/**
	 * This is a setter method to set categoryMethod
	 * @param {String} categoryMethod - A String value representing categoryMethod
	 */
	set categoryMethod(categoryMethod) {
		this.categoryMethod = categoryMethod;
	}

	/**
	 * This is a getter method to get categoryMethod
	 * @returns {String} - A String value representing categoryMethod
	 */
	get categoryMethod() {
		return this.categoryMethod;
	}
}

module.exports = {
	MasterModel : CommonAPIHandler,
	CommonAPIHandler : CommonAPIHandler
};