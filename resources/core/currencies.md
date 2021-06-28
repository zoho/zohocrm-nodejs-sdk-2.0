# Currencies

## Package /core/com/zoho/crm/api/currencies

The Zoho CRM [Currencies API](https://www.zoho.com/crm/developer/docs/api/enable-multi-currency.html) reference provides information about the possible operations on **Currencies**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [Currency](#currency) |  |
| [ResponseWrapper](#responsewrapper) |  |
| [SuccessResponse](#successresponse) |  |
| [BaseCurrencyWrapper](#basecurrencywrapper) |  |
| [ActionWrapper](#actionwrapper) |  |
| [APIException](#apiexception) |  |
| [CurrenciesOperations](#currenciesoperations) |  |
| [BodyWrapper](#bodywrapper) |  |
| [Format](#format) |  |
| [BaseCurrencyActionWrapper](#basecurrencyactionwrapper) |  |

----

## Currency

Structure of Zoho CRM [Currency](../../core/com/zoho/crm/api/currencies/currency.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getSymbol() | The method to get the value of ***Currency Symbol*** |
| setSymbol(symbol) | The method to set the value of ***Currency Symbol*** |
| getCreatedTime() | The method to get the value of ***Currency CreatedTime*** |
| setCreatedTime(createdTime) | The method to set the value of ***Currency CreatedTime*** |
| getIsActive() | The method to get the value of ***Currency IsActive*** |
| setIsActive(isActive) | The method to set the value of ***Currency IsActive*** |
| getExchangeRate() | The method to get the value of ***Currency ExchangeRate*** |
| setExchangeRate(exchangeRate) | The method to set the value of ***Currency ExchangeRate*** |
| getFormat() | The method to get the value of ***Currency Format*** |
| setFormat(***[format](currencies.md#format)***) | The method to set the value of ***Currency Format*** |
| getCreatedBy() | The method to get the value of ***Currency CreatedBy*** |
| setCreatedBy(***[createdBy](users.md#user)***) | The method to set the value of ***Currency CreatedBy*** |
| getPrefixSymbol() | The method to get the value of ***Currency PrefixSymbol*** |
| setPrefixSymbol(prefixSymbol) | The method to set the value of ***Currency PrefixSymbol*** |
| getIsBase() | The method to get the value of ***Currency IsBase*** |
| setIsBase(isBase) | The method to set the value of ***Currency IsBase*** |
| getModifiedTime() | The method to get the value of ***Currency ModifiedTime*** |
| setModifiedTime(modifiedTime) | The method to set the value of ***Currency ModifiedTime*** |
| getName() | The method to get the value of ***Currency Name*** |
| setName(name) | The method to set the value of ***Currency Name*** |
| getModifiedBy() | The method to get the value of ***Currency ModifiedBy*** |
| setModifiedBy(***[modifiedBy](users.md#user)***) | The method to set the value of ***Currency ModifiedBy*** |
| getId() | The method to get the value of ***Currency Id*** |
| setId(id) | The method to set the value of ***Currency Id*** |
| getIsoCode() | The method to get the value of ***Currency IsoCode*** |
| setIsoCode(isoCode) | The method to set the value of ***Currency IsoCode*** |
----

[source](../../core/com/zoho/crm/api/currencies/currency.js)

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/currencies/response_wrapper.js) is returned for GET operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCurrencies() | The method to get the list of obtained ***Currency*** instances. |
| setCurrencies(***[currencies](currencies.md#currency)***) | The method to set the list of obtained ***Currency*** instances. |
----

[source](../../core/com/zoho/crm/api/currencies/response_wrapper.js)

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/currencies/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/currencies/success_response.js)

## BaseCurrencyWrapper

A structure that contains all possible keys of a single request that involves Home currency.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getBaseCurrency() | The method to get the value of ***BaseCurrencyWrapper BaseCurrency*** |
| setBaseCurrency(***[baseCurrency](currencies.md#currency)***) | The method to set the value of ***BaseCurrencyWrapper BaseCurrency*** |
----

[source](../../core/com/zoho/crm/api/currencies/base_currency_wrapper.js)

## ActionWrapper

After a successful **API** request, an instance of [ActionWrapper](../../core/com/zoho/crm/api/currencies/action_wrapper.js) is returned for **POST**, **PUT** and **DELETE** operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCurrencies() | The method to get the list of obtained ***ActionResponse*** instances. |
| setCurrencies(***[currencies](../../core/com/zoho/crm/api/currencies/action_response.js)***) | The method to set the list of obtained ***ActionResponse*** instances. |
----

[source](../../core/com/zoho/crm/api/currencies/action_wrapper.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/currencies/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/currencies/api_exception.js)

## CurrenciesOperations

Contains methods for all possible [Currencies operations](../../core/com/zoho/crm/api/currencies/currencies_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCurrencies() | To get the list of all currencies available for your org. |
| addCurrencies(***[request](currencies.md#bodywrapper)***) | To add new currencies to your org. |
| updateCurrencies(***[request](currencies.md#bodywrapper)***) | To update the currencies' details of your org. |
| enableMultipleCurrencies(***[request](currencies.md#basecurrencywrapper)***) | To enable multiple currencies for your org. |
| updateBaseCurrency(***[request](currencies.md#basecurrencywrapper)***) | To update the base currency details of your org. |
| getCurrency(id) | To get the details of specific currency. |
| updateCurrency(id, ***[request](currencies.md#bodywrapper)***) | To update the details of specific currency. |
----

[source](../../core/com/zoho/crm/api/currencies/currencies_operations.js)

## BodyWrapper

A structure that contains all possible keys of a single request.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCurrencies() | The method to get the list of obtained ***Currency*** instances. |
| setCurrencies(***[currencies](currencies.md#currency)***) | The method to set the list of obtained ***Currency*** instances. |
----

[source](../../core/com/zoho/crm/api/currencies/body_wrapper.js)

## Format

Structure representing the display format of the Currency

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getDecimalSeparator() | The method to get the value of ***Format DecimalSeparator*** |
| setDecimalSeparator(***[decimalSeparator](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Format DecimalSeparator*** |
| getThousandSeparator() | The method to get the value of ***Format ThousandSeparator*** |
| setThousandSeparator(***[thousandSeparator](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Format ThousandSeparator*** |
| getDecimalPlaces() | The method to get the value of ***Format DecimalPlaces*** |
| setDecimalPlaces(***[decimalPlaces](../util/choice.md#choice&lt;t>)***) | The method to set the value of ***Format DecimalPlaces*** |
----

[source](../../core/com/zoho/crm/api/currencies/format.js)

## BaseCurrencyActionWrapper

After a successful **API** request involving Home currency, an instance of [BaseCurrencyActionWrapper](../../core/com/zoho/crm/api/currencies/base_currency_action_wrapper.js) is returned for **POST** and **PUT** operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getBaseCurrency() | The method to get the value of ***BaseCurrencyActionWrapper BaseCurrency*** |
| setBaseCurrency(***[baseCurrency](../../core/com/zoho/crm/api/currencies/action_response.js)***) | The method to set the value of ***BaseCurrencyActionWrapper BaseCurrency*** |
----

[source](../../core/com/zoho/crm/api/currencies/base_currency_action_wrapper.js)
