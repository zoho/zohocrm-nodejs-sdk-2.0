const Token = require("./token").Token;
const Initializer = require("../../routes/initializer").Initializer;
const Logger = require('winston');
const SDKException = require('../../core/com/zoho/crm/api/exception/sdk_exception').SDKException;
const Constants = require('../../utils/util/constants').Constants;
const got = require("got");
const formData = require("form-data");

/**
 * This class contains different types of token.
 */
class TokenType{
    static GRANT = 'GRANT';

    static REFRESH = 'REFRESH';
}

/**
 * This class maintains the tokens and authenticates every request.
 */
class OAuthToken extends Token{
    clientID;

    clientSecret;

    redirectURL;

    grantToken;

    refreshToken;

    accessToken;

    expiresIn;

    userMail;

    id;

    /**
     * Creates an OAuthToken class instance with the specified parameters.
     * @param {String} clientID - A String containing the OAuth client id.
     * @param {String} clientSecret - A String containing the OAuth client secret.
     * @param {String} token - A String containing the REFRESH/GRANT token.
     * @param {String} type - A TokenType key containing the given token type.
     * @param {String} redirectURL - A String containing the OAuth redirect URL.
     */
    constructor(clientID, clientSecret, token, type, redirectURL = null) {
        super();
        
        var error = {};

        if (typeof clientID !== 'string') {
            error[Constants.ERROR_HASH_FIELD] = Constants.CLIENT_ID_FIELD;

            error[Constants.ERROR_HASH_EXPECTED_TYPE] = Constants.STRING_NAMESPACE;

            error[Constants.ERROR_HASH_CLASS] = OAuthToken.name;

            throw new SDKException(Constants.TOKEN_ERROR, null, error, null);
        }

        if (clientSecret != null && typeof clientSecret !== 'string') {
            error[Constants.ERROR_HASH_FIELD] = Constants.CLIENT_SECRET_FIELD;

            error[Constants.ERROR_HASH_EXPECTED_TYPE] = Constants.STRING_NAMESPACE;

            error[Constants.ERROR_HASH_CLASS] = OAuthToken.name;

            throw new SDKException(Constants.TOKEN_ERROR, null, error, null);
        }

        if (redirectURL != null && typeof redirectURL !== 'string') {
            error[Constants.ERROR_HASH_FIELD] = Constants.REDIRECT_URL_FIELD;

            error[Constants.ERROR_HASH_EXPECTED_TYPE] = Constants.STRING_NAMESPACE;

            error[Constants.ERROR_HASH_CLASS] = OAuthToken.name;

            throw new SDKException(Constants.TOKEN_ERROR, null, error, null);
        }

        if (typeof token !== 'string') {
            error[Constants.ERROR_HASH_FIELD] = Constants.TOKEN;

            error[Constants.ERROR_HASH_EXPECTED_TYPE] = Constants.STRING_NAMESPACE;

            error[Constants.ERROR_HASH_CLASS] = OAuthToken.name;

            throw new SDKException(Constants.TOKEN_ERROR, null, error, null);
        }

        if (!TokenType.hasOwnProperty(type)) {
            error[Constants.ERROR_HASH_FIELD] = Constants.TYPE;

            error[Constants.ERROR_HASH_EXPECTED_TYPE] = Constants.EXPECTED_TOKEN_TYPES;

            error[Constants.ERROR_HASH_CLASS] = OAuthToken.name;

            throw new SDKException(Constants.TOKEN_ERROR, null, error, null);
        }

        this.clientID = clientID;

        this.clientSecret = clientSecret;

        this.redirectURL = redirectURL;

        this.accessToken = null;

        this.expiresIn = null;

        this.refreshToken = (type === TokenType.REFRESH) ? token : null;

        this.grantToken = (type === TokenType.GRANT) ? token : null;
    }

    /**
     * This is a getter method to get OAuth client id.
     * @returns A String representing the OAuth client id.
     */
    get clientID() {
        return this.clientID;
    }

    /**
	 * This is a getter method to get OAuth client secret.
	 * @returns A String representing the OAuth client secret.
	 */
    get clientSecret() {
        return this.clientSecret;
    }

    /**
	 * This is a getter method to get OAuth redirect URL.
	 * @returns A String representing the OAuth redirect URL.
	 */
    get redirectURL() {
        return this.redirectURL;
    }

    /**
	 * This is a getter method to get grant token.
	 * @returns A String representing the grant token.
	 */
    get grantToken() {
        return this.grantToken;
    }

    /**
	 * This is a getter method to get refresh token.
	 * @returns A String representing the refresh token.
	 */
    get refreshToken() {
        return this.refreshToken;
    }

    /**
	 * This is a setter method to set refresh token.
	 * @param {string} refreshToken - A String containing the refresh token.
	 */
    set refreshToken(refreshToken) {
        this.refreshToken = refreshToken;
    }

    /**
	 * This is a getter method to get access token.
	 * @returns A String representing the access token.
	 */
    get accessToken() {
        return this.accessToken;
    }

    /**
	 * This is a setter method to set access token.
	 * @param {string} accessToken A String containing the access token.
	 */
    set accessToken(accessToken) {
        this.accessToken = accessToken;
    }

    /**
	 * This is a getter method to get token expire time.
	 * @returns A String representing the token expire time.
	 */
    get expiresIn() {
        return this.expiresIn;
    }

