/**
 * Zone.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    quartier: {
      type: 'string',
      required: true
    },
    chef_zone: {
      type: 'string',
      required: true
    },
    nb_partisans: {
      type: 'number'
    },
    couvert: {
      type: 'string',
      isIn: ['oui', 'non'],
      defaultsTo: 'oui'
    },
    event: {
      type: 'number'
    },
    statut: {
      type: 'number'
    },
    equipes:{
      collection: 'equipe',
      via: 'zone'
    },
    partisans:{
      collection: 'partisan',
      via: 'zone'
    },
    events:{
      collection: 'event',
      via: 'zone'
    }
  }

};

