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
        res.json({
          rtn: rtn
        });
    });

    app.post('/set_data', function(req, res) {
      req.on('data', function (data) {
        console.log(data);
        var id = JSON.parse(data).id;
        var type = JSON.parse(data).type;
        var cid;
        var sid;
        if(String(type)=="city"){
          cid = JSON.parse(data).cid;
          var find = 0;
          for(var i = 0; i < user_data.length; i++){
            if(String(user_data[i].id)==String(id)){
              user_data[i].notify.push({
                type: type,
                cid: cid
              });
              find++;
            }
          }
          if(find==0){
            user_data.push({
              id: String(id),
              notify: [{
                type: type,
                cid: cid
              }]
            });
          }
          var rtn = {
            "msg": "success",
            "id": id,
            "data": user_data
          }
          res.send({
            rtn: rtn
          });
        }else{
          cid = JSON.parse(data).cid;
          sid = JSON.parse(data).sid;
          var find = 0;
          for(var i = 0; i < user_data.length; i++){
            if(String(user_data[i].id)==String(id)){
              user_data[i].notify.push({
                type: type,
                cid: cid,
                sid: sid
              });
              find++;
            }
          }
          if(find==0){
            user_data.push({
              id: String(id),
              notify: [{
                type: type,
                cid: cid,
                sid: sid
              }]
            });
          }
          var rtn = {
            "msg": "success",
            "id": id,
            "data": user_data
          }
          res.send({
            rtn: rtn
          });
        }

      });
    });

    app.get('/about', function(req, res) {



        res.render('pages/about',{
          reg_code: reg_code
        });
    });
};
