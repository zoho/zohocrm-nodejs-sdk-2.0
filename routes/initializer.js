const UserSignature = require("./user_signature").UserSignature;
const SDKException = require("../core/com/zoho/crm/api/exception/sdk_exception").SDKException;
const Environment = require("../routes/dc/environment").Environment;
const Token = require("../models/authenticator/token").Token;
const Store = require("../models/authenticator/store/token_store").TokenStore;
const Logger = require('winston');
const Constants = require('../utils/util/constants').Constants;
const RequestProxy = require("./request_proxy").RequestProxy;
const path = require("path");
const loggerFile = require('./logger/logger');
const SDKLogger = require('./logger/sdk_logger').SDKLogger;
const SDKConfig = require('./sdk_config').SDKConfig;

/**
 * The class to initialize Zoho CRM SDK.
 */
class Initializer{

	environment;
	
	store;

	user;

	token;

	resourcePath;

	requestProxy;

	sdkConfig;

	static jsonDetails;

	static initializer;

	static LOCAL = new Map();

	/**
	 * The method is to initialize the SDK.
	 * @param {UserSignature} user - A UserSignature class instance represents the CRM user.
	 * @param {Environment} environment - A Environment class instance containing the CRM API base URL and Accounts URL.
	 * @param {Token} token - A Token class instance containing the OAuth client application information.
	 * @param {TokenStore} store - A TokenStore class instance containing the token store information.
	 * @param {SDKConfig} sdkConfig - A SDKConfig class instance containing the configuration.
	 * @param {String} resourcePath - A String containing the absolute directory path to store user specific JSON files containing module fields information.
	 * @param {loggerFile.Logger} logger - A Logger class instance containing the log file path and Logger type.
	 * @param {RequestProxy} proxy - A RequestProxy class instance containing the proxy properties of the user. 
	 * @throws {SDKException}
	 */
    static async initialize(user, environment, token, store, sdkConfig, resourcePath, logger=null, proxy=null){
    	var error= {};

		try{

			if (!(user instanceof UserSignature)){
				error[Constants.ERROR_HASH_FIELD] = Constants.USER;

				error[Constants.ERROR_HASH_EXPECTED_TYPE] = UserSignature.name;

				throw new SDKException(Constants.INITIALIZATION_ERROR, Constants.INITIALIZATION_EXCEPTION, error, null);
			}

			if (!(environment instanceof Environment)){
				error[Constants.ERROR_HASH_FIELD] = Constants.ENVIRONMENT;

				error[Constants.ERROR_HASH_EXPECTED_TYPE] = Environment.name;

				throw new SDKException(Constants.INITIALIZATION_ERROR, Constants.INITIALIZATION_EXCEPTION, error, null);
			}

			if (!(token instanceof Token)){
				error[Constants.ERROR_HASH_FIELD] = Constants.TOKEN;

				error[Constants.ERROR_HASH_EXPECTED_TYPE] = Token.name;

				throw new SDKException(Constants.INITIALIZATION_ERROR, Constants.INITIALIZATION_EXCEPTION, error, null);
			}

			if(!(store instanceof Store)){
				error[Constants.ERROR_HASH_FIELD] = Constants.STORE;

				error[Constants.ERROR_HASH_EXPECTED_TYPE] = Store.name;

				throw new SDKException(Constants.INITIALIZATION_ERROR, Constants.INITIALIZATION_EXCEPTION, error, null);
			}

			if(!(sdkConfig instanceof SDKConfig)) {
				error[Constants.ERROR_HASH_FIELD] = Constants.SDK_CONFIG;

				error[Constants.ERROR_HASH_EXPECTED_TYPE] = SDKConfig.name;

				throw new SDKException(Constants.INITIALIZATION_ERROR, Constants.INITIALIZATION_EXCEPTION, error, null);
			}

			if(resourcePath == null || resourcePath.length == 0){
				throw new SDKException(Constants.INITIALIZATION_ERROR, Constants.RESOURCE_PATH_ERROR_MESSAGE);
			}

			if(proxy != null && !(proxy instanceof RequestProxy)) {
				error[Constants.ERROR_HASH_FIELD] = Constants.USER_PROXY;

				error[Constants.ERROR_HASH_EXPECTED_TYPE] = RequestProxy.name;

				throw new SDKException(Constants.INITIALIZATION_ERROR, Constants.INITIALIZATION_EXCEPTION, error, null);
			}

			if(logger == null) {
				logger = loggerFile.Logger.getInstance(loggerFile.Levels.INFO, path.join(__dirname, "..", Constants.LOGFILE_NAME));
			}

			SDKLogger.initialize(logger);

			try {
				Initializer.jsonDetails = Initializer.getJSON(path.join(__dirname, "..", Constants.CONFIG_DIRECTORY, Constants.JSON_DETAILS_FILE_PATH));
			}
			catch (e){
				throw new SDKException(Constants.JSON_DETAILS_ERROR, null, null, e);
			}

			let initializer = new Initializer();

			initializer.user = user;

			initializer.environment = environment;

			initializer.token = token;

			initializer.store = store;

			initializer.sdkConfig = sdkConfig;

			initializer.resourcePath = resourcePath;

			initializer.requestProxy = proxy;

			Initializer.LOCAL.set(await initializer.getEncodedKey(user, environment), initializer);

			Initializer.initializer = initializer;

			Logger.info(Constants.INITIALIZATION_SUCCESSFUL.concat(await Initializer.initializer.toString()));

		}catch (err) {
			if(!(err instanceof SDKException)) {
				err = new SDKException(null, null, null, err);
			}
			throw err;
		}
	}
	
