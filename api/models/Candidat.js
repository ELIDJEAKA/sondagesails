/**
 * Candidat.js
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
    sigle: {
      type: 'string'
    },
    image: {
      type: 'string',
      required: true
    },
    logo: {
      type: 'string'
    },
    espace_vote: {
      type: 'boolean',
      required: true
    }

  },

};

