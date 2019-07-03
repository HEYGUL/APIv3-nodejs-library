# SendinBlueApi.ContactsApi

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContactToList**](ContactsApi.md#addContactToList) | **POST** /contacts/lists/{listId}/contacts/add | Add existing contacts to a list
[**createAttribute**](ContactsApi.md#createAttribute) | **POST** /contacts/attributes/{attributeCategory}/{attributeName} | Creates contact attribute
[**createContact**](ContactsApi.md#createContact) | **POST** /contacts | Create a contact
[**createFolder**](ContactsApi.md#createFolder) | **POST** /contacts/folders | Create a folder
[**createList**](ContactsApi.md#createList) | **POST** /contacts/lists | Create a list
[**deleteAttribute**](ContactsApi.md#deleteAttribute) | **DELETE** /contacts/attributes/{attributeCategory}/{attributeName} | Deletes an attribute
[**deleteContact**](ContactsApi.md#deleteContact) | **DELETE** /contacts/{email} | Deletes a contact
[**deleteFolder**](ContactsApi.md#deleteFolder) | **DELETE** /contacts/folders/{folderId} | Delete a folder (and all its lists)
[**deleteList**](ContactsApi.md#deleteList) | **DELETE** /contacts/lists/{listId} | Delete a list
[**getAttributes**](ContactsApi.md#getAttributes) | **GET** /contacts/attributes | Lists all attributes
[**getContactInfo**](ContactsApi.md#getContactInfo) | **GET** /contacts/{email} | Retrieves contact informations
[**getContactStats**](ContactsApi.md#getContactStats) | **GET** /contacts/{email}/campaignStats | Get the campaigns statistics for a contact
[**getContacts**](ContactsApi.md#getContacts) | **GET** /contacts | Get all the contacts
[**getContactsFromList**](ContactsApi.md#getContactsFromList) | **GET** /contacts/lists/{listId}/contacts | Get the contacts in a list
[**getFolder**](ContactsApi.md#getFolder) | **GET** /contacts/folders/{folderId} | Returns folder details
[**getFolderLists**](ContactsApi.md#getFolderLists) | **GET** /contacts/folders/{folderId}/lists | Get the lists in a folder
[**getFolders**](ContactsApi.md#getFolders) | **GET** /contacts/folders | Get all the folders
[**getList**](ContactsApi.md#getList) | **GET** /contacts/lists/{listId} | Get the details of a list
[**getLists**](ContactsApi.md#getLists) | **GET** /contacts/lists | Get all the lists
[**importContacts**](ContactsApi.md#importContacts) | **POST** /contacts/import | Import contacts
[**removeContactFromList**](ContactsApi.md#removeContactFromList) | **POST** /contacts/lists/{listId}/contacts/remove | Remove existing contacts from a list
[**requestContactExport**](ContactsApi.md#requestContactExport) | **POST** /contacts/export | Export contacts
[**updateAttribute**](ContactsApi.md#updateAttribute) | **PUT** /contacts/attributes/{attributeCategory}/{attributeName} | Updates contact attribute
[**updateContact**](ContactsApi.md#updateContact) | **PUT** /contacts/{email} | Updates a contact
[**updateFolder**](ContactsApi.md#updateFolder) | **PUT** /contacts/folders/{folderId} | Update a contact folder
[**updateList**](ContactsApi.md#updateList) | **PUT** /contacts/lists/{listId} | Update a list


<a name="addContactToList"></a>
# **addContactToList**
> PostContactInfo addContactToList(listId, contactEmails)

Add existing contacts to a list

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var listId = 789; // Number | Id of the list

var contactEmails = new SendinBlueApi.AddContactToList(); // AddContactToList | Emails addresses of the contacts


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addContactToList(listId, contactEmails, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| Id of the list | 
 **contactEmails** | [**AddContactToList**](AddContactToList.md)| Emails addresses of the contacts | 

### Return type

[**PostContactInfo**](PostContactInfo.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createAttribute"></a>
# **createAttribute**
> createAttribute(attributeCategory, attributeName, createAttribute)

Creates contact attribute

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var attributeCategory = "attributeCategory_example"; // String | Category of the attribute

var attributeName = "attributeName_example"; // String | Name of the attribute

var createAttribute = new SendinBlueApi.CreateAttribute(); // CreateAttribute | Values to create an attribute


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createAttribute(attributeCategory, attributeName, createAttribute, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeCategory** | **String**| Category of the attribute | 
 **attributeName** | **String**| Name of the attribute | 
 **createAttribute** | [**CreateAttribute**](CreateAttribute.md)| Values to create an attribute | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createContact"></a>
# **createContact**
> CreateUpdateContactModel createContact(createContact)

Create a contact

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var createContact = new SendinBlueApi.CreateContact(); // CreateContact | Values to create a contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createContact(createContact, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createContact** | [**CreateContact**](CreateContact.md)| Values to create a contact | 

### Return type

[**CreateUpdateContactModel**](CreateUpdateContactModel.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createFolder"></a>
# **createFolder**
> CreateModel createFolder(createFolder)

Create a folder

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var createFolder = new SendinBlueApi.CreateUpdateFolder(); // CreateUpdateFolder | Name of the folder


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFolder(createFolder, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFolder** | [**CreateUpdateFolder**](CreateUpdateFolder.md)| Name of the folder | 

### Return type

[**CreateModel**](CreateModel.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createList"></a>
# **createList**
> CreateModel createList(createList)

Create a list

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var createList = new SendinBlueApi.CreateList(); // CreateList | Values to create a list


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createList(createList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createList** | [**CreateList**](CreateList.md)| Values to create a list | 

### Return type

[**CreateModel**](CreateModel.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAttribute"></a>
# **deleteAttribute**
> deleteAttribute(attributeCategory, attributeName)

Deletes an attribute

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var attributeCategory = "attributeCategory_example"; // String | Category of the attribute

var attributeName = "attributeName_example"; // String | Name of the existing attribute


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAttribute(attributeCategory, attributeName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeCategory** | **String**| Category of the attribute | 
 **attributeName** | **String**| Name of the existing attribute | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteContact"></a>
# **deleteContact**
> deleteContact(email)

Deletes a contact

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var email = "email_example"; // String | Email (urlencoded) of the contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteContact(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email (urlencoded) of the contact | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFolder"></a>
# **deleteFolder**
> deleteFolder(folderId)

Delete a folder (and all its lists)

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var folderId = 789; // Number | Id of the folder


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFolder(folderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| Id of the folder | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteList"></a>
# **deleteList**
> deleteList(listId)

Delete a list

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var listId = 789; // Number | Id of the list


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteList(listId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| Id of the list | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAttributes"></a>
# **getAttributes**
> GetAttributes getAttributes()

Lists all attributes

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAttributes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetAttributes**](GetAttributes.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactInfo"></a>
# **getContactInfo**
> GetExtendedContactDetails getContactInfo(email)

Retrieves contact informations

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var email = "email_example"; // String | Email (urlencoded) of the contact OR its SMS attribute value


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContactInfo(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email (urlencoded) of the contact OR its SMS attribute value | 

### Return type

[**GetExtendedContactDetails**](GetExtendedContactDetails.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactStats"></a>
# **getContactStats**
> GetContactCampaignStats getContactStats(email)

Get the campaigns statistics for a contact

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var email = "email_example"; // String | Email address (urlencoded) of the contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContactStats(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address (urlencoded) of the contact | 

### Return type

[**GetContactCampaignStats**](GetContactCampaignStats.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContacts"></a>
# **getContacts**
> GetContacts getContacts(opts)

Get all the contacts

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var opts = { 
  'limit': 50, // Number | Number of documents per page
  'offset': 0, // Number | Index of the first document of the page
  'modifiedSince': new Date("2013-10-20T19:20:30+01:00") // Date | Filter (urlencoded) the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContacts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of documents per page | [optional] [default to 50]
 **offset** | **Number**| Index of the first document of the page | [optional] [default to 0]
 **modifiedSince** | **Date**| Filter (urlencoded) the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result. | [optional] 

### Return type

[**GetContacts**](GetContacts.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactsFromList"></a>
# **getContactsFromList**
> GetContacts getContactsFromList(listId, opts)

Get the contacts in a list

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var listId = 789; // Number | Id of the list

var opts = { 
  'modifiedSince': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter (urlencoded) the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result.
  'limit': 50, // Number | Number of documents per page
  'offset': 0 // Number | Index of the first document of the page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContactsFromList(listId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| Id of the list | 
 **modifiedSince** | **Date**| Filter (urlencoded) the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result. | [optional] 
 **limit** | **Number**| Number of documents per page | [optional] [default to 50]
 **offset** | **Number**| Index of the first document of the page | [optional] [default to 0]

### Return type

[**GetContacts**](GetContacts.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFolder"></a>
# **getFolder**
> GetFolder getFolder(folderId)

Returns folder details

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var folderId = 789; // Number | id of the folder


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFolder(folderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| id of the folder | 

### Return type

[**GetFolder**](GetFolder.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFolderLists"></a>
# **getFolderLists**
> GetFolderLists getFolderLists(folderId, opts)

Get the lists in a folder

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var folderId = 789; // Number | Id of the folder

var opts = { 
  'limit': 10, // Number | Number of documents per page
  'offset': 0 // Number | Index of the first document of the page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFolderLists(folderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| Id of the folder | 
 **limit** | **Number**| Number of documents per page | [optional] [default to 10]
 **offset** | **Number**| Index of the first document of the page | [optional] [default to 0]

### Return type

[**GetFolderLists**](GetFolderLists.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFolders"></a>
# **getFolders**
> GetFolders getFolders(limit, offset)

Get all the folders

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var limit = 10; // Number | Number of documents per page

var offset = 0; // Number | Index of the first document of the page


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFolders(limit, offset, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of documents per page | [default to 10]
 **offset** | **Number**| Index of the first document of the page | [default to 0]

### Return type

[**GetFolders**](GetFolders.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getList"></a>
# **getList**
> GetExtendedList getList(listId)

Get the details of a list

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var listId = 789; // Number | Id of the list


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getList(listId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| Id of the list | 

### Return type

[**GetExtendedList**](GetExtendedList.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLists"></a>
# **getLists**
> GetLists getLists(opts)

Get all the lists

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var opts = { 
  'limit': 10, // Number | Number of documents per page
  'offset': 0 // Number | Index of the first document of the page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLists(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of documents per page | [optional] [default to 10]
 **offset** | **Number**| Index of the first document of the page | [optional] [default to 0]

### Return type

[**GetLists**](GetLists.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importContacts"></a>
# **importContacts**
> CreatedProcessId importContacts(requestContactImport)

Import contacts

It returns the background process ID which on completion calls the notify URL that you have set in the input.

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var requestContactImport = new SendinBlueApi.RequestContactImport(); // RequestContactImport | Values to import contacts in Sendinblue. To know more about the expected format, please have a look at ``https://help.sendinblue.com/hc/en-us/articles/209499265-Build-contacts-lists-for-your-email-marketing-campaigns``


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importContacts(requestContactImport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestContactImport** | [**RequestContactImport**](RequestContactImport.md)| Values to import contacts in Sendinblue. To know more about the expected format, please have a look at &#x60;&#x60;https://help.sendinblue.com/hc/en-us/articles/209499265-Build-contacts-lists-for-your-email-marketing-campaigns&#x60;&#x60; | 

### Return type

[**CreatedProcessId**](CreatedProcessId.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeContactFromList"></a>
# **removeContactFromList**
> PostContactInfo removeContactFromList(listId, contactEmails)

Remove existing contacts from a list

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var listId = 789; // Number | Id of the list

var contactEmails = new SendinBlueApi.RemoveContactFromList(); // RemoveContactFromList | Emails adresses of the contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeContactFromList(listId, contactEmails, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| Id of the list | 
 **contactEmails** | [**RemoveContactFromList**](RemoveContactFromList.md)| Emails adresses of the contact | 

### Return type

[**PostContactInfo**](PostContactInfo.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="requestContactExport"></a>
# **requestContactExport**
> CreatedProcessId requestContactExport(requestContactExport)

Export contacts

It returns the background process ID which on completion calls the notify URL that you have set in the input. File will be available in csv.

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var requestContactExport = new SendinBlueApi.RequestContactExport(); // RequestContactExport | Values to request a contact export


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.requestContactExport(requestContactExport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestContactExport** | [**RequestContactExport**](RequestContactExport.md)| Values to request a contact export | 

### Return type

[**CreatedProcessId**](CreatedProcessId.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAttribute"></a>
# **updateAttribute**
> updateAttribute(attributeCategory, attributeName, updateAttribute)

Updates contact attribute

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var attributeCategory = "attributeCategory_example"; // String | Category of the attribute

var attributeName = "attributeName_example"; // String | Name of the existing attribute

var updateAttribute = new SendinBlueApi.UpdateAttribute(); // UpdateAttribute | Values to update an attribute


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateAttribute(attributeCategory, attributeName, updateAttribute, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeCategory** | **String**| Category of the attribute | 
 **attributeName** | **String**| Name of the existing attribute | 
 **updateAttribute** | [**UpdateAttribute**](UpdateAttribute.md)| Values to update an attribute | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateContact"></a>
# **updateContact**
> updateContact(email, updateContact)

Updates a contact

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var email = "email_example"; // String | Email (urlencoded) of the contact

var updateContact = new SendinBlueApi.UpdateContact(); // UpdateContact | Values to update a contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateContact(email, updateContact, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email (urlencoded) of the contact | 
 **updateContact** | [**UpdateContact**](UpdateContact.md)| Values to update a contact | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFolder"></a>
# **updateFolder**
> updateFolder(folderId, updateFolder)

Update a contact folder

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var folderId = 789; // Number | Id of the folder

var updateFolder = new SendinBlueApi.CreateUpdateFolder(); // CreateUpdateFolder | Name of the folder


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateFolder(folderId, updateFolder, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folderId** | **Number**| Id of the folder | 
 **updateFolder** | [**CreateUpdateFolder**](CreateUpdateFolder.md)| Name of the folder | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateList"></a>
# **updateList**
> updateList(listId, updateList)

Update a list

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.ContactsApi();

var listId = 789; // Number | Id of the list

var updateList = new SendinBlueApi.UpdateList(); // UpdateList | Values to update a list


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateList(listId, updateList, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| Id of the list | 
 **updateList** | [**UpdateList**](UpdateList.md)| Values to update a list | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

