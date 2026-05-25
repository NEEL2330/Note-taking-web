import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI';
import Notecard from '../components/Notecard';
import api from '../lib/axios';
import NoteNotFound from '../components/NoteNotFound';

const HomePage = () => {
  const [IsRateLimited, setIsRateLimited] = useState(false)
  const [notes, setnotes] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        // const res = await axios.get("http://localhost:5000/api/notes")
        // console.log(res.data)
        // setnotes(res.data)
        // setIsRateLimited(false)
        const res = await api.get("/notes");
        console.log(res.data);
        if (Array.isArray(res.data)) {
          setnotes(res.data);
        } else {
          console.error("Expected array but got:", res.data);
          setnotes([]);
        }
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes", error)
        if (error.response?.status === 429) {
          setIsRateLimited(true)
        } else {
          toast.error("Failed to load notes")
        }
      } finally {
        setloading(false)
      }
    }
    fetchNotes()
  }, [])

  return (
    <div>
      <Navbar />

      {IsRateLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading notes...</div>}
        {notes.length === 0 && !IsRateLimited && <NoteNotFound />}
        {notes.length > 0 && !IsRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <Notecard key={note._id} note={note} setnotes={setnotes}/>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage