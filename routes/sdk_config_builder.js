const SDKConfig = require('./sdk_config').SDKConfig; 

class SDKConfigBuilder {
    autoRefreshFields = false;

    pickListValidation = true;

    /**
     * This is a setter method to set autoRefreshFields.
     * @param {Boolean} autoRefreshFields A boolean value
     * @returns {SDKConfigBuilder} An instance of SDKConfigBuilder
     */
    setAutoRefreshFields(autoRefreshFields) {
        this.autoRefreshFields = autoRefreshFields;

        return this;
    }

    /**
     * This is a setter method to set pickListValidation.
     * @param {Boolean} pickListValidation A boolean value
     * @returns {SDKConfigBuilder} An instance of SDKConfigBuilder
     */
    setPickListValidation(pickListValidation) {
        this.pickListValidation = pickListValidation;

        return this;
    }

    /**
     * The method to build the SDKConfig instance
     * @returns {SDKConfig} An instance of SDKConfig
     */
    build() {
        return new SDKConfig(this.autoRefreshFields, this.pickListValidation);
    }
}

module.exports = {
    MasterModel : SDKConfigBuilder,
    SDKConfigBuilder : SDKConfigBuilder
}