    /**
	 * This is a setter method to set token expire time.
	 * @param {string} expiresIn A String containing the token expire time.
	 */
    set expiresIn(expiresIn) {
        this.expiresIn = expiresIn;
    }

    /**
     * This is a getter method to get token user mail.
     * @returns A String representing the userMail
     */
    get userMail() {
        return this.userMail;
    }

    /**
     * This is a setter method to set token user email.
     * @param {String} userMail A String containing the userMail
     */
    set userMail(userMail) {
        this.userMail = userMail;
    }

    /**
     * This is a getter method to get the id
     * @returns the id
     */
    get id() {
        return this.id;
    }

    /**
     * This is a setter method to set the id
     * @param {String} id A String containing the id
     */
    set id(id) {
        this.id = id;
    }

    async authenticate(urlConnection){
        var token = "";

        var initializer = await Initializer.getInitializer();

        var store = initializer.store;

        var user = initializer.user;

        var oauthToken = await store.getToken(user, this);

        if (oauthToken === null) {

            token = (this.refreshToken === null) ? (await this.generateAccessToken(user, store)).accessToken : (await this.refreshAccessToken(user, store)).accessToken;
        } 
        else if ((parseInt(oauthToken.expiresIn) - parseInt(new Date().getTime())) < 5000) {
            Logger.info(Constants.REFRESH_TOKEN_MESSAGE);

            token = (await this.refreshAccessToken(user, store)).accessToken;
        } 
        else {

            token = this.accessToken;
        }

        urlConnection.addHeader(Constants.AUTHORIZATION, Constants.OAUTH_HEADER_PREFIX + token);
    }

    async refreshAccessToken(user, store){
        let initializer = await Initializer.getInitializer();

        var url = initializer.environment.accountsUrl;

        var formDataRequestBody = new formData();

        formDataRequestBody.append(Constants.REFRESH_TOKEN, this.refreshToken);

        formDataRequestBody.append(Constants.CLIENT_ID, this.clientID);

        formDataRequestBody.append(Constants.CLIENT_SECRET, this.clientSecret);

        formDataRequestBody.append(Constants.GRANT_TYPE, Constants.REFRESH_TOKEN);

        const requestDetails = {
			method : Constants.REQUEST_METHOD_POST,
			headers : {},
			body : formDataRequestBody,
            encoding: "utf8",
			allowGetBody : true,
			throwHttpErrors : false
		};

        var response = await this.getResponse(url, requestDetails);

        try {
            await store.saveToken(user, await this.parseResponse(response.body));

        } catch (error) {
            if(error instanceof SDKException) {
                throw error;
            }
            else if(error instanceof Error) {
                throw new SDKException(Constants.SAVE_TOKEN_ERROR, null, null, error);
            }
        }

        return this;
    }

    async generateAccessToken(user, store) {
        let initializer = await Initializer.getInitializer();

        var url = initializer.environment.accountsUrl;

        var formDataRequestBody = new formData();

        formDataRequestBody.append(Constants.GRANT_TYPE, Constants.GRANT_TYPE_AUTH_CODE);

        formDataRequestBody.append(Constants.CLIENT_ID, this.clientID);

        formDataRequestBody.append(Constants.CLIENT_SECRET, this.clientSecret);

        if(this.redirectURL != null){
            formDataRequestBody.append(Constants.REDIRECT_URL, this.redirectURL);
        }

        formDataRequestBody.append(Constants.CODE, this.grantToken);

        const requestDetails = {
			method : Constants.REQUEST_METHOD_POST,
			headers : {},
			body : formDataRequestBody,
            encoding: "utf8",
			allowGetBody : true,
			throwHttpErrors : false
		};

        var response = await this.getResponse(url, requestDetails);

        try {
            await store.saveToken(user, await this.parseResponse(response.body));

        } catch (error) {
            if(error instanceof SDKException) {
                throw error;
            }
            else if(error instanceof Error) {
                throw new SDKException(Constants.SAVE_TOKEN_ERROR, null, null, error);
            }
        }

        return this;
    }

    async getResponse(url, requestDetails) {
        return await got(url, requestDetails);
    }

    async parseResponse(response){
        var responseJSON = JSON.parse(response);

        if (!responseJSON.hasOwnProperty(Constants.ACCESS_TOKEN)) {
            throw new SDKException(Constants.INVALID_CLIENT_ERROR, responseJSON[Constants.ERROR_KEY].toString());
        }

        this.accessToken = responseJSON[Constants.ACCESS_TOKEN];

        if (responseJSON.hasOwnProperty(Constants.REFRESH_TOKEN)) {
            this.refreshToken = responseJSON[Constants.REFRESH_TOKEN];
        }

        this.expiresIn=(new Date().getTime() + await this.getTokenExpiryTime(responseJSON)).toString();

        return this;
    }

    getTokenExpiryTime(response) {
        return response.hasOwnProperty(Constants.EXPIRES_IN_SEC)? response[Constants.EXPIRES_IN] : response[Constants.EXPIRES_IN]*1000;
    }

    async remove() {
        try {
            let initializer = await Initializer.getInitializer();

            await initializer.store.deleteToken(this);

            return true;
            
        } catch (error) {
            return false;
        }
    }
}

module.exports={OAuthToken, TokenType};