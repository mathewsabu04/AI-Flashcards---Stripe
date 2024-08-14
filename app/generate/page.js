'use client'

import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export default function Generate(){
  const {isLoaded, isSignedIn, user} = useUser
  const [flashcards, setFlashcards]=useState([])
  const [flipped, setFlipped]=useState([])
  const [text, setText]=useState('')
  const [name, setName]=useState('')
  const [open, setopen]=useState(false)  
  const router= useRouter

  const handleSubmit=async()=>{

    fetch('api/generate',{
      method: 'POST',
      body: text,
    })
    .then((res) => res.json())
    .then(data> setFlashcards(data))
  }
} 