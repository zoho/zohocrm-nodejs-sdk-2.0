# DBStore

extends ***[TokenStore](../../../models/authenticator/store/token_store.js)***

This class stores the user token details to the MySQL DataBase.

## Package /models/authenticator/store/db_store

## Constructors

| Constructor                                                          | Description                                                                     |
| :------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| constructor([host](#host)=null, [databaseName](#databasename)=null, [userName](#username)=null, [password](#password)=null, [portNumber](#portnumber)=null)| Create a DBStore class instance with the following default values. |
----

### host

A String containing the DataBase host name. The default value is `localhost`.

### databaseName

A String containing the DataBase name. The default value is `zohooauth`.

### userName

A String containing the DataBase user name. The default value is `root`.

### password

A String containing the DataBase password. The default value is an empty string.

### portNumber

A String containing the DataBase port number. The default value is `3306`.

## Methods

| Method            | Description                                              |
| :---------------- | :------------------------------------------------------- |
| getToken([user](../../user_signature.md#usersignature), [token](../../../models/authenticator/token.js)) | The method to get the user's token details. |
| saveToken([user](../../user_signature.md#usersignature), [token](../../../models/authenticator/token.js)) | The method to store the user's token details. |
| deleteToken([token](../../../models/authenticator/token.js)) | The method to delete the user's token details. |
| getTokens() | The method to retrieve all the stored tokens. |
| deleteTokens() | The method to delete all the stored tokens. |
----

[source](../../../models/authenticator/store/db_store.js)
