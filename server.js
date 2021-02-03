const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3006;


// let notesData = [];

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.use(express.static("public"));

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });


//  app.get("/api/notes", function(err, res) {
//     try {
//         notesData = fs.readFileSync("api/db.json", "utf8")
//         console.log("Hello!");
//         notesData = JSON.parse(notesData);
//     } catch (err) {
//         console.log("/n error found in app get catch:");
//         console.log(err);
//     }
//     res.json(notesData);
// });

// app.post("/api/notes", function(req, res) {
//     try {
//         notesData = fs.readFileSync("api/db.json", "utf8")
//         console.log(notesData);
//         notesData = JSON.parse(notesData);
//         req.body.id = notesData.length;
//         notesData.push(req.body);
//         notesData = JSON.stringify(notesData);
//         fs.writeFile("api/db.json", notesData, "utf8", function(err){

//         if (err) throw err;
//         });
//     res.json(JSON.parse(notesData));
// } catch (err) {
//     throw err;
//     console.error(err);
// }
// });

// app.delete("/api/notes/:id", function(req, res) {
//     try {
//         notesData = fs.readFileSync("api/db.json", "utf8")
//         console.log(notesData);
//         notesData = JSON.parse(notesData);
//         notesData = notesData.filter(function(note) {
//             return note.id != req.params.id;
//         });
//         notesData = JSON.stringify(notesData);
//         fs.writeFile("api/db.json", notesData, "utf8", function(err){

//         if (err) throw err;
//         });

//     res.send(JSON.parse(notesData));
// } catch (err) {
//     throw err;
//     console.error(err);
// }
// });


// app.get('/notes', function(req, res){
//     res.sendFile(path.join(__dirname, "/routes/notes.html"));
// });

// app.get('/notes', function(req, res){
//     return res.sendFile(path.join(__dirname, "api/db.json"));
// });


// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
//   });
  