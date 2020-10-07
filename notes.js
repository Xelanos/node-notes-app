const fs = require('fs')
const chalk = require('chalk')
function getNotes() {
    return 'Notes'
}

function addNote(title, body){
    const notes = loadNotes()
    const duplicates = notes.filter(note => note.title === title)

    if (duplicates.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added'))
    } else {
        console.log(chalk.red.inverse('Title already taken'))
    }
}

function loadNotes(){
    try {
        return JSON.parse( fs.readFileSync('notes.json').toString())
    } catch (e) {
        return []
    }
}

function removeNote(title) {
    const notes = loadNotes()
    const noteIndex = notes.findIndex(note=> note.title === title)
    console.log(noteIndex)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
        saveNotes(notes)
        console.log(chalk.green.inverse(`Note with the title "${title}" was removed`))
    }
    else {
        console.log(chalk.red.inverse('Note does not exist'))
    }
}

function saveNotes(notes) {
    try {
        fs.writeFileSync('notes.json', JSON.stringify(notes))
    } catch (e) {
        console.log(chalk.red.inverse("Couldn't save"))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}