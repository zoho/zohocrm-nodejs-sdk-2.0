# Initializer

The class to initialize the Zoho CRM SDK.

## Package /routes/initializer

## Static Methods

| Method         | Description                                             |
| :------------- | :------------------------------------------------------ |
| initialize([user](#user), [environment](#environment), [token](#token), [store](#store), [sdkConfig](#sdkconfig), [resourcePath](#resourcepath), [logger](#logger)=null, [proxy](#proxy)=null) | The method to initialize the SDK. |
| switchUser([user](#user), [environment](#environment), [token](#token), [sdkConfig](#sdkconfig), [proxy](#proxy)=null) | This method to switch the different user in SDK environment. |
| removeUserConfiguration([user](#user), [environment](#environment)) | The method to remove specific User configuration. |
----

### user

A ***[UserSignature](user_signature.md#usersignature)*** class instance represents a CRM user.

### environment

A ***[Environment](dc/environment.md#environment)*** class instance containing the CRM API base URL and Accounts URL.

### token

A ***[Token](../models/authenticator/token.js)*** class instance containing the OAuth client application information.

### store

A ***[TokenStore](../models/authenticator/store/token_store.js)*** class instance containing the token store information.

### sdkconfig

A ***[SDKConfig](sdk_config.md#sdkconfig)*** class instance containing the configuration.

### resourcePath

A String containing the absolute directory path to store user specific JSON files containing module fields information.

### logger

A ***[Logger](logger/logger.md#logger)*** class instance containing the log file path and Logger type.

### proxy

A ***[RequestProxy](request_proxy.md#requestproxy)*** class instance containing the proxy properties of the user.

## Methods

| Method            | Description                                             |
| :---------------- | :------------------------------------------------------ |
| environment       | The getter method to get API environment.         |
| store             | The getter method to get API Token Store.         |
| user              | The getter method to get CRM User.                |
| token             | The getter method to get OAuth client application information. |
| SDKConfig | The getter method to get the SDKConfig information. |
| resourcePath      | The getter method to get the path containing the absolute directory path to store user specific files containing module fields information. |
| requestProxy         | The getter method to get the Proxy information. |
----

[source](../routes/initializer.js)
