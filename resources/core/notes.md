# Notes

## Package /core/com/zoho/crm/api/notes

The Zoho CRM [Notes API](https://www.zoho.com/crm/developer/docs/api/get-notes.html) reference provides information about the possible operations on **Notes**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [ActionWrapper](#actionwrapper) |  |
| [SuccessResponse](#successresponse) |  |
| [BodyWrapper](#bodywrapper) |  |
| [APIException](#apiexception) |  |
| [Info](#info) |  |
| [NotesOperations](#notesoperations) |  |
| [ResponseWrapper](#responsewrapper) |  |
| [Note](#note) |  |

----

## ActionWrapper

After a successful **API** request, an instance of [ActionWrapper](../../core/com/zoho/crm/api/notes/action_wrapper.js)is returned for **POST**, **PUT** and **DELETE** operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***ActionResponse*** instances. |
| setData(***[data](../../core/com/zoho/crm/api/notes/action_response.js)***) | The method to set the list of obtained ***ActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/notes/action_wrapper.js)

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/notes/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/notes/success_response.js)

## BodyWrapper

A structure that contains all possible keys of a single request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***Note*** instances. |
| setData(***[data](notes.md#note)***) | The method to set the list of obtained ***Note*** instances. |
----

[source](../../core/com/zoho/crm/api/notes/body_wrapper.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException]((../../core/com/zoho/crm/api/notes/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/notes/api_exception.js)

## Info

The structure containing the additional properties of Notes.

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

[source](../../core/com/zoho/crm/api/notes/info.js)

## NotesOperations

Contains methods for all possible [Notes operations](../../core/com/zoho/crm/api/notes/notes_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getNotes(***[paramInstance](../parameter_map.md#parametermap)***, ***[headerInstance](../header_map.md#headermap)***) | To get the list of notes of a record. |
| createNotes(***[request](notes.md#bodywrapper)***) | To add new notes to a record. |
| updateNotes(***[request](notes.md#bodywrapper)***) | To update the details of the notes of a record. |
| deleteNotes(***[paramInstance](../parameter_map.md#parametermap)***) | To delete the notes of a record. |
| getNote(id) | To get the details of a specific note. |
| updateNote(id, ***[request](notes.md#bodywrapper)***) | To update the details of an existing note. |
| deleteNote(id) | To delete a specific note. |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [GetNotesParam](#getnotesparam) |
| [GetNotesHeader](#getnotesheader) |
| [DeleteNotesParam](#deletenotesparam) |
| [GetNoteParam](#getnoteparam) |
| [GetNoteHeader](#getnoteheader) |
----

[source](../../core/com/zoho/crm/api/notes/notes_operations.js)

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/notes/response_wrapper.js) is returned for GET operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getData() | The method to get the list of obtained ***Note*** instances. |
| setData(***[data](notes.md#note)***) | The method to set the list of obtained ***Note*** instances. |
| getInfo() | The method to get the value of ***Response Info*** |
| setInfo(***[info](notes.md#info)***) | The method to set the value of ***Response Info*** |
----

[source](../../core/com/zoho/crm/api/notes/response_wrapper.js)

## Note

Structure of Zoho CRM [Note](../../core/com/zoho/crm/api/notes/note.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getOwner() | The method to get the value of ***Note Owner*** |
| setOwner(***[owner](users.md#user)***) | The method to set the value of ***Note Owner*** |
| getModifiedTime() | The method to get the value of ***Note ModifiedTime*** |
| setModifiedTime(modifiedTime) | The method to set the value of ***Note ModifiedTime*** |
| getAttachments() | The method to get the list of obtained ***Attachment*** instances. |
| setAttachments(***[attachments](attachments.md#attachment)***) | The method to set the list of obtained ***Attachment*** instances. |
| getCreatedTime() | The method to get the value of ***Note CreatedTime*** |
| setCreatedTime(createdTime) | The method to set the value of ***Note CreatedTime*** |
| getParentId() | The method to get the value of ***Note ParentId*** |
| setParentId(***[parentId](record.md#record-1)***) | The method to set the value of ***Note ParentId*** |
| getEditable() | The method to get the value of ***Note Editable*** |
| setEditable(editable) | The method to set the value of ***Note Editable*** |
| getSeModule() | The method to get the value of ***Note SeModule*** |
| setSeModule(seModule) | The method to set the value of ***Note SeModule*** |
| getIsSharedToClient() | The method to get the value of ***Note IsSharedToClient*** |
| setIsSharedToClient(isSharedToClient) | The method to set the value of ***Note IsSharedToClient*** |
| getModifiedBy() | The method to get the value of ***Note ModifiedBy*** |
| setModifiedBy(***[modifiedBy](users.md#user)***) | The method to set the value of ***Note ModifiedBy*** |
| getSize() | The method to get the value of ***Note Size*** |
| setSize(size) | The method to set the value of ***Note Size*** |
| getState() | The method to get the value of ***Note State*** |
| setState(state) | The method to set the value of ***Note State*** |
| getVoiceNote() | The method to get the value of ***Note VoiceNote*** |
| setVoiceNote(voiceNote) | The method to set the value of ***Note VoiceNote*** |
| getId() | The method to get the value of ***Note Id*** |
| setId(id) | The method to set the value of ***Note Id*** |
| getCreatedBy() | The method to get the value of ***Note CreatedBy*** |
| setCreatedBy(***[createdBy](users.md#user)***) | The method to set the value of ***Note CreatedBy*** |
| getNoteTitle() | The method to get the value of ***Note NoteTitle*** |
| setNoteTitle(noteTitle) | The method to set the value of ***Note NoteTitle*** |
| getNoteContent() | The method to get the value of ***Note NoteContent*** |
| setNoteContent(noteContent) | The method to set the value of ***Note NoteContent*** |
----

[source](../../core/com/zoho/crm/api/notes/note.js)

## GetNotesParam

Contains all possible parameters for the [Get Notes operation](../../core/com/zoho/crm/api/notes/notes_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| FIELDS | Represents `fields` parameter |
| PAGE | Represents `page` parameter |
| PER_PAGE | Represents `per_page` parameter |
----

## GetNotesHeader

Contains all possible headers for [Get Notes operation](../../core/com/zoho/crm/api/notes/notes_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IF_MODIFIED_SINCE | Represents `If-Modified-Since` header |
----

## DeleteNotesParam

Contains all possible parameters for the [Delete Notes operation](../../core/com/zoho/crm/api/notes/notes_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IDS | Represents `ids` parameter |
----

## GetNoteParam

Contains all possible parameters for the [Get Note operation](../../core/com/zoho/crm/api/notes/notes_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| FIELDS | Represents `fields` parameter |
----

## GetNoteHeader

Contains all possible headers for [Get Note operation](../../core/com/zoho/crm/api/notes/notes_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IF_MODIFIED_SINCE | Represents `If-Modified-Since` header |
----