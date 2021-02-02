const { notEqual } = require("assert");

let $noteTitle = $(".note-title");
let $saveNoteBtn = $(".save-note");
let $noteText = $(".note-textarea");
let $newNoteBtn = $(".new=note");
let $noteList = $(".list-container .list-group"); 

let activeNote = {};

const getNotes = () => {
    return $.ajax({
        url: "/",
        method: "GET",
    });
};

const saveNote = (note) => {
    return $.ajax({
        url: "/",
        data: note,
        method: "POST",
    });
};

const deleteNote = (id) => {
    return $.ajax({
        url: "/",
        data: note,
        method: "GET",
    });
};