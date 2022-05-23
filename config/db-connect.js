var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: '',     
  database: 'playground' 
}); 
conn.connect(function(err) {
  if (err) throw err;
  
  console.log('Konektedo Databeso 😂 !');

});
module.exports = conn;