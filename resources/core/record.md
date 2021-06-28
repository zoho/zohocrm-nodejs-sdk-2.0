# Record

## Package /core/com/zoho/crm/api/record

The Zoho CRM [Records API](https://www.zoho.com/crm/developer/docs/api/get-records.html) reference provides information about the possible operations on **Records**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [ResponseWrapper](#responsewrapper) |  |
| [SuccessResponse](#successresponse) |  |
| [ConvertActionWrapper](#convertactionwrapper) |  |
| [MassUpdateBodyWrapper](#massupdatebodywrapper) |  |
| [APIException](#apiexception) |  |
| [Territory](#territory) |  |
| [SuccessfulConvert](#successfulconvert) |  |
| [LeadConverter](#leadconverter) |  |
| [BodyWrapper](#bodywrapper) |  |
| [Criteria](#criteria) |  |
| [MassUpdateActionWrapper](#massupdateactionwrapper) |  |
| [Info](#info) |  |
| [FileBodyWrapper](#filebodywrapper) |  |
| [InventoryLineItems](#inventorylineitems) | [Record](record.md#record-1) |
| [RecordOperations](#recordoperations) |  |
| [MassUpdate](#massupdate) |  |
| [Field](#field) |  |
| [ActionWrapper](#actionwrapper) |  |
| [Record](#record-1) |  |
| [RemindAt](#remindat) |  |
| [Participants](#participants) | [Record](record.md#record-1) |
| [ConvertBodyWrapper](#convertbodywrapper) |  |
| [MassUpdateResponseWrapper](#massupdateresponsewrapper) |  |
| [FileDetails](#filedetails) |  |
| [Options](#options) |  |
| [Reminder](#reminder) |  |
| [DeletedRecordsWrapper](#deletedrecordswrapper) |  |
| [DeletedRecord](#deletedrecord) |  |
| [LineTax](#linetax) |  |
| [RecurringActivity](#recurringactivity) |  |
| [LineItemProduct](#lineitemproduct) | [Record](record.md#record-1) |
| [Comment](#comment) |  |
| [MassUpdateSuccessResponse](#massupdatesuccessresponse) |  |
| [PricingDetails](#pricingdetails) | [Record](record.md#record-1) |
| [Consent](#consent) | [Record](record.md#record-1) |

----

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/record/response_wrapper.js) is returned for GET operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***Record*** instances. |
| setData(***[data](record.md#record-1)***) | The method to set the list of obtained ***Record*** instances. |
| getInfo() | The method to get the value of ***Response Info*** |
| setInfo(***[info](record.md#info)***) | The method to set the value of ***Response Info*** |
----

[source](../../core/com/zoho/crm/api/record/response_wrapper.js)

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/record/success_response.js) is returned.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getStatus() | The method to get the value of ***Status*** key in  the **API** response |
| setStatus(***[status](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Status*** key in  the **API** response |
| getCode() | The method to get the value of ***Code*** key in  the **API** response |
| setCode(***[code](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Code*** key in  the **API** response |
| getDuplicateField() | The method to get the value of ***DuplicateField*** key in  the **API** response |
| setDuplicateField(duplicateField) | The method to set the value of ***DuplicateField*** key in  the **API** response |
| getAction() | The method to get the value of ***Action*** key in  the **API** response |
| setAction(***[action](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Action*** key in  the **API** response |
| getMessage() | The method to get the value of ***Message*** key in  the **API** response |
| setMessage(***[message](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Message*** key in  the **API** response |
| getDetails() | The method to get the value of ***Details*** key in  the **API** response |
| setDetails(details) | The method to set the value of ***Details*** key in  the **API** response |
----

[source](../../core/com/zoho/crm/api/record/success_response.js)

## ConvertActionWrapper

After a successful Convert Lead request, an instance of [ConvertActionWrapper](../../core/com/zoho/crm/api/record/convert_action_wrapper.js) is returned.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***ConvertActionResponse*** instances. |
| setData(***[data](../../core/com/zoho/crm/api/record/convert_action_response.js)***) | The method to set the list of obtained ***ConvertActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/record/convert_action_wrapper.js)

## MassUpdateBodyWrapper

A structure that contains all possible keys of a single MassUpdate request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***Record*** instances. |
| setData(***[data](record.md#record-1)***) | The method to set the list of obtained ***Record*** instances. |
| getCvid() | The method to get the value of ***MassUpdateBodyWrapper Cvid*** |
| setCvid(cvid) | The method to set the value of ***MassUpdateBodyWrapper Cvid*** |
| getIds() | The method to get the list of obtained ***Long*** instances. |
| setIds(ids) | The method to set the list of obtained ***Long*** instances. |
| getTerritory() | The method to get the value of ***MassUpdateBodyWrapper Territory*** |
| setTerritory(***[territory](record.md#territory)***) | The method to set the value of ***MassUpdateBodyWrapper Territory*** |
| getOverWrite() | The method to get the value of ***MassUpdateBodyWrapper OverWrite*** |
| setOverWrite(overWrite) | The method to set the value of ***MassUpdateBodyWrapper OverWrite*** |
| getCriteria() | The method to get the list of obtained ***Criteria*** instances. |
| setCriteria(***[criteria](record.md#criteria)***) | The method to set the list of obtained ***Criteria*** instances. |
----

[source](../../core/com/zoho/crm/api/record/mass_update_body_wrapper.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/record/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/record/api_exception.js)

## Territory

Structure representing the properties of the territory the user is associated with.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getId() | The method to get the value of ***Territory Id*** |
| setId(id) | The method to set the value of ***Territory Id*** |
| getIncludeChild() | The method to get the value of ***Territory IncludeChild*** |
| setIncludeChild(includeChild) | The method to set the value of ***Territory IncludeChild*** |
----

[source](../../core/com/zoho/crm/api/record/territory.js)

## SuccessfulConvert

After a successful Convert Lead operation, an instance of [SuccessfulConvert](../../core/com/zoho/crm/api/record/successful_convert.js) is returned.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getContacts() | The method to get the value of ***SuccessfulConvert Contacts*** |
| setContacts(contacts) | The method to set the value of ***SuccessfulConvert Contacts*** |
| getDeals() | The method to get the value of ***SuccessfulConvert Deals*** |
| setDeals(deals) | The method to set the value of ***SuccessfulConvert Deals*** |
| getAccounts() | The method to get the value of ***SuccessfulConvert Accounts*** |
| setAccounts(accounts) | The method to set the value of ***SuccessfulConvert Accounts*** |
----

[source](../../core/com/zoho/crm/api/record/successful_convert.js)

## LeadConverter

Structure that contains all possible keys for the Convert Lead Operation.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getOverwrite() | The method to get the value of ***LeadConverter Overwrite*** |
| setOverwrite(overwrite) | The method to set the value of ***LeadConverter Overwrite*** |
| getNotifyLeadOwner() | The method to get the value of ***LeadConverter NotifyLeadOwner*** |
| setNotifyLeadOwner(notifyLeadOwner) | The method to set the value of ***LeadConverter NotifyLeadOwner*** |
| getNotifyNewEntityOwner() | The method to get the value of ***LeadConverter NotifyNewEntityOwner*** |
| setNotifyNewEntityOwner(notifyNewEntityOwner) | The method to set the value of ***LeadConverter NotifyNewEntityOwner*** |
| getAccounts() | The method to get the value of ***LeadConverter Accounts*** |
| setAccounts(accounts) | The method to set the value of ***LeadConverter Accounts*** |
| getContacts() | The method to get the value of ***LeadConverter Contacts*** |
| setContacts(contacts) | The method to set the value of ***LeadConverter Contacts*** |
| getAssignTo() | The method to get the value of ***LeadConverter AssignTo*** |
| setAssignTo(assignTo) | The method to set the value of ***LeadConverter AssignTo*** |
| getDeals() | The method to get the value of ***LeadConverter Deals*** |
| setDeals(***[deals](record.md#record-1)***) | The method to set the value of ***LeadConverter Deals*** |
----

[source](../../core/com/zoho/crm/api/record/lead_converter.js)

## BodyWrapper

A structure that contains all possible keys of a single request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***Record*** instances. |
| setData(***[data](record.md#record-1)***) | The method to set the list of obtained ***Record*** instances. |
| getTrigger() | The method to get the value of ***Request Body Trigger***  |
| setTrigger(trigger) | The method to set the value of ***Request Body Trigger*** |
| getProcess() | The method to get the value of ***Request Body Process*** |
| setProcess(process) | The method to set the value of ***Request Body Process*** |
| getDuplicateCheckFields() | The method to get the value of ***Request Body DuplicateCheckFields*** |
| setDuplicateCheckFields(duplicateCheckFields) | The method to set the value of ***Request Body DuplicateCheckFields*** |
| getWfTrigger() | The method to get the value of ***BodyWrapper WfTrigger*** |
| setWfTrigger(wfTrigger) | The method to set the value of ***BodyWrapper WfTrigger*** |
| getLarId() | The method to get the value of ***BodyWrapper LarId*** |
| setLarId(larId) | The method to set the value of ***BodyWrapper LarId*** |
----

[source](../../core/com/zoho/crm/api/record/body_wrapper.js)

## Criteria

The structure that represents the condition to MassUpdate Records.

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
| setGroup(***[group](record.md#criteria)***) | The method to set the list of obtained ***Criteria*** instances. |
----

[source](../../core/com/zoho/crm/api/record/criteria.js)

## MassUpdateActionWrapper

After a successful **API** request, an instance of [MassUpdateActionWrapper](../../core/com/zoho/crm/api/record/mass_update_action_wrapper.js) is returned for the GET MassUpdate records operation.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***MassUpdateActionResponse*** instances. |
| setData(***[data](../../core/com/zoho/crm/api/record/mass_update_action_response.js)***) | The method to set the list of obtained ***MassUpdateActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/record/mass_update_action_wrapper.js)

## Info

Structure representing additional information about the retrieved data.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getPerPage() | The method to get the value of ***Info PerPage*** |
| setPerPage(perPage) | The method to set the value of ***Info PerPage*** |
| getCount() | The method to get the value of ***Info Count*** |
| setCount(count) | The method to set the value of ***Info Count*** |
| getPage() | The method to get the value of ***Info Page*** |
| setPage(page) | The method to set the value of ***Info Page*** |
| getMoreRecords() | The method to get the value of ***Info MoreRecords*** |
| setMoreRecords(moreRecords) | The method to set the value of ***Info MoreRecords*** |
----

[source](../../core/com/zoho/crm/api/record/info.js)

## FileBodyWrapper

Serves as the request for uploading photo and response for downloading photo operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getFile() | The method to get the value of ***FileBodyWrapper File*** |
| setFile(***[file](../util/stream_wrapper.md#streamwrapper)***) | The method to set the value of ***FileBodyWrapper File*** |
----

[source](../../core/com/zoho/crm/api/record/file_body_wrapper.js)

## InventoryLineItems

Structure representing the properties of LineItems used in Inventory modules.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getProduct() | The method to get the value of ***InventoryLineItems Product*** |
| setProduct(***[product](record.md#lineitemproduct)***) | The method to set the value of ***InventoryLineItems Product*** |
| getQuantity() | The method to get the value of ***InventoryLineItems Quantity*** |
| setQuantity(quantity) | The method to set the value of ***InventoryLineItems Quantity*** |
| getDiscount() | The method to get the value of ***InventoryLineItems Discount*** |
| setDiscount(discount) | The method to set the value of ***InventoryLineItems Discount*** |
| getTotalAfterDiscount() | The method to get the value of ***InventoryLineItems TotalAfterDiscount*** |
| setTotalAfterDiscount(totalAfterDiscount) | The method to set the value of ***InventoryLineItems TotalAfterDiscount*** |
| getNetTotal() | The method to get the value of ***InventoryLineItems NetTotal*** |
| setNetTotal(netTotal) | The method to set the value of ***InventoryLineItems NetTotal*** |
| getBook() | The method to get the value of ***InventoryLineItems Book*** |
| setBook(book) | The method to set the value of ***InventoryLineItems Book*** |
| getTax() | The method to get the value of ***InventoryLineItems Tax*** |
| setTax(tax) | The method to set the value of ***InventoryLineItems Tax*** |
| getListPrice() | The method to get the value of ***InventoryLineItems ListPrice*** |
| setListPrice(listPrice) | The method to set the value of ***InventoryLineItems ListPrice*** |
| getUnitPrice() | The method to get the value of ***InventoryLineItems UnitPrice*** |
| setUnitPrice(unitPrice) | The method to set the value of ***InventoryLineItems UnitPrice*** |
| getQuantityInStock() | The method to get the value of ***InventoryLineItems QuantityInStock*** |
| setQuantityInStock(quantityInStock) | The method to set the value of ***InventoryLineItems QuantityInStock*** |
| getTotal() | The method to get the value of ***InventoryLineItems Total*** |
| setTotal(total) | The method to set the value of ***InventoryLineItems Total*** |
| getProductDescription() | The method to get the value of ***InventoryLineItems ProductDescription*** |
| setProductDescription(productDescription) | The method to set the value of ***InventoryLineItems ProductDescription*** |
| getLineTax() | The method to get the list of obtained ***LineTax*** instances. |
| setLineTax(***[lineTax](record.md#linetax)***) | The method to set the list of obtained ***LineTax*** instances. |
----

[source](../../core/com/zoho/crm/api/record/inventory_line_items.js)

## RecordOperations

Contains methods for all possible [Record operations](../../core/com/zoho/crm/api/record/record_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getRecord(id, moduleAPIName, ***[paramInstance](../parameter_map.md#parametermap)***, ***[headerInstance](../header_map.md#headermap)***) | To get a specific record from a module. |
| updateRecord(id, moduleAPIName, ***[request](record.md#bodywrapper)***) | To update a specific record in a module. |
| deleteRecord(id, moduleAPIName, ***[paramInstance](../parameter_map.md#parametermap)***) | To delete a specific record from a module. |
| getRecords(moduleAPIName, ***[paramInstance](../parameter_map.md#parametermap)***, ***[headerInstance](../header_map.md#headermap)***) | To get all records from a module. |
| createRecords(moduleAPIName, ***[request](record.md#bodywrapper)***) | To insert records in a module. |
| updateRecords(moduleAPIName, ***[request](record.md#bodywrapper)***) | To update records in a module. |
| deleteRecords(moduleAPIName, ***[paramInstance](../parameter_map.md#parametermap)***) | To delete records from a module. |
| upsertRecords(moduleAPIName, ***[request](record.md#bodywrapper)***) | To insert/update records in a module. |
| getDeletedRecords(moduleAPIName, ***[paramInstance](../parameter_map.md#parametermap)***, ***[headerInstance](../header_map.md#headermap)***) | To get the deleted records from a module. |
| searchRecords(moduleAPIName, ***[paramInstance](../parameter_map.md#parametermap)***) | To search for records in a module that match certain criteria, email, phone number, or a word. |
| convertLead(id, ***[request](record.md#convertbodywrapper)***) | To convert records(Leads to Contacts/Deals). |
| getPhoto(id, moduleAPIName) | To get the photo of a record. |
| uploadPhoto(id, moduleAPIName, ***[request](record.md#filebodywrapper)***) | To upload a photo to a record. |
| deletePhoto(id, moduleAPIName) | To delete the photo of a record. |
| massUpdateRecords(***[request](record.md#massupdatebodywrapper)***, moduleAPIName) | To update the same field for multiple records in a module. |
| getMassUpdateStatus(moduleAPIName, ***[paramInstance](../parameter_map.md#parametermap)***) | To get the status of the mass update job scheduled previously. |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [GetRecordParam](#getrecordparam) |
| [GetRecordHeader](#getrecordheader) |
| [DeleteRecordParam](#deleterecordparam) |
| [GetRecordsParam](#getrecordsparam) |
| [GetRecordsHeader](#getrecordsheader) |
| [DeleteRecordsParam](#deleterecordsparam) |
| [GetDeletedRecordsParam](#getdeletedrecordsparam) |
| [GetDeletedRecordsHeader](#getdeletedrecordsheader) |
| [SearchRecordsParam](#searchrecordsparam) |
| [GetMassUpdateStatusParam](#getmassupdatestatusparam) |
----

[source](../../core/com/zoho/crm/api/record/record_operations.js)

## MassUpdate

Structure representing the result of a Mass Update operation.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getStatus() | The method to get the value of ***MassUpdate Status*** |
| setStatus(***[status](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***MassUpdate Status*** |
| getFailedCount() | The method to get the value of ***MassUpdate FailedCount*** |
| setFailedCount(failedCount) | The method to set the value of ***MassUpdate FailedCount*** |
| getUpdatedCount() | The method to get the value of ***MassUpdate UpdatedCount*** |
| setUpdatedCount(updatedCount) | The method to set the value of ***MassUpdate UpdatedCount*** |
| getNotUpdatedCount() | The method to get the value of ***MassUpdate NotUpdatedCount*** |
| setNotUpdatedCount(notUpdatedCount) | The method to set the value of ***MassUpdate NotUpdatedCount*** |
| getTotalCount() | The method to get the value of ***MassUpdate TotalCount*** |
| setTotalCount(totalCount) | The method to set the value of ***MassUpdate TotalCount*** |
----

[source](../../core/com/zoho/crm/api/record/mass_update.js)

## Field

Structure containing the default fields of all the default modules.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getAPIName() | The method to get the value of ***Field APIName*** |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [Products](#products) |
| [Tasks](#tasks) |
| [Vendors](#vendors) |
| [Calls](#calls) |
| [Leads](#leads) |
| [Deals](#deals) |
| [Campaigns](#campaigns) |
| [Quotes](#quotes) |
| [Invoices](#invoices) |
| [Attachments](#attachments) |
| [Price_Books](#price_books) |
| [Sales_Orders](#sales_orders) |
| [Contacts](#contacts) |
| [Solutions](#solutions) |
| [Events](#events) |
| [Purchase_Orders](#purchase_orders) |
| [Accounts](#accounts) |
| [Cases](#cases) |
| [Notes](#notes) |
----

[source](../../core/com/zoho/crm/api/record/field.js)

## ActionWrapper

After a successful **API** request, an instance of [ActionWrapper](../../core/com/zoho/crm/api/record/action_wrapper.js) is returned for **POST**, **PUT** and **DELETE** operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***ActionResponse*** instances. |
| setData(***[data](../../core/com/zoho/crm/api/record/action_response.js)***) | The method to set the list of obtained ***ActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/record/action_wrapper.js)

## Record

Structure of Zoho CRM [Record](../../core/com/zoho/crm/api/record/record.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getId() | The method to get the value of ***Record Id*** |
| setId(id) | The method to set the value of ***Record Id*** |
| getCreatedBy() | The method to get the value of ***Record CreatedBy*** |
| setCreatedBy(***[createdBy](users.md#user)***) | The method to set the value of ***Record CreatedBy*** |
| getCreatedTime() | The method to get the value of ***Record CreatedTime*** |
| setCreatedTime(createdTime) | The method to set the value of ***Record CreatedTime*** |
| getModifiedBy() | The method to get the value of ***Record ModifiedBy*** |
| setModifiedBy(***[modifiedBy](users.md#user)***) | The method to set the value of ***Record ModifiedBy*** |
| getModifiedTime() | The method to get the value of ***Record ModifiedTime*** |
| setModifiedTime(modifiedTime) | The method to set the value of ***Record ModifiedTime*** |
| getTag() | The method to get the list of obtained ***Tag*** instances. |
| setTag(***[tag](tags.md#tag)***) | The method to set the list of obtained ***Tag*** instances. |
| addFieldValue(***[field](record.md#field)***, value) | The method to add data with default fields and values |
| addKeyValue(apiName, value) | The method to add data with field APIName and value |
| getKeyValue(apiName) | The method to obtain the value using Field's APIName |
| getKeyValues() | The method to obtain the field values. |
----

[source](../../core/com/zoho/crm/api/record/record.js)

## RemindAt

Structure representing the properties of the reminder set by the user.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getAlarm() | The method to get the value of ***RemindAt Alarm*** |
| setAlarm(alarm) | The method to set the value of ***RemindAt Alarm*** |
----

[source](../../core/com/zoho/crm/api/record/remind_at.js)

## Participants

Structure representing the properties of a [Participant](../../core/com/zoho/crm/api/record/participants.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getName() | The method to get the value of ***Participants Name*** |
| setName(name) | The method to set the value of ***Participants Name*** |
| getEmail() | The method to get the value of ***Participants Email*** |
| setEmail(email) | The method to set the value of ***Participants Email*** |
| getInvited() | The method to get the value of ***Participants Invited*** |
| setInvited(invited) | The method to set the value of ***Participants Invited*** |
| getType() | The method to get the value of ***Participants Type*** |
| setType(type) | The method to set the value of ***Participants Type*** |
| getParticipant() | The method to get the value of ***Participants Participant*** |
| setParticipant(participant) | The method to set the value of ***Participants Participant*** |
| getStatus() | The method to get the value of ***Participants Status*** |
| setStatus(status) | The method to set the value of ***Participants Status*** |
----

[source](../../core/com/zoho/crm/api/record/participants.js)

## ConvertBodyWrapper

Structure that serves as the request for Lead Convert operation

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***LeadConverter*** instances. |
| setData(***[data](record.md#leadconverter)***) | The method to set the list of obtained ***LeadConverter*** instances. |
----

[source](../../core/com/zoho/crm/api/record/convert_body_wrapper.js)

## MassUpdateResponseWrapper

After a successful **API** request, an instance of [MassUpdateResponseWrapper](../../core/com/zoho/crm/api/record/mass_update_response_wrapper.js) is returned for GET MassUpdate Status operation.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***MassUpdateResponse*** instances. |
| setData(***[data](../../core/com/zoho/crm/api/record/mass_update_response.js)***) | The method to set the list of obtained ***MassUpdateResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/record/mass_update_response_wrapper.js)

## FileDetails

Structure representing the properties of the FileUpload field.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getExtn() | The method to get the value of ***FileDetails Extn*** |
| setExtn(extn) | The method to set the value of ***FileDetails Extn*** |
| getIsPreviewAvailable() | The method to get the value of ***FileDetails IsPreviewAvailable*** |
| setIsPreviewAvailable(isPreviewAvailable) | The method to set the value of ***FileDetails IsPreviewAvailable*** |
| getDownloadUrl() | The method to get the value of ***FileDetails DownloadUrl*** |
| setDownloadUrl(downloadUrl) | The method to set the value of ***FileDetails DownloadUrl*** |
| getDeleteUrl() | The method to get the value of ***FileDetails DeleteUrl*** |
| setDeleteUrl(deleteUrl) | The method to set the value of ***FileDetails DeleteUrl*** |
| getEntityId() | The method to get the value of ***FileDetails EntityId*** |
| setEntityId(entityId) | The method to set the value of ***FileDetails EntityId*** |
| getMode() | The method to get the value of ***FileDetails Mode*** |
| setMode(mode) | The method to set the value of ***FileDetails Mode*** |
| getOriginalSizeByte() | The method to get the value of ***FileDetails OriginalSizeByte*** |
| setOriginalSizeByte(originalSizeByte) | The method to set the value of ***FileDetails OriginalSizeByte*** |
| getPreviewUrl() | The method to get the value of ***FileDetails PreviewUrl*** |
| setPreviewUrl(previewUrl) | The method to set the value of ***FileDetails PreviewUrl*** |
| getFileName() | The method to get the value of ***FileDetails FileName*** |
| setFileName(fileName) | The method to set the value of ***FileDetails FileName*** |
| getFileId() | The method to get the value of ***FileDetails FileId*** |
| setFileId(fileId) | The method to set the value of ***FileDetails FileId*** |
| getAttachmentId() | The method to get the value of ***FileDetails AttachmentId*** |
| setAttachmentId(attachmentId) | The method to set the value of ***FileDetails AttachmentId*** |
| getFileSize() | The method to get the value of ***FileDetails FileSize*** |
| setFileSize(fileSize) | The method to set the value of ***FileDetails FileSize*** |
| getCreatorId() | The method to get the value of ***FileDetails CreatorId*** |
| setCreatorId(creatorId) | The method to set the value of ***FileDetails CreatorId*** |
| getLinkDocs() | The method to get the value of ***FileDetails LinkDocs*** |
| setLinkDocs(linkDocs) | The method to set the value of ***FileDetails LinkDocs*** |
| getDelete() | The method to get the value of ***FileDetails Delete*** |
| setDelete(delete) | The method to set the value of ***FileDetails Delete*** |
----

[source](../../core/com/zoho/crm/api/record/file_details.js)

## Reminder

Structure representing the properties of the reminder set by the user for the Participants

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getPeriod() | The method to get the value of ***Reminder Period*** |
| setPeriod(period) | The method to set the value of ***Reminder Period*** |
| getUnit() | The method to get the value of ***Reminder Unit*** |
| setUnit(unit) | The method to set the value of ***Reminder Unit*** |
----

[source](../../core/com/zoho/crm/api/record/reminder.js)

## DeletedRecordsWrapper

After a successful **API** request, an instance of [DeletedRecordsWrapper](../../core/com/zoho/crm/api/record/deleted_records_wrapper.js) is returned for the GET Deleted Records operation.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***DeletedRecord*** instances. |
| setData(***[data](record.md#deletedrecord)***) | The method to set the list of obtained ***DeletedRecord*** instances. |
| getInfo() | The method to get the value of ***DeletedRecordsWrapper Info*** |
| setInfo(***[info](record.md#info)***) | The method to set the value of ***DeletedRecordsWrapper Info*** |
----

[source](../../core/com/zoho/crm/api/record/deleted_records_wrapper.js)

## DeletedRecord

Structure representing the properties of [DeletedRecord](../../core/com/zoho/crm/api/record/deleted_record.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getDeletedBy() | The method to get the value of ***DeletedRecord DeletedBy*** |
| setDeletedBy(***[deletedBy](users.md#user)***) | The method to set the value of ***DeletedRecord DeletedBy*** |
| getId() | The method to get the value of ***DeletedRecord Id*** |
| setId(id) | The method to set the value of ***DeletedRecord Id*** |
| getDisplayName() | The method to get the value of ***DeletedRecord DisplayName*** |
| setDisplayName(displayName) | The method to set the value of ***DeletedRecord DisplayName*** |
| getType() | The method to get the value of ***DeletedRecord Type*** |
| setType(type) | The method to set the value of ***DeletedRecord Type*** |
| getCreatedBy() | The method to get the value of ***DeletedRecord CreatedBy*** |
| setCreatedBy(***[createdBy](users.md#user)***) | The method to set the value of ***DeletedRecord CreatedBy*** |
| getDeletedTime() | The method to get the value of ***DeletedRecord DeletedTime*** |
| setDeletedTime(deletedTime) | The method to set the value of ***DeletedRecord DeletedTime*** |
----

[source](../../core/com/zoho/crm/api/record/deleted_record.js)

## LineTax

Structure representing the properties of Tax.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getPercentage() | The method to get the value of ***LineTax Percentage*** |
| setPercentage(percentage) | The method to set the value of ***LineTax Percentage*** |
| getName() | The method to get the value of ***LineTax Name*** |
| setName(name) | The method to set the value of ***LineTax Name*** |
| getId() | The method to get the value of ***LineTax Id*** |
| setId(id) | The method to set the value of ***LineTax Id*** |
| getValue() | The method to get the value of ***LineTax Value*** |
| setValue(value) | The method to set the value of ***LineTax Value*** |
----

[source](../../core/com/zoho/crm/api/record/line_tax.js)

## RecurringActivity

Structure representing the properties of a [RecurringActivity](../../core/com/zoho/crm/api/record/recurring_activity.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getRrule() | The method to get the value of ***RecurringActivity Rrule*** |
| setRrule(rrule) | The method to set the value of ***RecurringActivity Rrule*** |
----

[source](../../core/com/zoho/crm/api/record/recurring_activity.js)

## LineItemProduct

Structure representing the properties of Product in Line Items of Inventory modules.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getProductCode() | The method to get the value of ***LineItemProduct ProductCode*** |
| setProductCode(productCode) | The method to set the value of ***LineItemProduct ProductCode*** |
| getCurrency() | The method to get the value of ***LineItemProduct Currency*** |
| setCurrency(currency) | The method to set the value of ***LineItemProduct Currency*** |
| getName() | The method to get the value of ***LineItemProduct Name*** |
| setName(name) | The method to set the value of ***LineItemProduct Name*** |
----

[source](../../core/com/zoho/crm/api/record/line_item_product.js)

## Comment

Structure representing the properties of Comment.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCommentedBy() | The method to get the value of ***Comment CommentedBy*** |
| setCommentedBy(commentedBy) | The method to set the value of ***Comment CommentedBy*** |
| getCommentedTime() | The method to get the value of ***Comment CommentedTime*** |
| setCommentedTime(commentedTime) | The method to set the value of ***Comment CommentedTime*** |
| getCommentContent() | The method to get the value of ***Comment CommentContent*** |
| setCommentContent(commentContent) | The method to set the value of ***Comment CommentContent*** |
| getId() | The method to get the value of ***Comment Id*** |
| setId(id) | The method to set the value of ***Comment Id*** |
----

[source](../../core/com/zoho/crm/api/record/comment.js)

## MassUpdateSuccessResponse

After a successful MassUpdate request, an instance of [MassUpdateSuccessResponse](../../core/com/zoho/crm/api/record/mass_update_success_response.js) is returned.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getStatus() | The method to get the value of ***MassUpdateSuccessResponse Status*** |
| setStatus(***[status](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***MassUpdateSuccessResponse Status*** |
| getCode() | The method to get the value of ***MassUpdateSuccessResponse Code*** |
| setCode(***[code](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***MassUpdateSuccessResponse Code*** |
| getMessage() | The method to get the value of ***MassUpdateSuccessResponse Message*** |
| setMessage(***[message](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***MassUpdateSuccessResponse Message*** |
| getDetails() | The method to get the value of ***MassUpdateSuccessResponse Details*** |
| setDetails(details) | The method to set the value of ***MassUpdateSuccessResponse Details*** |
----

[source](../../core/com/zoho/crm/api/record/mass_update_success_response.js)

## PricingDetails

Structure representing the properties of [PricingDetail](../../core/com/zoho/crm/api/record/pricing_details.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getToRange() | The method to get the value of ***PricingDetails ToRange*** |
| setToRange(toRange) | The method to set the value of ***PricingDetails ToRange*** |
| getDiscount() | The method to get the value of ***PricingDetails Discount*** |
| setDiscount(discount) | The method to set the value of ***PricingDetails Discount*** |
| getFromRange() | The method to get the value of ***PricingDetails FromRange*** |
| setFromRange(fromRange) | The method to set the value of ***PricingDetails FromRange*** |
----

[source](../../core/com/zoho/crm/api/record/pricing_details.js)

## Consent

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getOwner() | The method to get the value of ***Consent Owner*** |
| setOwner(***[owner](users.md#user)***) | The method to set the value of ***Consent Owner*** |
| getContactThroughEmail() | The method to get the value of ***Consent ContactThroughEmail*** |
| setContactThroughEmail(contactThroughEmail) | The method to set the value of ***Consent ContactThroughEmail*** |
| getContactThroughSocial() | The method to get the value of ***Consent ContactThroughSocial*** |
| setContactThroughSocial(contactThroughSocial) | The method to set the value of ***Consent ContactThroughSocial*** |
| getContactThroughSurvey() | The method to get the value of ***Consent ContactThroughSurvey*** |
| setContactThroughSurvey(contactThroughSurvey) | The method to set the value of ***Consent ContactThroughSurvey*** |
| getContactThroughPhone() | The method to get the value of ***Consent ContactThroughPhone*** |
| setContactThroughPhone(contactThroughPhone) | The method to set the value of ***Consent ContactThroughPhone*** |
| getMailSentTime() | The method to get the value of ***Consent MailSentTime*** |
| setMailSentTime(mailSentTime) | The method to set the value of ***Consent MailSentTime*** |
| getConsentDate() | The method to get the value of ***Consent ConsentDate*** |
| setConsentDate(consentDate) | The method to set the value of ***Consent ConsentDate*** |
| getConsentRemarks() | The method to get the value of ***Consent ConsentRemarks*** |
| setConsentRemarks(consentRemarks) | The method to set the value of ***Consent ConsentRemarks*** |
| getConsentThrough() | The method to get the value of ***Consent ConsentThrough*** |
| setConsentThrough(consentThrough) | The method to set the value of ***Consent ConsentThrough*** |
| getDataProcessingBasis() | The method to get the value of ***Consent DataProcessingBasis*** |
| setDataProcessingBasis(dataProcessingBasis) | The method to set the value of ***Consent DataProcessingBasis*** |
----

[source](../../core/com/zoho/crm/api/record/consent.js)

## GetRecordParam

Contains all possible parameters for the [Get Record operation](../../core/com/zoho/crm/api/record/record_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| APPROVED | Represents `approved` parameter |
| CONVERTED | Represents `converted` parameter |
| CVID | Represents `cvid` parameter |
| UID | Represents `uid` parameter |
| FIELDS | Represents `fields` parameter |
| STARTDATETIME | Represents `startDateTime` parameter |
| ENDDATETIME | Represents `endDateTime` parameter |
| TERRITORY_ID | Represents `territory_id` parameter |
| INCLUDE_CHILD | Represents `include_child` parameter |
----

## GetRecordHeader

Contains all possible headers for the [Get Record operation](../../core/com/zoho/crm/api/record/record_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IF_MODIFIED_SINCE | Represents `If-Modified-Since` parameter |
----

## DeleteRecordParam

Contains all possible parameters for the [Delete Record operation](../../core/com/zoho/crm/api/record/record_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| WF_TRIGGER | Represents `wf_trigger` parameter |
----

## GetRecordsParam

Contains all possible parameters for the [Get Records operation](../../core/com/zoho/crm/api/record/record_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| APPROVED | Represents `approved` parameter |
| CONVERTED | Represents `converted` parameter |
| CVID | Represents `cvid` parameter |
| IDS | Represents `ids` parameter |
| UID | Represents `uid` parameter |
| FIELDS | Represents `fields` parameter |
| SORT_BY | Represents `sort_by` parameter |
| SORT_ORDER | Represents `sort_order` parameter |
| PAGE | Represents `page` parameter |
| PER_PAGE | Represents `per_page` parameter |
| STARTDATETIME | Represents `startDateTime` parameter |
| ENDDATETIME | Represents `endDateTime` parameter |
| TERRITORY_ID | Represents `territory_id` parameter |
| INCLUDE_CHILD | Represents `include_child` parameter |
----

## GetRecordsHeader

Contains all possible headers for the [Get Records operation](../../core/com/zoho/crm/api/record/record_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IF_MODIFIED_SINCE | Represents `If-Modified-Since` parameter |
----

## DeleteRecordsParam

Contains all possible parameters for the [Delete Records operation](../../core/com/zoho/crm/api/record/record_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IDS | Represents `ids` parameter |
| WF_TRIGGER | Represents `wf_trigger` parameter |
----

## GetDeletedRecordsParam

Contains all possible parameters for the [Get Deleted Records operation](../../core/com/zoho/crm/api/record/record_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| TYPE | Represents `type` parameter |
| PAGE | Represents `page` parameter |
| PER_PAGE | Represents `per_page` parameter |
----

## GetDeletedRecordsHeader

Contains all possible headers for the [Get Deleted Records operation](../../core/com/zoho/crm/api/record/record_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IF_MODIFIED_SINCE | Represents `If-Modified-Since` parameter |
----

## SearchRecordsParam

Contains all possible parameters for the [Search Records operation](../../core/com/zoho/crm/api/record/record_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| CRITERIA | Represents `criteria` parameter |
| EMAIL | Represents `email` parameter |
| PHONE | Represents `phone` parameter |
| WORD | Represents `word` parameter |
| CONVERTED | Represents `converted` parameter |
| APPROVED | Represents `approved` parameter |
| PAGE | Represents `page` parameter |
| PER_PAGE |  Represents `per_page` parameter |
----

## GetMassUpdateStatusParam

Contains all possible parameters for the [Get MassUpdate Status operation](../../core/com/zoho/crm/api/record/record_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| JOB_ID | Represents `job_id` parameter |
----
