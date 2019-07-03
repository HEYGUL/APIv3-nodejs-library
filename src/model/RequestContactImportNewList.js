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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SendinBlueApi) {
      root.SendinBlueApi = {};
    }
    root.SendinBlueApi.RequestContactImportNewList = factory(root.SendinBlueApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RequestContactImportNewList model module.
   * @module model/RequestContactImportNewList
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>RequestContactImportNewList</code>.
   * To create a new list and import the contacts into it, pass the listName and an optional folderId.
   * @alias module:model/RequestContactImportNewList
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>RequestContactImportNewList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestContactImportNewList} obj Optional instance to populate.
   * @return {module:model/RequestContactImportNewList} The populated <code>RequestContactImportNewList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('listName')) {
        obj['listName'] = ApiClient.convertToType(data['listName'], 'String');
      }
      if (data.hasOwnProperty('folderId')) {
        obj['folderId'] = ApiClient.convertToType(data['folderId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * List with listName will be created first and users will be imported in it (Mandatory if listIds is empty).
   * @member {String} listName
   */
  exports.prototype['listName'] = undefined;
  /**
   * Id of the folder where this new list shall be created (Mandatory if listName is not empty).
   * @member {Number} folderId
   */
  exports.prototype['folderId'] = undefined;



  return exports;
}));


