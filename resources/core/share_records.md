# ShareRecords

## Package /core/com/zoho/crm/api/share_records

The Zoho CRM [ShareRecords API](https://www.zoho.com/crm/developer/docs/api/get-shared-record-details.html) reference provides information about the possible operations on **ShareRecords**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [SuccessResponse](#successresponse) |  |
| [ShareRecordsOperations](#sharerecordsoperations) |  |
| [SharedThrough](#sharedthrough) |  |
| [APIException](#apiexception) |  |
| [ResponseWrapper](#responsewrapper) |  |
| [ShareRecord](#sharerecord) |  |
| [DeleteActionWrapper](#deleteactionwrapper) |  |
| [BodyWrapper](#bodywrapper) |  |
| [ActionWrapper](#actionwrapper) |  |

----

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/share_records/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/share_records/success_response.js)

## ShareRecordsOperations

Contains methods for all possible [ShareRecords operations](../../core/com/zoho/crm/api/share_records/share_records_operations.js).

### Constructors

| Constructor                                                   | Description                                                                     |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| constructor(recordId, moduleAPIName) | Creates a ***ShareRecordsOperations*** class instance with the ***recordId*** and ***moduleAPIName*** . |
----

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getSharedRecordDetails(***[paramInstance](../parameter_map.md#parametermap)***) | To get the details of a record shared with other users. |
| shareRecord(***[request](share_records.md#bodywrapper)***) | To share a record with other users in the organization. |
| updateSharePermissions(***[request](share_records.md#bodywrapper)***) | Update the sharing permissions of a record granted to users as Read-Write, Read-only, or grant full access. |
| revokeSharedRecord() | To revoke access to a shared record. |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [GetSharedRecordDetailsParam](#getsharedrecorddetailsparam) |
----

[source](../../core/com/zoho/crm/api/share_records/share_records_operations.js)

## SharedThrough

Structure representing the properties of the Shared Record.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getModule() | The method to get the value of ***SharedThrough Module*** |
| setModule(***[module](modules.md#module)***) | The method to set the value of ***SharedThrough Module*** |
| getId() | The method to get the value of ***SharedThrough Id*** |
| setId(id) | The method to set the value of ***SharedThrough Id*** |
| getEntityName() | The method to get the value of ***SharedThrough EntityName*** |
| setEntityName(entityName) | The method to set the value of ***SharedThrough EntityName*** |
----

[source](../../core/com/zoho/crm/api/share_records/shared_through.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/share_records/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/share_records/api_exception.js)

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/share_records/response_wrapper.js) is returned for **GET** operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getShare() | The method to get the list of obtained ***ShareRecord*** instances. |
| setShare(***[share](share_records.md#sharerecord)***) | The method to set the list of obtained ***ShareRecord*** instances. |
| getShareableUser() | The method to get the list of obtained ***User*** instances. |
| setShareableUser(***[shareableUser](users.md#user)***) | The method to set the list of obtained ***User*** instances. |
----

[source](../../core/com/zoho/crm/api/share_records/response_wrapper.js)

## ShareRecord

Structure of Zoho CRM [ShareRecord](../../core/com/zoho/crm/api/share_records/share_record.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getShareRelatedRecords() | The method to get the value of ***ShareRecord ShareRelatedRecords*** |
| setShareRelatedRecords(shareRelatedRecords) | The method to set the value of ***ShareRecord ShareRelatedRecords*** |
| getSharedThrough() | The method to get the value of ***ShareRecord SharedThrough*** |
| setSharedThrough(***[sharedThrough](share_records.md#sharedthrough)***) | The method to set the value of ***ShareRecord SharedThrough*** |
| getSharedTime() | The method to get the value of ***ShareRecord SharedTime*** |
| setSharedTime(sharedTime) | The method to set the value of ***ShareRecord SharedTime*** |
| getPermission() | The method to get the value of ***ShareRecord Permission*** |
| setPermission(permission) | The method to set the value of ***ShareRecord Permission*** |
| getSharedBy() | The method to get the value of ***ShareRecord SharedBy*** |
| setSharedBy(***[sharedBy](users.md#user)***) | The method to set the value of ***ShareRecord SharedBy*** |
| getUser() | The method to get the value of ***ShareRecord User*** |
| setUser(***[user](users.md#user)***) | The method to set the value of ***ShareRecord User*** |
----

[source](../../core/com/zoho/crm/api/share_records/share_record.js)

## DeleteActionWrapper

After a successful **API** request, an instance of [DeleteActionWrapper](../../core/com/zoho/crm/api/share_records/delete_action_wrapper.js) is returned for **DELETE** operation

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getShare() | The method to get the value of ***DeleteActionWrapper Share*** |
| setShare(***[share](../../core/com/zoho/crm/api/share_records/delete_action_response.js)***) | The method to set the value of ***DeleteActionWrapper Share*** |
----

[source](../../core/com/zoho/crm/api/share_records/delete_action_wrapper.js)

## BodyWrapper

A structure that contains all possible keys of a single request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getShare() | The method to get the list of obtained ***ShareRecord*** instances. |
| setShare(***[share](share_records.md#sharerecord)***) | The method to set the list of obtained ***ShareRecord*** instances. |
----

[source](../../core/com/zoho/crm/api/share_records/body_wrapper.js)

## ActionWrapper

After a successful **API** request, an instance of [ActionWrapper](../../core/com/zoho/crm/api/share_records/action_wrapper.js) is returned for **POST**, **PUT** and **DELETE** operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getShare() | The method to get the list of obtained ***ActionResponse*** instances. |
| setShare(***[share](../../core/com/zoho/crm/api/share_records/action_response.js)***) | The method to set the list of obtained ***ActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/share_records/action_wrapper.js)

## GetSharedRecordDetailsParam

Contains all possible parameters for the [Get SharedRecord Details operation](../../core/com/zoho/crm/api/share_records/share_records_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| SHAREDTO | Represents `sharedTo` parameter |
| VIEW | Represents `view` parameter |
----
