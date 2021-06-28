# ContactRoles

## Package /core/com/zoho/crm/api/contact_roles

The Zoho CRM [ContactRoles API](#ContactRoles) reference provides information about the possible operations on **ContactRoles**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [ResponseWrapper](#responsewrapper) |  |
| [SuccessResponse](#successresponse) |  |
| [ContactRolesOperations](#contactrolesoperations) |  |
| [BodyWrapper](#bodywrapper) |  |
| [APIException](#apiexception) |  |
| [ActionWrapper](#actionwrapper) |  |
| [ContactRole](#contactrole) |  |

----

## ResponseWrapper

After a successful **API** request, and instance of [ResponseWrapper](../../core/com/zoho/crm/api/contact_roles/response_wrapper.js) is returned for GET operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getContactRoles() | The method to get the list of obtained ***ContactRole*** instances. |
| setContactRoles(***[contactRoles](contact_roles.md#contactrole)***) | The method to set the list of obtained ***ContactRole*** instances. |
----

[source](../../core/com/zoho/crm/api/contact_roles/response_wrapper.js)

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/contact_roles/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/contact_roles/success_response.js)

## ContactRolesOperations

Contains methods for all possible [ContactRoles operations](../../core/com/zoho/crm/api/contact_roles/contact_roles_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getContactRoles() | To get the list of all contact roles. |
| createContactRoles(***[request](contact_roles.md#bodywrapper)***) | To create contact roles. |
| updateContactRoles(***[request](contact_roles.md#bodywrapper)***) | To update contact roles. |
| deleteContactRoles(***[paramInstance](../parameter_map.md#parametermap)***) | To delete contact roles. |
| getContactRole(id) | To get specific contact role. |
| updateContactRole(id, ***[request](contact_roles.md#bodywrapper)***) | To update specific contact role. |
| deleteContactRole(id) | To delete specific contact role. |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [DeleteContactRolesParam](#deletecontactrolesparam) |
----

[source](../../core/com/zoho/crm/api/contact_roles/contact_roles_operations.js)

## BodyWrapper

The structure that contains all possible keys of a request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getContactRoles() | The method to get the list of obtained ***ContactRole*** instances. |
| setContactRoles(***[contactRoles](contact_roles.md#contactrole)***) | The method to set the list of obtained ***ContactRole*** instances. |
----

[source](../../core/com/zoho/crm/api/contact_roles/body_wrapper.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/contact_roles/api_exception.js) is returned for all operations

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

[source](../../core/com/zoho/crm/api/contact_roles/api_exception.js)

## ActionWrapper

After a successful **API** request, an instance of [ActionWrapper](../../core/com/zoho/crm/api/contact_roles/action_wrapper.js) is returned for **POST**, **PUT** and **DELETE** operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getContactRoles() | The method to get the list of obtained ***ActionResponse*** instances. |
| setContactRoles(***[contactRoles](../../core/com/zoho/crm/api/contact_roles/action_response.js)***) | The method to set the list of obtained ***ActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/contact_roles/action_wrapper.js)

## ContactRole

Structure of Zoho CRM [ContactRole](../../core/com/zoho/crm/api/contact_roles/contact_role.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getId() | The method to get the value of ***ContactRole Id*** |
| setId(id) | The method to set the value of ***ContactRole Id*** |
| getName() | The method to get the value of ***ContactRole Name*** |
| setName(name) | The method to set the value of ***ContactRole Name*** |
| getSequenceNumber() | The method to get the value of ***ContactRole SequenceNumber*** |
| setSequenceNumber(sequenceNumber) | The method to set the value of ***ContactRole SequenceNumber*** |
----

[source](../../core/com/zoho/crm/api/contact_roles/contact_role.js)

## DeleteContactRolesParam

Contains all possible parameters for the [Delete ContactRoles operation](../../core/com/zoho/crm/api/contact_roles/contact_roles_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IDS | Represents `ids` parameter |
----
