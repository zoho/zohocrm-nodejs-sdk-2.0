# Layouts

## Package /core/com/zoho/crm/api/layouts

The Zoho CRM [Layouts Meta Data API](https://www.zoho.com/crm/developer/docs/api/layouts-meta.html) reference provides information about the possible operations on **Layouts**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [ResponseWrapper](#responsewrapper) |  |
| [LayoutsOperations](#layoutsoperations) |  |
| [Section](#section) |  |
| [APIException](#apiexception) |  |
| [Layout](#layout) |  |
| [Properties](#properties) |  |

----

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/layouts/response_wrapper.js) is returned for GET operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getLayouts() | The method to get the list of obtained ***Layout*** instances. |
| setLayouts(***[layouts](layouts.md#layout)***) | The method to set the list of obtained ***Layout*** instances. |
----

[source](../../core/com/zoho/crm/api/layouts/response_wrapper.js)

## LayoutsOperations

Contains methods for all possible [Layouts operations](../../core/com/zoho/crm/api/layouts/layouts_operations.js).

### Constructors

| Constructor                                                   | Description                                                                     |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| constructor(module) | Creates a ***LayoutsOperations*** class instance with the ***moduleAPIName***. |
----

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getLayouts()  | To get the details of all the layouts in a module. |
| getLayout(id) | To get the details (metadata) of a specific layout in a module. |
----

[source](../../core/com/zoho/crm/api/layouts/layouts_operations.js)

## Section

Structure that represents the Layout's section.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getDisplayLabel() | The method to get the value of ***Section DisplayLabel*** |
| setDisplayLabel(displayLabel) | The method to set the value of ***Section DisplayLabel*** |
| getSequenceNumber() | The method to get the value of ***Section SequenceNumber*** |
| setSequenceNumber(sequenceNumber) | The method to set the value of ***Section SequenceNumber*** |
| getIssubformsection() | The method to get the value of ***Section Issubformsection*** |
| setIssubformsection(issubformsection) | The method to set the value of ***Section Issubformsection*** |
| getTabTraversal() | The method to get the value of ***Section TabTraversal*** |
| setTabTraversal(tabTraversal) | The method to set the value of ***Section TabTraversal*** |
| getAPIName() | The method to get the value of ***Section APIName*** |
| setAPIName(apiName) | The method to set the value of ***Section APIName*** |
| getColumnCount() | The method to get the value of ***Section ColumnCount*** |
| setColumnCount(columnCount) | The method to set the value of ***Section ColumnCount*** |
| getName() | The method to get the value of ***Section Name*** |
| setName(name) | The method to set the value of ***Section Name*** |
| getGeneratedType() | The method to get the value of ***Section GeneratedType*** |
| setGeneratedType(generatedType) | The method to set the value of ***Section GeneratedType*** |
| getFields() | The method to get the list of obtained ***Field*** instances. |
| setFields(***[fields](fields.md#field)***) | The method to set the list of obtained ***Field*** instances. |
| getProperties() | The method to get the value of ***Section Properties*** |
| setProperties(***[properties](layouts.md#properties)***) | The method to set the value of ***Section Properties*** |
----

[source](../../core/com/zoho/crm/api/layouts/section.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/layouts/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/layouts/api_exception.js)

## Layout

Structure of Zoho CRM [Layout](../../core/com/zoho/crm/api/layouts/layout.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCreatedTime() | The method to get the value of ***Layout CreatedTime*** |
| setCreatedTime(createdTime) | The method to set the value of ***Layout CreatedTime*** |
| getConvertMapping() | The method to get the value of ***Layout ConvertMapping*** |
| setConvertMapping(convertMapping) | The method to set the value of ***Layout ConvertMapping*** |
| getModifiedTime() | The method to get the value of ***Layout ModifiedTime*** |
| setModifiedTime(modifiedTime) | The method to set the value of ***Layout ModifiedTime*** |
| getVisible() | The method to get the value of ***Layout Visible*** |
| setVisible(visible) | The method to set the value of ***Layout Visible*** |
| getCreatedFor() | The method to get the value of ***Layout CreatedFor*** |
| setCreatedFor(***[createdFor](users.md#user)***) | The method to set the value of ***Layout CreatedFor*** |
| getName() | The method to get the value of ***Layout Name*** |
| setName(name) | The method to set the value of ***Layout Name*** |
| getModifiedBy() | The method to get the value of ***Layout ModifiedBy*** |
| setModifiedBy(***[modifiedBy](users.md#user)***) | The method to set the value of ***Layout ModifiedBy*** |
| getProfiles() | The method to get the list of obtained ***Profile*** instances. |
| setProfiles(***[profiles](profiles.md#profile)***) | The method to set the list of obtained ***Profile*** instances. |
| getId() | The method to get the value of ***Layout Id*** |
| setId(id) | The method to set the value of ***Layout Id*** |
| getCreatedBy() | The method to get the value of ***Layout CreatedBy*** |
| setCreatedBy(***[createdBy](users.md#user)***) | The method to set the value of ***Layout CreatedBy*** |
| getSections() | The method to get the list of obtained ***Section*** instances. |
| setSections(***[sections](layouts.md#section)***) | The method to set the list of obtained ***Section*** instances. |
| getStatus() | The method to get the value of ***Layout Status*** |
| setStatus(status) | The method to set the value of ***Layout Status*** |
----

[source](../../core/com/zoho/crm/api/layouts/layout.js)

## Properties

Structure representing the Section's [properties](../../core/com/zoho/crm/api/layouts/properties.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getReorderRows() | The method to get the value of ***Properties ReorderRows*** |
| setReorderRows(reorderRows) | The method to set the value of ***Properties ReorderRows*** |
| getTooltip() | The method to get the value of ***Properties Tooltip*** |
| setTooltip(***[tooltip](fields.md#tooltip)***) | The method to set the value of ***Properties Tooltip*** |
| getMaximumRows() | The method to get the value of ***Properties MaximumRows*** |
| setMaximumRows(maximumRows) | The method to set the value of ***Properties MaximumRows*** |
----

[source](../../core/com/zoho/crm/api/layouts/properties.js)
