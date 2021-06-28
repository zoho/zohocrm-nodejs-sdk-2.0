const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class CustomView{

	id;
	name;
	systemName;
	displayValue;
	sharedType;
	category;
	sortBy;
	sortOrder;
	favorite;
	offline;
	default1;
	systemDefined;
	criteria;
	sharedDetails;
	fields;
	keyModified = new Map();
	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt representing the id
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt representing the id
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName()	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String representing the name
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the systemName
	 * @returns {String} A String representing the systemName
	 */
	getSystemName()	{
		return this.systemName;

	}

	/**
	 * The method to set the value to systemName
	 * @param {String} systemName A String representing the systemName
	 */
	setSystemName(systemName)	{
		if((systemName != null) && (!(Object.prototype.toString.call(systemName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: systemName EXPECTED TYPE: String", null, null);
		}
		this.systemName = systemName;
		this.keyModified.set("system_name", 1);

	}

	/**
	 * The method to get the displayValue
	 * @returns {String} A String representing the displayValue
	 */
	getDisplayValue()	{
		return this.displayValue;

	}

	/**
	 * The method to set the value to displayValue
	 * @param {String} displayValue A String representing the displayValue
	 */
	setDisplayValue(displayValue)	{
		if((displayValue != null) && (!(Object.prototype.toString.call(displayValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayValue EXPECTED TYPE: String", null, null);
		}
		this.displayValue = displayValue;
		this.keyModified.set("display_value", 1);

	}

	/**
	 * The method to get the sharedType
	 * @returns {String} A String representing the sharedType
	 */
	getSharedType()	{
		return this.sharedType;

	}

	/**
	 * The method to set the value to sharedType
	 * @param {String} sharedType A String representing the sharedType
	 */
	setSharedType(sharedType)	{
		if((sharedType != null) && (!(Object.prototype.toString.call(sharedType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharedType EXPECTED TYPE: String", null, null);
		}
		this.sharedType = sharedType;
		this.keyModified.set("shared_type", 1);

	}

	/**
	 * The method to get the category
	 * @returns {String} A String representing the category
	 */
	getCategory()	{
		return this.category;

	}

	/**
	 * The method to set the value to category
	 * @param {String} category A String representing the category
	 */
	setCategory(category)	{
		if((category != null) && (!(Object.prototype.toString.call(category) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: category EXPECTED TYPE: String", null, null);
		}
		this.category = category;
		this.keyModified.set("category", 1);

	}

	/**
	 * The method to get the sortBy
	 * @returns {String} A String representing the sortBy
	 */
	getSortBy()	{
		return this.sortBy;

	}

	/**
	 * The method to set the value to sortBy
	 * @param {String} sortBy A String representing the sortBy
	 */
	setSortBy(sortBy)	{
		if((sortBy != null) && (!(Object.prototype.toString.call(sortBy) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortBy EXPECTED TYPE: String", null, null);
		}
		this.sortBy = sortBy;
		this.keyModified.set("sort_by", 1);

	}

	/**
	 * The method to get the sortOrder
	 * @returns {String} A String representing the sortOrder
	 */
	getSortOrder()	{
		return this.sortOrder;

	}

	/**
	 * The method to set the value to sortOrder
	 * @param {String} sortOrder A String representing the sortOrder
	 */
	setSortOrder(sortOrder)	{
		if((sortOrder != null) && (!(Object.prototype.toString.call(sortOrder) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortOrder EXPECTED TYPE: String", null, null);
		}
		this.sortOrder = sortOrder;
		this.keyModified.set("sort_order", 1);

	}

	/**
	 * The method to get the favorite
	 * @returns {number} A number representing the favorite
	 */
	getFavorite()	{
		return this.favorite;

	}

	/**
	 * The method to set the value to favorite
	 * @param {number} favorite A number representing the favorite
	 */
	setFavorite(favorite)	{
		if((favorite != null) && (!(Object.prototype.toString.call(favorite) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: favorite EXPECTED TYPE: number", null, null);
		}
		this.favorite = favorite;
		this.keyModified.set("favorite", 1);

	}

	/**
	 * The method to get the offline
	 * @returns {Boolean} A Boolean representing the offline
	 */
	getOffline()	{
		return this.offline;

	}

	/**
	 * The method to set the value to offline
	 * @param {Boolean} offline A Boolean representing the offline
	 */
	setOffline(offline)	{
		if((offline != null) && (!(Object.prototype.toString.call(offline) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: offline EXPECTED TYPE: Boolean", null, null);
		}
		this.offline = offline;
		this.keyModified.set("offline", 1);

	}

	/**
	 * The method to get the default
	 * @returns {Boolean} A Boolean representing the default1
	 */
	getDefault()	{
		return this.default1;

	}

	/**
	 * The method to set the value to default
	 * @param {Boolean} default1 A Boolean representing the default1
	 */
	setDefault(default1)	{
		if((default1 != null) && (!(Object.prototype.toString.call(default1) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: default1 EXPECTED TYPE: Boolean", null, null);
		}
		this.default1 = default1;
		this.keyModified.set("default", 1);

	}

	/**
	 * The method to get the systemDefined
	 * @returns {Boolean} A Boolean representing the systemDefined
	 */
	getSystemDefined()	{
		return this.systemDefined;

	}

	/**
	 * The method to set the value to systemDefined
	 * @param {Boolean} systemDefined A Boolean representing the systemDefined
	 */
	setSystemDefined(systemDefined)	{
		if((systemDefined != null) && (!(Object.prototype.toString.call(systemDefined) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: systemDefined EXPECTED TYPE: Boolean", null, null);
		}
		this.systemDefined = systemDefined;
		this.keyModified.set("system_defined", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns {Criteria} An instance of Criteria
	 */
	getCriteria()	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param {Criteria} criteria An instance of Criteria
	 */
	setCriteria(criteria)	{
		const Criteria = require("./criteria").MasterModel;
		if((criteria != null) && (!(criteria instanceof Criteria)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Criteria", null, null);
		}
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

	}

	/**
	 * The method to get the sharedDetails
	 * @returns {Array} An Array representing the sharedDetails
	 */
	getSharedDetails()	{
		return this.sharedDetails;

	}

	/**
	 * The method to set the value to sharedDetails
	 * @param {Array} sharedDetails An Array representing the sharedDetails
	 */
	setSharedDetails(sharedDetails)	{
		if((sharedDetails != null) && (!(Object.prototype.toString.call(sharedDetails) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharedDetails EXPECTED TYPE: Array", null, null);
		}
		this.sharedDetails = sharedDetails;
		this.keyModified.set("shared_details", 1);

	}

	/**
	 * The method to get the fields
	 * @returns {Array} An Array representing the fields
	 */
	getFields()	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param {Array} fields An Array representing the fields
	 */
	setFields(fields)	{
		if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: Array", null, null);
		}
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param {String} key A String representing the key
	 * @returns {number} A number representing the modification
	 */
	isKeyModified(key)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param {String} key A String representing the key
	 * @param {number} modification A number representing the modification
	 */
	setKeyModified(key, modification)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: number", null, null);
		}
		this.keyModified.set(key, modification);

	}

}
module.exports = {
	MasterModel : CustomView,
	CustomView : CustomView
}
