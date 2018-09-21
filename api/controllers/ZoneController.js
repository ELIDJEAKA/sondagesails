/**
 * ZoneController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    sondage_zone:async function(req,res){
        var Zones = await Zone.find({})        
        return res.json(Zones)
    }
};

