/**
 * Erreur.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    code:{
      type: 'string',
      isIn: ["1", "2", "3","4"],
      defaultsTo: '1'
    },
    nombre: {
      type: 'number'
    }
  },

};

