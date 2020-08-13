const fs= require('fs');
const chalk= require('chalk');
const get_notes= function(){
    return 'balajibalaasdfasdjan@gmail.com';
}
//Adding a note
const addNote = (title,body) =>
{
const notes=loadNotes();

// const duplicate_notes=notes.filter( (note) => note.title === title)
const duplicate_notes=notes.find((note)=> note.title === title)


if (!duplicate_notes){
notes.push({
    title:title,
    body:body
})

//console.log(notes);
saveNotes(notes);
console.log(chalk.green.inverse('Notes Added Successfully.'))
}
else {
    console.log(chalk.red.inverse('No Duplicate please'))
}
}

//Save Note
const saveNotes= (notes) =>{
const data_strig=JSON.stringify(notes);
const wt_fin=fs.writeFileSync('fin.json',data_strig);
}

const loadNotes= () =>{
try {
const notes_list= fs.readFileSync('fin.json');
const dataJson= notes_list.toString();
return (JSON.parse(dataJson))
    
} catch (e) {
    return [];
}
}
//Removing a note
const removeNote = (title)=>
{
const notes_r=loadNotes();
const get_notes_r=notes_r.filter((note) => note.title !== title )
if(notes_r.length === get_notes_r.length)
{
    console.log(chalk.red.inverse("No Records found"));
}
else{
    console.log(chalk.green.inverse("Note Removed"))
}
 saveNotes(get_notes_r);
 }

const listNote = () =>{
const l_note=loadNotes();
console.log(chalk.green.inverse("My Notes"))
l_note.map((note) =>console.log(note.title))
}

const ReadNote= (title) =>
{
    const l_note=loadNotes();
    const duplicate_notes=l_note.find((note)=> note.title === title)
    if(duplicate_notes)
    {console.log(duplicate_notes.title+" and His/her skill "+duplicate_notes.body+" found it");}
    else
    {
        console.log("No record please");
    }

}
module.exports= {
    get_notes:get_notes,
    addNote:addNote,
    removeNote:removeNote,
    listNote:listNote,
    ReadNote:ReadNote
}