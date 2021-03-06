# SendinBlueApi.AccountApi

All URIs are relative to *https://api.sendinblue.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccount**](AccountApi.md#getAccount) | **GET** /account | Get your account informations, plans and credits details


<a name="getAccount"></a>
# **getAccount**
> GetAccount getAccount()

Get your account informations, plans and credits details

### Example
```javascript
var SendinBlueApi = require('sendin_blue_api');
var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix = 'Token';

var apiInstance = new SendinBlueApi.AccountApi();
apiInstance.getAccount().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetAccount**](GetAccount.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

