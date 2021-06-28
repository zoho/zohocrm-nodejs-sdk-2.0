# APIResponse

This class is the common API response object.

## Package /routes/controllers/api_response

## Constructors

| Constructor                                                   | Description                                                                     |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| constructor([headers](#headers), [statusCode](#statuscode), [object](#object)) |Creates an ***APIResponse*** class instance with the specified parameters. |
----

### headers

The map containing the API Response headers

### statusCode

The integer containing the API response HTTP status code.

### object

The object containing the API response class instance.

## Methods

| Method     | Description                                                            |
| :--------- | :--------------------------------------------------------------------- |
| statusCode | The getter method to get the API response HTTP status code.      |
| object     | The method to get the API response class instance.                |
| headers    | The getter method to get the API response headers. |
----

[source](../../routes/controllers/api_response.js)
