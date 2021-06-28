# BulkRead

## Package /core/com/zoho/crm/api/bulk_read

The Zoho CRM [BulkRead API](https://www.zoho.com/crm/developer/docs/api/bulk-read/overview.html) reference provides information about the possible operations on **BulkRead**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [Criteria](#criteria) |  |
| [Query](#query) |  |
| [RequestWrapper](#requestwrapper) |  |
| [SuccessResponse](#successresponse) |  |
| [JobDetail](#jobdetail) |  |
| [Result](#result) |  |
| [BulkReadOperations](#bulkreadoperations) |  |
| [CallBack](#callback) |  |
| [ResponseWrapper](#responsewrapper) |  |
| [APIException](#apiexception) |  |
| [ActionWrapper](#actionwrapper) |  |
| [FileBodyWrapper](#filebodywrapper) |  |

----

## Criteria

The structure represents the condition to filter records.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getAPIName() | The method to get the value of ***Criteria APIName*** |
| setAPIName(apiName) | The method to set the value of ***Criteria APIName*** |
| getValue() | The method to get the value of ***Criteria Value*** |
| setValue(value) | The method to set the value of ***Criteria Value*** |
| getGroupOperator() | The method to get the value of ***Criteria GroupOperator*** |
| setGroupOperator(***[groupOperator](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Criteria GroupOperator*** |
| getGroup() | The method to get the list of obtained ***Criteria*** instances. |
| setGroup(***[group](bulk_read.md#criteria)***) | The method to set the list of obtained ***Criteria*** instances. |
| getComparator() | The method to get the value of ***Criteria Comparator*** |
| setComparator(***[comparator](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Criteria Comparator*** |
----

[source](../../core/com/zoho/crm/api/bulk_read/criteria.js)

## Query

The structure containing the query to retrieve the required records.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getModule() | The method to get the value of ***Query Module*** |
| setModule(module) | The method to set the value of ***Query Module*** |
| getCvid() | The method to get the value of ***Query Cvid*** |
| setCvid(cvid) | The method to set the value of ***Query Cvid*** |
| getFields() | The method to get the value of ***Query Fields*** |
| setFields(fields) | The method to set the value of ***Query Fields*** |
| getPage() | The method to get the value of ***Query Page*** |
| setPage(page) | The method to set the value of ***Query Page*** |
| getCriteria() | The method to get the value of ***Query Criteria*** |
| setCriteria(***[criteria](bulk_read.md#criteria)***) | The method to set the value of ***Query Criteria*** |
----

[source](../../core/com/zoho/crm/api/bulk_read/query.js)

## RequestWrapper

A structure that contains all possible keys of a single request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCallback() | The method to get the value of ***RequestWrapper Callback*** |
| setCallback(***[callback](bulk_read.md#callback)***) | The method to set the value of ***RequestWrapper Callback*** |
| getQuery() | The method to get the value of ***RequestWrapper Query*** |
| setQuery(***[query](bulk_read.md#query)***) | The method to set the value of ***RequestWrapper Query*** |
| getFileType() | The method to get the value of ***RequestWrapper FileType*** |
| setFileType(***[fileType](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***RequestWrapper FileType*** |
----

[source](../../core/com/zoho/crm/api/bulk_read/request_wrapper.js)

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/bulk_read/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/bulk_read/success_response.js)

## JobDetail

Structure of Zoho CRM [JobDetail](../../core/com/zoho/crm/api/bulk_read/job_detail.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getId() | The method to get the value of ***JobDetail Id*** |
| setId(id) | The method to set the value of ***JobDetail Id*** |
| getOperation() | The method to get the value of ***JobDetail Operation*** |
| setOperation(operation) | The method to set the value of ***JobDetail Operation*** |
| getState() | The method to get the value of ***JobDetail State*** |
| setState(***[state](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***JobDetail State*** |
| getQuery() | The method to get the value of ***JobDetail Query*** |
| setQuery(***[query](bulk_read.md#query)***) | The method to set the value of ***JobDetail Query*** |
| getCreatedBy() | The method to get the value of ***JobDetail CreatedBy*** |
| setCreatedBy(***[createdBy](users.md#user)***) | The method to set the value of ***JobDetail CreatedBy*** |
| getCreatedTime() | The method to get the value of ***JobDetail CreatedTime*** |
| setCreatedTime(createdTime) | The method to set the value of ***JobDetail CreatedTime*** |
| getResult() | The method to get the value of ***JobDetail Result*** |
| setResult(***[result](bulk_read.md#result)***) | The method to set the value of ***JobDetail Result*** |
| getFileType() | The method to get the value of ***JobDetail FileType*** |
| setFileType(fileType) | The method to set the value of ***JobDetail FileType*** |
----

[source](../../core/com/zoho/crm/api/bulk_read/job_detail.js)

## Result

Structure represents the result of a BulkRead job.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getPage() | The method to get the value of ***Result Page*** |
| setPage(page) | The method to set the value of ***Result Page*** |
| getCount() | The method to get the value of ***Result Count*** |
| setCount(count) | The method to set the value of ***Result Count*** |
| getDownloadUrl() | The method to get the value of ***Result DownloadUrl*** |
| setDownloadUrl(downloadUrl) | The method to set the value of ***Result DownloadUrl*** |
| getPerPage() | The method to get the value of ***Result PerPage*** |
| setPerPage(perPage) | The method to set the value of ***Result PerPage*** |
| getMoreRecords() | The method to get the value of ***Result MoreRecords*** |
| setMoreRecords(moreRecords) | The method to set the value of ***Result MoreRecords*** |
----

[source](../../core/com/zoho/crm/api/bulk_read/result.js)

## BulkReadOperations

Contains methods for all possible [BulkRead operations](../../core/com/zoho/crm/api/bulk_read/bulk_read_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getBulkReadJobDetails(jobId) | To know the status of the bulk read job scheduled previously.  |
| downloadResult(jobId) | To download the result of the bulk read job. The response contains a zip file. Extract it to get the CSV or ICS file depending on the "file_type" you specified while creating the bulk read job. |
| createBulkReadJob(***[request](bulk_read.md#requestwrapper)***) | To schedule a bulk read job to export records that match the criteria. |
----

[source](../../core/com/zoho/crm/api/bulk_read/bulk_read_operations.js)

## CallBack

Structure containing the URL where the BulkRead Job details are posted upon completion.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getUrl() | The method to get the value of ***CallBack Url*** |
| setUrl(url) | The method to set the value of ***CallBack Url*** |
| getMethod() | The method to get the value of ***CallBack HTTP Method*** |
| setMethod(***[method](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***CallBack HTTP Method*** |
----

[source](../../core/com/zoho/crm/api/bulk_read/call_back.js)

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/bulk_read/response_wrapper.js) is returned for GET operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***JobDetail*** instances. |
| setData(***[data](bulk_read.md#jobdetail)***) | The method to set the list of obtained ***JobDetail*** instances. |
----

[source](../../core/com/zoho/crm/api/bulk_read/response_wrapper.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/bulk_read/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/bulk_read/api_exception.js)

## ActionWrapper

After a successful **API** request, an instance of [ActionWrapper](../../core/com/zoho/crm/api/bulk_read/action_wrapper.js) is returned for **POST**, **PUT** and **DELETE** operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***ActionResponse*** instances. |
| setData(***[data](../../core/com/zoho/crm/api/bulk_read/action_response.js)***) | The method to set the list of obtained ***ActionResponse*** instances. |
| getInfo() | The method to get the value of ***ActionWrapper Info*** |
| setInfo(info) | The method to set the value of ***ActionWrapper Info*** |
----

[source](../../core/com/zoho/crm/api/bulk_read/action_wrapper.js)

## FileBodyWrapper

Serves as the response for downloading the result of bulk read job.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getFile() | The method to get the ***StreamWrapper*** class instance |
| setFile(***[file](../util/stream_wrapper.md#streamwrapper)***) | The method to set the ***StreamWrapper*** class instance |
----

[source](../../core/com/zoho/crm/api/bulk_read/file_body_wrapper.js)
