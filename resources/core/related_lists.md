# RelatedLists

## Package /core/com/zoho/crm/api/related_lists

The Zoho CRM [RelatedLists Meta Data API](https://www.zoho.com/crm/developer/docs/api/related-list-meta.html) reference provides information about the possible operations on **RelatedLists**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [ResponseWrapper](#responsewrapper) |  |
| [RelatedList](#relatedlist) |  |
| [RelatedListsOperations](#relatedlistsoperations) |  |
| [APIException](#apiexception) |  |

----

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/related_lists/response_wrapper.js) is returned for GET operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getRelatedLists() | The method to get the list of obtained ***RelatedList*** instances. |
| setRelatedLists(***[relatedLists](related_lists.md#relatedlist)***) | The method to set the list of obtained ***RelatedList*** instances. |
----

[source](../../core/com/zoho/crm/api/related_lists/response_wrapper.js)

## RelatedList

Structure of Zoho CRM [RelatedList](../../core/com/zoho/crm/api/related_lists/related_list.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getId() | The method to get the value of ***RelatedList Id*** |
| setId(id) | The method to set the value of ***RelatedList Id*** |
| getSequenceNumber() | The method to get the value of ***RelatedList SequenceNumber*** |
| setSequenceNumber(sequenceNumber) | The method to set the value of ***RelatedList SequenceNumber*** |
| getDisplayLabel() | The method to get the value of ***RelatedList DisplayLabel*** |
| setDisplayLabel(displayLabel) | The method to set the value of ***RelatedList DisplayLabel*** |
| getAPIName() | The method to get the value of ***RelatedList APIName*** |
| setAPIName(apiName) | The method to set the value of ***RelatedList APIName*** |
| getModule() | The method to get the value of ***RelatedList Module*** |
| setModule(module) | The method to set the value of ***RelatedList Module*** |
| getName() | The method to get the value of ***RelatedList Name*** |
| setName(name) | The method to set the value of ***RelatedList Name*** |
| getAction() | The method to get the value of ***RelatedList Action*** |
| setAction(action) | The method to set the value of ***RelatedList Action*** |
| getHref() | The method to get the value of ***RelatedList Href*** |
| setHref(href) | The method to set the value of ***RelatedList Href*** |
| getType() | The method to get the value of ***RelatedList Type*** |
| setType(type) | The method to set the value of ***RelatedList Type*** |
| getConnectedmodule() | The method to get the value of ***RelatedList Connectedmodule*** |
| setConnectedmodule(connectedmodule) | The method to set the value of ***RelatedList Connectedmodule*** |
| getLinkingmodule() | The method to get the value of ***RelatedList Linkingmodule*** |
| setLinkingmodule(linkingmodule) | The method to set the value of ***RelatedList Linkingmodule*** |
----

[source](../../core/com/zoho/crm/api/related_lists/related_list.js)

## RelatedListsOperations

Contains methods for all possible [RelatedLists operations](../../core/com/zoho/crm/api/related_lists/related_lists_operations.js).

### Constructors

| Constructor                                                   | Description                                                                     |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| constructor(module) | Creates a ***RelatedListsOperations*** class instance with the ***moduleAPIName***. |
----

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getRelatedLists() | To get the details of all the related lists of a module. |
| getRelatedList(id) | To get the details of a specific related list of a module.|
----

[source](../../core/com/zoho/crm/api/related_lists/related_lists_operations.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/related_lists/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/related_lists/api_exception.js)
