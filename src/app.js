import express from "express"
import noteModel from "./models/note.model.js"

const app = express()

app.use(express.json())

/*

    POST /notes
    GET /notes
    DELETE /note/:id
    PATCH /note/:id

*/


// note fetching route
app.get("/notes",async (req,res)=>{
    try{
        const notes = await noteModel.find()
        if(notes.length === 0){
            return res.status(200).json({
                success:true,
                message:"Nothing to show!",
                data:notes
            })
        }
        res.status(200).json({
                success:true,
                message:"All Notes Successfully fetched!",
                data:notes
            })
    }
    catch(err){
        res.status(404).json({
            success:false,
            message:"Server Error!"
        })
    }
})

// note creation route
app.post("/notes",async (req,res)=>{
    const data = req.body // {title , description}
    try{
        if(!data.title || !data.title.trim()) throw new Error("Title should not be Empty.")
        if(!data.description || !data.description.trim()) throw new Error("Description should not be Empty.")
        
        const note = await noteModel.create({
            title:data.title,
            description:data.description,
        })
        res.status(201).json({
            success:true,
            message:"Note created Successfully",
            data:note
        })
    }
    catch(err){
        res.status(400).json({
            success:false,
            message:err.message
        })
    }

})

// note updation route
app.patch("/notes/:id",async (req,res)=>{
    const id = req.params.id
    const {title,description} = req.body
    const updateFields = {}
    if(title && title.trim()) updateFields.title = title
    if(description && description.trim()) updateFields.description = description

    if(!updateFields.title && !updateFields.description){
        return res.status(400).json({
            success:false,
            message:"Both title and description contains nothing."
        })
    }
    try{
        const oldNote = await noteModel.findById(id)
        const newNote = await noteModel.findByIdAndUpdate(id,{... updateFields,updatedAt:new Date()},{returnDocument: "after",runValidators:true,strict: false})
        res.status(200).json({
            success:true,
            message:"Note updated Successfully",
            data:{
                new:newNote,
                old:oldNote
            }
        })
    }
    catch(err){
        return res.status(400).json({
            success:false,
            message:"Some error happens!"
        })
    }
})

// note deletion route
app.delete("/notes/:id",async (req,res)=>{
    const id = req.params.id
    try{
        const result = await noteModel.findOneAndDelete({_id:id})
        if(!result){
            return res.status(404).json({
                success:false,
                message:"Note not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"Note deleted successfully",
            data:result
        })
    }
    catch(err){
        return res.status(500).json({
        success: false,
        message: "Some error happens!"
        })
    }

})

export default app