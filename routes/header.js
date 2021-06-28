/**
 * This class represents the HTTP header.
 */
class Header{

	name;
	className;

	/**
	 * Creates a Header class instance with the specified header name.
	 * @param {string} name - A String containing the header name.
	 * @param {string} className - A String containing the class name.
	 */
	constructor(name, className=null) {
		this.name = name;
		this.className = className;
	}
	
	/**
	 * This is a getter method to get the header name.
	 * @returns A String representing the header name.
	 */
	get name() {
		return name;
	}
	
	/**
	 * This is a getter method to get the class name.
	 * @returns A String representing the class name.
	 */
	get className() {
		return this.className;
	}
}

module.exports = {
	MasterModel : Header, 
	Header : Header
}