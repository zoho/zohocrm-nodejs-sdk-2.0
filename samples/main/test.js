const SDKInitializer = require("../core/com/zoho/crm/api/initializer/initialize").SDKInitializer;
const Attachments = require("../core/com/zoho/crm/api/attachments/attachment").Attachment;
const BluePrint = require("../core/com/zoho/crm/api/blue_print/blue_print").BluePrint;
const BulkRead = require("../core/com/zoho/crm/api/bulk_read/bulk_read").BulkRead;
const BulkWrite = require("../core/com/zoho/crm/api/bulk_write/bulk_write").BulkWrite;
const ContactRoles = require("../core/com/zoho/crm/api/contact_roles/contact_role").ContactRole;
const Currencies = require("../core/com/zoho/crm/api/currencies/currency").Currency;
const CustomViews = require("../core/com/zoho/crm/api/custom_views/custom_view").CustomView;
const Fields = require("../core/com/zoho/crm/api/fields/field").Field;
const File = require("../core/com/zoho/crm/api/files/file").File;
const Layouts = require("../core/com/zoho/crm/api/layouts/layout").Layout;
const Modules = require("../core/com/zoho/crm/api/modules/module").Module;
const Notes = require("../core/com/zoho/crm/api/notes/note").Note;
const Notification = require("../core/com/zoho/crm/api/notification/notification").Notification;
const Org = require("../core/com/zoho/crm/api/organization/organization").Organization;
const Profiles = require("../core/com/zoho/crm/api/profiles/profile").Profile;
const Query = require("../core/com/zoho/crm/api/query/query").Query;
const Records = require("../core/com/zoho/crm/api/records/record").Record;
const RelatedLists = require("../core/com/zoho/crm/api/related_lists/related_list").RelatedList;
const RelatedRecords = require("../core/com/zoho/crm/api/related_records/related_record").RelatedRecord;
const Roles = require("../core/com/zoho/crm/api/roles/role").Role;
const ShareRecords = require("../core/com/zoho/crm/api/share_records/share_record").ShareRecord;
const Tags = require("../core/com/zoho/crm/api/tags/tag").Tag;
const Taxes = require("../core/com/zoho/crm/api/taxes/tax").Tax;
const Territories = require("../core/com/zoho/crm/api/territories/territory").Territory;
const Users = require("../core/com/zoho/crm/api/users/user").User;
const Variables = require("../core/com/zoho/crm/api/variables/variable").Variable;
const VariableGroups = require("../core/com/zoho/crm/api/variable_groups/variable_group").VariableGroup;
const test = require("../core/com/zoho/crm/api/initializer/initialize").SDKInitializer;

class Test{
    static async call(){
        await SDKInitializer.initializeSDK();

        this.attachment();

        this.bluePrint();

        this.bulkRead();

        this.bulkWrite();

        this.contactRole();

        this.currency();

        this.customView();

        this.field();

        this.file();

        this.layout();

        this.module();

        this.note();

        this.notification();

        this.org();

        this.profile();

        this.query();

        this.record();

        this.relatedList();

        this.relatedRecord();

        this.role();

        this.shareRecord();

        this.tag();

        this.tax();

        this.territory();

        this.user();
        
        this.variableGroup();

        this.variable();
    }

    static async attachment(){
        let moduleAPIName = "Leads";

        let recordId = 3409643000002267003n;

        let attachmentId = 3409643000003452001n;

        let destinationFolder = "/Users/abc-XXX/Desktop";

        let absoluteFilePath = "/Users/abc-XXX/Desktop/py.html";

        let attachmentURL = "https://5.imimg.com/data5/KJ/UP/MY-8655440/zoho-crm-500x500.png";

        let attachmentIds = [3409643000002394001n, 3409643000002394002n, 3409643000002394003n, 3409643000002394004n];

        console.log("-----Calling getAttachments()-----");
        await Attachments.getAttachments(moduleAPIName, recordId);

        console.log("-----Calling uploadAttachments()-----");
        await Attachments.uploadAttachments(moduleAPIName, recordId, absoluteFilePath);

        console.log("-----Calling uploadLinkAttachment()-----");
        await Attachments.uploadLinkAttachment(moduleAPIName , recordId, attachmentURL);

        console.log("-----Calling deleteAttachments()-----");
        await Attachments.deleteAttachments(moduleAPIName, recordId, attachmentIds)

        console.log("-----Calling deleteAttachment()-----");
        await Attachments.deleteAttachment(moduleAPIName, recordId, attachmentId);

        console.log("-----Calling downloadAttachment()-----");
        await Attachments.downloadAttachment(moduleAPIName, recordId, attachmentId, destinationFolder)
    }

