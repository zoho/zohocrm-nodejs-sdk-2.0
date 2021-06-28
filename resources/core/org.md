# Org

## Package /core/com/zoho/crm/api/org

The Zoho CRM [Organization API](https://www.zoho.com/crm/developer/docs/api/get-org-data.html) reference provides information about the possible operations on **Organization**.

## Classes

| Class                 | Extends Classes |
| :-------------------- | :-------------- |
| [SuccessResponse](#successresponse) |  |
| [ResponseWrapper](#responsewrapper) |  |
| [Org](#org-1) |  |
| [OrgOperations](#orgoperations) |  |
| [LicenseDetails](#licensedetails) |  |
| [APIException](#apiexception) |  |
| [FileBodyWrapper](#filebodywrapper) |  |

----

## SuccessResponse

After a successful **POST**, **PUT** or **DELETE** operation, an instance of [SuccessResponse](../../core/com/zoho/crm/api/org/success_response.js) is returned.

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

[source](../../core/com/zoho/crm/api/org/success_response.js)

## ResponseWrapper

After a successful **API** request, an instance of [ResponseWrapper](../../core/com/zoho/crm/api/org/response_wrapper.js) is returned for GET operations

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getOrg() | The method to get the list of obtained ***Org*** instances. |
| setOrg(***[org](org.md#org)***) | The method to set the list of obtained ***Org*** instances. |
----

[source](../../core/com/zoho/crm/api/org/response_wrapper.js)

## Org

Structure of Zoho CRM [Org](../../core/com/zoho/crm/api/org/org.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getCountry() | The method to get the value of ***Org Country*** |
| setCountry(country) | The method to set the value of ***Org Country*** |
| getPhotoId() | The method to get the value of ***Org PhotoId*** |
| setPhotoId(photoId) | The method to set the value of ***Org PhotoId*** |
| getCity() | The method to get the value of ***Org City*** |
| setCity(city) | The method to set the value of ***Org City*** |
| getDescription() | The method to get the value of ***Org Description*** |
| setDescription(description) | The method to set the value of ***Org Description*** |
| getMcStatus() | The method to get the value of ***Org McStatus*** |
| setMcStatus(mcStatus) | The method to set the value of ***Org McStatus*** |
| getGappsEnabled() | The method to get the value of ***Org GappsEnabled*** |
| setGappsEnabled(gappsEnabled) | The method to set the value of ***Org GappsEnabled*** |
| getDomainName() | The method to get the value of ***Org DomainName*** |
| setDomainName(domainName) | The method to set the value of ***Org DomainName*** |
| getTranslationEnabled() | The method to get the value of ***Org TranslationEnabled*** |
| setTranslationEnabled(translationEnabled) | The method to set the value of ***Org TranslationEnabled*** |
| getStreet() | The method to get the value of ***Org Street*** |
| setStreet(street) | The method to set the value of ***Org Street*** |
| getAlias() | The method to get the value of ***Org Alias*** |
| setAlias(alias) | The method to set the value of ***Org Alias*** |
| getCurrency() | The method to get the value of ***Org Currency*** |
| setCurrency(currency) | The method to set the value of ***Org Currency*** |
| getId() | The method to get the value of ***Org Id*** |
| setId(id) | The method to set the value of ***Org Id*** |
| getState() | The method to get the value of ***Org State*** |
| setState(state) | The method to set the value of ***Org State*** |
| getFax() | The method to get the value of ***Org Fax*** |
| setFax(fax) | The method to set the value of ***Org Fax*** |
| getEmployeeCount() | The method to get the value of ***Org EmployeeCount*** |
| setEmployeeCount(employeeCount) | The method to set the value of ***Org EmployeeCount*** |
| getZip() | The method to get the value of ***Org Zip*** |
| setZip(zip) | The method to set the value of ***Org Zip*** |
| getWebsite() | The method to get the value of ***Org Website*** |
| setWebsite(website) | The method to set the value of ***Org Website*** |
| getCurrencySymbol() | The method to get the value of ***Org CurrencySymbol*** |
| setCurrencySymbol(currencySymbol) | The method to set the value of ***Org CurrencySymbol*** |
| getMobile() | The method to get the value of ***Org Mobile*** |
| setMobile(mobile) | The method to set the value of ***Org Mobile*** |
| getCurrencyLocale() | The method to get the value of ***Org CurrencyLocale*** |
| setCurrencyLocale(currencyLocale) | The method to set the value of ***Org CurrencyLocale*** |
| getPrimaryZuid() | The method to get the value of ***Org PrimaryZuid*** |
| setPrimaryZuid(primaryZuid) | The method to set the value of ***Org PrimaryZuid*** |
| getZiaPortalId() | The method to get the value of ***Org ZiaPortalId*** |
| setZiaPortalId(ziaPortalId) | The method to set the value of ***Org ZiaPortalId*** |
| getTimeZone() | The method to get the value of ***Org TimeZone*** |
| setTimeZone(timeZone) | The method to set the value of ***Org TimeZone*** |
| getZgid() | The method to get the value of ***Org Zgid*** |
| setZgid(zgid) | The method to set the value of ***Org Zgid*** |
| getCountryCode() | The method to get the value of ***Org CountryCode*** |
| setCountryCode(countryCode) | The method to set the value of ***Org CountryCode*** |
| getLicenseDetails() | The method to get the value of ***Org LicenseDetails*** |
| setLicenseDetails(***[licenseDetails](org.md#licensedetails)***) | The method to set the value of ***Org LicenseDetails*** |
| getPhone() | The method to get the value of ***Org Phone*** |
| setPhone(phone) | The method to set the value of ***Org Phone*** |
| getCompanyName() | The method to get the value of ***Org CompanyName*** |
| setCompanyName(companyName) | The method to set the value of ***Org CompanyName*** |
| getPrivacySettings() | The method to get the value of ***Org PrivacySettings*** |
| setPrivacySettings(privacySettings) | The method to set the value of ***Org PrivacySettings*** |
| getPrimaryEmail() | The method to get the value of ***Org PrimaryEmail*** |
| setPrimaryEmail(primaryEmail) | The method to set the value of ***Org PrimaryEmail*** |
| getIsoCode() | The method to get the value of ***Org IsoCode*** |
| setIsoCode(isoCode) | The method to set the value of ***Org IsoCode*** |
----

[source](../../core/com/zoho/crm/api/org/org.js)

## OrgOperations

Contains methods for all possible [Org operations](../../core/com/zoho/crm/api/org/org_operations.js).

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getOrganization() | To get the details of your organization. |
| uploadOrganizationPhoto(***[request](org.md#filebodywrapper)***) | To upload a photo of your organization. |
----

[source](../../core/com/zoho/crm/api/org/org_operations.js)

## LicenseDetails

Strucuture representing the details of the CRM license.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getPaidExpiry() | The method to get the value of ***LicenseDetails PaidExpiry*** |
| setPaidExpiry(paidExpiry) | The method to set the value of ***LicenseDetails PaidExpiry*** |
| getUsersLicensePurchased() | The method to get the value of ***LicenseDetails UsersLicensePurchased*** |
| setUsersLicensePurchased(usersLicensePurchased) | The method to set the value of ***LicenseDetails UsersLicensePurchased*** |
| getTrialType() | The method to get the value of ***LicenseDetails TrialType*** |
| setTrialType(trialType) | The method to set the value of ***LicenseDetails TrialType*** |
| getTrialExpiry() | The method to get the value of ***LicenseDetails TrialExpiry*** |
| setTrialExpiry(trialExpiry) | The method to set the value of ***LicenseDetails TrialExpiry*** |
| getPaid() | The method to get the value of ***LicenseDetails Paid*** |
| setPaid(paid) | The method to set the value of ***LicenseDetails Paid*** |
| getPaidType() | The method to get the value of ***LicenseDetails PaidType*** |
| setPaidType(paidType) | The method to set the value of ***LicenseDetails PaidType*** |
----

[source](../../core/com/zoho/crm/api/org/license_details.js)

## APIException

Whenever the **API** returns an error response, an instance of [APIException](../../core/com/zoho/crm/api/org/api_exception.js) is returned for all operations.

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

[source](../../core/com/zoho/crm/api/org/api_exception.js)

## FileBodyWrapper

Serves as the request for Photo upload operation.

### Methods

| Method                     | Description                                        |
| :------------------------- | :------------------------------------------------- |
| getFile() | The method to get the value of ***FileBodyWrapper File*** |
| setFile(***[file](../util/stream_wrapper.md#streamwrapper)***) | The method to set the value of ***FileBodyWrapper File*** |
----

[source](../../core/com/zoho/crm/api/org/file_body_wrapper.js)
