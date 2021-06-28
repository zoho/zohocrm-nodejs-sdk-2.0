/**
 * The class to configure the SDK.
 */
class SDKConfig {
    autoRefreshFields;

    pickListValidation;

    /**
     * Creates an instance of SDKConfig with the given parameters
     * @param {Boolean} autoRefreshFields A boolean representing autoRefreshFields
     * @param {Boolean} pickListValidation A boolean representing pickListValidation
     */
    constructor(autoRefreshFields, pickListValidation) {
        this.autoRefreshFields = autoRefreshFields;

        this.pickListValidation = pickListValidation;
    }

    /**
     * This is a getter method to get autoRefreshFields.
     * @returns {Boolean} A boolean representing autoRefreshFields
     */
    get autoRefreshFields() {
        return this.autoRefreshFields;
    }

    /**
     *  This is a getter method to get pickListValidation.
     * @returns {Boolean} A boolean representing pickListValidation
     */
    get pickListValidation() {
        return this.pickListValidation;
    }
}

module.exports = {
    SDKConfig : SDKConfig
}