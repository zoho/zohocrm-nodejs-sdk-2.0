const Initializer= require( "../../../../../../../routes/initializer").Initializer;
const {OAuthToken, TokenType}= require( "../../../../../../models/authenticator/oauth_token");
const UserSignature = require( "../../../../../../../routes/user_signature").UserSignature;
const {Logger, Levels}= require( "../../../../../../../routes/logger/logger");
const USDataCenter = require( "../../../../../../../routes/dc/us_data_center").USDataCenter;
const DBStore = require( "../../../../../../models/authenticator/store/db_store").DBStore;
const FileStore = require( "../../../../../../models/authenticator/store/file_store").FileStore;
const SDKConfigBuilder = require("../../../../../../../routes/sdk_config_builder").SDKConfigBuilder;
const RequestProxy = require("../../../../../../../routes/request_proxy").RequestProxy;

class SDKInitializer{

    static async initializeSDK(){

        /*
		 * Create an instance of Logger Class that takes two parameters
		 * 1 -> Level of the log messages to be logged. Can be configured by typing Levels "." and choose any level from the list displayed.
		 * 2 -> Absolute file path, where messages need to be logged.
		 */
        let logger = Logger.getInstance(Levels.INFO, "/Users/user_name/Documents/nodejs_sdk_log.log");

        /*
         * Create an UserSignature instance that takes user Email as parameter
         */
        let user = new UserSignature("abc@zoho.com");

        /*
		 * Configure the environment
		 * which is of the pattern Domain.Environment
		 * Available Domains: USDataCenter, EUDataCenter, INDataCenter, CNDataCenter, AUDataCenter
		 * Available Environments: PRODUCTION(), DEVELOPER(), SANDBOX()
		 */
        let environment = USDataCenter.PRODUCTION();

        /*
		 * Create a Token instance
		 * 1 -> OAuth client id.
		 * 2 -> OAuth client secret.
         * 3 -> REFRESH/GRANT token.
         * 4 -> token type.
         * 5 -> OAuth redirect URL. Optional 
		 */
        let token = new OAuthToken("clientId", "clientSecret", "REFRESH/ GRANT Token", TokenType.REFRESH/TokenType.GRANT, "redirectURL");

        /*
		 * Create an instance of TokenStore.
		 * 1 -> DataBase host name. Default "localhost"
		 * 2 -> DataBase name. Default "zohooauth"
		 * 3 -> DataBase user name. Default "root"
		 * 4 -> DataBase password. Default ""
		 * 5 -> DataBase port number. Default "3306"
		 */
        let store = new DBStore("hostName", "dataBaseName", "userName", "password", "portNumber");

        /*
		 * Create an instance of FileStore that takes absolute file path as parameter
		 */
        // let store = new FileStore("/Users/userName/Desktop/nodejs_sdk_tokens.txt");

        //Create an instance of SDKConfig
        let sdkConfig = new SDKConfigBuilder().setAutoRefreshFields(true).setPickListValidation(true).build();

        /*
         * The path containing the absolute directory path to store user specific JSON files containing module fields information. 
         */
        let resourcePath = "/Users/user_name/Documents/nodejssdk-application";

        //Create an instance of RequestProxy
        let requestProxy = new RequestProxy("proxyHost", "proxyPort", "proxyUser", "password");

        /*
         * Call the static initialize method of Initializer class that takes the following arguments
         * 1 -> UserSignature instance
         * 2 -> Environment instance
         * 3 -> Token instance
         * 4 -> TokenStore instance
         * 5 -> SDKConfig instance
         * 6 -> resourcePath   
         * 7 -> Logger instance (Optional)
		 * 8 -> RequestProxy instance (Optional)
         */
        await Initializer.initialize(user, environment, token, store, sdkConfig, resourcePath, logger, requestProxy);
    }
}

module.exports = {SDKInitializer};