# SendinBlueApi.TransactionalSMSApi

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSmsEvents**](TransactionalSMSApi.md#getSmsEvents) | **GET** /transactionalSMS/statistics/events | Get all the SMS activity (unaggregated events)
[**getTransacAggregatedSmsReport**](TransactionalSMSApi.md#getTransacAggregatedSmsReport) | **GET** /transactionalSMS/statistics/aggregatedReport | Get your SMS activity aggregated over a period of time
[**getTransacSmsReport**](TransactionalSMSApi.md#getTransacSmsReport) | **GET** /transactionalSMS/statistics/reports | Get your SMS activity aggregated per day
[**sendTransacSms**](TransactionalSMSApi.md#sendTransacSms) | **POST** /transactionalSMS/sms | Send the SMS campaign to the specified mobile number


<a name="getSmsEvents"></a>
# **getSmsEvents**
> GetSmsEventReport getSmsEvents(opts)

Get all the SMS activity (unaggregated events)

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.TransactionalSMSApi();

var opts = { 
  'limit': 50, // Number | Number of documents per page
  'startDate': "startDate_example", // String | Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report
  'endDate': "endDate_example", // String | Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report
  'offset': 0, // Number | Index of the first document of the page
  'days': 56, // Number | Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate'
  'phoneNumber': "phoneNumber_example", // String | Filter the report for a specific phone number
  'event': "event_example", // String | Filter the report for specific events
  'tags': "tags_example" // String | Filter the report for specific tags passed as a serialized urlencoded array
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSmsEvents(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Number of documents per page | [optional] [default to 50]
 **startDate** | **String**| Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report | [optional] 
 **endDate** | **String**| Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report | [optional] 
 **offset** | **Number**| Index of the first document of the page | [optional] [default to 0]
 **days** | **Number**| Number of days in the past including today (positive integer). Not compatible with &#39;startDate&#39; and &#39;endDate&#39; | [optional] 
 **phoneNumber** | **String**| Filter the report for a specific phone number | [optional] 
 **event** | **String**| Filter the report for specific events | [optional] 
 **tags** | **String**| Filter the report for specific tags passed as a serialized urlencoded array | [optional] 

### Return type

[**GetSmsEventReport**](GetSmsEventReport.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTransacAggregatedSmsReport"></a>
# **getTransacAggregatedSmsReport**
> GetTransacAggregatedSmsReport getTransacAggregatedSmsReport(opts)

Get your SMS activity aggregated over a period of time

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.TransactionalSMSApi();

var opts = { 
  'startDate': "startDate_example", // String | Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report
  'endDate': "endDate_example", // String | Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report
  'days': 56, // Number | Number of days in the past including today (positive integer). Not compatible with startDate and endDate
  'tag': "tag_example" // String | Filter on a tag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransacAggregatedSmsReport(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report | [optional] 
 **endDate** | **String**| Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report | [optional] 
 **days** | **Number**| Number of days in the past including today (positive integer). Not compatible with startDate and endDate | [optional] 
 **tag** | **String**| Filter on a tag | [optional] 

### Return type

[**GetTransacAggregatedSmsReport**](GetTransacAggregatedSmsReport.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTransacSmsReport"></a>
# **getTransacSmsReport**
> GetTransacSmsReport getTransacSmsReport(opts)

Get your SMS activity aggregated per day

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.TransactionalSMSApi();

var opts = { 
  'startDate': "startDate_example", // String | Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report
  'endDate': "endDate_example", // String | Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report
  'days': 56, // Number | Number of days in the past including today (positive integer). Not compatible with 'startDate' and 'endDate'
  'tag': "tag_example" // String | Filter on a tag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransacSmsReport(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **String**| Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report | [optional] 
 **endDate** | **String**| Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report | [optional] 
 **days** | **Number**| Number of days in the past including today (positive integer). Not compatible with &#39;startDate&#39; and &#39;endDate&#39; | [optional] 
 **tag** | **String**| Filter on a tag | [optional] 

### Return type

[**GetTransacSmsReport**](GetTransacSmsReport.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendTransacSms"></a>
# **sendTransacSms**
> SendSms sendTransacSms(sendTransacSms)

Send the SMS campaign to the specified mobile number

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.TransactionalSMSApi();

var sendTransacSms = new SendinBlueApi.SendTransacSms(); // SendTransacSms | Values to send a transactional SMS


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendTransacSms(sendTransacSms, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendTransacSms** | [**SendTransacSms**](SendTransacSms.md)| Values to send a transactional SMS | 

### Return type

[**SendSms**](SendSms.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

