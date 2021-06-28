# Attachments

## Package /core/com/zoho/crm/api/attachments

The Zoho CRM [Attachment API](https://www.zoho.com/crm/developer/docs/api/get-attachments.html) reference provides information about the possible operations on **Attachments**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [SuccessResponse](#successresponse) |  |
| [APIException](#apiexception) |  |
| [Attachment](#attachment) |  |
| [ActionWrapper](#actionwrapper) |  |
| [ResponseWrapper](#responsewrapper) |  |
| [FileBodyWrapper](#filebodywrapper) |  |
| [AttachmentsOperations](#attachmentsoperations) |  |

----

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/attachments/success_response.js) is returned.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCode() | The method to get the value of ***Code*** key in  the **API** response |
| setCode(***[code](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Code*** key in  the **API** response |
| getDetails() | The method to get the value of ***Details*** key in  the **API** response |
| setDetails(details) | The method to set the value of ***Details*** key in  the **API** response |
| getMessage() | The method to get the value of ***Message*** key in  the **API** response |
| setMessage(***[message](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Message*** key in  the **API** response |
| getStatus() | The method to get the value of ***Status*** key in  the **API** response |
| setStatus(***[status](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Status*** key in  the **API** response |
----

[source](../../core/com/zoho/crm/api/attachments/success_response.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/attachments/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/attachments/api_exception.js)

## Attachment

Structure of Zoho CRM [Attachment](../../core/com/zoho/crm/api/attachments/attachment.js)

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getOwner() | The method to get the value of ***Attachment Owner*** |
| setOwner(***[owner](users.md#user)***) | The method to set the value of ***Attachment Owner*** |
| getModifiedTime() | The method to get the value of ***Attachment ModifiedTime*** |
| setModifiedTime(modifiedTime) | The method to set the value of ***Attachment ModifiedTime*** |
| getFileName() | The method to get the value of ***Attachment FileName*** |
| setFileName(fileName) | The method to set the value of ***Attachment FileName*** |
| getCreatedTime() | The method to get the value of ***Attachment CreatedTime*** |
| setCreatedTime(createdTime) | The method to set the value of ***Attachment CreatedTime*** |
| getSize() | The method to get the value of ***Attachment Size*** |
| setSize(size) | The method to set the value of ***Attachment Size*** |
| getParentId() | The method to get the value of ***Attachment ParentId*** |
| setParentId(***[parentId](record.md#record-1)***) | The method to set the value of ***Attachment ParentId*** |
| getEditable() | The method to get the value of ***Attachment Editable*** |
| setEditable(editable) | The method to set the value of ***Attachment Editable*** |
| getFileId() | The method to get the value of ***Attachment FileId*** |
| setFileId(fileId) | The method to set the value of ***Attachment FileId*** |
| getType() | The method to get the value of ***Attachment Type*** |
| setType(type) | The method to set the value of ***Attachment Type*** |
| getSeModule() | The method to get the value of ***Attachment SeModule*** |
| setSeModule(seModule) | The method to set the value of ***Attachment SeModule*** |
| getModifiedBy() | The method to get the value of ***Attachment ModifiedBy*** |
| setModifiedBy(***[modifiedBy](users.md#user)***) | The method to set the value of ***Attachment ModifiedBy*** |
| getState() | The method to get the value of ***Attachment State*** |
| setState(state) | The method to set the value of ***Attachment State*** |
| getId() | The method to get the value of ***Attachment Id*** |
| setId(id) | The method to set the value of ***Attachment Id*** |
| getCreatedBy() | The method to get the value of ***Attachment CreatedBy*** |
| setCreatedBy(***[createdBy](users.md#user)***) | The method to set the value of ***Attachment CreatedBy*** |
| getLinkUrl() | The method to get the value of ***Attachment LinkUrl*** |
| setLinkUrl(linkUrl) | The method to set the value of ***Attachment LinkUrl*** |
| getDescription() | The method to get the value of ***Attachment Description*** |
| setDescription(description) | The method to set the value of ***Attachment Description*** |
| getCategory() | The method to get the value of ***Attachment Category*** |
| setCategory(category) | The method to set the value of ***Attachment Category*** |
----

[source](../../core/com/zoho/crm/api/attachments/attachment.js)

## ActionWrapper

After a successful **API** request, and instance of [ActionWrapper](../../core/com/zoho/crm/api/attachments/action_wrapper.js) is returned for **POST**, **PUT** and **DELETE** operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***ActionResponse*** instances. |
| setData(***[data](../../core/com/zoho/crm/api/attachments/action_response.js)***) | The method to set the list of obtained ***ActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/attachments/action_wrapper.js)

## ResponseWrapper

After a successful **API** request, and instance of [ResponseWrapper](../../core/com/zoho/crm/api/attachments/response_wrapper.js) is returned for GET operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***Attachment*** instances. |
| setData(***[data](attachments.md#attachment)***) | The method to set the list of obtained ***Attachment*** instances. |
| getInfo() | The method to get the ***Attachment*** response information. |
| setInfo(***[info](record.md#info)***) | The method to set the ***Attachment*** response information. |
----

[source](../../core/com/zoho/crm/api/attachments/response_wrapper.js)

## FileBodyWrapper

Serves as request for uploading attachment and response for downloading attachment operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getFile() | The method to get the ***StreamWrapper*** class instances |
| setFile(***[file](../util/stream_wrapper.md#streamwrapper)***) | The method to set the ***StreamWrapper*** class instances |
----

[source](../../core/com/zoho/crm/api/attachments/file_body_wrapper.js)

## AttachmentsOperations

Contains methods for all possible [Attachment operations](../../core/com/zoho/crm/api/attachments/attachments_operations.js).

### Constructors

| Constructor                                                   | Description                                                                     |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| constructor(moduleAPIName, recordId) |  Creates a ***AttachmentsOperations*** class instance with the ***moduleAPIName*** and ***recordId***.|
----

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| downloadAttachment(id) | To download an attachment that was uploaded to a record. |
| deleteAttachment(id) | To delete an attachment that was added to a record. |
| getAttachments(***[paramInstance](../parameter_map.md#parametermap)***) | To fetch the list of attachments of a record. |
| uploadAttachment(***[request](attachments.md#filebodywrapper)***) | To upload attachments to a record. |
| uploadLinkAttachment(***[paramInstance](../parameter_map.md#parametermap)***) | To upload a link as an attachment to a record. |
| deleteAttachments(***[paramInstance](../parameter_map.md#parametermap)***) | To delete the attachments that were added to a record. |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [GetAttachmentsParam](#getattachmentsparam) |
| [UploadLinkAttachmentParam](#uploadlinkattachmentparam) |
| [DeleteAttachmentsParam](#deleteattachmentsparam) |
----

[source](../../core/com/zoho/crm/api/attachments/attachments_operations.js)

## GetAttachmentsParam
Contains all possible parameters for the [Get Attachments operation](../../core/com/zoho/crm/api/attachments/attachments_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| FIELDS | Represents `fields` parameter |
| PAGE | Represents `page` parameter |
| PER_PAGE | Represents `per_page` parameter |
----

## UploadLinkAttachmentParam

Contains all possible parameters for the [Upload Link as attachment operation](../../core/com/zoho/crm/api/attachments/attachments_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| ATTACHMENTURL | Represents `attachmentUrl` parameter |
----

## DeleteAttachmentsParam

Contains all possible parameters for the [Delete Attachments operation](../../core/com/zoho/crm/api/attachments/attachments_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IDS | Represents `ids` parameter  |
----
