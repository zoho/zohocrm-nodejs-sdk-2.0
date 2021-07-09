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

    static async attachment() {
        let moduleAPIName = "Leads";

        let recordId = 6838056n;

        let attachmentId = 347706110605001n;

        let destinationFolder = "/Users/user_name/Documents";

        let absoluteFilePath = "/Users/user_name/Documents/download.png";

        console.log("-----Calling getAttachments()-----");
        await Attachments.getAttachments(moduleAPIName, recordId);

        console.log("-----Calling uploadAttachments()-----");
        await Attachments.uploadAttachments(moduleAPIName, recordId, absoluteFilePath);

        console.log("-----Calling uploadLinkAttachment()-----");
        await Attachments.uploadLinkAttachment(moduleAPIName , recordId, "https://drones2.com");

        console.log("-----Calling deleteAttachments()-----");
        await Attachments.deleteAttachments(moduleAPIName, recordId, [347706110603001n, 347706110604001n,739487589374589n,89358395n])

        console.log("-----Calling deleteAttachment()-----");
        await Attachments.deleteAttachment(moduleAPIName, recordId, attachmentId);

        console.log("-----Calling downloadAttachment()-----");
        await Attachments.downloadAttachment(moduleAPIName, recordId, attachmentId, destinationFolder)
    }

    static async bluePrint() {
        let moduleAPIName = "Leads";

        let recordId = 4381002n;

        let transitionId = 0173093n;

        console.log("-----Calling getBlueprint()-----")
        await BluePrint.getBlueprint(moduleAPIName, recordId);

        console.log("-----Calling updateBlueprint()-----")
        await BluePrint.updateBlueprint(moduleAPIName, recordId, transitionId);
    }

    static async bulkRead() {
        let moduleAPIName = "Leads";

        let jobId = 347706110610001n;

        console.log("-----Calling createBulkReadJob()-----")
        await BulkRead.createBulkReadJob(moduleAPIName);

        console.log("-----Calling getBulkReadJobDetails()-----")
        await  BulkRead.getBulkReadJobDetails(jobId);

        console.log("-----Calling downloadResult()-----")
        await BulkRead.downloadResult(347706110610001n, "/Users/user_name/Documents")
    }

    static async bulkWrite() {

        let filePath = "/Users/user_name/Documents/Leads.zip";

        let orgId = "xxxxxx";

        let downloadUrl = "https://download-accl.zoho.com/v2/crm/xxxxxx/bulk-write/347706110616001/347706110616001.zip";

        await BulkWrite.uploadFile(orgId, filePath);

        await BulkWrite.createBulkWriteJob("Leads", "347706110614001");

        await BulkWrite.getBulkWriteJobDetails(347706110616001n);

        await BulkWrite.downloadBulkWriteResult(downloadUrl, "/Users/user_name/Documents")
    }

    static async contactRole() {
        let contactRoleId = 347706110624002n;

        let contactRoleIds = ["347706110624003", "347706110624004", "347706110624005"];

        let contactId = 0208070n;
        
        let dealId = 0207273n;

        console.log("-----Calling getContactRoles()-----")
        await ContactRoles.getContactRoles();

        console.log("-----Calling getContactRole()-----")
        await ContactRoles.getContactRole(contactRoleId);

        console.log( "-----Calling createContactRoles()-----")
        await ContactRoles.createContactRoles();

        console.log("-----Calling updateContactRoles()-----")
        await ContactRoles.updateContactRoles();

        console.log("-----Calling updateContactRole()-----")
        await ContactRoles.updateContactRole(contactRoleId);

        console.log("-----Calling deleteContactRole()-----")
        await ContactRoles.deleteContactRole(contactRoleId);

        console.log("-----Calling deleteContactRoles()-----")
        await ContactRoles.deleteContactRoles(contactRoleIds);

        await ContactRoles.getAllContactRolesOfDeal(dealId);

		await ContactRoles.getContactRoleOfDeal(contactId, dealId);

		await ContactRoles.addContactRoleToDeal(contactId, dealId);

		await ContactRoles.removeContactRoleFromDeal(contactId, dealId);
    }

    static async currency(){
        let currencyId = 6011001n;

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

    static async customView() {
        let moduleAPIName = "Sales_orders"

        let customViewId = 0087671n;

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", 
		"Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
		 "Purchase_Orders", "Accounts", "Cases", "Notes"];
		
		// names.forEach(async name => {
		// 	await CustomViews.getCustomViews(name);
		// });

        console.log("-----Calling getCustomViews()-----")
        await CustomViews.getCustomViews(moduleAPIName);

        console.log("-----Calling getCustomView()-----")
        await CustomViews.getCustomView(moduleAPIName, customViewId);
    }

    static async field() {
        let moduleAPIName = "Contacts"

        let fieldId = 340964300152009n;

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", 
		"Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
		 "Purchase_Orders", "Accounts", "Cases", "Notes"];
		
        // names.forEach(async name => {
		// 	await Fields.getFields(name);
		// });

        console.log("-----Calling getFields()-----")
        await Fields.getFields(moduleAPIName);

        console.log("-----Calling getField()-----")
        await Fields.getField(moduleAPIName, fieldId);
    }

    static async file() {
        let destinationFolder = "/Users/user_name/Documents";

        let fileId = "ae9c7cefa418aec1d6a5cc2d9ab35c32242bfc2e8335c6f560d272c204ebbd89";

        console.log("-----Calling uploadFile()-----");
        await File.uploadFiles();

        console.log("-----Calling getFile()-----");
        await File.getFile(fileId, destinationFolder);
    }

    static async layout() {
        let moduleAPIName = "Leads";

        let layoutId = 340964300091055n;

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", 
		"Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
		 "Purchase_Orders", "Accounts", "Cases", "Notes"];
        
        // names.forEach(async name => {
		// 	await Layouts.getLayouts(name);
		// });

        console.log("-----Calling getLayouts()-----")
        await Layouts.getLayouts(moduleAPIName);

        console.log("-----Calling getLayout()-----")
        await Layouts.getLayout(moduleAPIName, layoutId);
    }

    static async module() {
        let moduleAPIName = "Test";

        let moduleId = 340964300252001n;

        console.log("-----Calling getModules()-----")
        await Modules.getModules();

        console.log("-----Calling getModule()-----")
        await Modules.getModule(moduleAPIName);

        console.log("-----Calling updateModuleByAPIName()-----")
        await Modules.updateModuleByAPIName(moduleAPIName);

        console.log("-----Calling updateModuleById()-----")
        await Modules.updateModuleById(moduleId);
    }

    static async note() {
        let noteId = 7683022n;

        let noteIds = [7697018n, 7697019n, 7697020n, 347706110640006n, 347706110640005n];

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
        let channelIds = [10006800211n, 10006800232n];

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

        console.log("-----Calling getNotificationDetails()-----")
        await Notification.disableNotification();
    }

    static async org() {
        let filePath = "/Users/user_name/Documents/download.png";

        console.log("-----Calling getOrganization()-----")
        await Org.getOrganization();

        console.log("-----Calling uploadOrganizationPhoto()-----")
        await Org.uploadOrganizationPhoto(filePath);
    }

    static async profile() {
        let profileId = 0026014n;

        console.log("-----Calling getProfiles()-----")
        await Profiles.getProfiles();

        console.log("-----Calling getProfile()-----")
        await Profiles.getProfile(profileId)
    }

    static async query() {
        await Query.getRecords();
    }

    static async record() {
        let moduleAPIName = "leads";
        
        let recordId = 347706110654001n;

        let externalFieldValue = "Last_Name1";

        let destinationFolder = "/Users/user_name/Documents";

        let filePath = "/Users/user_name/Documents/download.png";

        let recordIds = ["340964300729017", "340964300729009"];

        let jobId = "347706110671013";

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", 
		"Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
		 "Purchase_Orders", "Accounts", "Cases", "Notes"];
        
        // names.forEach(async name => {
        //     await Records.getRecords(name);
        // });

        console.log("-----Calling getRecord()-----")
        await Records.getRecord(moduleAPIName, recordId, destinationFolder);

        await Records.updateRecord(moduleAPIName, recordId);

        await Records.deleteRecord(moduleAPIName, recordId);

        await Records.getRecordUsingExternalId(moduleAPIName, externalFieldValue, destinationFolder);

		await Records.updateRecordUsingExternalId(moduleAPIName, externalFieldValue);
		
		await Records.deleteRecordUsingExternalId(moduleAPIName, externalFieldValue);

        console.log("-----Calling getRecords()-----")
        await Records.getRecords(moduleAPIName);

        console.log("-----Calling createRecords()-----");
        await Records.createRecords(moduleAPIName);

        await Records.updateRecords(moduleAPIName);

        await Records.deleteRecords(moduleAPIName, recordIds);

        await Records.upsertRecords(moduleAPIName);

        await Records.getDeletedRecords(moduleAPIName);

        await Records.searchRecords(moduleAPIName);

        await Records.convertLead(347706110654001n);

        console.log("-----Calling uploadPhoto()-----");
        await Records.uploadPhoto(moduleAPIName, recordId, filePath);

        console.log("-----Calling getPhoto()-----");
        await Records.getPhoto(moduleAPIName, recordId, destinationFolder);

        await Records.deletePhoto(moduleAPIName, recordId);

        await Records.massUpdateRecords(moduleAPIName);

        await Records.getMassUpdateStatus(moduleAPIName, jobId);
    }

    static async relatedList() {
        let moduleAPIName = "Contacts";

        let relatedListId = 340964302904150n;

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", 
		"Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
		 "Purchase_Orders", "Accounts", "Cases", "Notes"];
		
		// names.forEach(async name => {
		// 	await RelatedLists.getRelatedLists(name);
		// });

        console.log("-----Calling getRelatedLists()-----")
        await RelatedLists.getRelatedLists(moduleAPIName);

        console.log("-----Calling getRelatedList()-----")
        await RelatedLists.getRelatedList(moduleAPIName, relatedListId)
    }

    static async relatedRecord() {
        let moduleAPIName = "leads";

        let recordId = 347706110665026n;

        let relatedModuleAPIName = "products";

        let relatedId = 347706110665032n;

        let relatedIds = [347706110640047n, 347706110538010n];

        let externalValue = "TestExternalLead";

		let externalFieldValue = "TestExternalProduct";

        let destinationFolder = "";

        console.log("-----Calling getRelatedRecords()-----")
        await RelatedRecords.getRelatedRecords(moduleAPIName, recordId, relatedModuleAPIName);

        console.log("-----Calling updateRelatedRecords()-----")
        await RelatedRecords.updateRelatedRecords(moduleAPIName, recordId, relatedModuleAPIName);

        console.log("-----Calling deLinkRecords()-----")
        await RelatedRecords.deLinkRecords(moduleAPIName, recordId, relatedModuleAPIName, relatedIds);

        await RelatedRecords.getRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName);
		
		await RelatedRecords.updateRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName);
		
		await RelatedRecords.deleteRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, relatedIds);

        console.log("-----Calling getRelatedRecord()-----")
        await RelatedRecords.getRelatedRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId)

        console.log("-----Calling updateRelatedRecord()-----")
        await RelatedRecords.updateRelatedRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId);

        console.log("-----Calling deLinkRecord()-----")
        await RelatedRecords.deLinkRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId);

        await RelatedRecords.getRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, externalFieldValue, destinationFolder);
		
		await RelatedRecords.updateRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, externalFieldValue);
		
		await RelatedRecords.deleteRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, externalFieldValue);
    }

    static async role() {
        let roleId = 340964300026005n;

        console.log("-----Calling getRoles()-----")
        await Roles.getRoles();

        console.log("-----Calling getRole()-----")
        await Roles.getRole(roleId);
    }

    static async shareRecord() {
        let moduleAPIName = "Leads";

        let recordId = 5623115n;

        console.log("-----Calling shareRecord()-----")
        await ShareRecords.shareRecord(moduleAPIName, recordId);

        console.log("-----Calling updateSharePermissions()-----")
        await ShareRecords.updateSharePermissions(moduleAPIName, recordId);

        console.log("-----Calling getSharedRecordDetails()-----")
        await ShareRecords.getSharedRecordDetails(moduleAPIName, recordId);

        console.log("-----Calling revokeSharedRecord()-----")
        await ShareRecords.revokeSharedRecord(moduleAPIName, recordId);
    }

    static async tag() {
        let moduleAPIName = "Leads";

        let tagId = 8662001n;

        let recordId = 347706110671013n;

        let tagNames = ["edited-tagname,addtag"];

        let recordIds = [347706110671012n, 347706110671013n, 340964302469044n];

        let conflictId = "8662001";

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


    static async tax() {
        let taxId = 347706110556002n;

        console.log("-----Calling getTaxes()-----")
        await Taxes.getTaxes();

        console.log("-----Calling getTax()-----")
        await Taxes.getTax(taxId);

        console.log("-----Calling createTaxes()-----")
        await Taxes.createTaxes();

        console.log("-----Calling updateTaxes()-----")
        await Taxes.updateTaxes();

        console.log("-----Calling deleteTaxes()-----")
        await Taxes.deleteTaxes([347706110677010n, 347706110677009n])

        console.log("-----Calling deleteTax()-----")
        await Taxes.deleteTax(347706110031041n)
    }

    static async territory() {
        let territoryId = 340964300505385n;

        console.log("-----Calling getTerritories()-----")
        await Territories.getTerritories();
        
        console.log("-----Calling getTerritory()-----")
        await Territories.getTerritory(territoryId);
    }

    static async user() {
        let userId = 347706110671023n;

        console.log("-----Calling getUsers()-----")
        await Users.getUsers();

        console.log("-----Calling createUser()-----")
        await Users.createUser();

        console.log("-----Calling getUser()-----")
        await Users.getUser(userId);

        console.log("-----Calling updateUsers()-----")
        await Users.updateUsers();

        console.log("-----Calling updateUser()-----")
        await Users.updateUser(userId);

        console.log("-----Calling deleteUser()-----")
        await Users.deleteUser(userId);
    }

    static async variableGroup(){
        let variableGroupId = 3089001n;

        let variableGroupAPIName = "General";

        console.log("-----Calling getVariableGroups()-----")
        await VariableGroups.getVariableGroups();

        console.log("-----Calling getVariableGroupById()-----")
        await VariableGroups.getVariableGroupById(variableGroupId);

        console.log("-----Calling getVariableGroupByAPIName()-----")
        await VariableGroups.getVariableGroupByAPIName(variableGroupAPIName);
    }

    static async variable() {
        let variableIds = [7444014n];

        console.log("-----Calling createVariables()-----")
        await Variables.createVariables();

        console.log("-----Calling getVariables()-----")
        await Variables.getVariables();

        console.log("-----Calling getVariableById()-----")
        await Variables.getVariableById(7022031n);

        console.log("-----Calling getVariableForAPIName()-----")
        await Variables.getVariableForAPIName("Variable66133");

        console.log("-----Calling updateVariableByAPIName()-----")
        await Variables.updateVariableByAPIName("Variable66133");

        console.log("-----Calling updateVariableById()-----")
        await Variables.updateVariableById(6852038n);

        console.log("-----Calling updateVariables()-----")
        await Variables.updateVariables();

        console.log("-----Calling deleteVariables()-----")
        await Variables.deleteVariables(variableIds);

        console.log("-----Calling deleteVariable()-----")
        await Variables.deleteVariable(7022031n)
    }
}

Test.call();

module.exports = {Test};