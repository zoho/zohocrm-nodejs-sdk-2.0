# Territories

## Package /core/com/zoho/crm/api/territories

The Zoho CRM [Territories API](https://www.zoho.com/crm/developer/docs/api/territories.html) reference provides information about the possible operations on **Territories**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [Territory](#territory) |  |
| [TerritoriesOperations](#territoriesoperations) |  |
| [APIException](#apiexception) |  |
| [ResponseWrapper](#responsewrapper) |  |

----

## Territory

Structure of Zoho CRM [Territory](../../core/com/zoho/crm/api/territories/territory.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCreatedTime() | The method to get the value of ***Territory CreatedTime*** |
| setCreatedTime(createdTime) | The method to set the value of ***Territory CreatedTime*** |
| getModifiedTime() | The method to get the value of ***Territory ModifiedTime*** |
| setModifiedTime(modifiedTime) | The method to set the value of ***Territory ModifiedTime*** |
| getManager() | The method to get the value of ***Territory Manager*** |
| setManager(***[manager](users.md#user)***) | The method to set the value of ***Territory Manager*** |
| getParentId() | The method to get the value of ***Territory ParentId*** |
| setParentId(parentId) | The method to set the value of ***Territory ParentId*** |
| getCriteria() | The method to get the value of ***Territory Criteria*** |
| setCriteria(***[criteria](custom_views.md#criteria)***) | The method to set the value of ***Territory Criteria*** |
| getName() | The method to get the value of ***Territory Name*** |
| setName(name) | The method to set the value of ***Territory Name*** |
| getModifiedBy() | The method to get the value of ***Territory ModifiedBy*** |
| setModifiedBy(***[modifiedBy](users.md#user)***) | The method to set the value of ***Territory ModifiedBy*** |
| getDescription() | The method to get the value of ***Territory Description*** |
| setDescription(description) | The method to set the value of ***Territory Description*** |
| getId() | The method to get the value of ***Territory Id*** |
| setId(id) | The method to set the value of ***Territory Id*** |
| getCreatedBy() | The method to get the value of ***Territory CreatedBy*** |
| setCreatedBy(***[createdBy](users.md#user)***) | The method to set the value of ***Territory CreatedBy*** |
----

[source](../../core/com/zoho/crm/api/territories/territory.js)

## TerritoriesOperations

Contains methods for all possible [Territories operations](../../core/com/zoho/crm/api/territories/territories_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getTerritories() | To get the list of all territories. |
| getTerritory(id) | To get the details of a specific territory. |
----

[source](../../core/com/zoho/crm/api/territories/territories_operations.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/territories/api_exception.js) is returned for all operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCode() | The method to get the value of ***Code*** key in  the **API** response |
| setCode(***[code](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Code*** key in  the **API** response |
| getStatus() | The method to get the value of ***Status*** key in  the **API** response |
| setStatus(***[status](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Status*** key in  the **API** response |
| getMessage() | The method to get the value of ***Message*** key in  the **API** response |
| setMessage(***[message](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Message*** key in  the **API** response |
| getDetails() | The method to get the value of ***Details*** key in  the **API** response |
| setDetails(details) | The method to set the value of ***Details*** key in  the **API** response |
----

[source](../../core/com/zoho/crm/api/territories/api_exception.js)

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/territories/response_wrapper.js) is returned for ***GET*** operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getTerritories() | The method to get the list of obtained ***Territory*** instances. |
| setTerritories(***[territories](territories.md#territory)***) | The method to set the list of obtained ***Territory*** instances. |
----

[source](../../core/com/zoho/crm/api/territories/response_wrapper.js)
