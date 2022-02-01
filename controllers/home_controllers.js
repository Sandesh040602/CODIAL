module.exports.home = function(req,res){
   return res.render('home',{
       title: "home",
       tittle: "home equals hostel"
   })
}
module.exports.secondhome = function(req,res){
    return res.end('<h1>welcome to the school</h1>');
}
module.exports.action = function(req,res){
    return res.end('<h1>welcome to the action</h1>');
}