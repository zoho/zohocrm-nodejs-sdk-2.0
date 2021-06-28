# Roles

## Package /core/com/zoho/crm/api/roles

The Zoho CRM [Roles API](https://www.zoho.com/crm/developer/docs/api/get-roles.html) reference provides information about the possible operations on **Roles**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [Role](#role) |  |
| [APIException](#apiexception) |  |
| [RolesOperations](#rolesoperations) |  |
| [ResponseWrapper](#responsewrapper) |  |

----

## Role

Structure of Zoho CRM [Role](../../core/com/zoho/crm/api/roles/role.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getDisplayLabel() | The method to get the value of ***Role DisplayLabel*** |
| setDisplayLabel(displayLabel) | The method to set the value of ***Role DisplayLabel*** |
| getForecastManager() | The method to get the value of ***Role ForecastManager*** |
| setForecastManager(***[forecastManager](users.md#user)***) | The method to set the value of ***Role ForecastManager*** |
| getShareWithPeers() | The method to get the value of ***Role ShareWithPeers*** |
| setShareWithPeers(shareWithPeers) | The method to set the value of ***Role ShareWithPeers*** |
| getName() | The method to get the value of ***Role Name*** |
| setName(name) | The method to set the value of ***Role Name*** |
| getDescription() | The method to get the value of ***Role Description*** |
| setDescription(description) | The method to set the value of ***Role Description*** |
| getId() | The method to get the value of ***Role Id*** |
| setId(id) | The method to set the value of ***Role Id*** |
| getReportingTo() | The method to get the value of ***Role ReportingTo*** |
| setReportingTo(***[reportingTo](users.md#user)***) | The method to set the value of ***Role ReportingTo*** |
| getAdminUser() | The method to get the value of ***Role AdminUser*** |
| setAdminUser(adminUser) | The method to set the value of ***Role AdminUser*** |
----

[source](../../core/com/zoho/crm/api/roles/role.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/roles/api_exception.js) is returned for all operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getStatus() | The method to get the value of ***Status*** key in  the **API** response |
| setStatus(***[status](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Status*** key in  the **API** response |
| getCode() | The method to get the value of ***Code*** key in  the **API** response |
| setCode(***[code](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Code*** key in  the **API** response |
| getMessage() | The method to get the value of ***Message*** key in  the **API** response |
| setMessage(***[message](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Message*** key in  the **API** response |
| getDetails() | The method to get the value of ***Details*** key in  the **API** response |
| setDetails(details) | The method to set the value of ***Details*** key in  the **API** response |
----

[source](../../core/com/zoho/crm/api/roles/api_exception.js)

## RolesOperations

Contains methods for all possible [Roles operations](../../core/com/zoho/crm/api/roles/response_wrapper.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getRoles() | To get the list of all roles available in your organization. |
| getRole(id) | To get the details of a specific role. |
----

[source](../../core/com/zoho/crm/api/roles/roles_operations.js)

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/roles/response_wrapper.js) is returned for **GET** operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getRoles() | The method to get the list of obtained ***Role*** instances. |
| setRoles(***[roles](roles.md#role)***) | The method to set the list of obtained ***Role*** instances. |
----

[source](../../core/com/zoho/crm/api/roles/response_wrapper.js)
