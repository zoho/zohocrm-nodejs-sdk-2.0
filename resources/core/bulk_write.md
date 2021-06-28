# BulkWrite

## Package /core/com/zoho/crm/api/bulk_write

The Zoho CRM [BulkWrite API](https://www.zoho.com/crm/developer/docs/api/bulk-write/overview.html) reference provides information about the possible operations on **BulkWrite**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [CallBack](#callback) |  |
| [SuccessResponse](#successresponse) |  |
| [RequestWrapper](#requestwrapper) |  |
| [APIException](#apiexception) |  |
| [BulkWriteResponse](#bulkwriteresponse) |  |
| [File](#file) |  |
| [Resource](#resource) |  |
| [BulkWriteOperations](#bulkwriteoperations) |  |
| [FieldMapping](#fieldmapping) |  |
| [FileBodyWrapper](#filebodywrapper) |  |
| [Result](#result) |  |

----

## CallBack

Structure containing the URL where the BulkWrite Job details are posted upon completion.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getUrl() | The method to get the value of ***CallBack Url*** |
| setUrl(url) | The method to set the value of ***CallBack Url*** |
| getMethod() | The method to get the value of ***CallBack HTTP Method*** |
| setMethod(***[method](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***CallBack HTTP Method*** |
----

[source](../../core/com/zoho/crm/api/bulk_write/call_back.js)

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/bulk_write/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/bulk_write/success_response.js)

## RequestWrapper

After a successful **API** request, an instance of [RequestWrapper](../../core/com/zoho/crm/api/bulk_write/request_wrapper.js) is returned for **POST**, **PUT** and **DELETE** operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCharacterEncoding() | The method to get the value of ***RequestWrapper CharacterEncoding*** |
| setCharacterEncoding(characterEncoding) | The method to set the value of ***RequestWrapper CharacterEncoding*** |
| getOperation() | The method to get the value of ***RequestWrapper Operation*** |
| setOperation(***[operation](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***RequestWrapper Operation*** |
| getCallback() | The method to get the value of ***RequestWrapper Callback*** |
| setCallback(***[callback](bulk_write.md#callback)***) | The method to set the value of ***RequestWrapper Callback*** |
| getResource() | The method to get the list of obtained ***Resource*** instances. |
| setResource(***[resource](bulk_write.md#resource)***) | The method to set the list of obtained ***Resource*** instances. |
----

[source](../../core/com/zoho/crm/api/bulk_write/request_wrapper.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/bulk_write/api_exception.js) is returned for all operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCode() | The method to get the value of ***Code*** key in  the **API** response |
| setCode(***[code](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Code*** key in  the **API** response |
| getMessage() | The method to get the value of ***Message*** key in  the **API** response |
| setMessage(***[message](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Message*** key in  the **API** response |
| getStatus() | The method to get the value of ***Status*** key in  the **API** response |
| setStatus(***[status](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Status*** key in  the **API** response |
| getDetails() | The method to get the value of ***Details*** key in  the **API** response |
| setDetails(details) | The method to set the value of ***Details*** key in  the **API** response |
| getErrorMessage() | The method to get the value of ***ErrorMessage*** key in  the **API** response |
| setErrorMessage(***[errorMessage](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***ErrorMessage*** key in  the **API** response |
| getErrorCode() | The method to get the value of ***ErrorCode*** key in  the **API** response |
| setErrorCode(errorCode) | The method to set the value of ***ErrorCode*** key in  the **API** response |
| getXError() | The method to get the value of ***XError*** key in  the **API** response |
| setXError(***[xError](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***XError*** key in  the **API** response |
| getInfo() | The method to get the value of ***Info*** key in  the **API** response |
| setInfo(***[info](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Info*** key in  the **API** response |
| getXInfo() | The method to get the value of ***XInfo*** key in  the **API** response |
| setXInfo(***[xInfo](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***XInfo*** key in  the **API** response |
| getHttpStatus() | The method to get the value of ***HttpStatus*** key in  the **API** response |
| setHttpStatus(httpStatus) | The method to set the value of ***HttpStatus*** key in  the **API** response |
----

[source](../../core/com/zoho/crm/api/bulk_write/api_exception.js)

## BulkWriteResponse

Structure of Zoho CRM [BulkWriteResponse](../../core/com/zoho/crm/api/bulk_write/bulk_write_response.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getStatus() | The method to get the value of ***BulkWriteResponse Status*** |
| setStatus(status) | The method to set the value of ***BulkWriteResponse Status*** |
| getCharacterEncoding() | The method to get the value of ***BulkWriteResponse CharacterEncoding*** |
| setCharacterEncoding(characterEncoding) | The method to set the value of ***BulkWriteResponse CharacterEncoding*** |
| getResource() | The method to get the list of obtained ***Resource*** instances. |
| setResource(***[resource](bulk_write.md#resource)***) | The method to set the list of obtained ***Resource*** instances. |
| getId() | The method to get the value of ***BulkWriteResponse Id*** |
| setId(id) | The method to set the value of ***BulkWriteResponse Id*** |
| getCallback() | The method to get the value of ***BulkWriteResponse Callback*** |
| setCallback(***[callback](bulk_write.md#callback)***) | The method to set the value of ***BulkWriteResponse Callback*** |
| getResult() | The method to get the value of ***BulkWriteResponse Result*** |
| setResult(***[result](bulk_write.md#result)***) | The method to set the value of ***BulkWriteResponse Result*** |
| getCreatedBy() | The method to get the value of ***BulkWriteResponse CreatedBy*** |
| setCreatedBy(***[createdBy](users.md#user)***) | The method to set the value of ***BulkWriteResponse CreatedBy*** |
| getOperation() | The method to get the value of ***BulkWriteResponse Operation*** |
| setOperation(operation) | The method to set the value of ***BulkWriteResponse Operation*** |
| getCreatedTime() | The method to get the value of ***BulkWriteResponse CreatedTime*** |
| setCreatedTime(createdTime) | The method to set the value of ***BulkWriteResponse CreatedTime*** |
----

[source](../../core/com/zoho/crm/api/bulk_write/bulk_write_response.js)

## File

Structure representing the status of the data provided in the file.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getStatus() | The method to get the value of ***File Status*** |
| setStatus(***[status](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***File Status*** |
| getName() | The method to get the value of ***File Name*** |
| setName(name) | The method to set the value of ***File Name*** |
| getAddedCount() | The method to get the value of ***File AddedCount*** |
| setAddedCount(addedCount) | The method to set the value of ***File AddedCount*** |
| getSkippedCount() | The method to get the value of ***File SkippedCount*** |
| setSkippedCount(skippedCount) | The method to set the value of ***File SkippedCount*** |
| getUpdatedCount() | The method to get the value of ***File UpdatedCount*** |
| setUpdatedCount(updatedCount) | The method to set the value of ***File UpdatedCount*** |
| getTotalCount() | The method to get the value of ***File TotalCount*** |
| setTotalCount(totalCount) | The method to set the value of ***File TotalCount*** |
----

[source](../../core/com/zoho/crm/api/bulk_write/file.js)

## Resource

Structure representing the properties of the data present in the file that serves as the request for creating a BulkWrite job and response for getting BulkWrite Job Details operation.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getStatus() | The method to get the value of ***Resource Status*** |
| setStatus(***[status](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Resource Status*** |
| getType() | The method to get the value of ***Resource Type*** |
| setType(***[type](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Resource Type*** |
| getModule() | The method to get the value of ***Resource Module*** |
| setModule(module) | The method to set the value of ***Resource Module*** |
| getFileId() | The method to get the value of ***Resource FileId*** |
| setFileId(fileId) | The method to set the value of ***Resource FileId*** |
| getIgnoreEmpty() | The method to get the value of ***Resource IgnoreEmpty*** |
| setIgnoreEmpty(ignoreEmpty) | The method to set the value of ***Resource IgnoreEmpty*** |
| getFindBy() | The method to get the value of ***Resource FindBy*** |
| setFindBy(findBy) | The method to set the value of ***Resource FindBy*** |
| getFieldMappings() | The method to get the list of obtained ***FieldMapping*** instances. |
| setFieldMappings(***[fieldMappings](bulk_write.md#fieldmapping)***) | The method to set the list of obtained ***FieldMapping*** instances. |
| getFile() | The method to get the value of ***Resource File*** |
| setFile(***[file](bulk_write.md#file)***) | The method to set the value of ***Resource File*** |
----

[source](../../core/com/zoho/crm/api/bulk_write/resource.js)

## BulkWriteOperations

Contains methods for all possible [BulkWrite operations](../../core/com/zoho/crm/api/bulk_write/bulk_write_operations.js)

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| uploadFile(***[request](bulk_write.md#filebodywrapper)***, ***[headerInstance](../header_map.md#headermap)***) | To upload a CSV file in ZIP format. The response contains the "file_id". Use this ID while making the bulk write request. |
| createBulkWriteJob(***[request](bulk_write.md#requestwrapper)***) | To create a bulk write job to insert, update, or upsert records. The response contains the "job_id". Use this ID while getting the status of the scheduled bulk write job. |
| getBulkWriteJobDetails(jobId)  | To know the status of the bulk write job scheduled previously. |
| downloadBulkWriteResult(downloadUrl) | To download the result of the bulk read job. The response contains a zip file. Extract it to get the CSV or ICS file depending on the "file_type" you specified while creating the bulk read job. |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [UploadFileHeader](#uploadfileheader) |
----

[source](../../core/com/zoho/crm/api/bulk_write/bulk_write_operations.js)

## FieldMapping

Structure representing the properties of field data in the file.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getAPIName() | The method to get the value of ***FieldMapping APIName*** |
| setAPIName(apiName) | The method to set the value of ***FieldMapping APIName*** |
| getIndex() | The method to get the value of ***FieldMapping Index*** |
| setIndex(index) | The method to set the value of ***FieldMapping Index*** |
| getFormat() | The method to get the value of ***FieldMapping Format*** |
| setFormat(format) | The method to set the value of ***FieldMapping Format*** |
| getFindBy() | The method to get the value of ***FieldMapping FindBy*** |
| setFindBy(findBy) | The method to set the value of ***FieldMapping FindBy*** |
| getDefaultValue() | The method to get the value of ***FieldMapping DefaultValue*** |
| setDefaultValue(defaultValue) | The method to set the value of ***FieldMapping DefaultValue*** |
| getModule() | The method to get the value of ***FieldMapping Module*** |
| setModule(module) | The method to set the value of ***FieldMapping Module*** |
----

[source](../../core/com/zoho/crm/api/bulk_write/field_mapping.js)

## FileBodyWrapper

Serves as the request for uploading the file and response for downloading the result of a BulkWrite operation.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getFile() | The method to get the ***StreamWrapper*** class instance |
| setFile(***[file](../util/stream_wrapper.md#streamwrapper)***) | The method to set the ***StreamWrapper*** class instance |
----

[source](../../core/com/zoho/crm/api/bulk_write/file_body_wrapper.js)

## Result

Structure containing the download URL that contains the result of the BulkWrite operation.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getDownloadUrl() | The method to get the value of ***BulkWrite Result DownloadUrl*** |
| setDownloadUrl(downloadUrl) | The method to set the value of ***BulkWrite Result DownloadUrl*** |
----

[source](../../core/com/zoho/crm/api/bulk_write/result.js)

## UploadFileHeader

Contains all possible headers for [Upload file operation](../../core/com/zoho/crm/api/bulk_write/bulk_write_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| FEATURE | Represents `feature` header |
| X_CRM_ORG | Represents `X-CRM-ORG` header |
----
