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
  afterCreate:function(CreatedRecord, proceed){
    Zone.update({ id: CreatedRecord.zone }, { nb_partisans: nb_partisans + 1 }).exec(function afterwards(err, updated) {
      if (err) {
        console.log(err)
        return;
      }
      console.log(Zone);
    });
    return CreatedRecord

    // console.log("===============nouveau partisan===============")
    // console.log(CreatedRecord)
    // console.log("===============nouveau partisan===============")
    // Zone.update({ name: CreatedRecord.zone })
    //   .set({ nb_partisans: nb_partisans + 1 });
    // sails.log('Nouveau partisan enregistre');
    // return res.ok();
  }
};
