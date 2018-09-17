/**
 * Equipe.js
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
    membre: {
      type: 'string',
      required: true
    },
    fonction: {
      type: 'string',
      isIn: ['coordinateur', 'chef de zone', 'animateur','militant','agent de terrain','benevole'],
      defaultsTo: 'agent de terrain'
    },
    contact: {
      type: 'string'
    },
    zone: {
      model: 'zone'
    }
  }

};

