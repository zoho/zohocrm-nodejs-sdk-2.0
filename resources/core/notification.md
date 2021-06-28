# Notification

## Package /core/com/zoho/crm/api/notification

The Zoho CRM [Notification API](https://www.zoho.com/crm/developer/docs/api/notifications/overview.html) reference provides information about the possible operations on **Notification**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [SuccessResponse](#successresponse) |  |
| [Info](#info) |  |
| [BodyWrapper](#bodywrapper) |  |
| [NotificationOperations](#notificationoperations) |  |
| [APIException](#apiexception) |  |
| [ActionWrapper](#actionwrapper) |  |
| [ResponseWrapper](#responsewrapper) |  |
| [Notification](#notification-1) |  |

----

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/notification/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/notification/success_response.js)

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

[source](../../core/com/zoho/crm/api/notification/info.js)

## BodyWrapper

A structure that contains all possible keys of a request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getWatch() | The method to get the list of obtained ***Notification*** instances. |
| setWatch(***[watch](notification.md#notification)***) | The method to set the list of obtained ***Notification*** instances. |
----

[source](../../core/com/zoho/crm/api/notification/body_wrapper.js)

## NotificationOperations

Contains methods for all possible [Notification operations](../../core/com/zoho/crm/api/notification/notification_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| enableNotifications(***[request](notification.md#bodywrapper)***) |  |
| getNotificationDetails(***[paramInstance](../parameter_map.md#parametermap)***) |  |
| updateNotifications(***[request](notification.md#bodywrapper)***) |  |
| updateNotification(***[request](notification.md#bodywrapper)***) |  |
| disableNotifications(***[paramInstance](../parameter_map.md#parametermap)***) |  |
| disableNotification(***[request](notification.md#bodywrapper)***) |  |
----

### Inner Static Classes

| Class                                    |
| :--------------------------------------- |
| [GetNotificationDetailsParam](#getnotificationdetailsparam) |
| [DisableNotificationsParam](#disablenotificationsparam) |
----

[source](../../core/com/zoho/crm/api/notification/notification_operations.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/notification/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/notification/api_exception.js)

## ActionWrapper

After a successful **API** request, an instance of [ActionWrapper](../../core/com/zoho/crm/api/notification/action_wrapper.js) is returned for **POST**, **PUT** and **DELETE** operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getWatch() | The method to get the list of obtained ***ActionResponse*** instances. |
| setWatch(***[watch](../../core/com/zoho/crm/api/notification/action_response.js)***) | The method to set the list of obtained ***ActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/notification/action_wrapper.js)

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/notification/response_wrapper.js) is returned for GET operations.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getWatch() | The method to get the list of obtained ***Notification*** instances. |
| setWatch(***[watch](notification.md#notification)***) | The method to set the list of obtained ***Notification*** instances. |
| getInfo() | The method to get the value of ***ResponseWrapper Info*** |
| setInfo(***[info](notification.md#info)***) | The method to set the value of ***ResponseWrapper Info*** |
----

[source](../../core/com/zoho/crm/api/notification/response_wrapper.js)

## Notification

Structure of Zoho CRM [Notification](../../core/com/zoho/crm/api/notification/notification.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getChannelExpiry() | The method to get the value of ***Notification ChannelExpiry*** |
| setChannelExpiry(channelExpiry) | The method to set the value of ***Notification ChannelExpiry*** |
| getResourceUri() | The method to get the value of ***Notification ResourceUri*** |
| setResourceUri(resourceUri) | The method to set the value of ***Notification ResourceUri*** |
| getResourceId() | The method to get the value of ***Notification ResourceId*** |
| setResourceId(resourceId) | The method to set the value of ***Notification ResourceId*** |
| getNotifyUrl() | The method to get the value of ***Notification NotifyUrl*** |
| setNotifyUrl(notifyUrl) | The method to set the value of ***Notification NotifyUrl*** |
| getResourceName() | The method to get the value of ***Notification ResourceName*** |
| setResourceName(resourceName) | The method to set the value of ***Notification ResourceName*** |
| getChannelId() | The method to get the value of ***Notification ChannelId*** |
| setChannelId(channelId) | The method to set the value of ***Notification ChannelId*** |
| getEvents() | The method to get the value of ***Notification Events*** |
| setEvents(events) | The method to set the value of ***Notification Events*** |
| getToken() | The method to get the value of ***Notification Token*** |
| setToken(token) | The method to set the value of ***Notification Token*** |
| getNotifyOnRelatedAction() | The method to get the value of ***Notification NotifyOnRelatedAction*** |
| setNotifyOnRelatedAction(notifyOnRelatedAction) | The method to set the value of ***Notification NotifyOnRelatedAction*** |
| getFields() | The method to get the value of ***Notification Fields*** |
| setFields(fields) | The method to set the value of ***Notification Fields*** |
| getDeleteevents() | The method to get the value of ***Notification Deleteevents*** |
| setDeleteevents(deleteevents) | The method to set the value of ***Notification Deleteevents*** |
----

[source](../../core/com/zoho/crm/api/notification/notification.js)

## GetNotificationDetailsParam

Contains all possible parameters for the [Get Notification Details operation](../../core/com/zoho/crm/api/notification/notification_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| PAGE | Represents `page` parameter |
| PER_PAGE | Represents `per_page` parameter   |
| CHANNEL_ID | Represents `channel_id` parameter |
| MODULE | Represents `module` parameter     |
----

## DisableNotificationsParam

Contains all possible parameters for the [Disable Notifications operation](../../core/com/zoho/crm/api/notification/notification_operations.js).

### Fields

| Field                      | Description                                        |
| :------------------------- | :------------------------------------------------- |
| CHANNEL_IDS  | Represents `channel_ids` parameter |
----
