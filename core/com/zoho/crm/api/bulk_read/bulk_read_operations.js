const APIResponse = require("../../../../../../routes/controllers/api_response").MasterModel;
const CommonAPIHandler = require("../../../../../../routes/middlewares/common_api_handler").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class BulkReadOperations{
	/**
	 * The method to get bulk read job details
	 * @param {BigInt} jobId A BigInt representing the jobId
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getBulkReadJobDetails(jobId)	{
		if((!(Object.prototype.toString.call(jobId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jobId EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/bulk/v2/read/");
		apiPath = apiPath.concat(jobId.toString());
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_GET;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_READ;
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to download result
	 * @param {BigInt} jobId A BigInt representing the jobId
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async downloadResult(jobId)	{
		if((!(Object.prototype.toString.call(jobId) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jobId EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/bulk/v2/read/");
		apiPath = apiPath.concat(jobId.toString());
		apiPath = apiPath.concat("/result");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_GET;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_READ;
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/x-download");

	}

	/**
	 * The method to create bulk read job
	 * @param {RequestWrapper} request An instance of RequestWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createBulkReadJob(request)	{
		const RequestWrapper = require("./request_wrapper").MasterModel;
		if((request != null) && (!(request instanceof RequestWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: RequestWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/bulk/v2/read");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_POST;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_CREATE;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		handlerInstance.mandatoryChecker = true;
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
module.exports = {
	MasterModel : BulkReadOperations,
	BulkReadOperations : BulkReadOperations
}
