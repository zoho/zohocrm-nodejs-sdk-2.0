# Modules

## Package /core/com/zoho/crm/api/modules

The Zoho CRM [Modules API](https://www.zoho.com/crm/developer/docs/api/modules-api.html) reference provides information about the possible operations on **Modules**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [ModulesOperations](#modulesoperations) |  |
| [Module](#module) |  |
| [Territory](#territory) |  |
| [APIException](#apiexception) |  |
| [SuccessResponse](#successresponse) |  |
| [ActionWrapper](#actionwrapper) |  |
| [ResponseWrapper](#responsewrapper) |  |
| [Argument](#argument) |  |
| [RelatedListProperties](#relatedlistproperties) |  |
| [BodyWrapper](#bodywrapper) |  |

----

## ModulesOperations

Contains methods for all possible [Modules operations](../../core/com/zoho/crm/api/modules/modules_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getModules(***[headerInstance](../header_map.md#headermap)***) | To get the details of all the modules. |
| getModule(apiName) | To get the details (metadata) of a specific module. |
| updateModuleByAPIName(apiName, ***[request](modules.md#bodywrapper)***) | To update the details of a module by its module API name. |
| updateModuleById(id, ***[request](modules.md#bodywrapper)***) | To update the details of a module by its ID. |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [GetModulesHeader](#getmodulesheader) |
----

[source](../../core/com/zoho/crm/api/modules/modules_operations.js)

## Module

Structure of Zoho CRM [Module](../../core/com/zoho/crm/api/modules/module.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getName() | The method to get the value of ***Module Name*** |
| setName(name) | The method to set the value of ***Module Name*** |
| getGlobalSearchSupported() | The method to get the value of ***Module GlobalSearchSupported*** |
| setGlobalSearchSupported(globalSearchSupported) | The method to set the value of ***Module GlobalSearchSupported*** |
| getKanbanView() | The method to get the value of ***Module KanbanView*** |
| setKanbanView(kanbanView) | The method to set the value of ***Module KanbanView*** |
| getDeletable() | The method to get the value of ***Module Deletable*** |
| setDeletable(deletable) | The method to set the value of ***Module Deletable*** |
| getDescription() | The method to get the value of ***Module Description*** |
| setDescription(description) | The method to set the value of ***Module Description*** |
| getCreatable() | The method to get the value of ***Module Creatable*** |
| setCreatable(creatable) | The method to set the value of ***Module Creatable*** |
| getFilterStatus() | The method to get the value of ***Module FilterStatus*** |
| setFilterStatus(filterStatus) | The method to set the value of ***Module FilterStatus*** |
| getInventoryTemplateSupported() | The method to get the value of ***Module InventoryTemplateSupported*** |
| setInventoryTemplateSupported(inventoryTemplateSupported) | The method to set the value of ***Module InventoryTemplateSupported*** |
| getModifiedTime() | The method to get the value of ***Module ModifiedTime*** |
| setModifiedTime(modifiedTime) | The method to set the value of ***Module ModifiedTime*** |
| getPluralLabel() | The method to get the value of ***Module PluralLabel*** |
| setPluralLabel(pluralLabel) | The method to set the value of ***Module PluralLabel*** |
| getPresenceSubMenu() | The method to get the value of ***Module PresenceSubMenu*** |
| setPresenceSubMenu(presenceSubMenu) | The method to set the value of ***Module PresenceSubMenu*** |
| getTriggersSupported() | The method to get the value of ***Module TriggersSupported*** |
| setTriggersSupported(triggersSupported) | The method to set the value of ***Module TriggersSupported*** |
| getId() | The method to get the value of ***Module Id*** |
| setId(id) | The method to set the value of ***Module Id*** |
| getRelatedListProperties() | The method to get the value of ***Module RelatedListProperties*** |
| setRelatedListProperties(***[relatedListProperties](modules.md#relatedlistproperties)***) | The method to set the value of ***Module RelatedListProperties*** |
| getProperties() | The method to get the value of ***Module Properties*** |
| setProperties(properties) | The method to set the value of ***Module Properties*** |
| getPerPage() | The method to get the value of ***Module PerPage*** |
| setPerPage(perPage) | The method to set the value of ***Module PerPage*** |
| getVisibility() | The method to get the value of ***Module Visibility*** |
| setVisibility(visibility) | The method to set the value of ***Module Visibility*** |
| getConvertable() | The method to get the value of ***Module Convertable*** |
| setConvertable(convertable) | The method to set the value of ***Module Convertable*** |
| getEditable() | The method to get the value of ***Module Editable*** |
| setEditable(editable) | The method to set the value of ***Module Editable*** |
| getEmailtemplateSupport() | The method to get the value of ***Module EmailtemplateSupport*** |
| setEmailtemplateSupport(emailtemplateSupport) | The method to set the value of ***Module EmailtemplateSupport*** |
| getProfiles() | The method to get the list of obtained ***Profile*** instances. |
| setProfiles(***[profiles](profiles.md#profile)***) | The method to set the list of obtained ***Profile*** instances. |
| getFilterSupported() | The method to get the value of ***Module FilterSupported*** |
| setFilterSupported(filterSupported) | The method to set the value of ***Module FilterSupported*** |
| getDisplayField() | The method to get the value of ***Module DisplayField*** |
| setDisplayField(displayField) | The method to set the value of ***Module DisplayField*** |
| getSearchLayoutFields() | The method to get the value of ***Module SearchLayoutFields*** |
| setSearchLayoutFields(searchLayoutFields) | The method to set the value of ***Module SearchLayoutFields*** |
| getKanbanViewSupported() | The method to get the value of ***Module KanbanViewSupported*** |
| setKanbanViewSupported(kanbanViewSupported) | The method to set the value of ***Module KanbanViewSupported*** |
| getShowAsTab() | The method to get the value of ***Module ShowAsTab*** |
| setShowAsTab(showAsTab) | The method to set the value of ***Module ShowAsTab*** |
| getWebLink() | The method to get the value of ***Module WebLink*** |
| setWebLink(webLink) | The method to set the value of ***Module WebLink*** |
| getSequenceNumber() | The method to get the value of ***Module SequenceNumber*** |
| setSequenceNumber(sequenceNumber) | The method to set the value of ***Module SequenceNumber*** |
| getSingularLabel() | The method to get the value of ***Module SingularLabel*** |
| setSingularLabel(singularLabel) | The method to set the value of ***Module SingularLabel*** |
| getViewable() | The method to get the value of ***Module Viewable*** |
| setViewable(viewable) | The method to set the value of ***Module Viewable*** |
| getAPISupported() | The method to get the value of ***Module APISupported*** |
| setAPISupported(apiSupported) | The method to set the value of ***Module APISupported*** |
| getAPIName() | The method to get the value of ***Module APIName*** |
| setAPIName(apiName) | The method to set the value of ***Module APIName*** |
| getQuickCreate() | The method to get the value of ***Module QuickCreate*** |
| setQuickCreate(quickCreate) | The method to set the value of ***Module QuickCreate*** |
| getModifiedBy() | The method to get the value of ***Module ModifiedBy*** |
| setModifiedBy(***[modifiedBy](users.md#user)***) | The method to set the value of ***Module ModifiedBy*** |
| getGeneratedType() | The method to get the value of ***Module GeneratedType*** |
| setGeneratedType(***[generatedType](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Module GeneratedType*** |
| getFeedsRequired() | The method to get the value of ***Module FeedsRequired*** |
| setFeedsRequired(feedsRequired) | The method to set the value of ***Module FeedsRequired*** |
| getScoringSupported() | The method to get the value of ***Module ScoringSupported*** |
| setScoringSupported(scoringSupported) | The method to set the value of ***Module ScoringSupported*** |
| getWebformSupported() | The method to get the value of ***Module WebformSupported*** |
| setWebformSupported(webformSupported) | The method to set the value of ***Module WebformSupported*** |
| getArguments() | The method to get the list of obtained ***Argument*** instances. |
| setArguments(***[arguments](modules.md#argument)***) | The method to set the list of obtained ***Argument*** instances. |
| getModuleName() | The method to get the value of ***Module ModuleName*** |
| setModuleName(moduleName) | The method to set the value of ***Module ModuleName*** |
| getBusinessCardFieldLimit() | The method to get the value of ***Module BusinessCardFieldLimit*** |
| setBusinessCardFieldLimit(businessCardFieldLimit) | The method to set the value of ***Module BusinessCardFieldLimit*** |
| getCustomView() | The method to get the value of ***Module CustomView*** |
| setCustomView(***[customView](custom_views.md#customview)***) | The method to set the value of ***Module CustomView*** |
| getParentModule() | The method to get the value of ***Module ParentModule*** |
| setParentModule(***[parentModule](modules.md#module)***) | The method to set the value of ***Module ParentModule*** |
| getTerritory() | The method to get the value of ***Module Territory*** |
| setTerritory(***[territory](modules.md#territory)***) | The method to set the value of ***Module Territory*** |
----

[source](../../core/com/zoho/crm/api/modules/module.js)

## Territory

Structure representing the properties of the territory, to which the module is associated.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getId() | The method to get the value of ***Territory Id*** |
| setId(id) | The method to set the value of ***Territory Id*** |
| getName() | The method to get the value of ***Territory Name*** |
| setName(name) | The method to set the value of ***Territory Name*** |
| getSubordinates() | The method to get the value of ***Territory Subordinates*** |
| setSubordinates(subordinates) | The method to set the value of ***Territory Subordinates*** |
----

[source](../../core/com/zoho/crm/api/modules/territory.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/modules/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/modules/api_exception.js)

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/modules/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/modules/success_response.js)

## ActionWrapper

After a successful **API** request, an instance of [ActionWrapper](../../core/com/zoho/crm/api/modules/action_wrapper.js) is returned for **POST**, **PUT** and **DELETE** operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getModules() | The method to get the list of obtained ***ActionResponse*** instances. |
| setModules(***[modules](../../core/com/zoho/crm/api/modules/action_response.js)***) | The method to set the list of obtained ***ActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/modules/action_wrapper.js)

## ResponseWrapper

After a successful **API** request, and instance of [ResponseWrapper](../../core/com/zoho/crm/api/modules/response_wrapper.js) is returned for GET operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getModules() | The method to get the list of obtained ***Module*** instances. |
| setModules(***[modules](modules.md#module)***) | The method to set the list of obtained ***Module*** instances. |
----

[source](../../core/com/zoho/crm/api/modules/response_wrapper.js)

## Argument

Structure representing the properties of the Module's arguments.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getName() | The method to get the value of ***Argument Name*** |
| setName(name) | The method to set the value of ***Argument Name*** |
| getValue() | The method to get the value of ***Argument Value*** |
| setValue(value) | The method to set the value of ***Argument Value*** |
----

[source](../../core/com/zoho/crm/api/modules/argument.js)

## RelatedListProperties

Structure representing the properties, when the current module is a related list of another module.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getSortBy() | The method to get the value of ***RelatedListProperties SortBy*** |
| setSortBy(sortBy) | The method to set the value of ***RelatedListProperties SortBy*** |
| getFields() | The method to get the value of ***RelatedListProperties Fields*** |
| setFields(fields) | The method to set the value of ***RelatedListProperties Fields*** |
| getSortOrder() | The method to get the value of ***RelatedListProperties SortOrder*** |
| setSortOrder(sortOrder) | The method to set the value of ***RelatedListProperties SortOrder*** |
----

[source](../../core/com/zoho/crm/api/modules/related_list_properties.js)

## BodyWrapper

A structure that contains all possible keys of a single request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getModules() | The method to get the list of obtained ***Module*** instances. |
| setModules(***[modules](modules.md#module)***) | The method to set the list of obtained ***Module*** instances. |
----

[source](../../core/com/zoho/crm/api/modules/body_wrapper.js)

## GetModulesHeader

Contains all possible headers for [Get Modules operation](../../core/com/zoho/crm/api/modules/modules_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IF_MODIFIED_SINCE | Represents `If-Modified-Since` header |
----
