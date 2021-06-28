/**
 * This class represents the Zoho CRM User.
 */
class UserSignature{

	email;

	/**
	 * Creates an UserSignature class instance with the specified user email.
	 * @param {string} email - A String containing the CRM user email.
	 */
	constructor(email) {
		this.email = email;
	}

	/**
	 * This is a getter method to get user email.
	 * @returns {string} A String representing the CRM user email.
	 */
    get email() {
		return this.email;
	}
}

module.exports = {UserSignature: UserSignature};
