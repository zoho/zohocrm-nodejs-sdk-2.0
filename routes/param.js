/**
 * This class represents the HTTP parameter.
 */
class Param{
	
	name;
	className;
	
	/**
	 * Creates an Param class instance with the specified parameter name.
	 * @param {string} name - A String containing the parameter name.
	 * @param {string} className - A String containing the class name.
	 */
	constructor(name, className=null) {
		this.name = name;
		this.className = className;
	}
	
	/**
	 * This is a getter method to get parameter name.
	 * @returns {string} A String representing the parameter name.
	 */
	get name() {
		return this.name;
	}

	/**
	 * This is a getter method to get class name.
	 * @returns {string} A String representing the class name.
	 */
	get className() {
		return this.className;
	}
}

module.exports = {
	MasterModel : Param, 
	Param : Param
}