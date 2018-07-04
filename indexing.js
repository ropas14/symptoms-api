const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
      if (err) {isfound=false; return;};
      var dbo = db.db("webmd");
      dbo.collection("modSymptoms").createIndex( { sy: 1}, { collation: { locale: 'en', strength: 2 } } );
     });
   