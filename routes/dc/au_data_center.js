const DataCenter = require("./data_center").DataCenter;

/**
 * This class represents the properties of Zoho CRM in AU Domain.
 * @extends DataCenter
 */
class AUDataCenter extends DataCenter{

	static _PRODUCTION;

	static _SANDBOX;

	static _DEVELOPER;

    /**
     * This method represents the Zoho CRM Production environment in AU domain
     * @returns {Environment} An instance of Environment
     */
	static PRODUCTION(){
        if(AUDataCenter._PRODUCTION  == null){
            AUDataCenter._PRODUCTION = DataCenter.setEnvironment("https://www.zohoapis.com.au", new AUDataCenter().getIamUrl(), new AUDataCenter().getFileUploadUrl());
        }

        return AUDataCenter._PRODUCTION;
    }

    /**
     * This method represents the Zoho CRM Sandbox environment in AU domain
     * @returns {Environment} An instance of Environment
     */
    static SANDBOX(){
        if(AUDataCenter._SANDBOX == null){
            AUDataCenter._SANDBOX = DataCenter.setEnvironment("https://sandbox.zohoapis.com.au", new AUDataCenter().getIamUrl(), new AUDataCenter().getFileUploadUrl()); 
        }

        return AUDataCenter._SANDBOX;
    }

    /**
     * This method represents the Zoho CRM Developer environment in AU domain
     * @returns {Environment} An instance of Environment
     */
    static DEVELOPER(){
        if(AUDataCenter._DEVELOPER == null){
            AUDataCenter._DEVELOPER = DataCenter.setEnvironment("https://developer.zohoapis.com.au", new AUDataCenter().getIamUrl(), new AUDataCenter().getFileUploadUrl());
        }

        return AUDataCenter._DEVELOPER;
    }

    getIamUrl(){
		return "https://accounts.zoho.com.au/oauth/v2/token";
    }
    
    getFileUploadUrl(){
        return "https://content.zohoapis.com.au"
    }
}

module.exports = {AUDataCenter}