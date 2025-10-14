Querying Data:
	Retrieve all listings where the property_type is "Apartment".
	Find all listings where the price is less than $200.
	Fetch all listings where the accommodates value is greater than or equal to 4.
	
Updating Data:
	Update the house_rules of the listing with _id "10009999" to add a new rule: "No pets allowed".
	Increase the cleaning_fee of the listing with _id "1001265" by $20.

Deleting Data:
	Remove the listing with _id "1001265" from the database.

Finding Specific Information:
	Find the host name, host location, and host about information for the listing with _id "10009999".
	Retrieve the number of reviews, review scores, and last review date for the listing with _id "1001265".

Querying Nested Data:
	Find all listings where the host's host_location is "Rio de Janeiro, State of Rio de Janeiro, Brazil".
	Retrieve all listings where the amenities array includes "Wifi" and "Kitchen".

Updating Nested Data:
	Update the interaction field of the listing with _id "1001265" to change the text to "We strive to provide 	responsive management and assistance throughout your stay.".

Deleting Nested Data:
	Remove the neighborhood_overview field from the listing with _id "10009999".
	
Finding by Date:
	Find all listings where the last_review date is after January 1st, 2019.

Count:
	Count the total number of listings in the database.
	Count the number of listings where the beds field is greater than 1.

Increment or Decrement:
	Increment the number_of_reviews field by 1 for the listing with _id "10009999".
	Decrement the availability_365 field by 1 for all listings.

Using $or and $and:
	Find all listings where the property_type is either "Apartment" or "Condominium".
	Retrieve listings where the price is less than $200 and the bedrooms field is greater than or equal to 2.

Using $limit:
	Retrieve the first 5 listings sorted by price in ascending order.
	Find all listings where the accommodates field is greater than 2 and limit the result to 10 documents.