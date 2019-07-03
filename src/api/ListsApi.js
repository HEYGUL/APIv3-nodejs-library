/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddContactToList', 'model/CreateList', 'model/CreateModel', 'model/ErrorModel', 'model/GetContacts', 'model/GetExtendedList', 'model/GetFolderLists', 'model/GetLists', 'model/PostContactInfo', 'model/RemoveContactFromList', 'model/UpdateList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddContactToList'), require('../model/CreateList'), require('../model/CreateModel'), require('../model/ErrorModel'), require('../model/GetContacts'), require('../model/GetExtendedList'), require('../model/GetFolderLists'), require('../model/GetLists'), require('../model/PostContactInfo'), require('../model/RemoveContactFromList'), require('../model/UpdateList'));
  } else {
    // Browser globals (root is window)
    if (!root.SendinBlueApi) {
      root.SendinBlueApi = {};
    }
    root.SendinBlueApi.ListsApi = factory(root.SendinBlueApi.ApiClient, root.SendinBlueApi.AddContactToList, root.SendinBlueApi.CreateList, root.SendinBlueApi.CreateModel, root.SendinBlueApi.ErrorModel, root.SendinBlueApi.GetContacts, root.SendinBlueApi.GetExtendedList, root.SendinBlueApi.GetFolderLists, root.SendinBlueApi.GetLists, root.SendinBlueApi.PostContactInfo, root.SendinBlueApi.RemoveContactFromList, root.SendinBlueApi.UpdateList);
  }
}(this, function(ApiClient, AddContactToList, CreateList, CreateModel, ErrorModel, GetContacts, GetExtendedList, GetFolderLists, GetLists, PostContactInfo, RemoveContactFromList, UpdateList) {
  'use strict';

  /**
   * Lists service.
   * @module api/ListsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new ListsApi. 
   * @alias module:api/ListsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addContactToList operation.
     * @callback module:api/ListsApi~addContactToListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostContactInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add existing contacts to a list
     * @param {Number} listId Id of the list
     * @param {module:model/AddContactToList} contactEmails Emails addresses of the contacts
     * @param {module:api/ListsApi~addContactToListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostContactInfo}
     */
    this.addContactToList = function(listId, contactEmails, callback) {
      var postBody = contactEmails;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling addContactToList");
      }

      // verify the required parameter 'contactEmails' is set
      if (contactEmails === undefined || contactEmails === null) {
        throw new Error("Missing the required parameter 'contactEmails' when calling addContactToList");
      }


      var pathParams = {
        'listId': listId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PostContactInfo;

      return this.apiClient.callApi(
        '/contacts/lists/{listId}/contacts/add', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createList operation.
     * @callback module:api/ListsApi~createListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a list
     * @param {module:model/CreateList} createList Values to create a list
     * @param {module:api/ListsApi~createListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateModel}
     */
    this.createList = function(createList, callback) {
      var postBody = createList;

      // verify the required parameter 'createList' is set
      if (createList === undefined || createList === null) {
        throw new Error("Missing the required parameter 'createList' when calling createList");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CreateModel;

      return this.apiClient.callApi(
        '/contacts/lists', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteList operation.
     * @callback module:api/ListsApi~deleteListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a list
     * @param {Number} listId Id of the list
     * @param {module:api/ListsApi~deleteListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteList = function(listId, callback) {
      var postBody = null;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling deleteList");
      }


      var pathParams = {
        'listId': listId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/contacts/lists/{listId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getContactsFromList operation.
     * @callback module:api/ListsApi~getContactsFromListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetContacts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the contacts in a list
     * @param {Number} listId Id of the list
     * @param {Object} opts Optional parameters
     * @param {Date} opts.modifiedSince Filter (urlencoded) the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result.
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {Number} opts.offset Index of the first document of the page (default to 0)
     * @param {module:api/ListsApi~getContactsFromListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetContacts}
     */
    this.getContactsFromList = function(listId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getContactsFromList");
      }


      var pathParams = {
        'listId': listId
      };
      var queryParams = {
        'modifiedSince': opts['modifiedSince'],
        'limit': opts['limit'],
        'offset': opts['offset'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetContacts;

      return this.apiClient.callApi(
        '/contacts/lists/{listId}/contacts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFolderLists operation.
     * @callback module:api/ListsApi~getFolderListsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFolderLists} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the lists in a folder
     * @param {Number} folderId Id of the folder
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of documents per page (default to 10)
     * @param {Number} opts.offset Index of the first document of the page (default to 0)
     * @param {module:api/ListsApi~getFolderListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFolderLists}
     */
    this.getFolderLists = function(folderId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'folderId' is set
      if (folderId === undefined || folderId === null) {
        throw new Error("Missing the required parameter 'folderId' when calling getFolderLists");
      }


      var pathParams = {
        'folderId': folderId
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetFolderLists;

      return this.apiClient.callApi(
        '/contacts/folders/{folderId}/lists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getList operation.
     * @callback module:api/ListsApi~getListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetExtendedList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details of a list
     * @param {Number} listId Id of the list
     * @param {module:api/ListsApi~getListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetExtendedList}
     */
    this.getList = function(listId, callback) {
      var postBody = null;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getList");
      }


      var pathParams = {
        'listId': listId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetExtendedList;

      return this.apiClient.callApi(
        '/contacts/lists/{listId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLists operation.
     * @callback module:api/ListsApi~getListsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLists} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the lists
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of documents per page (default to 10)
     * @param {Number} opts.offset Index of the first document of the page (default to 0)
     * @param {module:api/ListsApi~getListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLists}
     */
    this.getLists = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GetLists;

      return this.apiClient.callApi(
        '/contacts/lists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeContactFromList operation.
     * @callback module:api/ListsApi~removeContactFromListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostContactInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove existing contacts from a list
     * @param {Number} listId Id of the list
     * @param {module:model/RemoveContactFromList} contactEmails Emails adresses of the contact
     * @param {module:api/ListsApi~removeContactFromListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostContactInfo}
     */
    this.removeContactFromList = function(listId, contactEmails, callback) {
      var postBody = contactEmails;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling removeContactFromList");
      }

      // verify the required parameter 'contactEmails' is set
      if (contactEmails === undefined || contactEmails === null) {
        throw new Error("Missing the required parameter 'contactEmails' when calling removeContactFromList");
      }


      var pathParams = {
        'listId': listId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PostContactInfo;

      return this.apiClient.callApi(
        '/contacts/lists/{listId}/contacts/remove', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateList operation.
     * @callback module:api/ListsApi~updateListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a list
     * @param {Number} listId Id of the list
     * @param {module:model/UpdateList} updateList Values to update a list
     * @param {module:api/ListsApi~updateListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateList = function(listId, updateList, callback) {
      var postBody = updateList;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling updateList");
      }

      // verify the required parameter 'updateList' is set
      if (updateList === undefined || updateList === null) {
        throw new Error("Missing the required parameter 'updateList' when calling updateList");
      }


      var pathParams = {
        'listId': listId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/contacts/lists/{listId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
