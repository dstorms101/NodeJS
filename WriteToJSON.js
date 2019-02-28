//********************************************
//Writes to JSON
  var fs = require('fs'); 
  var data = body //replace body with data to be written
 // let data = JSON.stringify(body);  
  fs.writeFileSync('student-2.json', data);
//*********************************************