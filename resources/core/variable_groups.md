# VariableGroups

## Package /core/com/zoho/crm/api/variable_groups

The Zoho CRM [VariableGroups API](https://www.zoho.com/crm/developer/docs/api/get-variable-group.html) reference provides information about the possible operations on **VariableGroups**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [ResponseWrapper](#responsewrapper) |  |
| [VariableGroup](#variablegroup) |  |
| [VariableGroupsOperations](#variablegroupsoperations) |  |
| [APIException](#apiexception) |  |

----

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/variable_groups/response_wrapper.js) is returned for ***GET*** operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getVariableGroups() | The method to get the list of obtained ***VariableGroup*** instances. |
| setVariableGroups(***[variableGroups](variable_groups.md#variablegroup)***) | The method to set the list of obtained ***VariableGroup*** instances. |
----

[source](../../core/com/zoho/crm/api/variable_groups/response_wrapper.js)

## VariableGroup

Structure of Zoho CRM [VariableGroup](../../core/com/zoho/crm/api/variable_groups/variable_group.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getDisplayLabel() | The method to get the value of ***VariableGroup DisplayLabel*** |
| setDisplayLabel(displayLabel) | The method to set the value of ***VariableGroup DisplayLabel*** |
| getAPIName() | The method to get the value of ***VariableGroup APIName*** |
| setAPIName(apiName) | The method to set the value of ***VariableGroup APIName*** |
| getName() | The method to get the value of ***VariableGroup Name*** |
| setName(name) | The method to set the value of ***VariableGroup Name*** |
| getDescription() | The method to get the value of ***VariableGroup Description*** |
| setDescription(description) | The method to set the value of ***VariableGroup Description*** |
| getId() | The method to get the value of ***VariableGroup Id*** |
| setId(id) | The method to set the value of ***VariableGroup Id*** |
----

[source](../../core/com/zoho/crm/api/variable_groups/variable_group.js)

## VariableGroupsOperations

Contains methods for all possible [VariableGroups operations](../../core/com/zoho/crm/api/variable_groups/variable_groups_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getVariableGroups() | To get the list of all variable groups available for your organization. |
| getVariableGroupById(id) | To get the details of a variable group by its group ID. |
| getVariableGroupByAPIName(apiName) | To get the details of a specific variable group by its API name. |
----

[source](../../core/com/zoho/crm/api/variable_groups/variable_groups_operations.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/variable_groups/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/variable_groups/api_exception.js)
