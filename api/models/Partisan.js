/**
 * Partisan.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fullname: {
      type: 'string',
      required: true
    },
    datenaiss: { 
      type: 'ref',
      columnType: 'datetime'
    },
    sexe: {
      type: 'string',
      isIn: ['M', 'F'],
      defaultsTo: 'M',
      required: true
    },
    profession: {
      type: 'string'
    },
    lieu_residence: {
      type: 'string',
      required: true
    },
    contact: {
      type: 'string'
    },
    email: {
      type: 'string',
      required: true
    },
    cni: {
      type: 'string'
    },
    carte_electeur: {
      type: 'boolean',
      required: true
    },
    num_carte_electeur: {
      type: 'string',
      required: true
    },
    lieu_vote: {
      type: 'string',
      required: true
    },
    avatar: {
      type: 'string',
      defaultsTo: 'default_avatar.png'
    },
    statut: {
      type: 'string'// membre simple, partisans, simpartisan, benevole
    },
    zone: {
      model: 'zone'
    }
  },
  afterCreate: async function (newlyCreatedRecord, proceed) {
    var finn = await Zone.findOne({
      id: newlyCreatedRecord.zone
    });

    if (!finn) {
      return res.notFound('Could not find Finn, sorry.');
    }

    await Zone.update({ id: newlyCreatedRecord.zone })
      .set({ nb_partisans: parseInt(finn.nb_partisans+1) });
    return proceed();
  }
};
