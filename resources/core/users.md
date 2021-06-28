# Users

## Package /core/com/zoho/crm/api/users

The Zoho CRM [Users API](https://www.zoho.com/crm/developer/docs/api/get-users.html) reference provides information about the possible operations on **Users**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [ActionWrapper](#actionwrapper) |  |
| [SuccessResponse](#successresponse) |  |
| [UsersOperations](#usersoperations) |  |
| [ResponseWrapper](#responsewrapper) |  |
| [Territory](#territory) |  |
| [CustomizeInfo](#customizeinfo) |  |
| [Theme](#theme) |  |
| [BodyWrapper](#bodywrapper) |  |
| [Info](#info) |  |
| [Shift](#shift) |  |
| [RequestWrapper](#requestwrapper) |  |
| [User](#user) | [Record](record.md#record-1) |
| [APIException](#apiexception) |  |
| [TabTheme](#tabtheme) |  |

----

## ActionWrapper

After a successful **API** request, an instance of [ActionWrapper](../../core/com/zoho/crm/api/users/action_wrapper.js) is returned for **POST**, **PUT** and **DELETE** operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getUsers() | The method to get the list of obtained ***ActionResponse*** instances. |
| setUsers(***[users](../../core/com/zoho/crm/api/users/action_response.js)***) | The method to set the list of obtained ***ActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/users/action_wrapper.js)

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/users/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/users/success_response.js)

## UsersOperations

Contains methods for all possible [Users operations](../../core/com/zoho/crm/api/users/users_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getUsers(***[paramInstance](../parameter_map.md#parametermap)***, ***[headerInstance](../header_map.md#headermap)***) | To get the list of users in your organization. |
| createUser(***[request](users.md#requestwrapper)***) | To add a user to your organization. |
| updateUsers(***[request](users.md#bodywrapper)***) | To update the existing users of your organization. |
| getUser(id, ***[headerInstance](../header_map.md#headermap)***) | To get the details of a specific user. |
| updateUser(***[request](users.md#bodywrapper)***, id) | To update the details of a specific user. |
| deleteUser(id) | To delete a specific user from your organization. |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [GetUsersParam](#getusersparam) |
| [GetUsersHeader](#getusersheader) |
| [GetUserHeader](#getuserheader) |
----

[source](../../core/com/zoho/crm/api/users/users_operations.js)

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/users/response_wrapper.js) is returned for GET operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getUsers() | The method to get the list of obtained ***User*** instances. |
| setUsers(***[users](users.md#user)***) | The method to set the list of obtained ***User*** instances. |
| getInfo() | The method to get the value of ***Response Info*** |
| setInfo(***[info](users.md#info)***) | The method to set the value of ***Response Info*** |
----

[source](../../core/com/zoho/crm/api/users/response_wrapper.js)

## Territory

Structure representing the properties of the territory, to which the user is associated.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getManager() | The method to get the value of ***Territory Manager*** |
| setManager(manager) | The method to set the value of ***Territory Manager*** |
| getName() | The method to get the value of ***Territory Name*** |
| setName(name) | The method to set the value of ***Territory Name*** |
| getId() | The method to get the value of ***Territory Id*** |
| setId(id) | The method to set the value of ***Territory Id*** |
----

[source](../../core/com/zoho/crm/api/users/territory.js)

## CustomizeInfo

Structure representing the properties of the User's customization information

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getNotesDesc() | The method to get the value of ***CustomizeInfo NotesDesc*** |
| setNotesDesc(notesDesc) | The method to set the value of ***CustomizeInfo NotesDesc*** |
| getShowRightPanel() | The method to get the value of ***CustomizeInfo ShowRightPanel*** |
| setShowRightPanel(showRightPanel) | The method to set the value of ***CustomizeInfo ShowRightPanel*** |
| getBcView() | The method to get the value of ***CustomizeInfo BcView*** |
| setBcView(bcView) | The method to set the value of ***CustomizeInfo BcView*** |
| getShowHome() | The method to get the value of ***CustomizeInfo ShowHome*** |
| setShowHome(showHome) | The method to set the value of ***CustomizeInfo ShowHome*** |
| getShowDetailView() | The method to get the value of ***CustomizeInfo ShowDetailView*** |
| setShowDetailView(showDetailView) | The method to set the value of ***CustomizeInfo ShowDetailView*** |
| getUnpinRecentItem() | The method to get the value of ***CustomizeInfo UnpinRecentItem*** |
| setUnpinRecentItem(unpinRecentItem) | The method to set the value of ***CustomizeInfo UnpinRecentItem*** |
----

[source](../../core/com/zoho/crm/api/users/customize_info.js)

## Theme

Structure representing the user's [Theme](../../core/com/zoho/crm/api/users/theme.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getNormalTab() | The method to get the value of ***Theme NormalTab*** |
| setNormalTab(***[normalTab](users.md#tabtheme)***) | The method to set the value of ***Theme NormalTab*** |
| getSelectedTab() | The method to get the value of ***Theme SelectedTab*** |
| setSelectedTab(***[selectedTab](users.md#tabtheme)***) | The method to set the value of ***Theme SelectedTab*** |
| getNewBackground() | The method to get the value of ***Theme NewBackground*** |
| setNewBackground(newBackground) | The method to set the value of ***Theme NewBackground*** |
| getBackground() | The method to get the value of ***Theme Background*** |
| setBackground(background) | The method to set the value of ***Theme Background*** |
| getScreen() | The method to get the value of ***Theme Screen*** |
| setScreen(screen) | The method to set the value of ***Theme Screen*** |
| getType() | The method to get the value of ***Theme Type*** |
| setType(type) | The method to set the value of ***Theme Type*** |
----

[source](../../core/com/zoho/crm/api/users/theme.js)

## BodyWrapper

A structure that contains all possible keys of a single request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getUsers() | The method to get the list of obtained ***User*** instances. |
| setUsers(***[users](users.md#user)***) | The method to set the list of obtained ***User*** instances. |
----

[source](../../core/com/zoho/crm/api/users/body_wrapper.js)

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

[source](../../core/com/zoho/crm/api/users/info.js)

## Shift

Structure representing the User's shift information.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getId() | The method to get the value of ***Shift Id*** |
| setId(id) | The method to set the value of ***Shift Id*** |
| getName() | The method to get the value of ***Shift Name*** |
| setName(name) | The method to set the value of ***Shift Name*** |
----

[source](../../core/com/zoho/crm/api/users/shift.js)

## RequestWrapper

A structure that contains all possible keys of a single request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getUsers() | The method to get the list of obtained ***User*** instances. |
| setUsers(***[users](users.md#user)***) | The method to set the list of obtained ***User*** instances. |
----

[source](../../core/com/zoho/crm/api/users/request_wrapper.js)

## User

Structure of Zoho CRM [User](../../core/com/zoho/crm/api/users/user.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCountry() | The method to get the value of ***User Country*** |
| setCountry(country) | The method to set the value of ***User Country*** |
| getCustomizeInfo() | The method to get the value of ***User CustomizeInfo*** |
| setCustomizeInfo(***[customizeInfo](users.md#customizeinfo)***) | The method to set the value of ***User CustomizeInfo*** |
| getRole() | The method to get the value of ***User Role*** |
| setRole(***[role](roles.md#role)***) | The method to set the value of ***User Role*** |
| getSignature() | The method to get the value of ***User Signature*** |
| setSignature(signature) | The method to set the value of ***User Signature*** |
| getCity() | The method to get the value of ***User City*** |
| setCity(city) | The method to set the value of ***User City*** |
| getNameFormat() | The method to get the value of ***User NameFormat*** |
| setNameFormat(nameFormat) | The method to set the value of ***User NameFormat*** |
| getPersonalAccount() | The method to get the value of ***User PersonalAccount*** |
| setPersonalAccount(personalAccount) | The method to set the value of ***User PersonalAccount*** |
| getDefaultTabGroup() | The method to get the value of ***User DefaultTabGroup*** |
| setDefaultTabGroup(defaultTabGroup) | The method to set the value of ***User DefaultTabGroup*** |
| getLanguage() | The method to get the value of ***User Language*** |
| setLanguage(language) | The method to set the value of ***User Language*** |
| getLocale() | The method to get the value of ***User Locale*** |
| setLocale(locale) | The method to set the value of ***User Locale*** |
| getMicrosoft() | The method to get the value of ***User Microsoft*** |
| setMicrosoft(microsoft) | The method to set the value of ***User Microsoft*** |
| getIsonline() | The method to get the value of ***User Isonline*** |
| setIsonline(isonline) | The method to set the value of ***User Isonline*** |
| getStreet() | The method to get the value of ***User Street*** |
| setStreet(street) | The method to set the value of ***User Street*** |
| getCurrency() | The method to get the value of ***User Currency*** |
| setCurrency(currency) | The method to set the value of ***User Currency*** |
| getAlias() | The method to get the value of ***User Alias*** |
| setAlias(alias) | The method to set the value of ***User Alias*** |
| getTheme() | The method to get the value of ***User Theme*** |
| setTheme(***[theme](users.md#theme)***) | The method to set the value of ***User Theme*** |
| getState() | The method to get the value of ***User State*** |
| setState(state) | The method to set the value of ***User State*** |
| getFax() | The method to get the value of ***User Fax*** |
| setFax(fax) | The method to set the value of ***User Fax*** |
| getCountryLocale() | The method to get the value of ***User CountryLocale*** |
| setCountryLocale(countryLocale) | The method to set the value of ***User CountryLocale*** |
| getFirstName() | The method to get the value of ***User FirstName*** |
| setFirstName(firstName) | The method to set the value of ***User FirstName*** |
| getEmail() | The method to get the value of ***User Email*** |
| setEmail(email) | The method to set the value of ***User Email*** |
| getReportingTo() | The method to get the value of ***User ReportingTo*** |
| setReportingTo(***[reportingTo](users.md#user)***) | The method to set the value of ***User ReportingTo*** |
| getDecimalSeparator() | The method to get the value of ***User DecimalSeparator*** |
| setDecimalSeparator(decimalSeparator) | The method to set the value of ***User DecimalSeparator*** |
| getZip() | The method to get the value of ***User Zip*** |
| setZip(zip) | The method to set the value of ***User Zip*** |
| getWebsite() | The method to get the value of ***User Website*** |
| setWebsite(website) | The method to set the value of ***User Website*** |
| getTimeFormat() | The method to get the value of ***User TimeFormat*** |
| setTimeFormat(timeFormat) | The method to set the value of ***User TimeFormat*** |
| getOffset() | The method to get the value of ***User Offset*** |
| setOffset(offset) | The method to set the value of ***User Offset*** |
| getProfile() | The method to get the value of ***User Profile*** |
| setProfile(***[profile](profiles.md#profile)***) | The method to set the value of ***User Profile*** |
| getMobile() | The method to get the value of ***User Mobile*** |
| setMobile(mobile) | The method to set the value of ***User Mobile*** |
| getLastName() | The method to get the value of ***User LastName*** |
| setLastName(lastName) | The method to set the value of ***User LastName*** |
| getTimeZone() | The method to get the value of ***User TimeZone*** |
| setTimeZone(timeZone) | The method to set the value of ***User TimeZone*** |
| getZuid() | The method to get the value of ***User Zuid*** |
| setZuid(zuid) | The method to set the value of ***User Zuid*** |
| getConfirm() | The method to get the value of ***User Confirm*** |
| setConfirm(confirm) | The method to set the value of ***User Confirm*** |
| getFullName() | The method to get the value of ***User FullName*** |
| setFullName(fullName) | The method to set the value of ***User FullName*** |
| getTerritories() | The method to get the list of obtained ***Territory*** instances. |
| setTerritories(***[territories](users.md#territory)***) | The method to set the list of obtained ***Territory*** instances. |
| getPhone() | The method to get the value of ***User Phone*** |
| setPhone(phone) | The method to set the value of ***User Phone*** |
| getDob() | The method to get the value of ***User Dob*** |
| setDob(dob) | The method to set the value of ***User Dob*** |
| getDateFormat() | The method to get the value of ***User DateFormat*** |
| setDateFormat(dateFormat) | The method to set the value of ***User DateFormat*** |
| getStatus() | The method to get the value of ***User Status*** |
| setStatus(status) | The method to set the value of ***User Status*** |
| getName() | The method to get the value of ***User Name*** |
| setName(name) | The method to set the value of ***User Name*** |
----

[source](../../core/com/zoho/crm/api/users/user.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/users/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/users/api_exception.js)

## TabTheme

Structure representing the user's customized tab information.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getFontColor() | The method to get the value of ***TabTheme FontColor*** |
| setFontColor(fontColor) | The method to set the value of ***TabTheme FontColor*** |
| getBackground() | The method to get the value of ***TabTheme Background*** |
| setBackground(background) | The method to set the value of ***TabTheme Background*** |
----

[source](../../core/com/zoho/crm/api/users/tab_theme.js)

## GetUsersParam

Contains all possible parameters for the [Get Users operation](../../core/com/zoho/crm/api/users/users_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| TYPE | Represents `type` parameter |
| PAGE | Represents `page` parameter |
| PER_PAGE | Represents `per_page` parameter |
----

## GetUsersHeader

Contains all possible headers for the [Get Users operation](../../core/com/zoho/crm/api/users/users_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IF_MODIFIED_SINCE | Represents `If-Modified-Since` parameter |
----

## GetUserHeader

Contains all possible headers for the [Get User operation](../../core/com/zoho/crm/api/users/users_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| IF_MODIFIED_SINCE | Represents `If-Modified-Since` parameter |
----
