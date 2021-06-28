# RelatedRecords

## Package /core/com/zoho/crm/api/related_records

The Zoho CRM [RelatedRecords API](https://www.zoho.com/crm/developer/docs/api/get-related-records.html) reference provides information about the possible operations on **RelatedRecords**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [APIException](#apiexception) |  |
| [SuccessResponse](#successresponse) |  |
| [ActionWrapper](#actionwrapper) |  |
| [RelatedRecordsOperations](#relatedrecordsoperations) |  |
| [ResponseWrapper](#responsewrapper) |  |
| [FileBodyWrapper](#filebodywrapper) |  |
| [BodyWrapper](#bodywrapper) |  |

----

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/related_records/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/related_records/api_exception.js)

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/related_records/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/related_records/success_response.js)

## ActionWrapper

After a successful **API** request, an instance of [ActionWrapper](../../core/com/zoho/crm/api/related_records/action_wrapper.js) is returned for **POST**, **PUT** and **DELETE** operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***ActionResponse*** instances. |
| setData(***[data](../../core/com/zoho/crm/api/related_records/action_response.js)***) | The method to set the list of obtained ***ActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/related_records/action_wrapper.js)

## RelatedRecordsOperations

Contains methods for all possible [RelatedRecords operations](../../core/com/zoho/crm/api/related_records/related_records_operations.js).

### Constructors

| Constructor                                                   | Description                                                                     |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| constructor(relatedListAPIName, recordId, moduleAPIName) |  Creates a ***RelatedRecordsOperations*** class instance with the ***relatedListAPIName***, ***recordId*** and ***moduleAPIName***. |
----

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getRelatedRecords(***[paramInstance](../parameter_map.md#parametermap)***, ***[headerInstance](../header_map.md#headermap)***) | To get the list of records from the related list of a module. |
| updateRelatedRecords(***[request](related_records.md#bodywrapper)***) | To update the association/relation between the records. |
| delinkRecords(***[paramInstance](../parameter_map.md#parametermap)***) | To delete the association between the records. |
| getRelatedRecord(***[headerInstance](../header_map.md#headermap)***, relatedRecordId) | To get the records from a specific related list of a module. |
| updateRelatedRecord(relatedRecordId, ***[request](related_records.md#bodywrapper)***) | To update the details of a specific record of a related list in a module. |
| delinkRecord(relatedRecordId) | To delete a specific record from the related list of a module. |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [GetRelatedRecordsParam](#getrelatedrecordsparam) |
| [GetRelatedRecordsHeader](#getrelatedrecordsheader) |
| [DelinkRecordsParam](#delinkrecordsparam) |
| [GetRelatedRecordHeader](#getrelatedrecordheader) |
----

[source](../../core/com/zoho/crm/api/related_records/related_records_operations.js)

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/related_records/response_wrapper.js) is returned for GET operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***Record*** instances. |
| setData(***[data](record.md#record-1)***) | The method to set the list of obtained ***Record*** instances. |
| getInfo() | The method to get the value of ***ResponseWrapper Info*** |
| setInfo(***[info](record.md#info)***) | The method to set the value of ***ResponseWrapper Info*** |
----

[source](../../core/com/zoho/crm/api/related_records/response_wrapper.js)

## FileBodyWrapper

Serves as the response for the downloading Attachment operation.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getFile() | The method to get the value of ***FileBodyWrapper File*** |
| setFile(***[file](../util/stream_wrapper.md#streamwrapper)***) | The method to set the value of ***FileBodyWrapper File*** |
----

[source](../../core/com/zoho/crm/api/related_records/file_body_wrapper.js)

## BodyWrapper

A structure that contains all possible keys of a single request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***Record*** instances. |
| setData(***[data](record.md#record-1)***) | The method to set the list of obtained ***Record*** instances. |
----

[source](../../core/com/zoho/crm/api/related_records/body_wrapper.js)

## GetRelatedRecordsParam

Contains all possible parameters for the [GetRelatedRecords operation](../../core/com/zoho/crm/api/related_records/related_records_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| PAGE | Represents `page` parameter |
| PER_PAGE | Represents `per_page` parameter |
----

## GetRelatedRecordsHeader

Contains all possible headers for the [GetRelatedRecords operation](../../core/com/zoho/crm/api/related_records/related_records_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IF_MODIFIED_SINCE | Represents `If-Modified-Since` parameter |
----

## DelinkRecordsParam

Contains all possible parameters for the [DelinkRecords operation](../../core/com/zoho/crm/api/related_records/related_records_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IDS | Represents `ids` parameter |
----

## GetRelatedRecordHeader

Contains all possible headers for the [GetRelatedRecord operation](../../core/com/zoho/crm/api/related_records/related_records_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IF_MODIFIED_SINCE | Represents `If-Modified-Since` parameter |
----
