'use strict';

var request = require("request");
var user_data = [
  {
    "id": "123412341234sdfasf",
    "notify": [
      {
        "type": "city",
        "cid": "1"
      },
      {
        "type": "reg",
        "cid": "3",
        "sid": "21"
      }
    ]
  }
];
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('pages/index');
    });

    app.get('/get_data/:user_id', function(req, res) {
        var rtn = {
          "msg": "success",
          "id": req.params.user_id,
          "data": user_data
        }
        res.render('pages/index',{
          rtn: rtn
        });
    });

    app.post('/set_data/:user_id', function(req, res) {
        var rtn;
        res.render('pages/index',{
          rtn: rtn
        });
    });

    app.get('/about', function(req, res) {



        res.render('pages/about',{
          reg_code: reg_code
        });
    });
};
