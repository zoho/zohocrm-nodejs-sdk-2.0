# Query

## Package /core/com/zoho/crm/api/query

The Zoho CRM [CRM Object Query Language(COQL) API](https://www.zoho.com/crm/developer/docs/api/COQL-Overview.html) reference provides information about the possible operations on **Query**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [ResponseWrapper](#responsewrapper) |  |
| [QueryOperations](#queryoperations) |  |
| [BodyWrapper](#bodywrapper) |  |
| [APIException](#apiexception) |  |

----

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/query/response_wrapper.js) is returned for GET operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***Record*** instances. |
| setData(***[data](record.md#record-1)***) | The method to set the list of obtained ***Record*** instances. |
| getInfo() | The method to get the value of ***ResponseWrapper Info*** |
| setInfo(***[info](record.md#info)***) | The method to set the value of ***ResponseWrapper Info*** |
----

[source](../../core/com/zoho/crm/api/query/response_wrapper.js)

## QueryOperations

Contains methods for all possible [Query operations](../../core/com/zoho/crm/api/query/query_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getRecords(***[request](query.md#bodywrapper)***) | To get records from the module through a COQL query. |
----

[source](../../core/com/zoho/crm/api/query/query_operations.js)

## BodyWrapper

A structure that contains all possible keys of a single request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getSelectQuery() | The method to get the value of ***BodyWrapper SelectQuery*** |
| setSelectQuery(selectQuery) | The method to set the value of ***BodyWrapper SelectQuery*** |
----

[source](../../core/com/zoho/crm/api/query/body_wrapper.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/query/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/query/api_exception.js)
