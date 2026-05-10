"use client"

import { Plus } from "lucide-react"
import { Button } from "./ui/button"

const AddNote = () => {
  return (
    <Button className="bg-white size-8 rounded-full">
        <Plus />
    </Button>
  )
}

export default AddNote