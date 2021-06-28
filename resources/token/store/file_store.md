# FileStore

extends ***[TokenStore](../../../models/authenticator/store/token_store.js)***

This class stores the user's token details in the file.

## Package /models/authenticator/store/file_store

## Constructors

| Constructor                        | Description                                                       |
| :--------------------------------- | :---------------------------------------------------------------- |
| constructor([filePath](#filepath)) | Creates a FileStore class instance with the specified parameters. |
----

### filePath

A String containing the absolute file path to store tokens.

## Methods

| Method            | Description                                              |
| :---------------- | :------------------------------------------------------- |
| getToken([user](../../user_signature.md#usersignature), [token](../../../models/authenticator/token.js)) | The method to get the user's token details. |
| saveToken([user](../../user_signature.md#usersignature), [token](../../../models/authenticator/token.js)) | The method to store the user's token details. |
| deleteToken([token](../../../models/authenticator/token.js)) | The method to delete the user's token details. |
| getTokens() | The method to retrieve all the stored tokens. |
| deleteTokens() | The method to delete all the stored tokens. |
----

[source](../../../models/authenticator/store/file_store.js)
