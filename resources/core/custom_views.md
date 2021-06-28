# CustomViews

## Package /core/com/zoho/crm/api/custom_views

The Zoho CRM [CustomView Meta Data API](https://www.zoho.com/crm/developer/docs/api/custom-view-meta.html) reference provides information about the possible operations on **CustomViews**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [SharedDetails](#shareddetails) |  |
| [Translation](#translation) |  |
| [CustomViewsOperations](#customviewsoperations) |  |
| [ResponseWrapper](#responsewrapper) |  |
| [Info](#info) |  |
| [CustomView](#customview) |  |
| [Criteria](#criteria) |  |
| [Range](#range) |  |
| [APIException](#apiexception) |  |

----

## SharedDetails

The structure representing the sharing properties of the Custom View.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getId() | The method to get the value of ***SharedDetails Id*** |
| setId(id) | The method to set the value of ***SharedDetails Id*** |
| getName() | The method to get the value of ***SharedDetails Name*** |
| setName(name) | The method to set the value of ***SharedDetails Name*** |
| getType() | The method to get the value of ***SharedDetails Type*** |
| setType(type) | The method to set the value of ***SharedDetails Type*** |
| getSubordinates() | The method to get the value of ***SharedDetails Subordinates*** |
| setSubordinates(subordinates) | The method to set the value of ***SharedDetails Subordinates*** |
----

[source](../../core/com/zoho/crm/api/custom_views/shared_details.js)

## Translation

The structure representing the additional Translation properties of the Custom Views.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getPublicViews() | The method to get the value of ***Translation PublicViews*** |
| setPublicViews(publicViews) | The method to set the value of ***Translation PublicViews*** |
| getOtherUsersViews() | The method to get the value of ***Translation OtherUsersViews*** |
| setOtherUsersViews(otherUsersViews) | The method to set the value of ***Translation OtherUsersViews*** |
| getSharedWithMe() | The method to get the value of ***Translation SharedWithMe*** |
| setSharedWithMe(sharedWithMe) | The method to set the value of ***Translation SharedWithMe*** |
| getCreatedByMe() | The method to get the value of ***Translation CreatedByMe*** |
| setCreatedByMe(createdByMe) | The method to set the value of ***Translation CreatedByMe*** |
----

[source](../../core/com/zoho/crm/api/custom_views/translation.js)

## CustomViewsOperations

Contains methods for all possible [CustomViews operations](../../core/com/zoho/crm/api/custom_views/custom_views_operations.js).

### Constructors

| Constructor                                                   | Description                                                                     |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| constructor(module) | Creates a ***CustomViewsOperations*** class instance with the ***moduleAPIName***. |
----

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCustomViews(***[paramInstance](../parameter_map.md#parametermap)***) | To get the list of all custom views in a module. |
| getCustomView(id) | To get the details of specific custom view in a module. |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [GetCustomViewsParam](#getcustomviewsparam) |
----

[source](../../core/com/zoho/crm/api/custom_views/custom_views_operations.js)

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/custom_views/response_wrapper.js) is returned for GET operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCustomViews() | The method to get the list of obtained ***CustomView*** instances. |
| setCustomViews(***[customViews](custom_views.md#customview)***) | The method to set the list of obtained ***CustomView*** instances. |
| getInfo() | The method to get the value of ***Response Info*** |
| setInfo(***[info](custom_views.md#info)***) | The method to set the value of ***Response Info*** |
----

[source](../../core/com/zoho/crm/api/custom_views/response_wrapper.js)

## Info

The structure containing the additional properties of Custom Views.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getPerPage() | The method to get the value of ***Info PerPage*** |
| setPerPage(perPage) | The method to set the value of ***Info PerPage*** |
| getDefault() | The method to get the value of ***Info Default*** |
| setDefault(default) | The method to set the value of ***Info Default*** |
| getCount() | The method to get the value of ***Info Count*** |
| setCount(count) | The method to set the value of ***Info Count*** |
| getPage() | The method to get the value of ***Info Page*** |
| setPage(page) | The method to set the value of ***Info Page*** |
| getMoreRecords() | The method to get the value of ***Info MoreRecords*** |
| setMoreRecords(moreRecords) | The method to set the value of ***Info MoreRecords*** |
| getTranslation() | The method to get the value of ***Info Translation*** |
| setTranslation(***[translation](custom_views.md#translation)***) | The method to set the value of ***Info Translation*** |
----

[source](../../core/com/zoho/crm/api/custom_views/info.js)

## CustomView

Structure of Zoho CRM [CustomView](../../core/com/zoho/crm/api/custom_views/custom_view.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getId() | The method to get the value of ***CustomView Id*** |
| setId(id) | The method to set the value of ***CustomView Id*** |
| getName() | The method to get the value of ***CustomView Name*** |
| setName(name) | The method to set the value of ***CustomView Name*** |
| getSystemName() | The method to get the value of ***CustomView SystemName*** |
| setSystemName(systemName) | The method to set the value of ***CustomView SystemName*** |
| getDisplayValue() | The method to get the value of ***CustomView DisplayValue*** |
| setDisplayValue(displayValue) | The method to set the value of ***CustomView DisplayValue*** |
| getSharedType() | The method to get the value of ***CustomView SharedType*** |
| setSharedType(sharedType) | The method to set the value of ***CustomView SharedType*** |
| getCategory() | The method to get the value of ***CustomView Category*** |
| setCategory(category) | The method to set the value of ***CustomView Category*** |
| getSortBy() | The method to get the value of ***CustomView SortBy*** |
| setSortBy(sortBy) | The method to set the value of ***CustomView SortBy*** |
| getSortOrder() | The method to get the value of ***CustomView SortOrder*** |
| setSortOrder(sortOrder) | The method to set the value of ***CustomView SortOrder*** |
| getFavorite() | The method to get the value of ***CustomView Favorite*** |
| setFavorite(favorite) | The method to set the value of ***CustomView Favorite*** |
| getOffline() | The method to get the value of ***CustomView Offline*** |
| setOffline(offline) | The method to set the value of ***CustomView Offline*** |
| getDefault() | The method to get the value of ***CustomView Default*** |
| setDefault(default) | The method to set the value of ***CustomView Default*** |
| getSystemDefined() | The method to get the value of ***CustomView SystemDefined*** |
| setSystemDefined(systemDefined) | The method to set the value of ***CustomView SystemDefined*** |
| getCriteria() | The method to get the value of ***CustomView Criteria*** |
| setCriteria(***[criteria](custom_views.md#criteria)***) | The method to set the value of ***CustomView Criteria*** |
| getSharedDetails() | The method to get the list of obtained ***SharedDetails*** instances. |
| setSharedDetails(***[sharedDetails](custom_views.md#shareddetails)***) | The method to set the list of obtained ***SharedDetails*** instances. |
| getFields() | The method to get the value of ***CustomView Fields*** |
| setFields(fields) | The method to set the value of ***CustomView Fields*** |
----

[source](../../core/com/zoho/crm/api/custom_views/custom_view.js)

## Criteria

The structure represents the condition set to the Custom View.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getComparator() | The method to get the value of ***Criteria Comparator*** |
| setComparator(***[comparator](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Criteria Comparator*** |
| getField() | The method to get the value of ***Criteria Field*** |
| setField(field) | The method to set the value of ***Criteria Field*** |
| getValue() | The method to get the value of ***Criteria Value*** |
| setValue(value) | The method to set the value of ***Criteria Value*** |
| getGroupOperator() | The method to get the value of ***Criteria GroupOperator*** |
| setGroupOperator(***[groupOperator](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Criteria GroupOperator*** |
| getGroup() | The method to get the list of obtained ***Criteria*** instances. |
| setGroup(***[group](custom_views.md#criteria)***) | The method to set the list of obtained ***Criteria*** instances. |
----

[source](../../core/com/zoho/crm/api/custom_views/criteria.js)

## Range

The structure reprensenting the properties of [Range](../../core/com/zoho/crm/api/custom_views/range.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getFrom() | The method to get the value of ***Range From*** |
| setFrom(from) | The method to set the value of ***Range From*** |
| getTo() | The method to get the value of ***Range To*** |
| setTo(to) | The method to set the value of ***Range To*** |
----

[source](../../core/com/zoho/crm/api/custom_views/range.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/custom_views/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/custom_views/api_exception.js)


## GetCustomViewsParam
Contains all possible parameters for the [Get CustomViews operation](../../core/com/zoho/crm/api/custom_views/custom_views_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| PAGE | Represents `page` parameter |
| PER_PAGE | Represents `per_page` parameter |
----