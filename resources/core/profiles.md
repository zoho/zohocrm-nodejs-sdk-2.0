# Profiles

## Package /core/com/zoho/crm/api/profiles

The Zoho CRM [Profiles API](https://www.zoho.com/crm/developer/docs/api/get-profiles.html) reference provides information about the possible operations on **Profiles**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [APIException](#apiexception) |  |
| [Category](#category) |  |
| [Profile](#profile) |  |
| [PermissionDetail](#permissiondetail) |  |
| [Section](#section) |  |
| [ProfilesOperations](#profilesoperations) |  |
| [ResponseWrapper](#responsewrapper) |  |

----

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/profiles/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/profiles/api_exception.js)

## Category

Structure representing the category properties of each Section.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getDisplayLabel() | The method to get the value of ***Category DisplayLabel*** |
| setDisplayLabel(displayLabel) | The method to set the value of ***Category DisplayLabel*** |
| getPermissionsDetails() | The method to get the value of ***Category PermissionsDetails*** |
| setPermissionsDetails(permissionsDetails) | The method to set the value of ***Category PermissionsDetails*** |
| getName() | The method to get the value of ***Category Name*** |
| setName(name) | The method to set the value of ***Category Name*** |
----

[source](../../core/com/zoho/crm/api/profiles/category.js)

## Profile

Structure of Zoho CRM [Profile](../../core/com/zoho/crm/api/profiles/profile.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getDisplayLabel() | The method to get the value of ***Profile DisplayLabel*** |
| setDisplayLabel(displayLabel) | The method to set the value of ***Profile DisplayLabel*** |
| getCreatedTime() | The method to get the value of ***Profile CreatedTime*** |
| setCreatedTime(createdTime) | The method to set the value of ***Profile CreatedTime*** |
| getModifiedTime() | The method to get the value of ***Profile ModifiedTime*** |
| setModifiedTime(modifiedTime) | The method to set the value of ***Profile ModifiedTime*** |
| getPermissionsDetails() | The method to get the list of obtained ***PermissionDetail*** instances. |
| setPermissionsDetails(***[permissionsDetails](profiles.md#permissiondetail)***) | The method to set the list of obtained ***PermissionDetail*** instances. |
| getName() | The method to get the value of ***Profile Name*** |
| setName(name) | The method to set the value of ***Profile Name*** |
| getModifiedBy() | The method to get the value of ***Profile ModifiedBy*** |
| setModifiedBy(***[modifiedBy](users.md#user)***) | The method to set the value of ***Profile ModifiedBy*** |
| getDefault() | The method to get the value of ***Profile Default*** |
| setDefault(default) | The method to set the value of ***Profile Default*** |
| getDescription() | The method to get the value of ***Profile Description*** |
| setDescription(description) | The method to set the value of ***Profile Description*** |
| getId() | The method to get the value of ***Profile Id*** |
| setId(id) | The method to set the value of ***Profile Id*** |
| getCategory() | The method to get the value of ***Profile Category*** |
| setCategory(category) | The method to set the value of ***Profile Category*** |
| getCreatedBy() | The method to get the value of ***Profile CreatedBy*** |
| setCreatedBy(***[createdBy](users.md#user)***) | The method to set the value of ***Profile CreatedBy*** |
| getSections() | The method to get the list of obtained ***Section*** instances. |
| setSections(***[sections](profiles.md#section)***) | The method to set the list of obtained ***Section*** instances. |
| getDelete() | The method to get the value of ***Profile Delete*** |
| setDelete(delete) | The method to set the value of ***Profile Delete*** |
----

[source](../../core/com/zoho/crm/api/profiles/profile.js)

## PermissionDetail

Structure representing the Permission properties of the Profile

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getDisplayLabel() | The method to get the value of ***PermissionDetail DisplayLabel*** |
| setDisplayLabel(displayLabel) | The method to set the value of ***PermissionDetail DisplayLabel*** |
| getModule() | The method to get the value of ***PermissionDetail Module*** |
| setModule(module) | The method to set the value of ***PermissionDetail Module*** |
| getName() | The method to get the value of ***PermissionDetail Name*** |
| setName(name) | The method to set the value of ***PermissionDetail Name*** |
| getId() | The method to get the value of ***PermissionDetail Id*** |
| setId(id) | The method to set the value of ***PermissionDetail Id*** |
| getEnabled() | The method to get the value of ***PermissionDetail Enabled*** |
| setEnabled(enabled) | The method to set the value of ***PermissionDetail Enabled*** |
----

[source](../../core/com/zoho/crm/api/profiles/permission_detail.js)

## Section

Structure that represents the Profile's section.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getName() | The method to get the value of ***Section Name*** |
| setName(name) | The method to set the value of ***Section Name*** |
| getCategories() | The method to get the list of obtained ***Category*** instances. |
| setCategories(***[categories](profiles.md#category)***) | The method to set the list of obtained ***Category*** instances. |
----

[source](../../core/com/zoho/crm/api/profiles/section.js)

## ProfilesOperations

Contains methods for all possible [Profiles operations](../../core/com/zoho/crm/api/profiles/profiles_operations.js).

### Constructors

| Constructor                                                   | Description                                                                     |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| constructor(ifModifiedSince=null) | Creates a ***ProfilesOperations*** class instance with the ***ifModifiedSince***. |
----

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getProfiles() | To get the list of profiles available for your organization. |
| getProfile(id) | To get the details of a specific profile. |
----

[source](../../core/com/zoho/crm/api/profiles/profiles_operations.js)

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/profiles/response_wrapper.js) is returned for GET operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getProfiles() | The method to get the list of obtained ***Profile*** instances. |
| setProfiles(***[profiles](profiles.md#profile)***) | The method to set the list of obtained ***Profile*** instances. |
----

[source](../../core/com/zoho/crm/api/profiles/response_wrapper.js)
