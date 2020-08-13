const chalk= require('chalk')
const yargs= require('yargs')
const notes_utils=require('./utils');
const { addNote, listNote, ReadNote } = require('./utils');
const { removeNote } = require('./utils');
const { describe } = require('yargs');

yargs.version('2.0.0');
 
//Add Note
yargs.command({
    command: 'Add',
    describe: 'callling a new funtion to add a new note',
    builder:{
        Add_title:{
            describe:'Note to Add',
            demandOption:true,
            type:'String'
        },
        Add_desc:{
            describe:'Add Description',
            type:'String'

        }
    },

    handler (argv)
    {
        // console.log('It has been added ' +argv.Add_title +' and its description '+argv.Add_desc );
        addNote(argv.Add_title,argv.Add_desc);
    }

})

//Remove Note
yargs.command({
    command:'Remove',
    describe:'Function to removet the note',
    builder :{
        Remove_title : {
            describe: 'Note to Remove',
        demandOption:true,
        type:'String'
        },
         Remove_desc: {
             describe: 'remove description',
             type:'String'
         }
    },
    handler (argv)
    {
        //console.log('It has been removed : '+argv.Remove_note +' and '+argv.Remove_desc)
        removeNote(argv.Remove_title);
    }

})
//Listing all the notes
yargs.command({
     command:'List',
    describe:'To list the files',
     handler: (argv) =>
     {
         listNote();
     }
 })

//reading the particular title
yargs.command({
    command:'Read',
    describe:'To find the title value',
buider: {
    Read_title:{
        describe: 'Note to find',
        demandOption:true,
        type:'String'
    }   
},
handler (argv)
    {
        ReadNote(argv.Read_title);
    }

})
yargs.parse()
 //console.log(yargs.argv)
