# File

## Package /core/com/zoho/crm/api/file

The Zoho CRM [Files API](https://www.zoho.com/crm/developer/docs/api/upload-files-to-zfs.html) reference provides information about the possible operations on **Files**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [BodyWrapper](#bodywrapper) |  |
| [SuccessResponse](#successresponse) |  |
| [ActionWrapper](#actionwrapper) |  |
| [APIException](#apiexception) |  |
| [FileOperations](#fileoperations) |  |
| [FileBodyWrapper](#filebodywrapper) |  |

----

## BodyWrapper

A structure that contains all possible keys of a single request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getFile() | The method to get the list of obtained ***StreamWrapper*** instances. |
| setFile(***[file](../util/stream_wrapper.md#streamwrapper)***) | The method to set the list of obtained ***StreamWrapper*** instances. |
----

[source](../../core/com/zoho/crm/api/file/body_wrapper.js)

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/file/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/file/success_response.js)

## ActionWrapper

After a successful **API** request, an instance of [ActionWrapper](../../core/com/zoho/crm/api/file/action_wrapper.js) is returned for **POST**, **PUT** and **DELETE** operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***ActionResponse*** instances. |
| setData(***[data](../../core/com/zoho/crm/api/file/action_response.js)***) | The method to set the list of obtained ***ActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/file/action_wrapper.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/file/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/file/api_exception.js)

## FileOperations

Contains methods for all possible [File operations](../../core/com/zoho/crm/api/file/file_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| uploadFiles(***[request](file.md#bodywrapper)***, ***[paramInstance](../parameter_map.md#parametermap)***) | To upload a file and get the encrypted ID. |
| getFile(***[paramInstance](../parameter_map.md#parametermap)***) | To get the uploaded file through its encrypted ID.|
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [UploadFilesParam](#uploadfilesparam) |
| [GetFileParam](#getfileparam) |
----

[source](../../core/com/zoho/crm/api/file/file_operations.js)

## FileBodyWrapper

Serves as response for downloading file operation.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getFile() | The method to get the ***StreamWrapper*** class instance|
| setFile(***[file](../util/stream_wrapper.md#streamwrapper)***) | The method to set the ***StreamWrapper*** class instance |
----

[source](../../core/com/zoho/crm/api/file/file_body_wrapper.js)

## UploadFilesParam

Contains all possible parameters for the [Upload Files operation](../../core/com/zoho/crm/api/file/file_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| TYPE | Represents `type` parameter |
----

## GetFileParam

Contains all possible parameters for the [Get File operation](../../core/com/zoho/crm/api/file/file_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| ID | Represents `id` parameter |
----
