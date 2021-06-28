const APIResponse = require("../../../../../../routes/controllers/api_response").MasterModel;
const CommonAPIHandler = require("../../../../../../routes/middlewares/common_api_handler").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class CurrenciesOperations{
	/**
	 * The method to get currencies
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getCurrencies()	{
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/org/currencies");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_GET;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_READ;
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to add currencies
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async addCurrencies(request)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/org/currencies");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_POST;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_CREATE;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		handlerInstance.mandatoryChecker = true;
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to update currencies
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateCurrencies(request)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/org/currencies");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_PUT;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_UPDATE;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		handlerInstance.mandatoryChecker = true;
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to enable multiple currencies
	 * @param {BaseCurrencyWrapper} request An instance of BaseCurrencyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async enableMultipleCurrencies(request)	{
		const BaseCurrencyWrapper = require("./base_currency_wrapper").MasterModel;
		if((request != null) && (!(request instanceof BaseCurrencyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BaseCurrencyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/org/currencies/actions/enable");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_POST;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_CREATE;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		handlerInstance.mandatoryChecker = true;
		let BaseCurrencyActionHandler = require.resolve("./base_currency_action_handler");
		return handlerInstance.apiCall(BaseCurrencyActionHandler, "application/json");

	}

	/**
	 * The method to update base currency
	 * @param {BaseCurrencyWrapper} request An instance of BaseCurrencyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateBaseCurrency(request)	{
		const BaseCurrencyWrapper = require("./base_currency_wrapper").MasterModel;
		if((request != null) && (!(request instanceof BaseCurrencyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BaseCurrencyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/org/currencies/actions/enable");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_PUT;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_UPDATE;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		handlerInstance.mandatoryChecker = true;
		let BaseCurrencyActionHandler = require.resolve("./base_currency_action_handler");
		return handlerInstance.apiCall(BaseCurrencyActionHandler, "application/json");

	}

	/**
	 * The method to get currency
	 * @param {BigInt} id A BigInt representing the id
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getCurrency(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/org/currencies/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_GET;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_READ;
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update currency
	 * @param {BigInt} id A BigInt representing the id
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateCurrency(id, request)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/org/currencies/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_PUT;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_UPDATE;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
module.exports = {
	MasterModel : CurrenciesOperations,
	CurrenciesOperations : CurrenciesOperations
}
