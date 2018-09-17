/**
 * Event.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    category: {
      type: 'string',
      isIn: ["reunion", "campagne d'information","visite du candidat"],
      defaultsTo: 'reunion'
    },
    organisateur:{
      type:'string',
      required:true
    },
    description:{
      type:'string'
    },
    date:{
      type: 'ref',
      columnType: 'datetime'
    },
    nb_participant:{
      type: 'number'
    },
    statut:{
      type: 'string',
      isIn: ["en cours", "achévé", "non débuté"],
      defaultsTo: 'non debuté'
    },
    zone: {
      model: 'zone'
    }
  },

};