    static async bluePrint(){
        let moduleAPIName = "Leads";

        let recordId = 3409643000002955002n;

        let transitionId = 3409643000001172075n;

        console.log("-----Calling getBlueprint()-----")
        await BluePrint.getBlueprint(moduleAPIName, recordId);

        console.log("-----Calling updateBlueprint()-----")
        await BluePrint.updateBlueprint(moduleAPIName, recordId, transitionId);
    }

    static async bulkRead(){
        let moduleAPIName = "Leads";

        let jobId = 3409643000002955007n;

        let destinationFolder = "/Users/abc-XXX/Desktop";

        console.log("-----Calling createBulkReadJob()-----")
        await BulkRead.createBulkReadJob(moduleAPIName);

        console.log("-----Calling getBulkReadJobDetails()-----")
        await  BulkRead.getBulkReadJobDetails(jobId);

        console.log("-----Calling downloadResult()-----")
        await BulkRead.downloadResult(jobId, destinationFolder)
    }

    static async bulkWrite(){

        let filePath = "/Users/abc-XXX/Desktop/Leads.zip";

        let orgId = "673xxx";

        let moduleAPIName = "Leads";

        let fileId = "3409xxx";

        let jobId = 3477061000006916033n;

        let downloadUrl = "https://download-accl.zoho.com/v2/crm/673xxx/bulk-write/3409xxx/3409xxx.zip";

        let destinationFolder = "/Users/abc-XXX/Desktop";

        console.log("-----Calling uploadFile()-----")
        await BulkWrite.uploadFile(orgId, filePath);

        console.log("-----Calling createBulkWriteJob()-----")
        await BulkWrite.createBulkWriteJob(moduleAPIName, fileId);

        console.log("-----Calling getBulkWriteJobDetails()-----")
        await BulkWrite.getBulkWriteJobDetails(jobId);

        console.log("-----Calling downloadBulkWriteResult()-----")
        await BulkWrite.downloadBulkWriteResult(downloadUrl, destinationFolder);
    }

    static async contactRole(){
        let contactRoleId = 3409643000003118004n;

        let contactRoleIds = [3409643000003458007n, 3409643000003458006n, 3409643000003458005n];

        console.log("-----Calling getContactRoles()-----")
        await ContactRoles.getContactRoles();

        console.log("-----Calling getContactRole()-----")
        await ContactRoles.getContactRole(contactRoleId);

        console.log("-----Calling createContactRoles()-----")
        await ContactRoles.createContactRoles();

        console.log("-----Calling updateContactRoles()-----")
        await ContactRoles.updateContactRoles();

        console.log("-----Calling updateContactRole()-----")
        await ContactRoles.updateContactRole(contactRoleId);

        console.log("-----Calling deleteContactRole()-----")
        await ContactRoles.deleteContactRole(contactRoleId);

        console.log("-----Calling deleteContactRoles()-----")
        await ContactRoles.deleteContactRoles(contactRoleIds);
    }

    static async currency(){
        let currencyId = 3409643000002293037n;

        console.log("-----Calling enableMultipleCurrencies()-----")
        await Currencies.enableMultipleCurrencies();

        console.log("-----Calling getCurrencies()-----")
        await Currencies.getCurrencies();

        console.log("-----Calling getCurrency()-----")
        await Currencies.getCurrency(currencyId);

        console.log("-----Calling addCurrencies()-----")
        await Currencies.addCurrencies();

        console.log("-----Calling updateCurrencies()-----")
        await Currencies.updateCurrencies();

        console.log("-----Calling updateCurrency()-----")
        await Currencies.updateCurrency(currencyId);

        console.log("-----Calling updateBaseCurrency()-----")
        await Currencies.updateBaseCurrency();
    }

    static async customView(){
        let moduleAPIName = "Sales_Orders";

        let customViewId = 3409643000002427117n;

        console.log("-----Calling getCustomViews()-----")
        await CustomViews.getCustomViews(moduleAPIName);

        console.log("-----Calling getCustomView()-----")
        await CustomViews.getCustomView(moduleAPIName, customViewId);
    }

