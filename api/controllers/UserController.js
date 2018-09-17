/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
let md5 = require('MD5');
module.exports = {
    /**
     * Return set Table in occupied state
     * @Route("POST /user/register")
     **/
    signup: function (req, res) {
        User.findOne({
            username: req.body.username
        }).exec(function (err, user) {


            if (err) {
                return res.serverError(err);
            }
            else if (!user) {

                User.create({
                    "name": req.body.name,
                    "email": req.body.email,
                    "identite": req.body.identite,
                    "username": req.body.username,
                    "password": md5(req.body.password),
                    "avatar": req.body.avatar
                }).exec(function (err, user) {
                    if (err) { return res.serverError(err); }

                });
                /*UserService.uploadFile(function(err,result){
                    sails.log("ff")
                })*/
                res.statusCode = 201
                return res.json({
                    message: "User created"
                })
            }
            else {

                res.statusCode = 203
                return res.json({
                    message: "User found"
                })
            }
        });
    },

    /**
   * Return login setup
   * @Route("POST /user/login")
   **/
    signin: function (req, res) {
        sails.log("ok")
        User.findOne({
            username: req.body.username
        }).exec(function (err, user) {
            if (err) {
                return res.serverError(err);
            } else if (!user) {
                res.statusCode = 203
                return res.json({
                    message: "Acces Refusé"
                })
            } else {
                let password = req.body.password
                if (md5(password) == user.password) {
                    res.statusCode = 201
                    return res.json(user)
                } else {
                    res.statusCode = 203
                    return res.json({
                        message: "Acces Refusé"
                    })
                }
            }
        })
    },
    /**
     * Count All Users 
     * @Route("GET /user/findorcreate")
     **/
    createUser: function (req, res) {
        UserService.countUser()
        res.json({
            message: 'utilisateur created'
        })
    },
    /**
     * Return User by username
     * @Route("GET /user/:username")
     **/
    findByUsername: function (req, res) {
        User.findOne({
            username: req.params.username
        }).exec(function (err, user) {
            if (err) {
                return res.serverError(err);
            }
            if (!user) {
                return res.notFound('Could not find Finn, sorry.');
            }
            sails.log('Found "%s"', user);
            return res.json(user);
        });
    }
};