	/**
	 * This is a getter method to get API environment.
	 * @returns A Environment representing the API environment.
	 */
	get environment(){
		return this.environment;
	}

	/**
	 * This is a getter method to get Token Store.
	 * @returns A TokenStore class instance containing the token store information.
	 */
	get store(){
		return this.store;
	}

	/**
	 * This is a getter method to get CRM User.
	 * @returns A User class instance representing the CRM user.
	 */
    get user(){
		return this.user;
	}

	/**
	 * This is a getter method to get OAuth client application information.
	 * @returns A Token class instance representing the OAuth client application information.
	 */
	get token(){
		return this.token;
	}

	/**
	 * This is a getter method to get resourcePath value.
	 * @returns A String value representing the resourcePath.
	 */
	get resourcePath(){
		return this.resourcePath;
	}

	/**
	 * This is a getter method to get Proxy information.
	 * @returns {RequestProxy} A RequestProxy class instance representing the API Proxy information.
	 */
	get requestProxy(){
		return this.requestProxy;
	}

	/**
	 * This is a getter method to get the SDK Configuration
	 * @returns {SDKConfig} A SDKConfig instance representing the configuration
	 */
	get SDKConfig() {
		return this.sdkConfig;
	}

	/**
	 * This method is to get Initializer class instance.
	 * @returns A Initializer class instance representing the SDK configuration details.
	 */
	static async getInitializer(){	
		if(Array.from(Initializer.LOCAL.keys()).length > 0){
			let initializer = new Initializer();

			let encodedKey = await initializer.getEncodedKey(Initializer.initializer.user, Initializer.initializer.environment);

			if(Initializer.LOCAL.has(encodedKey)){
				return Initializer.LOCAL.get(encodedKey);
			}
		}

		return Initializer.initializer;
	}

	/**
	 * This method is to switch the different user in SDK environment.
	 * @param {UserSignature} user - A UserSignature class instance represents the CRM user.
	 * @param {Environment} environment - A Environment class instance containing the CRM API base URL and Accounts URL.
	 * @param {Token} token - A Token class instance containing the OAuth client application information.
	 * @param {SDKConfig} sdkConfig - A SDKConfig instance representing the configuration
	 * @param {RequestProxy} proxy - A RequestProxy class instance containing the proxy properties.
	 */
	static async switchUser(user, environment, token, sdkConfig, proxy= null){

		if (!(user instanceof UserSignature)){
			error[Constants.ERROR_HASH_FIELD] = Constants.USER;

			error[Constants.ERROR_HASH_EXPECTED_TYPE] = UserSignature.name;

			throw new SDKException(Constants.SWITCH_USER_ERROR, Constants.SWITCH_USER_EXCEPTION, error, null);
		}

		if (!(environment instanceof Environment)){
			error[Constants.ERROR_HASH_FIELD] = Constants.ENVIRONMENT;

			error[Constants.ERROR_HASH_EXPECTED_TYPE] = Environment.name;

			throw new SDKException(Constants.SWITCH_USER_ERROR, Constants.SWITCH_USER_EXCEPTION, error, null);
		}

		if (!(token instanceof Token)){
			error[Constants.ERROR_HASH_FIELD] = Constants.TOKEN;

			error[Constants.ERROR_HASH_EXPECTED_TYPE] = Token.name;

			throw new SDKException(Constants.SWITCH_USER_ERROR, Constants.SWITCH_USER_EXCEPTION, error, null);
		}

		if(!(sdkConfig instanceof SDKConfig)) {
			error[Constants.ERROR_HASH_FIELD] = Constants.SDK_CONFIG;

			error[Constants.ERROR_HASH_EXPECTED_TYPE] = SDKConfig.name;

			throw new SDKException(Constants.SWITCH_USER_ERROR, Constants.SWITCH_USER_EXCEPTION, error, null);
		}

		if(proxy != null && !(proxy instanceof RequestProxy)) {
			error[Constants.ERROR_HASH_FIELD] = Constants.USER_PROXY;

			error[Constants.ERROR_HASH_EXPECTED_TYPE] = RequestProxy.name;

			throw new SDKException(Constants.SWITCH_USER_ERROR, Constants.SWITCH_USER_EXCEPTION, error, null);
		}

		let initializer = new Initializer();

		initializer.user = user;

		initializer.environment = environment;

		initializer.token = token;

		initializer.store = Initializer.initializer.store;

		initializer.sdkConfig = sdkConfig;

		initializer.resourcePath = Initializer.initializer.resourcePath;

		initializer.requestProxy = proxy;

		Initializer.LOCAL.set(await initializer.getEncodedKey(user, environment), initializer);

		Initializer.initializer =initializer;

		Logger.info(Constants.INITIALIZATION_SWITCHED.concat(await Initializer.initializer.toString()))
	}

	static async removeUserConfiguration(user, environment){
		let initializer = new Initializer();

		let encodedKey = await initializer.getEncodedKey(user, environment);

		if(Initializer.LOCAL.has(encodedKey)){
			Initializer.LOCAL.delete(encodedKey);
		}
		else{
			throw new SDKException(Constants.USER_NOT_FOUND_ERROR, Constants.USER_NOT_FOUND_ERROR);
		}
	}

	/**
	 * This method to get record field and class details.
	 * @param filePath A String containing the file path.
	 * @returns A JSON representing the class information details.
	 */
	static getJSON(filePath){
		let fs = require('fs');

		let fileData = fs.readFileSync(filePath);

		return JSON.parse(fileData);
	}

	async toString(){
		return Constants.FOR_EMAIL_ID.concat(this.user.email).concat(Constants.IN_ENVIRONMENT).concat(this.environment.getUrl()).concat(".");
	}

	async getEncodedKey(user, environment){		
		let key =(user.email).substring(0,(user.email.indexOf( '@' ))) + environment.getUrl();

		return Buffer.from(this.toUTF8Array(key)).toString('base64');
	}

	toUTF8Array(str) {
		var utf8 = [];

		for (var i=0; i < str.length; i++) {
			var charcode = str.charCodeAt(i);

			if (charcode < 0x80) utf8.push(charcode);
			else if (charcode < 0x800) {
				utf8.push(0xc0 | (charcode >> 6), 
						  0x80 | (charcode & 0x3f));
			}
			else if (charcode < 0xd800 || charcode >= 0xe000) {
				utf8.push(0xe0 | (charcode >> 12), 
						  0x80 | ((charcode>>6) & 0x3f), 
						  0x80 | (charcode & 0x3f));
			}
			else {
				i++;
				// UTF-16 encodes 0x10000-0x10FFFF by
				// subtracting 0x10000 and splitting the
				// 20 bits of 0x0-0xFFFFF into two halves
				charcode = 0x10000 + (((charcode & 0x3ff)<<10)
						  | (str.charCodeAt(i) & 0x3ff));

				utf8.push(0xf0 | (charcode >>18), 
						  0x80 | ((charcode>>12) & 0x3f), 
						  0x80 | ((charcode>>6) & 0x3f), 
						  0x80 | (charcode & 0x3f));
			}
		}
		return utf8;
	}
}

module.exports = {Initializer};