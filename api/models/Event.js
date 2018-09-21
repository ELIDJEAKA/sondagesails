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
  afterCreate: async function (newlyCreatedRecord, proceed) {
    var finn = await Zone.findOne({
      id: newlyCreatedRecord.zone
    });

    if (!finn) {
      return res.notFound('Could not find Finn, sorry.');
    }

    await Zone.update({ id: newlyCreatedRecord.zone })
      .set({ event: parseInt(finn.event + 1) });
    return proceed();
  }
};

