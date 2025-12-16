import Note from "../models/Note.js";
export  async function getAllNotes(req,res) {
    try{
        const notes=await Note.find();
        res.status(200).josn(notes);
    }
    catch(error){
        console.error("Error in getAllnotes controller",error);
        res.status(500).json({ message:"Internal server error"});

    }
}

export function createNote(req,res){
    res.status(201).josn({message:"notes putted successfully"});
}
export function UpdateNote(req,res){
    res.status(200).josn({message:"The note was updated"});
}
export function DeleteNote(req,res){
    req.status(200).json({message:"Note can be deleted successfully"});
}