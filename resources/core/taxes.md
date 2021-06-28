# Taxes

## Package /core/com/zoho/crm/api/taxes

The Zoho CRM [Org Tax API](#Taxes) reference provides information about the possible operations on **Org Taxes**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [TaxesOperations](#taxesoperations) |  |
| [Preference](#preference) |  |
| [ActionWrapper](#actionwrapper) |  |
| [SuccessResponse](#successresponse) |  |
| [APIException](#apiexception) |  |
| [ResponseWrapper](#responsewrapper) |  |
| [BodyWrapper](#bodywrapper) |  |
| [Tax](#tax) |  |

----

## TaxesOperations

Contains methods for all possible [TaxesOperations operations](../../core/com/zoho/crm/api/taxes/taxes_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getTaxes() | To get the taxes of your organization. |
| createTaxes(***[request](taxes.md#bodywrapper)***) | To add taxes to your organization. |
| updateTaxes(***[request](taxes.md#bodywrapper)***) | To update the existing taxes of your organization. |
| deleteTaxes(***[paramInstance](../parameter_map.md#parametermap)***) | To delete multiple taxes from your organization. |
| getTax(id) | To get the details of a specific tax. |
| deleteTax(id) | To delete a specific tax from your organization. |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [DeleteTaxesParam](#deletetaxesparam) |
----

[source](../../core/com/zoho/crm/api/taxes/taxes_operations.js)

## Preference

Structure representing the properties of the Taxes set by the User.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getAutoPopulateTax() | The method to get the value of ***Preference AutoPopulateTax*** |
| setAutoPopulateTax(autoPopulateTax) | The method to set the value of ***Preference AutoPopulateTax*** |
| getModifyTaxRates() | The method to get the value of ***Preference ModifyTaxRates*** |
| setModifyTaxRates(modifyTaxRates) | The method to set the value of ***Preference ModifyTaxRates*** |
----

[source](../../core/com/zoho/crm/api/taxes/preference.js)

## ActionWrapper

After a successful **API** request, an instance of [ActionWrapper](../../core/com/zoho/crm/api/taxes/action_wrapper.js) is returned for **POST**, **PUT** and **DELETE** operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getTaxes() | The method to get the list of obtained ***ActionResponse*** instances. |
| setTaxes(***[taxes](../../core/com/zoho/crm/api/taxes/action_response.js)***) | The method to set the list of obtained ***ActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/taxes/action_wrapper.js)

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/taxes/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/taxes/success_response.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/taxes/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/taxes/api_exception.js)

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/taxes/response_wrapper.js) is returned for ***GET*** operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getTaxes() | The method to get the list of obtained ***Tax*** instances. |
| setTaxes(***[taxes](taxes.md#tax)***) | The method to set the list of obtained ***Tax*** instances. |
| getPreference() | The method to get the value of ***ResponseWrapper Preference*** |
| setPreference(***[preference](taxes.md#preference)***) | The method to set the value of ***ResponseWrapper Preference*** |
----

[source](../../core/com/zoho/crm/api/taxes/response_wrapper.js)

## BodyWrapper

A structure that contains all possible keys of a single request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getTaxes() | The method to get the list of obtained ***Tax*** instances. |
| setTaxes(***[taxes](taxes.md#tax)***) | The method to set the list of obtained ***Tax*** instances. |
----

[source](../../core/com/zoho/crm/api/taxes/body_wrapper.js)

## Tax

Structure of Zoho CRM [Tax](../../core/com/zoho/crm/api/taxes/tax.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getDisplayLabel() | The method to get the value of ***Tax DisplayLabel*** |
| setDisplayLabel(displayLabel) | The method to set the value of ***Tax DisplayLabel*** |
| getName() | The method to get the value of ***Tax Name*** |
| setName(name) | The method to set the value of ***Tax Name*** |
| getId() | The method to get the value of ***Tax Id*** |
| setId(id) | The method to set the value of ***Tax Id*** |
| getValue() | The method to get the value of ***Tax Value*** |
| setValue(value) | The method to set the value of ***Tax Value*** |
| getSequenceNumber() | The method to get the value of ***Tax SequenceNumber*** |
| setSequenceNumber(sequenceNumber) | The method to set the value of ***Tax SequenceNumber*** |
----

[source](../../core/com/zoho/crm/api/taxes/tax.js)

## DeleteTaxesParam

Contains all possible parameters for the [Delete Taxes operation](../../core/com/zoho/crm/api/taxes/taxes_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IDS | Represents `ids` parameter |
----