    static async field(){
        let moduleAPIName = "Contacts"

        let fieldId = 3409643000000152009n;

        console.log("-----Calling getFields()-----")
        await Fields.getFields(moduleAPIName);

        console.log("-----Calling getField()-----")
        await Fields.getField(moduleAPIName, fieldId);
    }

    static async file(){

        let destinationFolder = "/Users/abc-XXX/Desktop";

        let fileId = "ll60f0225a94cb9d543f284ee1a11f60e3ab5";

        console.log("-----Calling uploadFiles()-----");
        await File.uploadFiles();

        console.log("-----Calling getFile()-----");
        await File.getFile(fileId, desstinationFolder);
    }

    static async layout(){
        let moduleAPIName = "Leads";

        let layoutId = 3409643000000091055n;

        console.log("-----Calling getLayouts()-----")
        await Layouts.getLayouts(moduleAPIName);

        console.log("-----Calling getLayout()-----")
        await Layouts.getLayout(moduleAPIName, layoutId);
    }

    static async module(){
        let moduleAPIName = "Test";

        let moduleId = 3409643000000252001n;

        console.log("-----Calling getModules()-----")
        await Modules.getModules();

        console.log("-----Calling getModule()-----")
        await Modules.getModule(moduleAPIName);

        console.log("-----Calling updateModuleByAPIName()-----")
        await Modules.updateModuleByAPIName(moduleAPIName);

        console.log("-----Calling updateModuleById()-----")
        await Modules.updateModuleById(moduleId);
    }

    static async note(){
        let noteId = 3409643000003465001n;

        let noteIds = [3409643000003465001n, 3409643000003465002n, 3409643000003465003n, 3409643000003465004n, 3409643000003465005n];

        console.log("-----Calling getNotes()-----")
        await Notes.getNotes();

        console.log("-----Calling getNote()-----")
        await Notes.getNote(noteId);

        console.log("-----Calling createNotes()-----")
        await Notes.createNotes();

        console.log("-----Calling updateNotes()-----")
        await Notes.updateNotes();

        console.log("-----Calling updateNote()-----")
        await Notes.updateNote(noteId);

        console.log("-----Calling deleteNotes()-----")
        await Notes.deleteNotes(noteIds);

        console.log("-----Calling deleteNote()-----")
        await Notes.deleteNote(noteId);
    }

    static async notification() {
        let channelIds = [100000006800211n, 100000006800232n];

        console.log("-----Calling enableNotifications()-----")
        await Notification.enableNotifications();

        console.log("-----Calling getNotificationDetails()-----")
        await Notification.getNotificationDetails();

        console.log("-----Calling updateNotifications()-----")
        await Notification.updateNotifications();

        console.log("-----Calling updateNotification()-----")
        await Notification.updateNotification();

        console.log("-----Calling disableNotifications()-----")
        await Notification.disableNotifications(channelIds);

        console.log("-----Calling disableNotification()-----")
        await Notification.disableNotification();
    }

    static async org(){
        let absoluteFilePath = "/Users/abc-XXX/Desktop/image.png";

        console.log("-----Calling getOrganization()-----")
        await Org.getOrganization();

        console.log("-----Calling uploadOrganizationPhoto()-----")
        await Org.uploadOrganizationPhoto(absoluteFilePath);
    }

    static async profile(){
        let profileId = 3477061000000026014n;

        console.log("-----Calling getProfiles()-----")
        await Profiles.getProfiles();

        console.log("-----Calling getProfile()-----")
        await Profiles.getProfile(profileId)
    }

    static async query() {
        console.log("-----Calling getRecords()-----")
        await Query.getRecords();
    }

