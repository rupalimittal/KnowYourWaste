var mysql = require('mysql');
// var bcrypt = require('bcrypt');
var jsonfile = require('jsonfile');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'AIM@sql001',
  database : 'waste',
  insecureAuth: false
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn",err);
}
});

exports.register = function(req,res){
  // console.log("req",req.body);
  var today = new Date();
  // bcrypt.hash(req.body.password, 5, function( err, bcryptedPassword) {
   //save to db
   var users={
     "first_name":req.body.first_name,
     "last_name":req.body.last_name,
     "userid":req.body.userid,
     "password":req.body.password,
     "role":req.body.role,
     "created":today,
     "modified":today,
     "society_name":req.body.society_name,
     "FLAT_NO":req.body.FLAT_NO
   }
   console.log(users);
   connection.query('INSERT INTO waste_managment SET ?',users, function (error, results, fields) {
   if (error) {
     console.log("error ocurred",error);
     res.send({
       "code":400,
       "failed":"error ocurred"
     })
   }else{
    //  console.log('The solution is: ', results);
     res.send({
       "code":200,
       "success":"user registered sucessfully"
         });
   }
   });
  // });


}

exports.login = function(req,res){
  var userid= req.body.userid;
  var password = req.body.password;
  var role = req.body.role;
  connection.query('SELECT * FROM waste_managment WHERE userid = ?',[userid], function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    // console.log('The solution is: ', results[0].password,req.body.password,req.body.role);
    if(results.length >0){
      if(results[0].password == req.body.password){
        if(results[0].role == req.body.role){
          var file = './userdata/userid.json'
          var obj = {userid: req.body.userid}
          jsonfile.writeFile(file, obj, function (err) {
            if(err){
              console.log("Error ocurred in writing json during login at login handler in login routes",err);
            }
          })
          res.send({
            "code":200,
            "result":results,
            "success":"login sucessfull"
          })
        }
        else{
          res.send({
            "code":204,
            "success":"You have logged in from wrong user role"
          })
        }

      }
      else{
        res.send({
             "code":204,
             "success":"Email and password does not match"
        })
      }

    }
    else{
      res.send({
        "code":204,
        "success":"Email does not exits"
          });
    }


  }
  });
}
exports.register = function(req,res){
  // console.log("req",req.body);
  var today = new Date();
  // bcrypt.hash(req.body.password, 5, function( err, bcryptedPassword) {
  //save to db
  var users={
    "first_name":req.body.first_name,
    "last_name":req.body.last_name,
    "userid":req.body.userid,
    "password":req.body.password,
    "role":req.body.role,
    "created":today,
    "modified":today,
    "society_name":req.body.society_name,
    "FLAT_NO":req.body.FLAT_NO
  }
  console.log(users);
  connection.query('INSERT INTO waste_managment SET ?',users, function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      //  console.log('The solution is: ', results);
      res.send({
        "code":200,
        "success":"user registered sucessfully"
      });
    }
  });
  // });


}

exports.fetchData = function(req,res){

  var role = req.body.role;
  connection.query('SELECT * FROM waste_managment WHERE role = ?',['student'], function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      // console.log('The solution is: ', results[0].password,req.body.password,req.body.role);
      console.log(results);
      if(results.length >0){
        res.send({
          "code":200,
          "success":"Data Fetched succesfully",
          "data":results
        })
      }
      else{
        res.send({
          "code":404,
          "success":"Data not found"
        });
      }


    }
  });
}
exports.updateData= function(req,res){
  // console.log("req",req.body);
  var data=req.body.data;
  var modifiedData=data.map(value=>{
    return {'userid':value.userid,'points':value.points,'role':value.role};
  })
  var flag=false;
 for(var i=0;i<modifiedData.length;i++)
 {

    if(modifiedData[i].role==='teacher')
    {
      continue;
    }
   connection.query('UPDATE waste_managment SET points = ? WHERE userid = ?', [modifiedData[i].points, modifiedData[i].userid], function (error, results, fields) {
     if (error) {
       console.log("error", error);
       flag=true;
     }
     else
     {
       console.log('data updated');
     }
   })
   if(flag)
   {
     break;
   }

 }
 if(flag)
 {
   res.send({
     "code":400,
     "failed":"error ocurred"
   })
 }
 else
 {
   res.send({
     "code":200,
     "success":"update done succesfully"
   })
 }

}