
# Environment

The abstract class that represents the properties of Zoho CRM Environment.

## Package /routes/dc/environment

## Constructors

| Constructor                                                   | Description                                                                     |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| constructor([url](#url), [accountsUrl](#accountsurl), [fileUploadUrl](#fileuploadurl)) |  Creates an Environment class instance with the specified parameters. |
----

### url

A String representing the domain URL

### accountsUrl

A String representing the accounts URL to fetch tokens.

### fileUploadUrl

A String representing the File Upload URL

## Methods

| Method             | Description                               |
| :----------------- | :---------------------------------------- |
| getUrl()           | The method to get the Zoho CRM API URL.      |
| getAccountsUrl()   | The method to get the accounts ***URL***. Use this ***URL*** when calling ***OAuth*** accounts. |
| getFileUploadUrl() | The method to get the ***File Upload URL***. |
----

[source](../../routes/dc/environment.js)
