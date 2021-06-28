# Logger

## Package /routes/logger/logger

## Classes

| Class                 |
| :-------------------- |
| [Logger](#logger) |
| [Levels](#levels) |
----

## Logger

This class represents the Logger level and log file path.

## Static Methods

| Method       | Description                                                |
| :----------- | :--------------------------------------------------------- |
| getInstance([level](#levels), [filePath](#filepath)) | Creates a Logger class instance with the specified log level and file path. |
----

### filePath

A String representing the Absolute file path where messages need to be logged.

## Methods

| Method   | Description                                 |
| :------- | :------------------------------------------ |
| level    | The getter method to get the logger level.  |
| filePath | The getter method to get the log file path. |
----

## Levels

- INFO
- DEBUG
- WARN
- VERBOSE
- ERROR
- SILLY


[source](../../routes/logger/logger.js)
