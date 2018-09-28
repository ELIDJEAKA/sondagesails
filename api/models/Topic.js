/**
 * Topic.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    code: {
      type: 'number',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    nombre: {
      type: 'number'
    }
  },

};

