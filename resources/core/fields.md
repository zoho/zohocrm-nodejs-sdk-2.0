# Fields

## Package /core/com/zoho/crm/api/fields

The Zoho CRM [Fields Meta Data API](https://www.zoho.com/crm/developer/docs/api/field-meta.html) reference provides information about the possible operations on **Fields**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [RelatedDetails](#relateddetails) |  |
| [Field](#field) |  |
| [Unique](#unique) |  |
| [Crypt](#crypt) |  |
| [ViewType](#viewtype) |  |
| [AutoNumber](#autonumber) |  |
| [MultiSelectLookup](#multiselectlookup) |  |
| [PickListValue](#picklistvalue) |  |
| [ResponseWrapper](#responsewrapper) |  |
| [ToolTip](#tooltip) |  |
| [Currency](#currency) |  |
| [Formula](#formula) |  |
| [LookupField](#lookupfield) |  |
| [APIException](#apiexception) |  |
| [Module](#module) |  |
| [AssociationDetails](#associationdetails) |  |
| [FieldsOperations](#fieldsoperations) |  |
| [Private](#private) |  |

----

## RelatedDetails

Structure representing the properties of field's module.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getDisplayLabel() | The method to get the value of ***RelatedDetails DisplayLabel*** |
| setDisplayLabel(displayLabel) | The method to set the value of ***RelatedDetails DisplayLabel*** |
| getAPIName() | The method to get the value of ***RelatedDetails APIName*** |
| setAPIName(apiName) | The method to set the value of ***RelatedDetails APIName*** |
| getModule() | The method to get the value of ***RelatedDetails Module*** |
| setModule(***[module](fields.md#module)***) | The method to set the value of ***RelatedDetails Module*** |
| getId() | The method to get the value of ***RelatedDetails Id*** |
| setId(id) | The method to set the value of ***RelatedDetails Id*** |
| getType() | The method to get the value of ***RelatedDetails Type*** |
| setType(type) | The method to set the value of ***RelatedDetails Type*** |
----

[source](../../core/com/zoho/crm/api/fields/related_details.js)

## Field

Structure of Zoho CRM [Field](../../core/com/zoho/crm/api/fields/field.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getSystemMandatory() | The method to get the value of ***Field SystemMandatory*** |
| setSystemMandatory(systemMandatory) | The method to set the value of ***Field SystemMandatory*** |
| getPrivate() | The method to get the value of ***Field Private*** |
| setPrivate(***[private](#fields.md#private)***) | The method to set the value of ***Field Private*** |
| getWebhook() | The method to get the value of ***Field Webhook*** |
| setWebhook(webhook) | The method to set the value of ***Field Webhook*** |
| getLayouts() | The method to get the value of ***Field Layouts*** |
| setLayouts(***[layouts](layouts.md#layout)***) | The method to set the value of ***Field Layouts*** |
| getContent() | The method to get the value of ***Field Content*** |
| setContent(content) | The method to set the value of ***Field Content*** |
| getColumnName() | The method to get the value of ***Field ColumnName*** |
| setColumnName(columnName) | The method to set the value of ***Field ColumnName*** |
| getType() | The method to get the value of ***Field Type*** |
| setType(type) | The method to set the value of ***Field Type*** |
| getTransitionSequence() | The method to get the value of ***Field TransitionSequence*** |
| setTransitionSequence(transitionSequence) | The method to set the value of ***Field TransitionSequence*** |
| getPersonalityName() | The method to get the value of ***Field PersonalityName*** |
| setPersonalityName(personalityName) | The method to set the value of ***Field PersonalityName*** |
| getMessage() | The method to get the value of ***Field Message*** |
| setMessage(message) | The method to set the value of ***Field Message*** |
| getMandatory() | The method to get the value of ***Field Mandatory*** |
| setMandatory(mandatory) | The method to set the value of ***Field Mandatory*** |
| getCriteria() | The method to get the value of ***Field Criteria*** |
| setCriteria(***[criteria](custom_views.md#criteria)***) | The method to set the value of ***Field Criteria*** |
| getRelatedDetails() | The method to get the value of ***Field RelatedDetails*** |
| setRelatedDetails(***[relatedDetails](fields.md#relateddetails)***) | The method to set the value of ***Field RelatedDetails*** |
| getJsonType() | The method to get the value of ***Field JsonType*** |
| setJsonType(jsonType) | The method to set the value of ***Field JsonType*** |
| getCrypt() | The method to get the value of ***Field Crypt*** |
| setCrypt(***[crypt](fields.md#crypt)***) | The method to set the value of ***Field Crypt*** |
| getFieldLabel() | The method to get the value of ***Field FieldLabel*** |
| setFieldLabel(fieldLabel) | The method to set the value of ***Field FieldLabel*** |
| getTooltip() | The method to get the value of ***Field Tooltip*** |
| setTooltip(***[tooltip](fields.md#tooltip)***) | The method to set the value of ***Field Tooltip*** |
| getCreatedSource() | The method to get the value of ***Field CreatedSource*** |
| setCreatedSource(createdSource) | The method to set the value of ***Field CreatedSource*** |
| getFieldReadOnly() | The method to get the value of ***Field FieldReadOnly*** |
| setFieldReadOnly(fieldReadOnly) | The method to set the value of ***Field FieldReadOnly*** |
| getDisplayLabel() | The method to get the value of ***Field DisplayLabel*** |
| setDisplayLabel(displayLabel) | The method to set the value of ***Field DisplayLabel*** |
| getReadOnly() | The method to get the value of ***Field ReadOnly*** |
| setReadOnly(readOnly) | The method to set the value of ***Field ReadOnly*** |
| getAssociationDetails() | The method to get the value of ***Field AssociationDetails*** |
| setAssociationDetails(***[associationDetails](fields.md#associationdetails)***) | The method to set the value of ***Field AssociationDetails*** |
| getQuickSequenceNumber() | The method to get the value of ***Field QuickSequenceNumber*** |
| setQuickSequenceNumber(quickSequenceNumber) | The method to set the value of ***Field QuickSequenceNumber*** |
| getBusinesscardSupported() | The method to get the value of ***Field BusinesscardSupported*** |
| setBusinesscardSupported(businesscardSupported) | The method to set the value of ***Field BusinesscardSupported*** |
| getMultiModuleLookup() | The method to get the value of ***Field MultiModuleLookup*** |
| setMultiModuleLookup(multiModuleLookup) | The method to set the value of ***Field MultiModuleLookup*** |
| getCurrency() | The method to get the value of ***Field Currency*** |
| setCurrency(***[currency](fields.md#currency)***) | The method to set the value of ***Field Currency*** |
| getId() | The method to get the value of ***Field Id*** |
| setId(id) | The method to set the value of ***Field Id*** |
| getCustomField() | The method to get the value of ***Field CustomField*** |
| setCustomField(customField) | The method to set the value of ***Field CustomField*** |
| getLookup() | The method to get the value of ***Field Lookup*** |
| setLookup(***[lookup](fields.md#module)***) | The method to set the value of ***Field Lookup*** |
| getVisible() | The method to get the value of ***Field Visible*** |
| setVisible(visible) | The method to set the value of ***Field Visible*** |
| getLength() | The method to get the value of ***Field Length*** |
| setLength(length) | The method to set the value of ***Field Length*** |
| getViewType() | The method to get the value of ***Field ViewType*** |
| setViewType(***[viewType](fields.md#viewtype)***) | The method to set the value of ***Field ViewType*** |
| getSubform() | The method to get the value of ***Field Subform*** |
| setSubform(***[subform](fields.md#module)***) | The method to set the value of ***Field Subform*** |
| getAPIName() | The method to get the value of ***Field APIName*** |
| setAPIName(apiName) | The method to set the value of ***Field APIName*** |
| getUnique() | The method to get the value of ***Field Unique*** |
| setUnique(***[unique](fields.md#unique)***) | The method to set the value of ***Field Unique*** |
| getHistoryTracking() | The method to get the value of ***Field HistoryTracking*** |
| setHistoryTracking(historyTracking) | The method to set the value of ***Field HistoryTracking*** |
| getDataType() | The method to get the value of ***Field DataType*** |
| setDataType(dataType) | The method to set the value of ***Field DataType*** |
| getFormula() | The method to get the value of ***Field Formula*** |
| setFormula(***[formula](fields.md#formula)***) | The method to set the value of ***Field Formula*** |
| getDecimalPlace() | The method to get the value of ***Field DecimalPlace*** |
| setDecimalPlace(decimalPlace) | The method to set the value of ***Field DecimalPlace*** |
| getMassUpdate() | The method to get the value of ***Field MassUpdate*** |
| setMassUpdate(massUpdate) | The method to set the value of ***Field MassUpdate*** |
| getBlueprintSupported() | The method to get the value of ***Field BlueprintSupported*** |
| setBlueprintSupported(blueprintSupported) | The method to set the value of ***Field BlueprintSupported*** |
| getMultiselectlookup() | The method to get the value of ***Field Multiselectlookup*** |
| setMultiselectlookup(***[multiselectlookup](fields.md#multiselectlookup)***) | The method to set the value of ***Field Multiselectlookup*** |
| getPickListValues() | The method to get the list of obtained ***PickListValue*** instances. |
| setPickListValues(***[pickListValues](fields.md#picklistvalue)***) | The method to set the list of obtained ***PickListValue*** instances. |
| getAutoNumber() | The method to get the value of ***Field AutoNumber*** |
| setAutoNumber(***[autoNumber](fields.md#autonumber)***) | The method to set the value of ***Field AutoNumber*** |
| getDefaultValue() | The method to get the value of ***Field DefaultValue*** |
| setDefaultValue(defaultValue) | The method to set the value of ***Field DefaultValue*** |
| getSectionId() | The method to get the value of ***Field SectionId*** |
| setSectionId(sectionId) | The method to set the value of ***Field SectionId*** |
| getValidationRule() | The method to get the value of ***Field ValidationRule*** |
| setValidationRule(validationRule) | The method to set the value of ***Field ValidationRule*** |
| getConvertMapping() | The method to get the value of ***Field ConvertMapping*** |
| setConvertMapping(convertMapping) | The method to set the value of ***Field ConvertMapping*** |
----

[source](../../core/com/zoho/crm/api/fields/field.js)

## Unique

Structure representing the field's properties, if the field is unique.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCasesensitive() | The method to get the value of ***Unique Casesensitive*** |
| setCasesensitive(casesensitive) | The method to set the value of ***Unique Casesensitive*** |
----

[source](../../core/com/zoho/crm/api/fields/unique.js)

## Crypt

Structure representing the properties of an encrypted field.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getMode() | The method to get the value of ***Crypt Mode*** |
| setMode(mode) | The method to set the value of ***Crypt Mode*** |
| getColumn() | The method to get the value of ***Crypt Column*** |
| setColumn(column) | The method to set the value of ***Crypt Column*** |
| getEncfldids() | The method to get the value of ***Crypt Encfldids*** |
| setEncfldids(encfldids) | The method to set the value of ***Crypt Encfldids*** |
| getNotify() | The method to get the value of ***Crypt Notify*** |
| setNotify(notify) | The method to set the value of ***Crypt Notify*** |
| getTable() | The method to get the value of ***Crypt Table*** |
| setTable(table) | The method to set the value of ***Crypt Table*** |
| getStatus() | The method to get the value of ***Crypt Status*** |
| setStatus(status) | The method to set the value of ***Crypt Status*** |
----

[source](../../core/com/zoho/crm/api/fields/crypt.js)

## ViewType

Structure representing the properties of the field's [ViewType](../../core/com/zoho/crm/api/fields/view_type.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getView() | The method to get the value of ***ViewType View*** |
| setView(view) | The method to set the value of ***ViewType View*** |
| getEdit() | The method to get the value of ***ViewType Edit*** |
| setEdit(edit) | The method to set the value of ***ViewType Edit*** |
| getCreate() | The method to get the value of ***ViewType Create*** |
| setCreate(create) | The method to set the value of ***ViewType Create*** |
| getQuickCreate() | The method to get the value of ***ViewType QuickCreate*** |
| setQuickCreate(quickCreate) | The method to set the value of ***ViewType QuickCreate*** |
----

[source](../../core/com/zoho/crm/api/fields/view_type.js)

## AutoNumber

Structure representing the properties of an [auto-number](../../core/com/zoho/crm/api/fields/auto_number.js) field.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getPrefix() | The method to get the value of ***AutoNumber Prefix*** |
| setPrefix(prefix) | The method to set the value of ***AutoNumber Prefix*** |
| getSuffix() | The method to get the value of ***AutoNumber Suffix*** |
| setSuffix(suffix) | The method to set the value of ***AutoNumber Suffix*** |
| getStartNumber() | The method to get the value of ***AutoNumber StartNumber*** |
| setStartNumber(startNumber) | The method to set the value of ***AutoNumber StartNumber*** |
----

[source](../../core/com/zoho/crm/api/fields/auto_number.js)

## MultiSelectLookup

Structure representing the properties of a [MultiSelectLookup](../../core/com/zoho/crm/api/fields/multi_select_lookup.js) field.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getDisplayLabel() | The method to get the value of ***MultiSelectLookup DisplayLabel*** |
| setDisplayLabel(displayLabel) | The method to set the value of ***MultiSelectLookup DisplayLabel*** |
| getLinkingModule() | The method to get the value of ***MultiSelectLookup LinkingModule*** |
| setLinkingModule(linkingModule) | The method to set the value of ***MultiSelectLookup LinkingModule*** |
| getLookupApiname() | The method to get the value of ***MultiSelectLookup LookupApiname*** |
| setLookupApiname(lookupApiname) | The method to set the value of ***MultiSelectLookup LookupApiname*** |
| getAPIName() | The method to get the value of ***MultiSelectLookup APIName*** |
| setAPIName(apiName) | The method to set the value of ***MultiSelectLookup APIName*** |
| getConnectedlookupApiname() | The method to get the value of ***MultiSelectLookup ConnectedlookupApiname*** |
| setConnectedlookupApiname(connectedlookupApiname) | The method to set the value of ***MultiSelectLookup ConnectedlookupApiname*** |
| getId() | The method to get the value of ***MultiSelectLookup Id*** |
| setId(id) | The method to set the value of ***MultiSelectLookup Id*** |
----

[source](../../core/com/zoho/crm/api/fields/multi_select_lookup.js)

## PickListValue

Structure representing the properties of each option in a PickList field

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getDisplayValue() | The method to get the value of ***PickListValue DisplayValue*** |
| setDisplayValue(displayValue) | The method to set the value of ***PickListValue DisplayValue*** |
| getSequenceNumber() | The method to get the value of ***PickListValue SequenceNumber*** |
| setSequenceNumber(sequenceNumber) | The method to set the value of ***PickListValue SequenceNumber*** |
| getExpectedDataType() | The method to get the value of ***PickListValue ExpectedDataType*** |
| setExpectedDataType(expectedDataType) | The method to set the value of ***PickListValue ExpectedDataType*** |
| getMaps() | The method to get the list of obtained ***Object*** instances. |
| setMaps(maps) | The method to set the list of obtained ***Object*** instances. |
| getActualValue() | The method to get the value of ***PickListValue ActualValue*** |
| setActualValue(actualValue) | The method to set the value of ***PickListValue ActualValue*** |
| getSysRefName() | The method to get the value of ***PickListValue SysRefName*** |
| setSysRefName(sysRefName) | The method to set the value of ***PickListValue SysRefName*** |
| getType() | The method to get the value of ***PickListValue Type*** |
| setType(type) | The method to set the value of ***PickListValue Type*** |
----

[source](../../core/com/zoho/crm/api/fields/pick_list_value.js)

## ResponseWrapper

After a successful **API** request, and instance of [ResponseWrapper](../../core/com/zoho/crm/api/fields/response_wrapper.js) is returned for GET operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getFields() | The method to get the list of obtained ***Field*** instances. |
| setFields(***[fields](fields.md#field)***) | The method to set the list of obtained ***Field*** instances. |
----

[source](../../core/com/zoho/crm/api/fields/response_wrapper.js)

## ToolTip

Structure representing the properties of the field's tool tip.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getName() | The method to get the value of ***ToolTip Name*** |
| setName(name) | The method to set the value of ***ToolTip Name*** |
| getValue() | The method to get the value of ***ToolTip Value*** |
| setValue(value) | The method to set the value of ***ToolTip Value*** |
----

[source](../../core/com/zoho/crm/api/fields/tool_tip.js)

## Currency

Structure representing the properties of a [currency](../../core/com/zoho/crm/api/fields/currency.js) field.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getRoundingOption() | The method to get the value of ***Currency RoundingOption*** |
| setRoundingOption(roundingOption) | The method to set the value of ***Currency RoundingOption*** |
| getPrecision() | The method to get the value of ***Currency Precision*** |
| setPrecision(precision) | The method to set the value of ***Currency Precision*** |
----

[source](../../core/com/zoho/crm/api/fields/currency.js)

## Formula

Structure representing the properties of a [formula](../../core/com/zoho/crm/api/fields/formula.js) field.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getReturnType() | The method to get the value of ***Formula ReturnType*** |
| setReturnType(returnType) | The method to set the value of ***Formula ReturnType*** |
| getExpression() | The method to get the value of ***Formula Expression*** |
| setExpression(expression) | The method to set the value of ***Formula Expression*** |
----

[source](../../core/com/zoho/crm/api/fields/formula.js)

## LookupField

Structure containing property of a referred field.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getId() | The method to get the value of ***LookupField Id*** |
| setId(id) | The method to set the value of ***LookupField Id*** |
| getName() | The method to get the value of ***LookupField Name*** |
| setName(name) | The method to set the value of ***LookupField Name*** |
----

[source](../../core/com/zoho/crm/api/fields/lookup_field.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/fields/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/fields/api_exception.js)

## Module

Structure representing the properties of the referred [Module](../../core/com/zoho/crm/api/fields/module.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getLayout() | The method to get the value of ***Module Layout*** |
| setLayout(***[layout](layouts.md#layout)***) | The method to set the value of ***Module Layout*** |
| getDisplayLabel() | The method to get the value of ***Module DisplayLabel*** |
| setDisplayLabel(displayLabel) | The method to set the value of ***Module DisplayLabel*** |
| getAPIName() | The method to get the value of ***Module APIName*** |
| setAPIName(apiName) | The method to set the value of ***Module APIName*** |
| getModule() | The method to get the value of ***Module Module*** |
| setModule(module) | The method to set the value of ***Module Module*** |
| getId() | The method to get the value of ***Module Id*** |
| setId(id) | The method to set the value of ***Module Id*** |
| getModuleName() | The method to get the value of ***Module ModuleName*** |
| setModuleName(moduleName) | The method to set the value of ***Module ModuleName*** |
----

[source](../../core/com/zoho/crm/api/fields/module.js)

## AssociationDetails

Structure representing the Field's association details.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getLookupField() | The method to get the value of ***AssociationDetails LookupField*** |
| setLookupField(***[lookupField](fields.md#lookupfield)***) | The method to set the value of ***AssociationDetails LookupField*** |
| getRelatedField() | The method to get the value of ***AssociationDetails RelatedField*** |
| setRelatedField(***[relatedField](fields.md#lookupfield)***) | The method to set the value of ***AssociationDetails RelatedField*** |
----

[source](../../core/com/zoho/crm/api/fields/association_details.js)

## FieldsOperations

Contains methods for all possible [Fields operations](../../core/com/zoho/crm/api/fields/fields_operations.js).

### Constructors

| Constructor                                                   | Description                                                                     |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| constructor(module) |  Creates a ***FieldsOperations*** class instance with the ***module***.|
----

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getFields(***[paramInstance](../parameter_map.md#parametermap)***) | To get the meta details of all fields in a module. |
| getField(id) | To get the meta details of specific field in a module. |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [GetFieldsParam](#getfieldsparam) |
----

[source](../../core/com/zoho/crm/api/fields/fields_operations.js)

## Private

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getRestricted() | The method to get the value of ***Private Restricted*** |
| setRestricted(restricted) | The method to set the value of ***Private Restricted*** |
| getExport() | The method to get the value of ***Private Export*** |
| setExport(export1) | The method to set the value of ***Private Export*** |
| getType() | The method to get the value of ***Private Type*** |
| setType(type) | The method to set the value of ***Private Type*** |
----

[source](../../core/com/zoho/crm/api/fields/private.js)

## GetFieldsParam

Contains all possible parameters for the [Get Fields operation](../../core/com/zoho/crm/api/fields/fields_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| TYPE | Represents `type` parameter |
----
