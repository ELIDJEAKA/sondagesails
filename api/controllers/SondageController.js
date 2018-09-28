/**
 * SondageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    /**
     * Update or create sondage 
     * @Route("POST /sondage/add")
     **/

    
    addSondage: async function (req, res) {
        if (typeof(req.body.sondage) != 'undefined'){
            req.body.sondage.forEach(function (element) {
                Sondage.findOrCreate({ code: element.code }, {
                    code: element.code,
                    name: element.name,
                    nombre: 1
                })
                    .exec(async (err, sondage, wasCreated) => {
                        if (err) { return res.serverError(err); }
                        if (wasCreated) {
                            sails.log('Created a new user: ' + sondage);
                        }
                        else { // sondage du candidat exite ==> passe à la modification du nombre
                            await Simulateur.update({ code: element.code })
                                .set({ nombre: parseInt(sondage.nombre + 1) });
                        }
                    });
            });
        }
        if (typeof (req.body.contre) != 'undefined') {
            req.body.contre.forEach(function (element) {
                Contre.findOrCreate({ code: element.code }, {
                    code: element.code,
                    name: element.name,
                    nombre: 1
                })
                    .exec(async (err, contre, wasCreated) => {
                        if (err) { return res.serverError(err); }
                        if (wasCreated) {
                            sails.log('Created a new user: ' + contre);
                        }
                        else { // sondage du candidat exite ==> passe à la modification du nombre
                            await Contre.update({ code: element.code })
                                .set({ nombre: parseInt(contre.nombre + 1) });
                        }
                    });
            });
        }
        if (typeof (req.body.pointfort) != 'undefined') {
            req.body.pointfort.forEach(function (element) {
                PointFort.findOrCreate({ code: element.code }, {
                    code: element.code,
                    name: element.name,
                    nombre: 1
                })
                    .exec(async (err, pointfort, wasCreated) => {
                        if (err) { return res.serverError(err); }
                        if (wasCreated) {
                            sails.log('Created a new user: ' + pointfort);
                        }
                        else { // sondage du candidat exite ==> passe à la modification du nombre
                            await PointFort.update({ code: element.code })
                                .set({ nombre: parseInt(pointfort.nombre + 1) });
                        }
                    });
            });
        }
        
        if (typeof (req.body.axeamelioration) != 'undefined') {
            req.body.axeamelioration.forEach(function (element) {
                AxeAmelioration.findOrCreate({ code: element.code }, {
                    code: element.code,
                    name: element.name,
                    nombre: 1
                })
                    .exec(async (err, axeamelioration, wasCreated) => {
                        if (err) { return res.serverError(err); }
                        if (wasCreated) {
                            sails.log('Created a new user: ' + axeamelioration);
                        }
                        else { // sondage du candidat exite ==> passe à la modification du nombre
                            await AxeAmelioration.update({ code: element.code })
                                .set({ nombre: parseInt(axeamelioration.nombre + 1) });
                        }
                    });
            });
        }
        
        if (typeof (req.body.topic) != 'undefined') {
            req.body.topic.forEach(function (element) {
                Topic.findOrCreate({ code: element.code }, {
                    code: element.code,
                    name: element.name,
                    nombre: 1
                })
                    .exec(async (err, topic, wasCreated) => {
                        if (err) { return res.serverError(err); }
                        if (wasCreated) {
                            sails.log('Created a new user: ' + topic);
                        }
                        else { // sondage du candidat exite ==> passe à la modification du nombre
                            await Topic.update({ code: element.code })
                                .set({ nombre: parseInt(topic.nombre + 1) });
                        }
                    });
            });
        }
                
        return res.json({
            message: "sondage effectué avec succès"
        })

    }
};

