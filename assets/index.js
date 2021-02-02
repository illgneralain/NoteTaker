const { notEqual } = require("assert");
const e = require("express");

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

const renderActiveNote = () => {
    $saveNoteBtn.hide();


if (activeNote.id) {
    $noteTitle.attr("readonly", true);
    $noteTitle.val(activeNote.title);
    $noteText.attr("readonly", true);
    $noteText.val(activeNote.text);
}   else {
    $noteTitle.attr("readonly", false);
    $noteTitle.val("");
    $noteText.attr("readonly", false);
    $noteText.val("");
}
}; 