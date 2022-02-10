var FistName  = ["Gian","sandeep","Bhavesh"];
var LastName = ["chand","kumar","kumar"];
var fullNameAry = [];
for (var i = 0; i < FistName.length; i ++ ) {
    for ( var j = 0; j< LastName.length; j ++ )
    var fullLame = (FistName [i] + "" + LastName [j]);
    fullNameAry.push(fullLame);
    console.log(fullNameAry)

}
