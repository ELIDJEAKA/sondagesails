/**
 * SimulateurController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    /**
     * Update or create simuulateur 
     * @Route("POST /simuulateur/add")
     **/
    addSimulateur: async function(req,res){
        Simulateur.findOrCreate({ candidat: req.body.candidat }, {
            candidat: req.body.candidat, 
            nombre_partisans: 1
            })
            .exec(async (err, simulateur, wasCreated) => {
                if (err) { return res.serverError(err); }

                if (wasCreated) {
                    sails.log('Created a new user: ' + simulateur);
                }
                else { // simulateur du candidat exite ==> passe à la modification du nombre
                    await Simulateur.update({ candidat: req.body.candidat })
                        .set({ nombre_partisans: parseInt(simulateur.nombre_partisans + 1) });
                }
            });

        Erreur.findOrCreate({ code: req.body.code }, {
            code: req.body.code, 
            name: req.body.name, 
            nombre: 1
            })
            .exec(async (err, erreur, wasCreated) => {
                if (err) { return res.serverError(err); }

                if (wasCreated) {
                    sails.log('Created a new user: ' + erreur);
                }
                else { // simulateur du candidat exite ==> passe à la modification du nombre
                    await Erreur.update({ code: req.body.code })
                        .set({ nombre: parseInt(erreur.nombre + 1) });
                }
            });
        return res.json({
            message : "data updated"
        })
        // var simulateur = await Simulateur.findOne({
        //     candidat: req.candidat
        // });

        // if (!simulateur) {
        //     return res.notFound('Could not find Finn, sorry.');
        // }
        //console.log(req.body)
        //sails.log('Found "%s"', simulateur.fullName);
        
    }
};

