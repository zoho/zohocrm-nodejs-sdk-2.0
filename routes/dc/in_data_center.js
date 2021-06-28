const DataCenter = require("./data_center").DataCenter;

/**
 * This class represents the properties of Zoho CRM in IN Domain.
 * @extends DataCenter
 */
class INDataCenter extends DataCenter{

	static _PRODUCTION;

	static _SANDBOX;

	static _DEVELOPER;
	
	/**
     * This method represents the Zoho CRM Production environment in IN domain
     * @returns {Environment} An instance of Environment
     */
	static PRODUCTION(){
		if(INDataCenter._PRODUCTION  == null){
            INDataCenter._PRODUCTION = DataCenter.setEnvironment("https://www.zohoapis.in", new INDataCenter().getIamUrl(), new INDataCenter().getFileUploadUrl());
		}
		
        return INDataCenter._PRODUCTION;
	};

	/**
     * This method represents the Zoho CRM Sandbox environment in IN domain
     * @returns {Environment} An instance of Environment
     */
	static SANDBOX(){
		if(INDataCenter._SANDBOX == null){
            INDataCenter._SANDBOX = DataCenter.setEnvironment("https://sandbox.zohoapis.in", new INDataCenter().getIamUrl(), new INDataCenter().getFileUploadUrl());
		}
		
        return INDataCenter._SANDBOX;
	};

	/**
     * This method represents the Zoho CRM Developer environment in IN domain
     * @returns {Environment} An instance of Environment
     */
	static DEVELOPER(){
		if(INDataCenter._DEVELOPER == null){
            INDataCenter._DEVELOPER = DataCenter.setEnvironment("https://developer.zohoapis.in", new INDataCenter().getIamUrl(), new INDataCenter().getFileUploadUrl());
		}
		
        return INDataCenter._DEVELOPER;
	};

	getIamUrl(){
		return "https://accounts.zoho.in/oauth/v2/token";
	}

	getFileUploadUrl(){
        return "https://content.zohoapis.in"
    }
}

module.exports = {INDataCenter}