# bson_ideas

This idea mainly came from seeing a problem in a project that stored invoices in a MySQL database.
The invoice was stored in two tables, invoices and invoice_items.
A problem became apparent when invoices where edited that tracking changes was difficult and required a lot of logic and new tables to accomodate. 

Problem one: The database was overly normalized.
The invoice stored a bill to and ship to CUSTOMER_ID.
It also stored a BUSNESS_ID, which identified the business.

So if you needed to bring up the invoice, it pulled the addresses for these from a CUSTOMER table, a LOCATION table, and a BUSINESS table. If any of the data in those tables had changes, the invoice reflected those changes, making it difficult to know what that data was at any particular time.

Another problem was adding or editing the items of an invoice. Doing so, there was no tracability other than who edited it last.

So storing the invoice as bson, in a NOSQL database, it becomes much more tracable, with very little effort.
The concept is simple - store the full database, all relevent data, each time the invoice is edited. 

This is beneficial whether the invoice is edited after creation or not.

A year from now, if you pull up an invoice, the addresses, etc will be correct.

And if the invoice is edited at any point, it gives full tracability if needed. And it will be needed!

