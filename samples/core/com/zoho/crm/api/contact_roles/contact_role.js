const {ContactRolesOperations, DeleteContactRolesParam} = require("../../../../../../../core/com/zoho/crm/api/contact_roles/contact_roles_operations");
const { ParameterMap } = require("../../../../../../../routes/parameter_map");
const ZCRMContactRole = require("../../../../../../../core/com/zoho/crm/api/contact_roles/contact_role").ContactRole;
const ActionWrapper = require("../../../../../../../core/com/zoho/crm/api/contact_roles/action_wrapper").ActionWrapper;
const BodyWrapper = require("../../../../../../../core/com/zoho/crm/api/contact_roles/body_wrapper").BodyWrapper;
const ResponseWrapper = require("../../../../../../../core/com/zoho/crm/api/contact_roles/response_wrapper").ResponseWrapper;
const APIException = require("../../../../../../../core/com/zoho/crm/api/contact_roles/api_exception").APIException;
const SuccessResponse = require("../../../../../../../core/com/zoho/crm/api/contact_roles/success_response").SuccessResponse;

class ContactRole{

    /**
     * <h3> Get Contact Roles </h3>
     * This method is used to get all the Contact Roles and print the response.
     */
    static async getContactRoles(){

        //Get instance of ContactRolesOperations Class
        let contactRolesOperations = new ContactRolesOperations();

        //Call getContactRoles method
        let response = await contactRolesOperations.getContactRoles();

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

                //Check if expected ResponseWrapper instance is received 
                if(responseObject instanceof ResponseWrapper){

                    //Get the array of obtained ContactRole instances
                    let contactRoles = responseObject.getContactRoles();

                    contactRoles.forEach(contactRole => {

                        //Get the ID of each ContactRole
                        console.log("ContactRole ID: " + contactRole.getId());

                        //Get the name of each ContactRole
                        console.log("ContactRole Name: " + contactRole.getName());

                        //Get the sequence number of each ContactRole
                        console.log("ContactRole SequenceNumber: " + contactRole.getSequenceNumber());
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
     * <h3> Get Contact Role </h3>
     * This method is used to get single Contact Role with ID and print the response.
     * @param {BigInt} contactRoleId The ID of the ContactRole to be obtained
     */
    static async getContactRole(contactRoleId){

        //example
		//let contactRoleId = 3409643000002212003n;
        
        //Get instance of ContactRolesOperations Class
        let contactRolesOperations = new ContactRolesOperations();

        //Call getContactRole method that takes contactRoleId as parameter
        let response = await contactRolesOperations.getContactRole(contactRoleId);

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

                //Check if expected ResponseWrapper instance is received 
                if(responseObject instanceof ResponseWrapper){

                    //Get the array of obtained ContactRole instances
                    let contactRoles = responseObject.getContactRoles();

                    contactRoles.forEach(contactRole => {

                        //Get the ID of each ContactRole
                        console.log("ContactRole ID: " + contactRole.getId());

                        //Get the name of each ContactRole
                        console.log("ContactRole Name: " + contactRole.getName());

                        //Get the sequence number of each ContactRole
                        console.log("ContactRole SequenceNumber: " + contactRole.getSequenceNumber());
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
     * <h3> Create Contact Roles </h3>
     * This method is used to create Contact Roles and print the response.
     */
    static async createContactRoles(){

        //Get instance of ContactRolesOperations Class
        let contactRolesOperations = new ContactRolesOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request = new BodyWrapper();

        //Array to hold ContactRole instances
        let contactRolesArray = [];

        for (let index = 0; index < 5; index++) {

            //Get instance of ContactRole Class
            let contactRole = new ZCRMContactRole();

            //Set name of the Contact Role
            contactRole.setName("contactRole-node" + index.toString());

            //Set sequence number of the Contact Role
            contactRole.setSequenceNumber(index);

            //Add ContactRole instance to the array
            contactRolesArray.push(contactRole);
        }

        //Set the array of contactRoles in BodyWrapper instance
        request.setContactRoles(contactRolesArray);

        //Call createContactRoles method that takes BodyWrapper instance as parameter
        let response = await contactRolesOperations.createContactRoles(request);

        if(response != null){

            //Get the status code from response
            console.log("Status Code: " + response.statusCode);

            //Get object from response
            let responseObject = response.object;

            if(responseObject != null){

                //Check if expected ActionWrapper instance is received 
                if(responseObject instanceof ActionWrapper){

                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getContactRoles();

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
     * <h3> Update Contact Roles </h3>
     * This method is used to update Contact Roles and print the response.
     */
    static async updateContactRoles(){

        //Get instance of ContactRolesOperations Class
        let contactRolesOperations = new ContactRolesOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request = new BodyWrapper();

        //Array to hold ContactRole instances
        let contactRolesArray = [];

        //Get instance of ContactRole Class
        let cr1 = new ZCRMContactRole();

        //Set ID to the ContactRole instance
        cr1.setId(3409643000001792004n);

        //Set name to the ContactRole instance
        cr1.setName("Edited1");

        //Add ContactRole instance to the array
        contactRolesArray.push(cr1);

        //Get instance of ContactRole Class
        cr1 = new ZCRMContactRole();

        //Set ID to the ContactRole instance
        cr1.setId(3409643000001794001n);

        //Set name to the ContactRole instance
        cr1.setName("Edited2");

        //Add ContactRole instance to the array
        contactRolesArray.push(cr1);

        //Set the array to contactRoles in BodyWrapper instance
        request.setContactRoles(contactRolesArray);

        //Call updateContactRoles method that takes BodyWrapper instance as parameter
        let response = await contactRolesOperations.updateContactRoles(request);

        if(response != null){

            //Get the status code from response
            console.log("Status Code: " + response.statusCode);

            //Get object from response
            let responseObject = response.object;

            if(responseObject != null){

                //Check if expected ActionWrapper instance is received 
                if(responseObject instanceof ActionWrapper){

                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getContactRoles();

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
     * <h3> Delete Contact Roles </h3>
	 * This method is used to delete Contact Roles and print the response.
     * @param {Array} contactRoleIds The array of ContactRole IDs to be deleted.
     */
    static async deleteContactRoles(contactRoleIds){

        //example
        //let contactRoleIds = [3409643000002157002n, 3409643000001619001n, 3409643000000006883n];

        //Get instance of ContactRolesOperations Class
        let contactRolesOperations = new ContactRolesOperations();

        //Get instance of ParameterMap Class
        let paramInstance = new ParameterMap();

        //Add ids to ParameterMap instance
        for(let contactRoleId of contactRoleIds) {
            await paramInstance.add(DeleteContactRolesParam.IDS, contactRoleId);
        }

        //Call deleteContactRoles method that takes paramInstance as parameter
        let response = await contactRolesOperations.deleteContactRoles(paramInstance);

        if(response != null){

            //Get the status code from response
            console.log("Status Code: " + response.statusCode);

            //Get object from response
            let responseObject = response.object;

            if(responseObject != null){

                //Check if expected ActionWrapper instance is received 
                if(responseObject instanceof ActionWrapper){

                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getContactRoles();

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
     * <h3> Update Contact Role </h3>
	 * This method is used to update single Contact Role with ID and print the response.
     * @param {BigInt} contactRoleId The ID of the ContactRole to be updated
     */
    static async updateContactRole(contactRoleId){

        //example
        //let contactRoleId = 3409643000002212003n;
        
        //Get instance of ContactRolesOperations Class
        let contactRolesOperations = new ContactRolesOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request = new BodyWrapper();

        //Array to hold ContactRole instances
        let contactRolesArray = [];

        //Get instance of ContactRole Class
        let cr1 = new ZCRMContactRole();

        //Set sequence number to the ContactRole instance
        cr1.setSequenceNumber(1);

        //Add ContactRole instance to the array
        contactRolesArray.push(cr1);

        //Set the array to contactRoles in BodyWrapper instance
        request.setContactRoles(contactRolesArray);

        //Call updateContactRole method that takes BodyWrapper instance and contactRoleId as parameters
        let response = await contactRolesOperations.updateContactRole(contactRoleId, request);

        if(response != null){

            //Get the status code from response
            console.log("Status Code: " + response.statusCode);

            //Get object from response
            let responseObject = response.object;

            if(responseObject != null){

                //Check if expected ActionWrapper instance is received 
                if(responseObject instanceof ActionWrapper){

                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getContactRoles();

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
     * <h3> Delete Contact Role </h3>
     * This method is used to delete single Contact Role with ID and print the response.
     * @param {BigInt} contactRoleId ID of the ContactRole to be deleted
     */
    static async deleteContactRole(contactRoleId){

        //example
        //let contactRoleId = 3409643000002212003n;

        //Get instance of ContactRolesOperations Class
        let contactRolesOperations = new ContactRolesOperations();

        //Call deleteContactRole which takes contactRoleId as parameter
        let response = await contactRolesOperations.deleteContactRole(contactRoleId);

        if(response != null){
            
            //Get the status code from response
            console.log("Status Code: " + response.statusCode);

            //Get object from response
            let responseObject = response.object;

            if(responseObject != null){

                //Check if expected ActionWrapper instance is received 
                if(responseObject instanceof ActionWrapper){

                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getContactRoles();

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
}


module.exports = {ContactRole}