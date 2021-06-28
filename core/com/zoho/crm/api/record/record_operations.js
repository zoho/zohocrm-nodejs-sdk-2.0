const Header = require("../../../../../../routes/header").MasterModel;
const HeaderMap = require("../../../../../../routes/header_map").MasterModel;
const Param = require("../../../../../../routes/param").MasterModel;
const ParameterMap = require("../../../../../../routes/parameter_map").MasterModel;
const APIResponse = require("../../../../../../routes/controllers/api_response").MasterModel;
const CommonAPIHandler = require("../../../../../../routes/middlewares/common_api_handler").MasterModel;
const Utility = require("../../../../../../utils/util/utility").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class RecordOperations{
	/**
	 * The method to get record
	 * @param {BigInt} id A BigInt representing the id
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getRecord(id, moduleAPIName, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_GET;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_READ;
		handlerInstance.param = paramInstance;
		handlerInstance.header = headerInstance;
		await Utility.getFields(moduleAPIName);
		handlerInstance.moduleAPIName = moduleAPIName;
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update record
	 * @param {BigInt} id A BigInt representing the id
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateRecord(id, moduleAPIName, request, headerInstance=null)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_PUT;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_UPDATE;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		handlerInstance.header = headerInstance;
		await Utility.getFields(moduleAPIName);
		handlerInstance.moduleAPIName = moduleAPIName;
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delete record
	 * @param {BigInt} id A BigInt representing the id
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteRecord(id, moduleAPIName, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_DELETE;
		handlerInstance.categoryMethod = Constants.REQUEST_METHOD_DELETE;
		handlerInstance.param = paramInstance;
		handlerInstance.header = headerInstance;
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get records
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getRecords(moduleAPIName, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_GET;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_READ;
		handlerInstance.param = paramInstance;
		handlerInstance.header = headerInstance;
		await Utility.getFields(moduleAPIName);
		handlerInstance.moduleAPIName = moduleAPIName;
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create records
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createRecords(moduleAPIName, request)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_POST;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_CREATE;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		handlerInstance.mandatoryChecker = true;
		await Utility.getFields(moduleAPIName);
		handlerInstance.moduleAPIName = moduleAPIName;
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to update records
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateRecords(moduleAPIName, request, headerInstance=null)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_PUT;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_UPDATE;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		handlerInstance.mandatoryChecker = true;
		handlerInstance.header = headerInstance;
		await Utility.getFields(moduleAPIName);
		handlerInstance.moduleAPIName = moduleAPIName;
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delete records
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteRecords(moduleAPIName, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_DELETE;
		handlerInstance.categoryMethod = Constants.REQUEST_METHOD_DELETE;
		handlerInstance.param = paramInstance;
		handlerInstance.header = headerInstance;
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to upsert records
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async upsertRecords(moduleAPIName, request, headerInstance=null)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/upsert");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_POST;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_ACTION;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		handlerInstance.header = headerInstance;
		await Utility.getFields(moduleAPIName);
		handlerInstance.moduleAPIName = moduleAPIName;
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get deleted records
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getDeletedRecords(moduleAPIName, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/deleted");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_GET;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_READ;
		handlerInstance.param = paramInstance;
		handlerInstance.header = headerInstance;
		let DeletedRecordsHandler = require.resolve("./deleted_records_handler");
		return handlerInstance.apiCall(DeletedRecordsHandler, "application/json");

	}

	/**
	 * The method to search records
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async searchRecords(moduleAPIName, paramInstance=null, headerInstance=null)	{
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/search");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_GET;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_READ;
		handlerInstance.param = paramInstance;
		handlerInstance.header = headerInstance;
		await Utility.getFields(moduleAPIName);
		handlerInstance.moduleAPIName = moduleAPIName;
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to convert lead
	 * @param {BigInt} id A BigInt representing the id
	 * @param {ConvertBodyWrapper} request An instance of ConvertBodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async convertLead(id, request)	{
		const ConvertBodyWrapper = require("./convert_body_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof ConvertBodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: ConvertBodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/Leads/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/convert");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_POST;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_CREATE;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		handlerInstance.mandatoryChecker = true;
		await Utility.getFields("Deals");
		let ConvertActionHandler = require.resolve("./convert_action_handler");
		return handlerInstance.apiCall(ConvertActionHandler, "application/json");

	}

	/**
	 * The method to get photo
	 * @param {BigInt} id A BigInt representing the id
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getPhoto(id, moduleAPIName)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/photo");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_GET;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_READ;
		let DownloadHandler = require.resolve("./download_handler");
		return handlerInstance.apiCall(DownloadHandler, "application/x-download");

	}

	/**
	 * The method to upload photo
	 * @param {BigInt} id A BigInt representing the id
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {FileBodyWrapper} request An instance of FileBodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async uploadPhoto(id, moduleAPIName, request)	{
		const FileBodyWrapper = require("./file_body_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((request != null) && (!(request instanceof FileBodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: FileBodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/photo");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_POST;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_CREATE;
		handlerInstance.contentType = "multipart/form-data";
		handlerInstance.request = request;
		handlerInstance.mandatoryChecker = true;
		await Utility.verifyPhotoSupport(moduleAPIName);
		let FileHandler = require.resolve("./file_handler");
		return handlerInstance.apiCall(FileHandler, "application/json");

	}

	/**
	 * The method to delete photo
	 * @param {BigInt} id A BigInt representing the id
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deletePhoto(id, moduleAPIName)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/photo");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_DELETE;
		handlerInstance.categoryMethod = Constants.REQUEST_METHOD_DELETE;
		let FileHandler = require.resolve("./file_handler");
		return handlerInstance.apiCall(FileHandler, "application/json");

	}

	/**
	 * The method to mass update records
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {MassUpdateBodyWrapper} request An instance of MassUpdateBodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async massUpdateRecords(moduleAPIName, request)	{
		const MassUpdateBodyWrapper = require("./mass_update_body_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((request != null) && (!(request instanceof MassUpdateBodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: MassUpdateBodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/mass_update");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_POST;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_UPDATE;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		handlerInstance.mandatoryChecker = true;
		await Utility.getFields(moduleAPIName);
		handlerInstance.moduleAPIName = moduleAPIName;
		let MassUpdateActionHandler = require.resolve("./mass_update_action_handler");
		return handlerInstance.apiCall(MassUpdateActionHandler, "application/json");

	}

	/**
	 * The method to get mass update status
	 * @param {String} moduleAPIName A String representing the moduleAPIName
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getMassUpdateStatus(moduleAPIName, paramInstance=null)	{
		if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
		}
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/mass_update");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_GET;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_READ;
		handlerInstance.param = paramInstance;
		let MassUpdateResponseHandler = require.resolve("./mass_update_response_handler");
		return handlerInstance.apiCall(MassUpdateResponseHandler, "application/json");

	}

}
class GetRecordParam{

	static APPROVED = new Param("approved", "com.zoho.crm.api.Record.GetRecordParam");
	static CONVERTED = new Param("converted", "com.zoho.crm.api.Record.GetRecordParam");
	static CVID = new Param("cvid", "com.zoho.crm.api.Record.GetRecordParam");
	static UID = new Param("uid", "com.zoho.crm.api.Record.GetRecordParam");
	static FIELDS = new Param("fields", "com.zoho.crm.api.Record.GetRecordParam");
	static STARTDATETIME = new Param("startDateTime", "com.zoho.crm.api.Record.GetRecordParam");
	static ENDDATETIME = new Param("endDateTime", "com.zoho.crm.api.Record.GetRecordParam");
	static TERRITORY_ID = new Param("territory_id", "com.zoho.crm.api.Record.GetRecordParam");
	static INCLUDE_CHILD = new Param("include_child", "com.zoho.crm.api.Record.GetRecordParam");
}

class GetRecordHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.Record.GetRecordHeader");
	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.GetRecordHeader");
}

class UpdateRecordHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.UpdateRecordHeader");
}

class DeleteRecordParam{

	static WF_TRIGGER = new Param("wf_trigger", "com.zoho.crm.api.Record.DeleteRecordParam");
}

class DeleteRecordHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.DeleteRecordHeader");
}

class GetRecordsParam{

	static APPROVED = new Param("approved", "com.zoho.crm.api.Record.GetRecordsParam");
	static CONVERTED = new Param("converted", "com.zoho.crm.api.Record.GetRecordsParam");
	static CVID = new Param("cvid", "com.zoho.crm.api.Record.GetRecordsParam");
	static IDS = new Param("ids", "com.zoho.crm.api.Record.GetRecordsParam");
	static UID = new Param("uid", "com.zoho.crm.api.Record.GetRecordsParam");
	static FIELDS = new Param("fields", "com.zoho.crm.api.Record.GetRecordsParam");
	static SORT_BY = new Param("sort_by", "com.zoho.crm.api.Record.GetRecordsParam");
	static SORT_ORDER = new Param("sort_order", "com.zoho.crm.api.Record.GetRecordsParam");
	static PAGE = new Param("page", "com.zoho.crm.api.Record.GetRecordsParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.Record.GetRecordsParam");
	static STARTDATETIME = new Param("startDateTime", "com.zoho.crm.api.Record.GetRecordsParam");
	static ENDDATETIME = new Param("endDateTime", "com.zoho.crm.api.Record.GetRecordsParam");
	static TERRITORY_ID = new Param("territory_id", "com.zoho.crm.api.Record.GetRecordsParam");
	static INCLUDE_CHILD = new Param("include_child", "com.zoho.crm.api.Record.GetRecordsParam");
}

class GetRecordsHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.Record.GetRecordsHeader");
	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.GetRecordsHeader");
}

class UpdateRecordsHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.UpdateRecordsHeader");
}

class DeleteRecordsParam{

	static IDS = new Param("ids", "com.zoho.crm.api.Record.DeleteRecordsParam");
	static WF_TRIGGER = new Param("wf_trigger", "com.zoho.crm.api.Record.DeleteRecordsParam");
}

class DeleteRecordsHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.DeleteRecordsHeader");
}

class UpsertRecordsHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.UpsertRecordsHeader");
}

class GetDeletedRecordsParam{

	static TYPE = new Param("type", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
	static PAGE = new Param("page", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
}

class GetDeletedRecordsHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.Record.GetDeletedRecordsHeader");
}

class SearchRecordsParam{

	static CRITERIA = new Param("criteria", "com.zoho.crm.api.Record.SearchRecordsParam");
	static EMAIL = new Param("email", "com.zoho.crm.api.Record.SearchRecordsParam");
	static PHONE = new Param("phone", "com.zoho.crm.api.Record.SearchRecordsParam");
	static WORD = new Param("word", "com.zoho.crm.api.Record.SearchRecordsParam");
	static CONVERTED = new Param("converted", "com.zoho.crm.api.Record.SearchRecordsParam");
	static APPROVED = new Param("approved", "com.zoho.crm.api.Record.SearchRecordsParam");
	static PAGE = new Param("page", "com.zoho.crm.api.Record.SearchRecordsParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.Record.SearchRecordsParam");
}

class SearchRecordsHeader{

	static X_EXTERNAL = new Header("X-EXTERNAL", "com.zoho.crm.api.Record.SearchRecordsHeader");
}

class GetMassUpdateStatusParam{

	static JOB_ID = new Param("job_id", "com.zoho.crm.api.Record.GetMassUpdateStatusParam");
}

module.exports = {
	GetRecordParam : GetRecordParam,
	UpsertRecordsHeader : UpsertRecordsHeader,
	GetRecordsHeader : GetRecordsHeader,
	GetRecordHeader : GetRecordHeader,
	GetDeletedRecordsParam : GetDeletedRecordsParam,
	GetMassUpdateStatusParam : GetMassUpdateStatusParam,
	UpdateRecordHeader : UpdateRecordHeader,
	GetRecordsParam : GetRecordsParam,
	SearchRecordsParam : SearchRecordsParam,
	DeleteRecordParam : DeleteRecordParam,
	UpdateRecordsHeader : UpdateRecordsHeader,
	SearchRecordsHeader : SearchRecordsHeader,
	DeleteRecordHeader : DeleteRecordHeader,
	DeleteRecordsParam : DeleteRecordsParam,
	DeleteRecordsHeader : DeleteRecordsHeader,
	MasterModel : RecordOperations,
	RecordOperations : RecordOperations,
	GetDeletedRecordsHeader : GetDeletedRecordsHeader
}
