var MongoClient =
    import ('mongodb').MongoClient;
var url = "mongodb://172.104.156.217:27017/?directConnection=true&appName=mongosh+1.6.0";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
}); 