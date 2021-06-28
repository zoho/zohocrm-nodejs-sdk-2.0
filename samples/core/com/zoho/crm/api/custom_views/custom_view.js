const {CustomViewsOperations, GetCustomViewsParam} = require("../../../../../../../core/com/zoho/crm/api/custom_views/custom_views_operations");
const ResponseWrapper = require("../../../../../../../core/com/zoho/crm/api/custom_views/response_wrapper").ResponseWrapper;
const APIException = require("../../../../../../../core/com/zoho/crm/api/custom_views/api_exception").APIException;
const ParameterMap = require("../../../../../../../routes/parameter_map").ParameterMap;

class CustomView{

    /**
     * <h3> Get CustomViews </h3>
	 * This method is used to get the custom views data of a particular module.
     * Specify the module name in your API request whose custom view data you want to retrieve.
     * @param {String} moduleAPIName Specify the API name of the required module.
     */
    static async getCustomViews(moduleAPIName){

        //example
        //let moduleAPIName = "Leads";
        
        //Get instance of CustomViewOperations Class that takes moduleAPIName as parameter
        let customViewsOperations = new CustomViewsOperations(moduleAPIName);

        //Get instance of ParameterMap Class
        let paramInstance = new ParameterMap();

        //Possible parameters of Get CustomViews operation
        await paramInstance.add(GetCustomViewsParam.PAGE, 1);

        await paramInstance.add(GetCustomViewsParam.PER_PAGE, 20);

        //Call getCustomViews method that takes ParameterMap instance as parameter
        let response = await customViewsOperations.getCustomViews(paramInstance);

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

                    //Get the array of obtained CustomView instances
                    let customViews = responseObject.getCustomViews();

                    customViews.forEach(customView => {

                        //Get the ID of each CustomView
                        console.log("CustomView ID: " + customView.getId());

                        //Get the Name of each CustomView
                        console.log("CustomView Name: " + customView.getName());

                        //Get the DisplayValue of each CustomView
                        console.log("CustomView DisplayValue: " + customView.getDisplayValue());

                        //Get the Offline of each CustomView
                        console.log("CustomView Offline: " + customView.getOffline().toString());

                        //Get the Default of each CustomView
                        console.log("CustomView Default: " + customView.getDefault().toString());

                        //Get the SystemName of each CustomView
                        console.log("CustomView SystemName: " + customView.getSystemName());

                        //Get the SystemDefined of each CustomView
                        console.log("CustomView SystemDefined: " + customView.getSystemDefined().toString());

                        //Get the Category of each CustomView
                        console.log("CustomView Category: " + customView.getCategory());

                        if(customView.getFavorite() != null){
                            //Get the Favorite of each CustomView
                            console.log("CustomView Favorite: " + customView.getFavorite().toString());
                        }
                    });

                    //Get the obtained Info instance from object
                    let info = responseObject.getInfo();

                    //Check if info is not null
                    if(info != null){
                        console.log("CustomView Info");

                        if(info.getPerPage() != null){
                            //Get the PerPage from Info
                            console.log("CustomView PerPage: " + info.getPerPage().toString());
                        }

                        if(info.getDefault() != null){
                            //Get the Default from Info
                            console.log("Default: " + info.getDefault());
                        }

                        if(info.getCount() != null){
                            //Get the Count from Info
                            console.log("Count: " + info.getCount().toString());
                        }

                        //Get the Translation instance from Info
                        let translation = info.getTranslation();

                        if(translation != null){
                            console.log("Translation details");

                            //Get the PublicViews of the Translation
                            console.log("PublicViews: " + translation.getPublicViews());

                            //Get the OtherUsersViews of the Translation
                            console.log("OtherUsersViews: " + translation.getOtherUsersViews());

                            //Get the SharedWithMe of the Translation
                            console.log("SharedWithMe: " + translation.getSharedWithMe());

                            //Get the CreatedByMe of the Translation
                            console.log("CreatedByMe: " + translation.getCreatedByMe());
                        }

                        if(info.getPage() != null){
                            //Get the Page from Info
                            console.log("Page: " + info.getPage().toString());
                        }

                        if(info.getMoreRecords() != null){
                            //Get the MoreRecords from Info
                            console.log("MoreRecords: " + info.getMoreRecords().toString());
                        }
                    }
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
     * This method is used to get the data of any specific custom view of the module.
     * Specify the custom view ID of the module in your API request whose custom view data you want to retrieve.
     * @param {String} moduleAPIName Specify the API name of the required module.
     * @param {BigInt} customViewId ID of the CustomView to be obtained.
     */
    static async getCustomView(moduleAPIName, customViewId){

        //example
        // let moduleAPIName = "Leads"
        // let customViewId = 3409643000000087507n;

        //Get instance of CustomViewOperations Class that takes moduleAPIName as parameter
        let customViewsOperations = new CustomViewsOperations(moduleAPIName);

        //Call getCustomView method that takes customViewId as parameter
        let response = await customViewsOperations.getCustomView(customViewId);

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

                    //Get the array of obtained CustomView instances
                    let customViews = responseObject.getCustomViews();

                    for (let index = 0; index < customViews.length; index++) {

                        let customView = customViews[index];

                        //Get the ID of each CustomView
                        console.log("CustomView ID: " + customView.getId());

                        //Get the Name of each CustomView
                        console.log("CustomView Name: " + customView.getName());

                        //Get the DisplayValue of each CustomView
                        console.log("CustomView DisplayValue: " + customView.getDisplayValue());

                        //Get the SharedType of each CustomView
                        console.log("CustomView SharedType: " + customView.getSharedType());

                        //Get the SystemName of each CustomView
                        console.log("CustomView SystemName: " + customView.getSystemName());

                        //Get the Criteria instance of each CustomView
                        let criteria = customView.getCriteria();

                        if(criteria != null){
                            await this.printCriteria(criteria);
                        }

                        let sharedDetails = customView.getSharedDetails();

                        if(sharedDetails != null){
                            sharedDetails.forEach(sharedDetail => {

                                //Get the Name of the each SharedDetails
                                console.log("SharedDetails Name: " + sharedDetail.getName());
    
                                //Get the ID of the each SharedDetails
                                console.log("SharedDetails ID: " + sharedDetail.getId());
    
                                //Get the Type of the each SharedDetails
                                console.log("SharedDetails Type: " + sharedDetail.getType());
    
                                //Get the Subordinates of the each SharedDetails
                                console.log("SharedDetails Subordinates: " + sharedDetail.getSubordinates().toString());
                            });
                        }

                        //Get the SortBy of the each CustomView
                        console.log("CustomView SortBy: " + customView.getSortBy());

                        //Get the Offline of the each CustomView
                        console.log("CustomView Offline: " + customView.getOffline().toString());

                        //Get the Default of each CustomView
                        console.log("CustomView Default: " + customView.getDefault().toString());

                        //Get the SystemDefined of each CustomView
                        console.log("CustomView SystemDefined: " + customView.getSystemDefined().toString());

                        //Get the Category of each CustomView
                        console.log("CustomView Category: " + customView.getCategory());

                        //Get the list of fields in each CustomView
                        let fields = customView.getFields();

                        if(fields != null){
                            console.log("Fields");

                            fields.forEach(field => {
                                console.log(field);
                                
                            });
                        }

                        if(customView.getFavorite() != null){
                            //Get the Favorite of each CustomView
                            console.log("CustomView Favorite: " + customView.getFavorite().toString());
                        }

                        if(customView.getSortOrder() != null){
                            //Get the SortOrder of each CustomView
                            console.log("CustomView SortOrder: " + customView.getSortOrder().toString());
                        } 
                        
                    }

                    //Get the Info instance from object
                    let info = responseObject.getInfo();

                    if(info != null){

                        //Get the Translation instance of CustomView
                        let translation = info.getTranslation();

                        if(translation != null){
                            console.log("Translation details");

                            //Get the PublicViews of the Translation
                            console.log("PublicViews: " + translation.getPublicViews());

                            //Get the OtherUsersViews of the Translation
                            console.log("OtherUsersViews: " + translation.getOtherUsersViews());

                            //Get the SharedWithMe of the Translation
                            console.log("SharedWithMe: " + translation.getSharedWithMe());

                            //Get the CreatedByMe of the Translation
                            console.log("CreatedByMe: " + translation.getCreatedByMe());
                        }
                    }
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

    static async printCriteria(criteria){
        if(criteria.getComparator() != null){
            //Get the Comparator of the Criteria
            console.log("CustomView Criteria Comparator: " + criteria.getComparator().getValue());
        }

        if(criteria.getField() != null){
            //Get the Field of the Criteria
            console.log("CustomView Criteria Field: " + criteria.getField());
        }

        if(criteria.getValue() != null){
            //Get the Value of the Criteria
            console.log("CustomView Criteria Value: " + criteria.getValue().toString());
        }

        // Get the List of Criteria instance of each Criteria
        let criteriaGroup = criteria.getGroup();

        if(criteriaGroup != null){
            criteriaGroup.forEach(eachCriteria => {
                this.printCriteria(eachCriteria);
            });
        }

        if(criteria.getGroupOperator() != null){
            //Get the Group Operator of the Criteria
            console.log("CustomView Criteria Group Operator: " + criteria.getGroupOperator().getValue());
        }
    }

}

module.exports = {CustomView}