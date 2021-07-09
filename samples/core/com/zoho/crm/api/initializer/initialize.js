const InitializeBuilder = require("@zohocrm/nodejs-sdk-2.0/routes/initialize_builder").InitializeBuilder;
const OAuthBuilder = require("@zohocrm/nodejs-sdk-2.0/models/authenticator/oauth_builder").OAuthBuilder;
const UserSignature = require("@zohocrm/nodejs-sdk-2.0/routes/user_signature").UserSignature;
const Levels = require("@zohocrm/nodejs-sdk-2.0/routes/logger/logger").Levels;
const LogBuilder = require("@zohocrm/nodejs-sdk-2.0/routes/logger/log_builder").LogBuilder;
const USDataCenter = require("@zohocrm/nodejs-sdk-2.0/routes/dc/us_data_center").USDataCenter;
const DBBuilder = require("@zohocrm/nodejs-sdk-2.0/models/authenticator/store/db_builder").DBBuilder;
const FileStore = require("@zohocrm/nodejs-sdk-2.0/models/authenticator/store/file_store").FileStore;
const SDKConfigBuilder = require("@zohocrm/nodejs-sdk-2.0/routes/sdk_config_builder").SDKConfigBuilder;
const ProxyBuilder = require("@zohocrm/nodejs-sdk-2.0/routes/proxy_builder").ProxyBuilder;

class Initializer {

    static async initialize() {

        /*
         * Create an instance of Logger Class that takes two parameters
         * level -> Level of the log messages to be logged. Can be configured by typing Levels "." and choose any level from the list displayed.
         * filePath -> Absolute file path, where messages need to be logged.
         */
        let logger = new LogBuilder()
            .level(Levels.INFO)
            .filePath("/Users/user_name/Documents/node_sdk_log.log")
            .build();

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
        * Create a Token instance that requires the following
        * clientId -> OAuth client id.
        * clientSecret -> OAuth client secret.
        * refreshToken -> REFRESH token.
        * grantToken -> GRANT token.
        * id -> User unique id.
        * redirectURL -> OAuth redirect URL.
        */
        // if ID (obtained from persistence) is available
        let token = new OAuthBuilder()
        .clientId("clientId")
        .clientSecret("clientSecret")
        .refreshToken("refreshToken")
        .redirectURL("redirectURL")
        .build();

        /*
        * hostName -> DataBase host name. Default value "localhost"
        * databaseName -> DataBase name. Default  value "zohooauth"
        * userName -> DataBase user name. Default value "root"
        * password -> DataBase password. Default value ""
        * portNumber -> DataBase port number. Default value "3306"
        * tableName -> Table Name. Default value "oauthtoken"
        */
        let tokenstore = new DBBuilder()
        .host("hostName")
        .databaseName("databaseName")
        .userName("userName")
        .portNumber("portNumber")
        .tableName("tableName")
        .password("password")
        .build();

        /*
         * Create an instance of FileStore that takes absolute file path as parameter
         */
        // let store = new FileStore("/Users/userName/Desktop/nodejs_sdk_tokens.txt");

        /*
        * autoRefreshFields
        * if true - all the modules' fields will be auto-refreshed in the background, every hour.
        * if false - the fields will not be auto-refreshed in the background. The user can manually delete the file(s) or refresh the fields using methods from ModuleFieldsHandler(utils/util/module_fields_handler.js)
        * 
        * pickListValidation
        * A boolean field that validates user input for a pick list field and allows or disallows the addition of a new value to the list.
        * if true - the SDK validates the input. If the value does not exist in the pick list, the SDK throws an error.
        * if false - the SDK does not validate the input and makes the API request with the user’s input to the pick list
        */
        let sdkConfig = new SDKConfigBuilder().pickListValidation(false).autoRefreshFields(true).build();

        /*
         * The path containing the absolute directory path to store user specific JSON files containing module fields information. 
         */
        let resourcePath = "/Users/user_name/Documents/nodejs-app";

        /*
        * RequestProxy class takes the following parameters
        * host -> Host
        * port -> Port Number
        * user -> User Name. Default null.
        * password -> Password. Default null
        */
        let requestProxy = new ProxyBuilder()
        .host("proxyHost")
        .port("proxyPort")
        .user("proxyUser")
        .password("password")
        .build();

        /*
         * Call the static initialize method of Initializer class that takes the following arguments
         * user -> UserSignature instance
         * environment -> Environment instance
         * token -> Token instance
         * store -> TokenStore instance
         * SDKConfig -> SDKConfig instance
         * resourcePath -> resourcePath
         * logger -> Logger instance
         */
        try {
            (await new InitializeBuilder())
                .user(user)
                .environment(environment)
                .token(token)
                .store(tokenstore)
                .SDKConfig(sdkConfig)
                .resourcePath(resourcePath)
                .logger(logger)
                .initialize();
        } catch (error) {
            console.log(error);
        }

        // console.log(await tokenstore.getTokens());
    }
}

Initializer.initialize();