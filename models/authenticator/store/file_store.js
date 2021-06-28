const fs = require('fs');
const TokenStore = require('./token_store').TokenStore;
const Constants = require('../../../utils/util/constants').Constants;
const SDKException = require('../../../core/com/zoho/crm/api/exception/sdk_exception').SDKException;
const {OAuthToken, TokenType} = require("../oauth_token");

/**
 * This class stores the user token details to the file.
 */
class FileStore extends TokenStore {
    filePath;

    /**
     * Creates an FileStore class instance with the specified parameters.
     * @param {string} filePath 
     */
    constructor(filePath) {
        super();
        
        this.filePath = filePath;

        this.headers = [Constants.USER_MAIL, Constants.CLIENT_ID, Constants.REFRESH_TOKEN, Constants.ACCESS_TOKEN, Constants.GRANT_TOKEN, Constants.EXPIRY_TIME];

        if(!fs.existsSync(this.filePath) || (fs.existsSync(this.filePath) && fs.readFileSync(this.filePath, 'utf-8') === "")) {
            fs.writeFileSync(filePath, this.headers.join(), 'utf-8');
        }
    }

    getToken(user, token) {
        try {
            var array = fs.readFileSync(this.filePath,'utf-8').toString().split("\n");

            if(token instanceof OAuthToken){
                
                for(var i=0; i < array.length; i++){
                    var line = array[i];
    
                    var nextRecord = line.split(",");
    
                    if(this.checkTokenExists(user.email, token, nextRecord)) {
                        token.refreshToken = nextRecord[2];
    
                        token.accessToken = nextRecord[3];
    
                        token.expiresIn = nextRecord[5];
    
                        return token;
                    }
                }
            }
        }
        catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_FILE_ERROR, null, error);
        }

        return null;
    }

    saveToken(user, token) {
        try {
            if(token instanceof OAuthToken){

                token.userMail = user.email;

                this.deleteToken(token);
    
                var data = [];
    
                data[0] = user.email;
    
                data[1] = token.clientID;
    
                data[2] = token.refreshToken;
    
                data[3] = token.accessToken;
    
                data[4] = token.grantToken;
    
                data[5] = token.expiresIn;
    
                fs.appendFileSync(this.filePath, "\n" + data.join());
            }
        }
        catch (e) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.SAVE_TOKEN_FILE_ERROR, null, e);
        }
    }

    deleteToken(token) {
        try {
            var array = "";

            array = fs.readFileSync(this.filePath,'utf-8').toString().split("\n");

            if(token instanceof OAuthToken) {

                for (var i=0;i<array.length;i++) {
                    var nextRecord = array[i].toString().split(",");
    
                    if(this.checkTokenExists(token.userMail, token, nextRecord)) {
                        array.splice(i,1);
    
                        break;
                    }
                }
    
                fs.writeFileSync(this.filePath, array.join("\n"), 'utf8');
            }
        }
        catch (e) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.DELETE_TOKEN_FILE_ERROR, null, e);
        }
    }

    getTokens() {
        try {
            var tokens = [];

            var array = fs.readFileSync(this.filePath,'utf-8').toString().split("\n");

            for(var i=1; i<array.length; i++){
                let line=array[i];

                let nextRecord = line.split(",");

                let tokenType = (nextRecord[4] != null && nextRecord[4].length > 0) ? TokenType.GRANT : TokenType.REFRESH;

                let tokenValue = (tokenType == TokenType.REFRESH) ? nextRecord[2] : nextRecord[4];

                let token = new OAuthToken(nextRecord[1], null, tokenValue, tokenType);

                token.userMail = nextRecord[0];

                token.expiresIn = nextRecord[5];

                token.accessToken = nextRecord[3];

                tokens.push(token);
            }

            return tokens;
        } 
        catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKENS_FILE_ERROR, null, error);
            
        }
    }

    deleteTokens() {
        try {
            fs.writeFileSync(this.filePath, this.headers.join(), 'utf-8');
        } 
        catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.DELETE_TOKENS_FILE_ERROR, null, error);
        }
    }

    checkTokenExists(email, token, row) {
        if(email == null){
            throw new SDKException(Constants.USER_MAIL_NULL_ERROR, Constants.USER_MAIL_NULL_ERROR_MESSAGE);
        }
        
        var clientId = token.clientID;

        var grantToken = token.grantToken;

        var refreshToken = token.refreshToken;

        var tokenCheck = grantToken != null ? grantToken===row[4] : refreshToken===row[2];

        if(row[0] === email && row[1] === clientId && tokenCheck) {
            return true;
        }

        return false;
    }
}

module.exports = {FileStore};