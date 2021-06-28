# DataCenter

The abstract class represents the properties of Zoho CRM DataCenter.

## Package /routes/dc/data_center

## Static Methods

| Method           | Description                               |
| :--------------- | :---------------------------------------- |
| setEnvironment([url](#url), [accountsUrl](#accountsurl), [fileUploadUrl](#fileuploadurl)) | This method sets the environment to the calling DataCenter instance|
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
| getIAMUrl()        | The method to get the accounts ***URL***. Use this ***URL*** when calling ***OAuth*** accounts. |
| getFileUploadUrl() | The method to get the ***File Upload URL***. |
----

[source](../../routes/dc/data_center.js)