    static async record(){
        let moduleAPIName = "Leads";
        
        let recordId = 3409643000000729033n;

        let destinationFolder = "/Users/abc-XXX/Desktop";

        let absoluteFilePath = "/Users/abc-XXX/Desktop/record_image.png";

        let recordIds = [3409643000000729030n, 3409643000000729017n, 3409643000000729009n];

        let jobId = "3409643000000729055";

        console.log("-----Calling getRecord()-----")
        await Records.getRecord(moduleAPIName, recordId);

        console.log("-----Calling updateRecord()-----")
        await Records.updateRecord(moduleAPIName, recordId);

        console.log("-----Calling deleteRecord()-----")
        await Records.deleteRecord(moduleAPIName, recordId);

        console.log("-----Calling getRecords()-----")
        await Records.getRecords(moduleAPIName);

        console.log("-----Calling createRecords()-----");
        await Records.createRecords(moduleAPIName);

        console.log("-----Calling updateRecords()-----")
        await Records.updateRecords(moduleAPIName);

        console.log("-----Calling deleteRecords()-----")
        await Records.deleteRecords(moduleAPIName, recordIds);

        console.log("-----Calling upsertRecords()-----")
        await Records.upsertRecords(moduleAPIName);

        console.log("-----Calling getDeletedRecords()-----")
        await Records.getDeletedRecords(moduleAPIName);

        console.log("-----Calling searchRecords()-----")
        await Records.searchRecords(moduleAPIName);

        console.log("-----Calling convertLead()-----")
        await Records.convertLead(recordId);

        console.log("-----Calling uploadPhoto()-----");
        await Records.uploadPhoto(moduleAPIName, recordId, absoluteFilePath);

        console.log("-----Calling getPhoto()-----");
        await Records.getPhoto(moduleAPIName, recordId, destinationFolder);

        console.log("-----Calling deletePhoto()-----")
        await Records.deletePhoto(moduleAPIName, recordId);

        console.log("-----Calling massUpdateRecords()-----")
        await Records.massUpdateRecords(moduleAPIName);

        console.log("-----Calling getMassUpdateStatus()-----")
        await Records.getMassUpdateStatus(moduleAPIName, jobId);
    }

    static async relatedList(){
        let moduleAPIName = "Contacts";

        let relatedListId = 3409643000002904150n;

        console.log("-----Calling getRelatedLists()-----")
        await RelatedLists.getRelatedLists(moduleAPIName);

        console.log("-----Calling getRelatedList()-----")
        await RelatedLists.getRelatedList(moduleAPIName, relatedListId)
    }

    static async relatedRecord(){
        let moduleAPIName = "Products";

        let recordId = 3409643000002757042n;

        let relatedModuleAPIName = "Price_Books";

        let relatedId = 3409643000002757053n;

        let relatedIds = [3409643000002757124n, 3409643000002757359n];

        console.log("-----Calling getRelatedRecords()-----")
        await RelatedRecords.getRelatedRecords(moduleAPIName, recordId, relatedModuleAPIName);

        console.log("-----Calling getRelatedRecord()-----")
        await RelatedRecords.getRelatedRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId)

