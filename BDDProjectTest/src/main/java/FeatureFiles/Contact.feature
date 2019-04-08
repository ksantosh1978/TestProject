Feature: Free CRM Create Contacts 

Scenario Outline: Free CRM Create a new contact scenario 

	Given user is already on Login Page 
	When title of login page is Free CRM 
	Then user enters "<username>" and "<password>" 
	Then user clicks on login button 
	Then user is on home page 
	Then user moves to new contact page 
	Then user enters contact details "<firstname>" and "<lastname>" and "<position>" 
	Then user moves to new deal page 
	Then user enters deal details 
		| test deal | 1000 | 50 | 10 |
	Then user click on product page	
	Then Close the browser 
	
	Examples: 
		| username | password | firstname | lastname | position |
		| ksantosh1978  | Iphone2953 | Tom 	  | Peter    | Manager  |