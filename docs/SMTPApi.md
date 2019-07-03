# SendinBlueApi.SMTPApi

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSmtpTemplate**](SMTPApi.md#createSmtpTemplate) | **POST** /smtp/templates | Create a transactional email template
[**deleteHardbounces**](SMTPApi.md#deleteHardbounces) | **POST** /smtp/deleteHardbounces | Delete hardbounces
[**deleteSmtpTemplate**](SMTPApi.md#deleteSmtpTemplate) | **DELETE** /smtp/templates/{templateId} | Delete an inactive transactional email template
[**getAggregatedSmtpReport**](SMTPApi.md#getAggregatedSmtpReport) | **GET** /smtp/statistics/aggregatedReport | Get your transactional email activity aggregated over a period of time
[**getEmailEventReport**](SMTPApi.md#getEmailEventReport) | **GET** /smtp/statistics/events | Get all your transactional email activity (unaggregated events)
[**getSmtpReport**](SMTPApi.md#getSmtpReport) | **GET** /smtp/statistics/reports | Get your transactional email activity aggregated per day
[**getSmtpTemplate**](SMTPApi.md#getSmtpTemplate) | **GET** /smtp/templates/{templateId} | Returns the template informations
[**getSmtpTemplates**](SMTPApi.md#getSmtpTemplates) | **GET** /smtp/templates | Get the list of transactional email templates
[**getTransacEmailContent**](SMTPApi.md#getTransacEmailContent) | **GET** /smtp/emails/{uuid} | Get the personalized content of a sent transactional email
[**getTransacEmailsList**](SMTPApi.md#getTransacEmailsList) | **GET** /smtp/emails | Get the list of transactional emails on the basis of allowed filters
[**sendTemplate**](SMTPApi.md#sendTemplate) | **POST** /smtp/templates/{templateId}/send | Send a template
[**sendTestTemplate**](SMTPApi.md#sendTestTemplate) | **POST** /smtp/templates/{templateId}/sendTest | Send a template to your test list
[**sendTransacEmail**](SMTPApi.md#sendTransacEmail) | **POST** /smtp/email | Send a transactional email
[**updateSmtpTemplate**](SMTPApi.md#updateSmtpTemplate) | **PUT** /smtp/templates/{templateId} | Updates a transactional email templates


<a name="createSmtpTemplate"></a>
# **createSmtpTemplate**
> CreateModel createSmtpTemplate(smtpTemplate)

Create a transactional email template

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.SMTPApi();

var smtpTemplate = new SendinBlueApi.CreateSmtpTemplate(); // CreateSmtpTemplate | values to update in transactional email template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSmtpTemplate(smtpTemplate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smtpTemplate** | [**CreateSmtpTemplate**](CreateSmtpTemplate.md)| values to update in transactional email template | 

### Return type

[**CreateModel**](CreateModel.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteHardbounces"></a>
# **deleteHardbounces**
> deleteHardbounces(opts)

Delete hardbounces

Delete hardbounces. To use carefully (e.g. in case of temporary ISP failures)

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.SMTPApi();

var opts = { 
  'deleteHardbounces': new SendinBlueApi.DeleteHardbounces() // DeleteHardbounces | values to delete hardbounces
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteHardbounces(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteHardbounces** | [**DeleteHardbounces**](DeleteHardbounces.md)| values to delete hardbounces | [optional] 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSmtpTemplate"></a>
# **deleteSmtpTemplate**
> deleteSmtpTemplate(templateId)

Delete an inactive transactional email template

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.SMTPApi();

var templateId = 789; // Number | id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSmtpTemplate(templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **Number**| id of the template | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAggregatedSmtpReport"></a>
# **getAggregatedSmtpReport**
> GetAggregatedReport getAggregatedSmtpReport(opts)

Get your transactional email activity aggregated over a period of time

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.SMTPApi();

var opts = { 
  'startDate': "startDate_example", // String | Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate
  'endDate': "endDate_example", // String | Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate
  'days': 56, // Number | Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate'
  'tag': "tag_example" // String | Tag of the emails
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAggregatedSmtpReport(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate | [optional] 
 **endDate** | **String**| Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate | [optional] 
 **days** | **Number**| Number of days in the past including today (positive integer). Not compatible with &#39;startDate&#39; and &#39;endDate&#39; | [optional] 
 **tag** | **String**| Tag of the emails | [optional] 

### Return type

[**GetAggregatedReport**](GetAggregatedReport.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEmailEventReport"></a>
# **getEmailEventReport**
> GetEmailEventReport getEmailEventReport(opts)

Get all your transactional email activity (unaggregated events)

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.SMTPApi();

var opts = { 
  'limit': 50, // Number | Number limitation for the result returned
  'offset': 0, // Number | Beginning point in the list to retrieve from.
  'startDate': "startDate_example", // String | Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate
  'endDate': "endDate_example", // String | Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate
  'days': 56, // Number | Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate'
  'email': "email_example", // String | Filter the report for a specific email addresses
  'event': "event_example", // String | Filter the report for a specific event type
  'tags': "tags_example", // String | Filter the report for tags (serialized and urlencoded array)
  'messageId': "messageId_example", // String | Filter on a specific message id
  'templateId': 789 // Number | Filter on a specific template id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEmailEventReport(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number limitation for the result returned | [optional] [default to 50]
 **offset** | **Number**| Beginning point in the list to retrieve from. | [optional] [default to 0]
 **startDate** | **String**| Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate | [optional] 
 **endDate** | **String**| Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate | [optional] 
 **days** | **Number**| Number of days in the past including today (positive integer). Not compatible with &#39;startDate&#39; and &#39;endDate&#39; | [optional] 
 **email** | **String**| Filter the report for a specific email addresses | [optional] 
 **event** | **String**| Filter the report for a specific event type | [optional] 
 **tags** | **String**| Filter the report for tags (serialized and urlencoded array) | [optional] 
 **messageId** | **String**| Filter on a specific message id | [optional] 
 **templateId** | **Number**| Filter on a specific template id | [optional] 

### Return type

[**GetEmailEventReport**](GetEmailEventReport.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSmtpReport"></a>
# **getSmtpReport**
> GetReports getSmtpReport(opts)

Get your transactional email activity aggregated per day

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.SMTPApi();

var opts = { 
  'limit': 50, // Number | Number of documents returned per page
  'offset': 0, // Number | Index of the first document on the page
  'startDate': "startDate_example", // String | Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD)
  'endDate': "endDate_example", // String | Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD)
  'days': 56, // Number | Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate'
  'tag': "tag_example" // String | Tag of the emails
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSmtpReport(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of documents returned per page | [optional] [default to 50]
 **offset** | **Number**| Index of the first document on the page | [optional] [default to 0]
 **startDate** | **String**| Mandatory if endDate is used. Starting date of the report (YYYY-MM-DD) | [optional] 
 **endDate** | **String**| Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD) | [optional] 
 **days** | **Number**| Number of days in the past including today (positive integer). Not compatible with &#39;startDate&#39; and &#39;endDate&#39; | [optional] 
 **tag** | **String**| Tag of the emails | [optional] 

### Return type

[**GetReports**](GetReports.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSmtpTemplate"></a>
# **getSmtpTemplate**
> GetSmtpTemplateOverview getSmtpTemplate(templateId)

Returns the template informations

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.SMTPApi();

var templateId = 789; // Number | id of the template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSmtpTemplate(templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **Number**| id of the template | 

### Return type

[**GetSmtpTemplateOverview**](GetSmtpTemplateOverview.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSmtpTemplates"></a>
# **getSmtpTemplates**
> GetSmtpTemplates getSmtpTemplates(opts)

Get the list of transactional email templates

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.SMTPApi();

var opts = { 
  'templateStatus': true, // Boolean | Filter on the status of the template. Active = true, inactive = false
  'limit': 50, // Number | Number of documents returned per page
  'offset': 0 // Number | Index of the first document in the page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSmtpTemplates(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateStatus** | **Boolean**| Filter on the status of the template. Active &#x3D; true, inactive &#x3D; false | [optional] 
 **limit** | **Number**| Number of documents returned per page | [optional] [default to 50]
 **offset** | **Number**| Index of the first document in the page | [optional] [default to 0]

### Return type

[**GetSmtpTemplates**](GetSmtpTemplates.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTransacEmailContent"></a>
# **getTransacEmailContent**
> GetTransacEmailContent getTransacEmailContent(uuid)

Get the personalized content of a sent transactional email

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.SMTPApi();

var uuid = "uuid_example"; // String | Unique id of the transactional email that has been sent to a particular contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransacEmailContent(uuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| Unique id of the transactional email that has been sent to a particular contact | 

### Return type

[**GetTransacEmailContent**](GetTransacEmailContent.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTransacEmailsList"></a>
# **getTransacEmailsList**
> GetTransacEmailsList getTransacEmailsList(opts)

Get the list of transactional emails on the basis of allowed filters

This endpoint will show the list of emails for past 30 days by default. To retrieve emails before that time, please pass startDate and endDate in query filters.

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.SMTPApi();

var opts = { 
  'email': "email_example", // String | Mandatory if templateId and messageId are not passed in query filters. Email address to which transactional email has been sent.
  'templateId': 789, // Number | Mandatory if email and messageId are not passed in query filters. Id of the template that was used to compose transactional email.
  'messageId': "messageId_example", // String | Mandatory if templateId and email are not passed in query filters. Message ID of the transactional email sent.
  'startDate': "startDate_example", // String | Mandatory if endDate is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Maximum time period that can be selected is one month.
  'endDate': new Date("2013-10-20") // Date | Mandatory if startDate is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransacEmailsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Mandatory if templateId and messageId are not passed in query filters. Email address to which transactional email has been sent. | [optional] 
 **templateId** | **Number**| Mandatory if email and messageId are not passed in query filters. Id of the template that was used to compose transactional email. | [optional] 
 **messageId** | **String**| Mandatory if templateId and email are not passed in query filters. Message ID of the transactional email sent. | [optional] 
 **startDate** | **String**| Mandatory if endDate is used. Starting date (YYYY-MM-DD) from which you want to fetch the list. Maximum time period that can be selected is one month. | [optional] 
 **endDate** | **Date**| Mandatory if startDate is used. Ending date (YYYY-MM-DD) till which you want to fetch the list. Maximum time period that can be selected is one month. | [optional] 

### Return type

[**GetTransacEmailsList**](GetTransacEmailsList.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendTemplate"></a>
# **sendTemplate**
> SendTemplateEmail sendTemplate(templateId, sendEmail)

Send a template

This endpoint is deprecated. Prefer v3/smtp/email instead.

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.SMTPApi();

var templateId = 789; // Number | Id of the template

var sendEmail = new SendinBlueApi.SendEmail(); // SendEmail | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendTemplate(templateId, sendEmail, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **Number**| Id of the template | 
 **sendEmail** | [**SendEmail**](SendEmail.md)|  | 

### Return type

[**SendTemplateEmail**](SendTemplateEmail.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendTestTemplate"></a>
# **sendTestTemplate**
> sendTestTemplate(templateId, sendTestEmail)

Send a template to your test list

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.SMTPApi();

var templateId = 789; // Number | Id of the template

var sendTestEmail = new SendinBlueApi.SendTestEmail(); // SendTestEmail | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendTestTemplate(templateId, sendTestEmail, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **Number**| Id of the template | 
 **sendTestEmail** | [**SendTestEmail**](SendTestEmail.md)|  | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendTransacEmail"></a>
# **sendTransacEmail**
> CreateSmtpEmail sendTransacEmail(sendSmtpEmail)

Send a transactional email

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.SMTPApi();

var sendSmtpEmail = new SendinBlueApi.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendTransacEmail(sendSmtpEmail, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendSmtpEmail** | [**SendSmtpEmail**](SendSmtpEmail.md)| Values to send a transactional email | 

### Return type

[**CreateSmtpEmail**](CreateSmtpEmail.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSmtpTemplate"></a>
# **updateSmtpTemplate**
> updateSmtpTemplate(templateId, smtpTemplate)

Updates a transactional email templates

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.SMTPApi();

var templateId = 789; // Number | id of the template

var smtpTemplate = new SendinBlueApi.UpdateSmtpTemplate(); // UpdateSmtpTemplate | values to update in transactional email template


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSmtpTemplate(templateId, smtpTemplate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **Number**| id of the template | 
 **smtpTemplate** | [**UpdateSmtpTemplate**](UpdateSmtpTemplate.md)| values to update in transactional email template | 

### Return type

null (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

