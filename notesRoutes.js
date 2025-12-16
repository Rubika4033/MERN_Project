import express from "express";
import{createNote,getAllNotes,UpdateNote,DeleteNote} from "../controlers/notesControler.js";

const routes=express.Router();
routes.get("/",getAllNotes);
routes.put("/",createNote);
routes.post("/:id",UpdateNote);
routes.delete("/:id",DeleteNote);
export default routes;
