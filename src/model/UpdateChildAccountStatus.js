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
 * Swagger Codegen version: 2.3.1
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
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.UpdateChildAccountStatus = factory(root.SibApiV3Sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateChildAccountStatus model module.
   * @module model/UpdateChildAccountStatus
   * @version 7.x.x
   */

  /**
   * Constructs a new <code>UpdateChildAccountStatus</code>.
   * @alias module:model/UpdateChildAccountStatus
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>UpdateChildAccountStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateChildAccountStatus} obj Optional instance to populate.
   * @return {module:model/UpdateChildAccountStatus} The populated <code>UpdateChildAccountStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('transactionalEmail')) {
        obj['transactionalEmail'] = ApiClient.convertToType(data['transactionalEmail'], 'Boolean');
      }
      if (data.hasOwnProperty('transactionalSms')) {
        obj['transactionalSms'] = ApiClient.convertToType(data['transactionalSms'], 'Boolean');
      }
      if (data.hasOwnProperty('marketingAutomation')) {
        obj['marketingAutomation'] = ApiClient.convertToType(data['marketingAutomation'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Status of Transactional Email (SMTP) Platform activation for your account (true=enabled, false=disabled)
   * @member {Boolean} transactionalEmail
   */
  exports.prototype['transactionalEmail'] = undefined;
  /**
   * Status of Transactional SMS Platform activation for your account (true=enabled, false=disabled)
   * @member {Boolean} transactionalSms
   */
  exports.prototype['transactionalSms'] = undefined;
  /**
   * Status of Marketing Automation Platform activation for your account (true=enabled, false=disabled)
   * @member {Boolean} marketingAutomation
   */
  exports.prototype['marketingAutomation'] = undefined;



  return exports;
}));


