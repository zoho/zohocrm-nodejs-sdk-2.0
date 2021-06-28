# AUDataCenter

extends ***[DataCenter](data_center.md#datacenter)***

This class represents the properties of Zoho CRM in AU Domain.

## Package /routes/dc/au_data_center

## Static Methods

| Field        | Description                                                                                        |
| :----------- | :------------------------------------------------------------------------------------------------- |
| PRODUCTION() | This ***Environment class*** instance represents the Zoho CRM Production Environment in AU Domain. |
| SANDBOX()    | This ***Environment class*** instance represents the Zoho CRM Sandbox Environment in AU Domain.    |
| DEVELOPER()  | This ***Environment class*** instance represents the Zoho CRM Developer Environment in AU Domain.  |
----

## Methods

| Method             | Description                               |
| :----------------- | :---------------------------------------- |
| getIAMUrl()        | The method to get the accounts ***URL***. Use this ***URL*** when calling ***OAuth*** accounts. |
| getFileUploadUrl() | The method to get the ***File Upload URL***. |
----

[source](../../routes/dc/au_data_center.js)
