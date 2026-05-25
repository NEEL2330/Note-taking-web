import express from "express"; 
import {getAllnotes, CreateNote, UpdateNotes, DeleteNotes, getnotebyid} from '../controller/notesController.js'

const router = express.Router() 

router.get("/", getAllnotes);

router.get("/:id", getnotebyid);

router.post("/", CreateNote);

router.put("/:id", UpdateNotes);

router.delete("/:id", DeleteNotes);

export default router;