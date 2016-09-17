{ 
	_id: 10000,
	customer_id: "company1",
	account_number: "AEIOU123",
	status: "open",
	total: 100.69
	type: "standard",
	versions: [
		{
			creation_date: ISODate("2016-09-24"),
			creator_id: "John Doe",
			seller_identity: {
				business_name: "Our Company",
				address: {
					street_1: "456 Main Street",
					suite: "1300",
					city: "Townville",
					state: "FL",
					zip: "34651"
				},
				phone: "(555) 555-5555",
				email: "billing@ourcompany.com",
				website: "ourcompany.com"
			},
			shipping_info: {
				customer_name: "Company 1",
				address: {
					street_1: "1965 West Street",
					city: "Weston",
					state: "VA",
					zip: "20190-6705"
				},
				phone: "(555) 554-1234",
				email: "someone@company1.net"
			},
			billing_info: {
				business_name: "Parent Corp",
				address: {
					po_box: "1394",
					city: "Bangor",
					state: "ME",
					zip: "04402"
				},
				phone: "(555) 554-5556",
				email: "accounts@parentcorp.com"
			},
			purchase_order: "W0012345",
			reference: "TIMDIDTHIS",
			items:[
				{
					product: "Widget",
					date_of_purchase: ISODate("2016-09-24"),
					quantity: 3,
					price: 10.99,
					tax: [
						{
							city: 1,
							county: 1.02,
							state: 6.01
						}
					]
				},
				{
					product: "Widget 2",
					date_of_purchase: ISODate("2016-09-24"),
					quantity: 1,
					price: 13.99,
					tax: [
						{
							city: 1,
							county: 1.02,
							state: 6.01
						}
					]
				}
			]
		},
		{
			edit_date: ISODate("2016-09-25"),
			editor_id: "John Doe",
			seller_identity: {
				business_name: "Our Company",
				address: {
					street_1: "456 Main Street",
					suite: "1300",
					city: "Townville",
					state: "FL",
					zip: "34651"
				},
				phone: "(555) 555-5555",
				email: "billing@ourcompany.com",
				website: "ourcompany.com"
			},
			shipping_info: {
				customer_name: "Company 1",
				address: {
					street_1: "1965 West Street",
					city: "Weston",
					state: "VA",
					zip: "20190-6705"
				},
				phone: "(555) 554-1234",
				email: "someone@company1.net"
			},
			billing_info: {
				business_name: "Parent Corp",
				address: {
					po_box: "1394",
					city: "Bangor",
					state: "ME",
					zip: "04402"
				},
				phone: "(555) 554-5556",
				email: "accounts@parentcorp.com"
			},
			purchase_order: "W0012345",
			reference: "TIMDIDTHIS",
			items:[
				{
					product: "Widget",
					date_of_purchase: ISODate("2016-09-24"),
					quantity: 3,
					price: 10.99,
					tax: [
						{
							city: 1,
							county: 1.02,
							state: 6.01
						}
					]
				},
				{
					product: "Widget 2",
					date_of_purchase: ISODate("2016-09-24"),
					quantity: 1,
					price: 13.99,
					tax: [
						{
							city: 1,
							county: 1.02,
							state: 6.01
						}
					]
				},
				{
					product: "Non-taxable Services",
					date_of_purchase: ISODate("2016-09-25"),
					quantity: 1,
					price: 49.95
				}
			]
		},

	]

}