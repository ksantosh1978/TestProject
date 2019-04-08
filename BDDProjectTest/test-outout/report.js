$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Adya/git/TestProject/BDDProjectTest/src/main/java/FeatureFiles/Contact.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user click on product page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 20,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "ksantosh1978",
        "Iphone2953",
        "Tom",
        "Peter",
        "Manager"
      ],
      "line": 21,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"ksantosh1978\" and \"Iphone2953\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Tom\" and \"Peter\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user click on product page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddContacts.user_already_on_login_page()"
});
formatter.result({
  "duration": 7452410100,
  "status": "passed"
});
formatter.match({
  "location": "AddContacts.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 10606000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ksantosh1978",
      "offset": 13
    },
    {
      "val": "Iphone2953",
      "offset": 32
    }
  ],
  "location": "AddContacts.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 304189900,
  "status": "passed"
});
formatter.match({
  "location": "AddContacts.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4336814900,
  "status": "passed"
});
formatter.match({
  "location": "AddContacts.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 7201400,
  "status": "passed"
});
formatter.match({
  "location": "AddContacts.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 1217411000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 29
    },
    {
      "val": "Peter",
      "offset": 39
    },
    {
      "val": "Manager",
      "offset": 51
    }
  ],
  "location": "AddContacts.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 1591718400,
  "status": "passed"
});
formatter.match({
  "location": "AddContacts.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 896448000,
  "status": "passed"
});
formatter.match({
  "location": "AddContacts.user_enters_contacts_details(DataTable)"
});
formatter.result({
  "duration": 322260300,
  "status": "passed"
});
formatter.match({
  "location": "AddContacts.user_click_on_product_page()"
});
formatter.result({
  "duration": 1017949500,
  "status": "passed"
});
formatter.match({
  "location": "AddContacts.close_the_browser()"
});
formatter.result({
  "duration": 771111800,
  "status": "passed"
});
});