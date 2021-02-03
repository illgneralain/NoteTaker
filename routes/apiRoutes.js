const fs = require("fs");
const notes = require("./db/db.json")

module.exports = function(app){

    function writeTODB(notes){
        notes = JSON.stringify(notes);
        console.log(notes);

        fs.writeFileSync("./db/db.", notes, function(err){
            if (err) {
                return console.log(err);
            }
        });
    }

    app.get("/api/notes", function(req, res){
        res.json(notesData);
    });

    app.post("/api/notes", function(req, res){

        if(notesData.length == 0){
            req.body.id = "0";
        } else {
            req.body.id = JSON.stringify(JSON.parse(notesData[notesData.length - 1].id)+ 1);
        }

        console.log("req.body.id: " + req.body.id);

        notesData.push(req.body);

        writeTODB(notesData);
        console.log(notesData);

        res.json(req.body);
    });
    app.delete("/api/notes/:id", function(req, res){

        var id = req.params.id.toString();
        console.log(id);

        for (i=0; i < notesData.length; i++){
            if (notesData[i].id == id){
                console.log("match!");
                res.send(notesData[i]);

                notesData.splice(i,1);
                break;
            }
        }
        writeTODB(notesData);
    });
};