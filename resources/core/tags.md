# Tags

## Package /core/com/zoho/crm/api/tags

The Zoho CRM [Tags API](https://www.zoho.com/crm/developer/docs/api/get-tag-list.html) reference provides information about the possible operations on **Tags**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [MergeWrapper](#mergewrapper) |  |
| [ActionWrapper](#actionwrapper) |  |
| [BodyWrapper](#bodywrapper) |  |
| [Tag](#tag) |  |
| [ResponseWrapper](#responsewrapper) |  |
| [TagsOperations](#tagsoperations) |  |
| [Info](#info) |  |
| [SuccessResponse](#successresponse) |  |
| [APIException](#apiexception) |  |
| [RecordActionWrapper](#recordactionwrapper) |  |
| [CountWrapper](#countwrapper) |  |
| [ConflictWrapper](#conflictwrapper) |  |

----

## MergeWrapper

Structure that serves as the request for Merge Tags operation.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getTags() | The method to get the list of obtained ***ConflictWrapper*** instances. |
| setTags(***[tags](tags.md#conflictwrapper)***) | The method to set the list of obtained ***ConflictWrapper*** instances. |
----

[source](../../core/com/zoho/crm/api/tags/merge_wrapper.js)

## ActionWrapper

After a successful **API** request, an instance of [ActionWrapper](../../core/com/zoho/crm/api/tags/action_wrapper.js) is returned for **POST**, **PUT** and **DELETE** operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getTags() | The method to get the list of obtained ***ActionResponse*** instances. |
| setTags(***[tags](../../core/com/zoho/crm/api/tags/action_response.js)***) | The method to set the list of obtained ***ActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/tags/action_wrapper.js)

## BodyWrapper

A structure that contains all possible keys of a single request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getTags() | The method to get the list of obtained ***Tag*** instances. |
| setTags(***[tags](tags.md#tag)***) | The method to set the list of obtained ***Tag*** instances. |
----

[source](../../core/com/zoho/crm/api/tags/body_wrapper.js)

## Tag

Structure of Zoho CRM [Tag](../../core/com/zoho/crm/api/tags/tag.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCreatedTime() | The method to get the value of ***Tag CreatedTime*** |
| setCreatedTime(createdTime) | The method to set the value of ***Tag CreatedTime*** |
| getModifiedTime() | The method to get the value of ***Tag ModifiedTime*** |
| setModifiedTime(modifiedTime) | The method to set the value of ***Tag ModifiedTime*** |
| getName() | The method to get the value of ***Tag Name*** |
| setName(name) | The method to set the value of ***Tag Name*** |
| getModifiedBy() | The method to get the value of ***Tag ModifiedBy*** |
| setModifiedBy(***[modifiedBy](users.md#user)***) | The method to set the value of ***Tag ModifiedBy*** |
| getId() | The method to get the value of ***Tag Id*** |
| setId(id) | The method to set the value of ***Tag Id*** |
| getCreatedBy() | The method to get the value of ***Tag CreatedBy*** |
| setCreatedBy(***[createdBy](users.md#user)***) | The method to set the value of ***Tag CreatedBy*** |
----

[source](../../core/com/zoho/crm/api/tags/tag.js)

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/tags/response_wrapper.js) is returned for GET operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getTags() | The method to get the list of obtained ***Tag*** instances. |
| setTags(***[tags](tags.md#tag)***) | The method to set the list of obtained ***Tag*** instances. |
| getInfo() | The method to get the value of ***ResponseWrapper Info*** |
| setInfo(***[info](tags.md#info)***) | The method to set the value of ***ResponseWrapper Info*** |
----

[source](../../core/com/zoho/crm/api/tags/response_wrapper.js)

## TagsOperations

Contains methods for all possible [Tags operations](../../core/com/zoho/crm/api/tags/tags_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getTags(***[paramInstance](../parameter_map.md#parametermap)***) | To get the list of all tags in your organization. |
| createTags(***[request](tags.md#bodywrapper)***, ***[paramInstance](../parameter_map.md#parametermap)***) | To create tags. |
| updateTags(***[request](tags.md#bodywrapper)***, ***[paramInstance](../parameter_map.md#parametermap)***) | To update multiple tags. |
| updateTag(id, ***[request](tags.md#bodywrapper)***, ***[paramInstance](../parameter_map.md#parametermap)***) | To update a specific tag. |
| deleteTag(id) | To delete a specific tag from the module. |
| mergeTags(id, ***[request](tags.md#mergewrapper)***) | To merge two tags. |
| addTagsToRecord(recordId, moduleAPIName, ***[paramInstance](../parameter_map.md#parametermap)***) | To add tags to a specific record. |
| removeTagsFromRecord(recordId, moduleAPIName, ***[paramInstance](../parameter_map.md#parametermap)***) | To remove tags from a record. |
| addTagsToMultipleRecords(***[paramInstance](../parameter_map.md#parametermap)***, moduleAPIName) | To add tags to multiple records. |
| removeTagsFromMultipleRecords(moduleAPIName, ***[paramInstance](../parameter_map.md#parametermap)***) | To remove tags from multiple records. |
| getRecordCountForTag(id, ***[paramInstance](../parameter_map.md#parametermap)***) | To get the record count for a tag. |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [GetTagsParam](#gettagsparam) |
| [CreateTagsParam](#createtagsparam) |
| [UpdateTagsParam](#updatetagsparam) |
| [UpdateTagParam](#updatetagparam) |
| [AddTagsToRecordParam](#addtagstorecordparam) |
| [RemoveTagsFromRecordParam](#removetagsfromrecordparam) |
| [AddTagsToMultipleRecordsParam](#addtagstomultiplerecordsparam) |
| [RemoveTagsFromMultipleRecordsParam](#removetagsfrommultiplerecordsparam) |
| [GetRecordCountForTagParam](#getrecordcountfortagparam) |
----

[source](../../core/com/zoho/crm/api/tags/tags_operations.js)

## Info

Structure representing additional information about the retrieved data.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCount() | The method to get the value of ***Info Count*** |
| setCount(count) | The method to set the value of ***Info Count*** |
| getAllowedCount() | The method to get the value of ***Info AllowedCount*** |
| setAllowedCount(allowedCount) | The method to set the value of ***Info AllowedCount*** |
----

[source](../../core/com/zoho/crm/api/tags/info.js)

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/tags/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/tags/success_response.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/tags/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/tags/api_exception.js)

## RecordActionWrapper

After a successful **API** request involving record, an instance of [RecordActionWrapper](../../core/com/zoho/crm/api/tags/record_action_wrapper.js) is returned for **POST** operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***RecordActionResponse*** instances. |
| setData(***[data](../../core/com/zoho/crm/api/tags/record_action_response.js)***) | The method to set the list of obtained ***RecordActionResponse*** instances. |
| getWfScheduler() | The method to get the value of ***RecordActionWrapper WfScheduler*** |
| setWfScheduler(wfScheduler) | The method to set the value of ***RecordActionWrapper WfScheduler*** |
| getSuccessCount() | The method to get the value of ***RecordActionWrapper SuccessCount*** |
| setSuccessCount(successCount) | The method to set the value of ***RecordActionWrapper SuccessCount*** |
| getLockedCount() | The method to get the value of ***RecordActionWrapper LockedCount*** |
| setLockedCount(lockedCount) | The method to set the value of ***RecordActionWrapper LockedCount*** |
----

[source](../../core/com/zoho/crm/api/tags/record_action_wrapper.js)

## CountWrapper

After a successful **API** request, an instance of [CountWrapper](../../core/com/zoho/crm/api/tags/count_wrapper.js) is returned for ***Get Record Count For Tag***  operation

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCount() | The method to get the value of ***CountWrapper Count*** |
| setCount(count) | The method to set the value of ***CountWrapper Count*** |
----

[source](../../core/com/zoho/crm/api/tags/count_wrapper.js)

## ConflictWrapper

A structure that contains all possible keys of a single Merge Tag request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getConflictId() | The method to get the value of ***ConflictWrapper ConflictId*** |
| setConflictId(conflictId) | The method to set the value of ***ConflictWrapper ConflictId*** |
----

[source](../../core/com/zoho/crm/api/tags/conflict_wrapper.js)

## GetTagsParam

Contains all possible parameters for the [Get Tags operation](../../core/com/zoho/crm/api/tags/tags_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| MODULE | Represents `module` parameter |
| MY_TAGS | Represents `my_tags` parameter |
----

## CreateTagsParam

Contains all possible parameters for the [Create Tags operation](../../core/com/zoho/crm/api/tags/tags_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| MODULE | Represents `module` parameter |
----

## UpdateTagsParam

Contains all possible parameters for the [Update Tags operation](../../core/com/zoho/crm/api/tags/tags_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| MODULE | Represents `module` parameter |
----

## UpdateTagParam

Contains all possible parameters for the [Update Tag operation](../../core/com/zoho/crm/api/tags/tags_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| MODULE | Represents `module` parameter |
----

## AddTagsToRecordParam

Contains all possible parameters for the [Add Tags To Record operation](../../core/com/zoho/crm/api/tags/tags_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| TAG_NAMES | Represents `tag_names` parameter |
| OVER_WRITE | Represents `over_write` parameter |
----

## RemoveTagsFromRecordParam

Contains all possible parameters for the [Remove Tags From Record operation](../../core/com/zoho/crm/api/tags/tags_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| TAG_NAMES | Represents `tag_names` parameter |
----

## AddTagsToMultipleRecordsParam

Contains all possible parameters for the [Add Tags To Multiple Records operation](../../core/com/zoho/crm/api/tags/tags_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| TAG_NAMES | Represents `tag_names` parameter |
| IDS | Represents `ids` parameter |
| OVER_WRITE | Represents `over_write` parameter |
----

## RemoveTagsFromMultipleRecordsParam

Contains all possible parameters for the [Remove Tags From Multiple Records operation](../../core/com/zoho/crm/api/tags/tags_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| TAG_NAMES | Represents `tag_names` parameter |
| IDS | Represents `ids` parameter |
----

## GetRecordCountForTagParam

Contains all possible parameters for the [Get Record Count For Tag operation](../../core/com/zoho/crm/api/tags/tags_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| MODULE |  Represents `module` parameter |
----
