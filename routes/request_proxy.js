const SDKException = require("../core/com/zoho/crm/api/exception/sdk_exception").SDKException;
const Constants = require('../utils/util/constants').Constants;

class RequestProxy {
    host;
    
    port;

    user;

    password;

    /**
     * Creates a RequestProxy class instance with the specified parameters.
     * @param {String} host A String containing the hostname or address of the proxy server
     * @param {Number} port An Integer containing The port number of the proxy server
     * @param {String} user A String containing the user name of the proxy server
     * @param {String} password A String containing the password of the proxy server
     */
    constructor(host, port, user=null, password=null) {
        
        if(host == null) {
            throw new SDKException(Constants.USER_PROXY_ERROR, Constants.HOST_ERROR_MESSAGE);
        }

        if(port == null) {
            throw new SDKException(Constants.USER_PROXY_ERROR, Constants.PORT_ERROR_MESSAGE);
        }

        this.host = host;

        this.port = port;

        this.user = user;

        this.password = password != null ? password : "";
    }

    /**
     * This is a getter method to get Proxy host.
     * @returns {String}
     */
    get host() {
        return this.host;
    }

    /**
     * This is a getter method to get the Proxy port.
     * @returns {Number}
     */
    get port() {
        return this.port;
    }

    /**
	 * This is a getter method to get the Proxy user name.
	 * @returns {String}
	 */
    get user() {
        return this.user;
    }

    /**
     * This is a getter method to get the Proxy password.
     * @returns {String}
     */
    get password() {
        return this.password;
    }
}

module.exports = {
    MasterModel : RequestProxy,
    RequestProxy : RequestProxy
}