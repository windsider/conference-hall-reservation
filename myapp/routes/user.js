
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.json('users', {    
   
"Students": [

{ "Name":"Amit Goenka" ,
"Major":"Physics" },
{ "Name":"Smita Pallod" ,
"Major":"Chemistry" },
{ "Name":"Rajeev Sen" ,
"Major":"Mathematics" }
]
}
    

); 
};

