import Note from "../models/Note.js"

export const getAllnotes = async (req,res) => {
    try{
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        console.log("Error in getAllnodes", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export const getnotebyid = async (req,res) => {
    try{
        const notes = await Note.findById(req.params.id);
        if(!notes) return res.send({message: "Note not found"});
        res.json(notes);
    } catch (error) {
        console.log("Error in getnodesbyid", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export const CreateNote = async (req,res) => {
   try{
        const {title, content} = req.body;
        const note = new Note({title, content});
        const savednote = await note.save();
        res.json(savednote);
   } catch(error) {
        console.log("Error in CreateNote", error);
        res.status(500).json({message: "Internal server error"});
   }
};

export const UpdateNotes = async (req,res) => {
    try{
        const {title, content} = req.body;
        const Update = await Note.findByIdAndUpdate(req.params.id, {title, content});
        if(!Update) return res.json({message: "Note not found"});
        res.json(Update);
    } catch (error) {
        console.log("Error in Update Note", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export const DeleteNotes = async (req,res) => {
    try{
        const deleteNote = await Note.findByIdAndDelete(req.params.id);
        if(!deleteNote) return res.json({message: "Note not found"});
        res.json({message: "Note deleted"});
    } catch (error) {
        console.log("Error in delete Note", error);
        res.status(500).json({message: "Internal server error"});
    }
};