const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.0.1')

yargs.command({
    command: 'add',
    description: 'adds a note',
    builder: {
        title: {
            description : 'Title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            description : 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler : function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    description: 'removes a note by title',
    builder: {
        title: {
            description : 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler : function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    description: 'lists all the notes',
    handler : function () {

    }
})

yargs.command({
    command: 'read',
    description: 'reads a note',
    handler : function () {

    }
})

yargs.parse()
