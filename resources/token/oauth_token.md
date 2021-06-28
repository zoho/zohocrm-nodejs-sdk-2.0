# OAuthToken

## Classes

| Class                 |
| :-------------------- |
| [TokenType](#tokentype) |
| [OAuthToken](#oauthtoken-1) |
----

## TokenType

This Class contains different types of token.

GRANT   -> Represents Grant Token is given in the [token](###token).

REFRESH -> Represents Refresh Token is given in the [token](###token).

## OAuthToken

implements [Token](../../models/authenticator/token.js)

This class maintains the tokens and authenticates every request.

## Package /models/authenticator/oauth_token

The Zoho CRM [OAuth 2.0](https://www.zoho.com/crm/developer/docs/api/oauth-overview.html) reference provides information about the possible operations on **OAuth 2.0**.

## Constructors

| Constructor                                                   | Description                                                                     |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| constructor([clientID](#clientid), [clientSecret](#clientsecret), [token](#token), [type](#tokentype), [redirectURL](#redirecturl) = null) | Creates an OAuthToken class instance with the specified parameters. |
----

### clientID

A String containing the OAuth client id.

### clientSecret

A String containing the OAuth client secret.

### token

A String containing the REFRESH/GRANT token.

### type

A [TokenType](##TokenType) static member representing the [token](###token) type.

### redirectURL

A String containing the OAuth redirect URL.

## Methods

| Method       | Description                                              |
| :----------- | :------------------------------------------------------- |
| clientID     | The getter method to get ***OAuth ClientID***.     |
| clientSecret | The getter method to get ***OAuth ClientSecret***. |
| redirectURL  | The getter method to get ***OAuth RedirectURL***.  |
| grantToken   | The getter method to get ***OAuth GrantToken***.   |
| refreshToken | The getter method to get ***OAuth RefreshToken***. |
| refreshToken(refreshToken) | The setter method to set ***OAuth RefreshToken***.|
| accessToken  | The getter method to get ***OAuth AccessToken***.  |
| accessToken(accessToken) | The setter method to set ***OAuth AccessToken***. |
| expiresIn    | The getter method to get ***OAuth ExpiresIn***.    |
| expiresIn(expiresIn) | The setter method to set ***OAuth ExpiresIn***. |
| remove()     | The method to remove the current token from the Store.   |
----

[source](../../models/authenticator/oauth_token.js)
