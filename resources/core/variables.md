# Variables

## Package /core/com/zoho/crm/api/variables

The Zoho CRM [Variables API](https://www.zoho.com/crm/developer/docs/api/get-variables.html) reference provides information about the possible operations on **Variables**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [ResponseWrapper](#responsewrapper) |  |
| [BodyWrapper](#bodywrapper) |  |
| [APIException](#apiexception) |  |
| [VariablesOperations](#variablesoperations) |  |
| [Variable](#variable) |  |
| [SuccessResponse](#successresponse) |  |
| [ActionWrapper](#actionwrapper) |  |

----

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/variables/response_wrapper.js) is returned for GET operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getVariables() | The method to get the list of obtained ***Variable*** instances. |
| setVariables(***[variables](variables.md#variable)***) | The method to set the list of obtained ***Variable*** instances. |
----

[source](../../core/com/zoho/crm/api/variables/response_wrapper.js)

## BodyWrapper

A structure that contains all possible keys of a single request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getVariables() | The method to get the list of obtained ***Variable*** instances. |
| setVariables(***[variables](variables.md#variable)***) | The method to set the list of obtained ***Variable*** instances. |
----

[source](../../core/com/zoho/crm/api/variables/body_wrapper.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/variables/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/variables/api_exception.js)

## VariablesOperations

Contains methods for all possible [Variables operations](../../core/com/zoho/crm/api/variables/variables_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getVariables(***[paramInstance](../parameter_map.md#parametermap)***) | To get the list of variables available for your organization. |
| createVariables(***[request](variables.md#bodywrapper)***) | To add new variables to your organization. |
| updateVariables(***[request](variables.md#bodywrapper)***) | To update the details of variables. |
| deleteVariables(***[paramInstance](../parameter_map.md#parametermap)***) | To delete multiple variables. |
| getVariableById(id, ***[paramInstance](../parameter_map.md#parametermap)***) | To get the details of a specific variable by its unique ID. |
| updateVariableById(id, ***[request](variables.md#bodywrapper)***) | To update the details of a specific variable by its unique ID. |
| deleteVariable(id) | To delete a specific variable. |
| getVariableForAPIName(apiName, ***[paramInstance](../parameter_map.md#parametermap)***) | To get the details of a variable by its API name. |
| updateVariableByAPIName(apiName, ***[request](variables.md#bodywrapper)***) | To update the details of a variable by its API name. |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [GetVariablesParam](#getvariablesparam) |
| [DeleteVariablesParam](#deletevariablesparam) |
| [GetVariableByIDParam](#getvariablebyidparam) |
| [GetVariableForAPINameParam](#getvariableforapinameparam) |
----

[source](../../core/com/zoho/crm/api/variables/variables_operations.js)

## Variable

Structure of Zoho CRM [Variable](../../core/com/zoho/crm/api/variables/variable.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getAPIName() | The method to get the value of ***Variable APIName*** |
| setAPIName(apiName) | The method to set the value of ***Variable APIName*** |
| getName() | The method to get the value of ***Variable Name*** |
| setName(name) | The method to set the value of ***Variable Name*** |
| getDescription() | The method to get the value of ***Variable Description*** |
| setDescription(description) | The method to set the value of ***Variable Description*** |
| getId() | The method to get the value of ***Variable Id*** |
| setId(id) | The method to set the value of ***Variable Id*** |
| getType() | The method to get the value of ***Variable Type*** |
| setType(type) | The method to set the value of ***Variable Type*** |
| getVariableGroup() | The method to get the value of ***Variable VariableGroup*** |
| setVariableGroup(***[variableGroup](variable_groups.md#variablegroup)***) | The method to set the value of ***Variable VariableGroup*** |
| getValue() | The method to get the value of ***Variable Value*** |
| setValue(value) | The method to set the value of ***Variable Value*** |
----

[source](../../core/com/zoho/crm/api/variables/variable.js)

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/variables/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/variables/success_response.js)

## ActionWrapper

After a successful **API** request, an instance of [ActionWrapper](../../core/com/zoho/crm/api/variables/action_wrapper.js) is returned for **POST**, **PUT** and **DELETE** operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getVariables() | The method to get the list of obtained ***ActionResponse*** instances. |
| setVariables(***[variables](../../core/com/zoho/crm/api/variables/action_response.js)***) | The method to set the list of obtained ***ActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/variables/action_wrapper.js)

## GetVariablesParam

Contains all possible parameters for the [Get Variables operation](../../core/com/zoho/crm/api/variables/variables_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| GROUP | Represents `group` parameter |
----

## DeleteVariablesParam

Contains all possible parameters for the [Delete Variables operation](../../core/com/zoho/crm/api/variables/variables_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IDS | Represents `ids` parameter |
----

## GetVariableByIDParam

Contains all possible parameters for the [Get Variable By ID operation](../../core/com/zoho/crm/api/variables/variables_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| GROUP | Represents `group` parameter |
----

## GetVariableForAPINameParam

Contains all possible parameters for the [Get Variable For APIName operation](../../core/com/zoho/crm/api/variables/variables_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| GROUP | Represents `group` parameter |
----
