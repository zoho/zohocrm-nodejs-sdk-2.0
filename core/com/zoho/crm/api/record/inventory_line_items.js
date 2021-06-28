const Record = require("./record").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class InventoryLineItems extends Record{

	/**
	 * The method to get the product
	 * @returns {LineItemProduct} An instance of LineItemProduct
	 */
	getProduct()	{
		return this.getKeyValue("product");

	}

	/**
	 * The method to set the value to product
	 * @param {LineItemProduct} product An instance of LineItemProduct
	 */
	setProduct(product)	{
		const LineItemProduct = require("./line_item_product").MasterModel;
		if((product != null) && (!(product instanceof LineItemProduct)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: product EXPECTED TYPE: LineItemProduct", null, null);
		}
		this.addKeyValue("product", product);

	}

	/**
	 * The method to get the quantity
	 * @returns {Float} A Float representing the quantity
	 */
	getQuantity()	{
		return this.getKeyValue("quantity");

	}

	/**
	 * The method to set the value to quantity
	 * @param {Float} quantity A Float representing the quantity
	 */
	setQuantity(quantity)	{
		if((quantity != null) && (!(Object.prototype.toString.call(quantity) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: quantity EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("quantity", quantity);

	}

	/**
	 * The method to get the discount
	 * @returns {String} A String representing the discount
	 */
	getDiscount()	{
		return this.getKeyValue("Discount");

	}

	/**
	 * The method to set the value to discount
	 * @param {String} discount A String representing the discount
	 */
	setDiscount(discount)	{
		if((discount != null) && (!(Object.prototype.toString.call(discount) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: discount EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Discount", discount);

	}

	/**
	 * The method to get the totalAfterDiscount
	 * @returns {Float} A Float representing the totalAfterDiscount
	 */
	getTotalAfterDiscount()	{
		return this.getKeyValue("total_after_discount");

	}

	/**
	 * The method to set the value to totalAfterDiscount
	 * @param {Float} totalAfterDiscount A Float representing the totalAfterDiscount
	 */
	setTotalAfterDiscount(totalAfterDiscount)	{
		if((totalAfterDiscount != null) && (!(Object.prototype.toString.call(totalAfterDiscount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: totalAfterDiscount EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("total_after_discount", totalAfterDiscount);

	}

	/**
	 * The method to get the netTotal
	 * @returns {Float} A Float representing the netTotal
	 */
	getNetTotal()	{
		return this.getKeyValue("net_total");

	}

	/**
	 * The method to set the value to netTotal
	 * @param {Float} netTotal A Float representing the netTotal
	 */
	setNetTotal(netTotal)	{
		if((netTotal != null) && (!(Object.prototype.toString.call(netTotal) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: netTotal EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("net_total", netTotal);

	}

	/**
	 * The method to get the book
	 * @returns {Float} A Float representing the book
	 */
	getBook()	{
		return this.getKeyValue("book");

	}

	/**
	 * The method to set the value to book
	 * @param {Float} book A Float representing the book
	 */
	setBook(book)	{
		if((book != null) && (!(Object.prototype.toString.call(book) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: book EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("book", book);

	}

	/**
	 * The method to get the tax
	 * @returns {Float} A Float representing the tax
	 */
	getTax()	{
		return this.getKeyValue("Tax");

	}

	/**
	 * The method to set the value to tax
	 * @param {Float} tax A Float representing the tax
	 */
	setTax(tax)	{
		if((tax != null) && (!(Object.prototype.toString.call(tax) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tax EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("Tax", tax);

	}

	/**
	 * The method to get the listPrice
	 * @returns {Float} A Float representing the listPrice
	 */
	getListPrice()	{
		return this.getKeyValue("list_price");

	}

	/**
	 * The method to set the value to listPrice
	 * @param {Float} listPrice A Float representing the listPrice
	 */
	setListPrice(listPrice)	{
		if((listPrice != null) && (!(Object.prototype.toString.call(listPrice) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: listPrice EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("list_price", listPrice);

	}

	/**
	 * The method to get the unitPrice
	 * @returns {Float} A Float representing the unitPrice
	 */
	getUnitPrice()	{
		return this.getKeyValue("unit_price");

	}

	/**
	 * The method to set the value to unitPrice
	 * @param {Float} unitPrice A Float representing the unitPrice
	 */
	setUnitPrice(unitPrice)	{
		if((unitPrice != null) && (!(Object.prototype.toString.call(unitPrice) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unitPrice EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("unit_price", unitPrice);

	}

	/**
	 * The method to get the quantityInStock
	 * @returns {Float} A Float representing the quantityInStock
	 */
	getQuantityInStock()	{
		return this.getKeyValue("quantity_in_stock");

	}

	/**
	 * The method to set the value to quantityInStock
	 * @param {Float} quantityInStock A Float representing the quantityInStock
	 */
	setQuantityInStock(quantityInStock)	{
		if((quantityInStock != null) && (!(Object.prototype.toString.call(quantityInStock) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: quantityInStock EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("quantity_in_stock", quantityInStock);

	}

	/**
	 * The method to get the total
	 * @returns {Float} A Float representing the total
	 */
	getTotal()	{
		return this.getKeyValue("total");

	}

	/**
	 * The method to set the value to total
	 * @param {Float} total A Float representing the total
	 */
	setTotal(total)	{
		if((total != null) && (!(Object.prototype.toString.call(total) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: total EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("total", total);

	}

	/**
	 * The method to get the productDescription
	 * @returns {String} A String representing the productDescription
	 */
	getProductDescription()	{
		return this.getKeyValue("product_description");

	}

	/**
	 * The method to set the value to productDescription
	 * @param {String} productDescription A String representing the productDescription
	 */
	setProductDescription(productDescription)	{
		if((productDescription != null) && (!(Object.prototype.toString.call(productDescription) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: productDescription EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("product_description", productDescription);

	}

	/**
	 * The method to get the lineTax
	 * @returns {Array} An Array representing the lineTax
	 */
	getLineTax()	{
		return this.getKeyValue("line_tax");

	}

	/**
	 * The method to set the value to lineTax
	 * @param {Array} lineTax An Array representing the lineTax
	 */
	setLineTax(lineTax)	{
		if((lineTax != null) && (!(Object.prototype.toString.call(lineTax) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lineTax EXPECTED TYPE: Array", null, null);
		}
		this.addKeyValue("line_tax", lineTax);

	}

}
module.exports = {
	MasterModel : InventoryLineItems,
	InventoryLineItems : InventoryLineItems
}
