const fs = require("fs");
const path = require("path");
const {FileOperations, GetFileParam, UploadFilesParam} = require("../../../../../../../core/com/zoho/crm/api/file/file_operations");
const FileBodyWrapper = require("../../../../../../../core/com/zoho/crm/api/file/file_body_wrapper").FileBodyWrapper;
const BodyWrapper = require("../../../../../../../core/com/zoho/crm/api/file/body_wrapper").BodyWrapper;
const SuccessResponse = require("../../../../../../../core/com/zoho/crm/api/file/success_response").SuccessResponse;
const APIException = require("../../../../../../../core/com/zoho/crm/api/file/api_exception").APIException;
const ActionWrapper = require("../../../../../../../core/com/zoho/crm/api/file/action_wrapper").ActionWrapper;
const ParameterMap = require("../../../../../../../routes/parameter_map").ParameterMap;
const StreamWrapper = require("../../../../../../../utils/util/stream_wrapper").StreamWrapper;

class File{

    /**
     * <h3> Upload File</h3>
	 * This method is used to upload a file and print the response.
     * @param {String} absoluteFilePath The absolute file path of the file to be attached
     */
    static async uploadFiles(){

        //example
        //let absoluteFilePath = "/Users/user_name/Desktop/download.png";
        
        //Get instance of FileOperations Class
        let fileOperations = new FileOperations();

        //Get instance of FileBodyWrapper Class that will contain the request body
        let request = new BodyWrapper();

        let paramInstance = new ParameterMap();

        await paramInstance.add(UploadFilesParam.TYPE, "inline");

        /** StreamWrapper can be initialized in any of the following ways */ 

        /**
         * param 1 -> fileName 
         * param 2 -> Read Stream.
         */
        let streamWrapper1 = new StreamWrapper(null, fs.createReadStream("/Users/user_name/Desktop/file1.txt"));

        let streamWrapper3 = new StreamWrapper(null, fs.createReadStream("/Users/user_name/Desktop/file2.txt"));

        /**
         * param 1 -> fileName
         * param 2 -> Read Stream
         * param 3 -> Absolute File Path of the file to be attached
         */
        let streamWrapper2 = new StreamWrapper(null, null, "/Users/user_name/Desktop/file3.txt");

        //Set file to the FileBodyWrapper instance
        request.setFile([streamWrapper1, streamWrapper2, streamWrapper3]);

        //Call uploadFile method that takes BodyWrapper instance and ParameterMap instance as parameter.
        let response = await fileOperations.uploadFiles(request, paramInstance);

        if(response != null){
            //Get the status code from response
            console.log("Status Code: " + response.statusCode);

            //Get object from response
            let responseObject = response.object;

            if(responseObject != null){
                //Check if expected ActionWrapper instance is received. 
                if(responseObject instanceof ActionWrapper){
                    
                    //Get the array of obtained action responses
                    let actionResponses = responseObject.getData();

                    actionResponses.forEach(actionResponse => {

                        //Check if the request is successful
                        if(actionResponse instanceof SuccessResponse){
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if(details != null){
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));  
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if(actionResponse instanceof APIException){
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if(details != null){
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));  
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        } 
                    });
                }
                //Check if the request returned an exception
                else if(responseObject instanceof APIException){
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if(details != null){
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));  
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }

    /**
     * <h3> Get File</h3>
     * This method is used to download the file with ID and write in the destinationFolder
     * @param {String} id The ID of the uploaded File.
     * @param {String} destinationFolder The absolute path of the destination folder to store the File
     */
    static async getFile(id, destinationFolder){

        //example
		//let id = "ae9c7cefa418aec1d6a5cc2d9ab35c3231aae3bfeef7d5e00a54b7563c0dd42b";
        //let destinationFolder = "/Users/user_name/Desktop"
        
        //Get instance of FileOperations Class
        let fileOperations = new FileOperations();

        //Get instance of ParameterMap Class
        let paramInstance = new ParameterMap();

        //Add the id to ParameterMap instance
        await paramInstance.add(GetFileParam.ID, id);

        //Call getFile method that takes ParameterMap instance as parameter
        let response = await fileOperations.getFile(paramInstance);

        if(response != null){

            //Get the status code from response
            console.log("Status Code: " + response.statusCode);

            if([204, 304].includes(response.statusCode)){
                console.log(response.statusCode == 204? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject = response.object;

            if(responseObject != null){

                //Check if expected FileBodyWrapper instance is received
                if(responseObject instanceof FileBodyWrapper){

                    //Get StreamWrapper instance from the returned FileBodyWrapper instance
                    let streamWrapper = responseObject.getFile();

                    //Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
                    let fileName = path.join(destinationFolder, streamWrapper.Name);

                    //Get the stream from StreamWrapper instance
                    let readStream = streamWrapper.Stream;

                    //Write the stream to the destination file.
                    fs.writeFileSync(fileName, readStream);
                }
                //Check if the request returned an exception
                else if(responseObject instanceof APIException){
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if(details != null){
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));  
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}

module.exports = {File}