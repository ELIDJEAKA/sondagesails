/**
 * Simulateur.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    candidat: {
      model: 'candidat',
      required: true
    },
    nombre_partisans: {
      type: 'number'
    }
  },

};

