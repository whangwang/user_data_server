'use strict';

var request = require("request");
var user_data = [
  {
    "id": "123412341234sdfasf",
    "notify": [
      {
        "type": "city",
        "cid": "1",
        "string": "台北市"
      },
      {
        "type": "reg",
        "cid": "3",
        "sid": "21",
        "string": "台北市文山區"
      }
    ]
  }
];
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('pages/index');
    });

    app.get('/get_data/:user_id', function(req, res) {
        var d = [];
        for(var i = 0; i < user_data.length; i++){
          if(String(user_data[i].id)==String(req.params.user_id)){
            d.push(user_data[i]);
          }
        }
        var rtn = {
          "msg": "success",
          "id": req.params.user_id,
          "data": d
        }
        res.json({
          rtn: rtn
        });
    });

    app.get('/demo_data', function(req, res){
      var result_591 = [{
          "title": "全新裝潢頂加住家",
          "image_url": "https://hp1.591.com.tw/house/active/2016/11/01/147800112645349902_210x158.crop.jpg",
          "layout": "2房1廳2衛1陽台",
          "web_url": "https://rent.591.com.tw/rent-detail-5945091.html",
          "date":  "2018-01-105"
        }]
        for( var i = 0; i < 1; i++){
          element_arr.push({
            "title":result_591[i].title,
            "image_url":result_591[i].image_url,
            "subtitle":result_591[i].layout,
            "default_action": {
              "type": "web_url",
              "url": result_591[i].web_url
            },
            "buttons":[
              {
                "type":"web_url",
                "url":result_591[i].web_url,
                "title":"開啟"
              },
              {
                "type": "element_share",
                "share_contents": {
                 "attachment": {
                   "type": "template",
                   "payload": {
                      "template_type":"generic",
                      "elements": [
                        {
                          "title":result_591[i].title,
                          "image_url":result_591[i].image_url,
                          "subtitle":result_591[i].layout,
                          "default_action": {
                            "type": "web_url",
                            "url": result_591[i].web_url
                          },"buttons":[
                           {
                            "type":"web_url",
                            "url":result_591[i].web_url,
                            "title":"View Detail"
                           }
                          ]
                        }
                      ]
                    }
                  }
                 }
              }
            ]
          });
        }
        console.log(element_arr);
        response = {
              "attachment": {
              "type": "template",
              "payload": {
                 "template_type":"generic",
                 "elements": element_arr
               }
             }
         }
         res.json(response);
    });

    app.post('/set_data', function(req, res) {
      req.on('data', function (data) {
        console.log(data);
        var id = JSON.parse(data).id;
        var type = JSON.parse(data).type;
        var string = JSON.parse(data).string;
        var cid;
        var sid;
        if(String(type)=="city"){
          cid = JSON.parse(data).cid;
          var find = 0;
          for(var i = 0; i < user_data.length; i++){
            if(String(user_data[i].id)==String(id)){
              user_data[i].notify.push({
                type: type,
                cid: cid,
                string: string
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
                string: string
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
                sid: sid,
                string: string
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
                sid: sid,
                string: string
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
