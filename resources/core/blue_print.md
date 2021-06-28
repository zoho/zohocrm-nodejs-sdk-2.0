# BluePrint

## Package /core/com/zoho/crm/api/blue_print

The Zoho CRM [BluePrint API](https://www.zoho.com/crm/developer/docs/api/blueprint-details.html) reference provides information about the possible operations on **BluePrint**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [Transition](#transition) |  |
| [BluePrint](#blueprint-1) |  |
| [SuccessResponse](#successresponse) |  |
| [BodyWrapper](#bodywrapper) |  |
| [NextTransition](#nexttransition) |  |
| [ProcessInfo](#processinfo) |  |
| [ResponseWrapper](#responsewrapper) |  |
| [BluePrintOperations](#blueprintoperations) |  |
| [APIException](#apiexception) |  |
| [ValidationError](#validationerror) |  |

----

## Transition

Depicts Blueprint's [Transition](../../core/com/zoho/crm/api/blue_print/transition.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getNextTransitions() | The method to get the list of obtained ***NextTransition*** instances. |
| setNextTransitions(***[nextTransitions](blue_print.md#nexttransition)***) | The method to set the list of obtained ***NextTransition*** instances. |
| getPercentPartialSave() | The method to get the value of ***Transition PercentPartialSave*** |
| setPercentPartialSave(percentPartialSave) | The method to set the value of ***Transition PercentPartialSave*** |
| getData() | The method to get the value of ***Transition Data*** |
| setData(***[data](record.md#record-1)***) | The method to set the value of ***Transition Data*** |
| getNextFieldValue() | The method to get the value of ***Transition NextFieldValue*** |
| setNextFieldValue(nextFieldValue) | The method to set the value of ***Transition NextFieldValue*** |
| getName() | The method to get the value of ***Transition Name*** |
| setName(name) | The method to set the value of ***Transition Name*** |
| getCriteriaMatched() | The method to get the value of ***Transition CriteriaMatched*** |
| setCriteriaMatched(criteriaMatched) | The method to set the value of ***Transition CriteriaMatched*** |
| getId() | The method to get the value of ***Transition Id*** |
| setId(id) | The method to set the value of ***Transition Id*** |
| getFields() | The method to get the list of obtained ***Field*** instances. |
| setFields(***[fields](fields.md#field)***) | The method to set the list of obtained ***Field*** instances. |
| getCriteriaMessage() | The method to get the value of ***Transition CriteriaMessage*** |
| setCriteriaMessage(criteriaMessage) | The method to set the value of ***Transition CriteriaMessage*** |
----

[source](../../core/com/zoho/crm/api/blue_print/transition.js)

## BluePrint

Structure of Zoho CRM [BluePrint](../../core/com/zoho/crm/api/blue_print/blue_print.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getTransitionId() | The method to get the value of ***BluePrint TransitionId*** |
| setTransitionId(transitionId) | The method to set the value of ***BluePrint TransitionId*** |
| getData() | The method to get the value of ***BluePrint Data*** |
| setData(***[data](record.md#record-1)***) | The method to set the value of ***BluePrint Data*** |
| getProcessInfo() | The method to get the value of ***BluePrint ProcessInfo*** |
| setProcessInfo(***[processInfo](blue_print.md#processinfo)***) | The method to set the value of ***BluePrint ProcessInfo*** |
| getTransitions() | The method to get the list of obtained ***Transition*** instances. |
| setTransitions(***[transitions](blue_print.md#transition)***) | The method to set the list of obtained ***Transition*** instances. |
----

[source](../../core/com/zoho/crm/api/blue_print/blue_print.js)

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/blue_print/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/blue_print/success_response.js)

## BodyWrapper

A structure that contains all possible keys of a single request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getBlueprint() | The method to get the list of obtained ***BluePrint*** instances. |
| setBlueprint(***[blueprint](blue_print.md#blueprint-1)***) | The method to set the list of obtained ***BluePrint*** instances. |
----

[source](../../core/com/zoho/crm/api/blue_print/body_wrapper.js)

## NextTransition

List of all possible transitions for the record's current state.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getId() | The method to get the value of ***NextTransition Id*** |
| setId(id) | The method to set the value of ***NextTransition Id*** |
| getName() | The method to get the value of ***NextTransition Name*** |
| setName(name) | The method to set the value of ***NextTransition Name*** |
----

[source](../../core/com/zoho/crm/api/blue_print/next_transition.js)

## ProcessInfo

Depicts Blueprint's process information.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getFieldId() | The method to get the value of ***ProcessInfo FieldId*** |
| setFieldId(fieldId) | The method to set the value of ***ProcessInfo FieldId*** |
| getIsContinuous() | The method to get the value of ***ProcessInfo IsContinuous*** |
| setIsContinuous(isContinuous) | The method to set the value of ***ProcessInfo IsContinuous*** |
| getAPIName() | The method to get the value of ***ProcessInfo APIName*** |
| setAPIName(apiName) | The method to set the value of ***ProcessInfo APIName*** |
| getContinuous() | The method to get the value of ***ProcessInfo Continuous*** |
| setContinuous(continuous) | The method to set the value of ***ProcessInfo Continuous*** |
| getFieldLabel() | The method to get the value of ***ProcessInfo FieldLabel*** |
| setFieldLabel(fieldLabel) | The method to set the value of ***ProcessInfo FieldLabel*** |
| getName() | The method to get the value of ***ProcessInfo Name*** |
| setName(name) | The method to set the value of ***ProcessInfo Name*** |
| getColumnName() | The method to get the value of ***ProcessInfo ColumnName*** |
| setColumnName(columnName) | The method to set the value of ***ProcessInfo ColumnName*** |
| getFieldValue() | The method to get the value of ***ProcessInfo FieldValue*** |
| setFieldValue(fieldValue) | The method to set the value of ***ProcessInfo FieldValue*** |
| getId() | The method to get the value of ***ProcessInfo Id*** |
| setId(id) | The method to set the value of ***ProcessInfo Id*** |
| getFieldName() | The method to get the value of ***ProcessInfo FieldName*** |
| setFieldName(fieldName) | The method to set the value of ***ProcessInfo FieldName*** |
----

[source](../../core/com/zoho/crm/api/blue_print/process_info.js)

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/blue_print/response_wrapper.js) is returned for GET operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getBlueprint() | The method to get the ***BluePrint*** instance |
| setBlueprint(***[blueprint](blue_print.md#blueprint-1)***) | The method to set the ***BluePrint*** instance |
----

[source](../../core/com/zoho/crm/api/blue_print/response_wrapper.js)

## BluePrintOperations

Contains methods for all possible [BluePrint operations](../../core/com/zoho/crm/api/blue_print/blue_print_operations.js)

### Constructors

| Constructor                                                   | Description                                                                     |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| constructor(recordId, moduleAPIName) | Creates a ***BluePrintOperations*** class instance with the ***recordId*** and ***moduleAPIName*** .|
----

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getBlueprint() | To get the next available transitions for that record, fields available for each transition, current value of each field, and validation(if any). |
| updateBlueprint(***[request](blue_print.md#bodywrapper)***) | To update a single transition at a time. |
----

[source](../../core/com/zoho/crm/api/blue_print/blue_print_operations.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/blue_print/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/blue_print/api_exception.js)

## ValidationError

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getAPIName() | The method to get the value of ***ValidationError APIName*** |
| setAPIName(apiName) | The method to set the value of ***ValidationError APIName*** |
| getMessage() | The method to get the value of ***ValidationError Message*** |
| setMessage(message) | The method to set the value of ***ValidationError Message*** |
----

[source](../../core/com/zoho/crm/api/blue_print/validation_error.js)
