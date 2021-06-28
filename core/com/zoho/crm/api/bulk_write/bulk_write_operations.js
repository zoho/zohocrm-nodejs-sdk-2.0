const Header = require("../../../../../../routes/header").MasterModel;
const HeaderMap = require("../../../../../../routes/header_map").MasterModel;
const APIResponse = require("../../../../../../routes/controllers/api_response").MasterModel;
const CommonAPIHandler = require("../../../../../../routes/middlewares/common_api_handler").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class BulkWriteOperations{
	/**
	 * The method to upload file
	 * @param {FileBodyWrapper} request An instance of FileBodyWrapper
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async uploadFile(request, headerInstance=null)	{
		const FileBodyWrapper = require("./file_body_wrapper").MasterModel;
		if((request != null) && (!(request instanceof FileBodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: FileBodyWrapper", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("https://content.zohoapis.com/crm/v2/upload");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_POST;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_CREATE;
		handlerInstance.contentType = "multipart/form-data";
		handlerInstance.request = request;
		handlerInstance.mandatoryChecker = true;
		handlerInstance.header = headerInstance;
		let ActionResponse = require.resolve("./action_response");
		return handlerInstance.apiCall(ActionResponse, "application/json");

	}

	/**
	 * The method to create bulk write job
	 * @param {RequestWrapper} request An instance of RequestWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createBulkWriteJob(request)	{
		const RequestWrapper = require("./request_wrapper").MasterModel;
		if((request != null) && (!(request instanceof RequestWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: RequestWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/bulk/v2/write");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_POST;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_CREATE;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		handlerInstance.mandatoryChecker = true;
		let ActionResponse = require.resolve("./action_response");
		return handlerInstance.apiCall(ActionResponse, "application/json");

	}

	/**
	 * The method to get bulk write job details
	 * @param {BigInt} jobId A BigInt representing the jobId
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getBulkWriteJobDetails(jobId)	{
		if((!(Object.prototype.toString.call(jobId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jobId EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/bulk/v2/write/");
		apiPath = apiPath.concat(jobId.toString());
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_GET;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_READ;
		let ResponseWrapper = require.resolve("./response_wrapper");
		return handlerInstance.apiCall(ResponseWrapper, "application/json");

	}

	/**
	 * The method to download bulk write result
	 * @param {String} downloadUrl A String representing the downloadUrl
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async downloadBulkWriteResult(downloadUrl)	{
		if((!(Object.prototype.toString.call(downloadUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: downloadUrl EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(downloadUrl.toString());
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_GET;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_READ;
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/octet-stream");

	}

}
class UploadFileHeader{

	static FEATURE = new Header("feature", "com.zoho.crm.api.BulkWrite.UploadFileHeader");
	static X_CRM_ORG = new Header("X-CRM-ORG", "com.zoho.crm.api.BulkWrite.UploadFileHeader");
}

module.exports = {
	MasterModel : BulkWriteOperations,
	BulkWriteOperations : BulkWriteOperations,
	UploadFileHeader : UploadFileHeader
}
