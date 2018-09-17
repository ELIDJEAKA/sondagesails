let md5 = require('md5');
module.exports = {
    uploadFilePartisans: function (req, res) {
        req.file('avatar').upload({

            dirname: '../../assets/images/partisans',
            maxBytes: 5000000

        }, function (err, file) {
            if (err) console.log(err)
            return res.json({ "status ": " fichier chargé avec succes ", "file": file })
        })
    },
    countPartisans: function (req, res) {
        Partisan.count({}).exec(function countCB(error, found) {
            if (error) {
                sails.log(error)
            } else {
                if (found == 0) {
                    console.log('There are ' + found + ' users ');
                }
                return res.json({partisans:found})
            }

        });
    }
};