        console.log("-----Calling updateRelatedRecord()-----")
        await RelatedRecords.updateRelatedRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId);

        console.log("-----Calling updateRelatedRecords()-----")
        await RelatedRecords.updateRelatedRecords(moduleAPIName, recordId, relatedModuleAPIName);

        console.log("-----Calling deLinkRecords()-----")
        await RelatedRecords.deLinkRecords(moduleAPIName, recordId, relatedModuleAPIName, relatedIds);

        console.log("-----Calling deLinkRecord()-----")
        await RelatedRecords.deLinkRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId);
    }

    static async role(){
        let roleId = 3409643000000026005n;

        console.log("-----Calling getRoles()-----")
        await Roles.getRoles();

        console.log("-----Calling getRole()-----")
        await Roles.getRole(roleId);
    }

    static async shareRecord(){
        let moduleAPIName = "Contacts";

        let recordId = 3409643000002112011n;

        console.log("-----Calling shareRecord()-----")
        await ShareRecords.shareRecord(moduleAPIName, recordId);

        console.log("-----Calling updateSharePermissions()-----")
        await ShareRecords.updateSharePermissions(moduleAPIName, recordId);

        console.log("-----Calling getSharedRecordDetails()-----")
        await ShareRecords.getSharedRecordDetails(moduleAPIName, recordId);

        console.log("-----Calling revokeSharedRecord()-----")
        await ShareRecords.revokeSharedRecord(moduleAPIName, recordId);
    }

    static async tag(){
        let moduleAPIName = "Leads";

        let tagId = 3409643000003477002n;

        let recordId = 3409643000002821002n;

        let tagNames = ["addtag23","addtag12"];

        let recordIds = [3409643000002821002n, 3409643000002730218n, 3409643000002469044n];

        let conflictId = "3409643000002827001";

        console.log("-----Calling getTags()-----")
        await Tags.getTags(moduleAPIName);

        console.log("-----Calling createTags()-----")
        await Tags.createTags(moduleAPIName);

        console.log("-----Calling updateTags()-----")
        await Tags.updateTags(moduleAPIName);

        console.log("-----Calling updateTag()-----")
        await Tags.updateTag(moduleAPIName, tagId);

        console.log("-----Calling mergeTags()-----")
        await Tags.mergeTags(tagId, conflictId);
        
        console.log("-----Calling addTagsToRecord()-----")
        await Tags.addTagsToRecord(moduleAPIName, recordId, tagNames);
        
        console.log("-----Calling removeTagsFromRecord()-----")
        await Tags.removeTagsFromRecord(moduleAPIName, recordId, tagNames);
        
        console.log("-----Calling addTagsToMultipleRecords()-----")
        await Tags.addTagsToMultipleRecords(moduleAPIName, recordIds, tagNames);
        
        console.log("-----Calling removeTagsFromMultipleRecords()-----")
        await Tags.removeTagsFromMultipleRecords(moduleAPIName, recordIds, tagNames);
        
        console.log("-----Calling getRecordCountForTag()-----")
        await Tags.getRecordCountForTag(moduleAPIName, tagId);

        console.log("-----Calling deleteTag()-----")
        await Tags.deleteTag(tagId);
    }


    static async tax(){
        let taxId = 3409643000002540014n;

        let taxIds = [3409643000002540424n, 3409643000002540510n];

        console.log("-----Calling getTaxes()-----")
        await Taxes.getTaxes();

        console.log("-----Calling getTax()-----")
        await Taxes.getTax(taxId);

        console.log("-----Calling createTaxes()-----")
        await Taxes.createTaxes();

        console.log("-----Calling updateTaxes()-----")
        await Taxes.updateTaxes();

        console.log("-----Calling deleteTaxes()-----")
        await Taxes.deleteTaxes(taxIds);

        console.log("-----Calling deleteTax()-----")
        await Taxes.deleteTax(taxId);
    }

    static async territory(){
        let territoryId = 3409643000000505385n;

        console.log("-----Calling getTerritories()-----")
        await Territories.getTerritories();
        
        console.log("-----Calling getTerritory()-----")
        await Territories.getTerritory(territoryId);
    }

    static async user(){
        let userId = 3409643000000302031n;

        console.log("-----Calling getUsers()-----")
        await Users.getUsers();

        console.log("-----Calling getUser()-----")
        await Users.getuser(userId);

        console.log("-----Calling updateUsers()-----")
        await Users.updateUsers();

        console.log("-----Calling updateUser()-----")
        await Users.updateUser(userId);

        console.log("-----Calling deleteUser()-----")
        await Users.deleteUser(userId);

        console.log("-----Calling createUser()-----")
        await Users.createUser();
    }

    static async variableGroup(){
        let variableGroupId = 3409643000003480050n;

        let variableGroupAPIName = "General";

        console.log("-----Calling getVariableGroups()-----")
        await VariableGroups.getVariableGroups();

        console.log("-----Calling getVariableGroupById()-----")
        await VariableGroups.getVariableGroupById(variableGroupId);

        console.log("-----Calling getVariableGroupByAPIName()-----")
        await VariableGroups.getVariableGroupByAPIName(variableGroupAPIName);
    }

    static async variable(){

        let variableIds = [3409643000003480006n, 3409643000003480007n, 3409643000003480008n, 3409643000003480010n];

        let varaibleId = 3409643000003480005n;

        let variableName = "Variable551";

        console.log("-----Calling createVariables()-----")
        await Variables.createVariables();

        console.log("-----Calling getVariables()-----")
        await Variables.getVariables();

        console.log("-----Calling getVariableById()-----")
        await Variables.getVariableById();

        console.log("-----Calling getVariableForAPIName()-----")
        await Variables.getVariableForAPIName(variableName);

        console.log("-----Calling updateVariableByAPIName()-----")
        await Variables.updateVariableByAPIName(variableName);

        console.log("-----Calling updateVariableById()-----")
        await Variables.updateVariableById(varaibleId);

        console.log("-----Calling updateVariables()-----")
        await Variables.updateVariables();

        console.log("-----Calling deleteVariables()-----")
        await Variables.deleteVariables(variableIds);

        console.log("-----Calling deleteVariable()-----")
        await Variables.deleteVariable(varaibleId);
    }
}

Test.call();

module.exports = {Test};