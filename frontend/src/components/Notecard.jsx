import React from 'react'
import { Link } from 'react-router' // FIX: use 'react-router-dom', not 'react-router'
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import api from '../lib/axios'
import toast from 'react-hot-toast'

function Notecard({ note, setnotes }) {

    const handleDelete = async (e, id) => {
        e.preventDefault(); // Prevents card click navigation

        try {
            await api.delete(`/notes/${id}`)
            setnotes((prev) => prev.filter(n => n._id !== id))
            toast.success("Note deleted successfully")
        } catch (error) {
            console.log(error)
            toast.error("Failed to delete Note")
        }
    }

    return (
        <div className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]">
            <div className="card-body">
                <Link to={`/note/${note._id}`}>
                    <h3 className="card-title text-base-content">{note.title}</h3>
                    <p className="text-base-content/70 line-clamp-3">{note.content}</p>
                </Link>

                <div className="card-actions justify-between items-center mt-4">
                    <div className="flex items-center gap-1">
                        <PenSquareIcon className="size-4" />
                        <button
                            className="btn btn-ghost btn-xs text-error"
                            onClick={(e) => handleDelete(e, note._id)}
                        >
                            <Trash2Icon className="size-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notecard
