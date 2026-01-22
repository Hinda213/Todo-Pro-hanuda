import React, { useState } from "react";

type AddTaskProps ={
    onAdd: (text: string) => void;
}

export default function AddTask ({onAdd}: AddTaskProps){
const[text, setText] = useState("");

const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();

    if(text.trim() === "")return;
    onAdd(text);
    setText("")
}


    return(
        <form onSubmit={handleSubmit} className="flex gap-3 mt-4 animate-fade-in">
            <input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a task..." 
            className="flex-1 px-4 py-2 rounded-full border border-indigo-200 bg-slate-100 focus:bg-white dark:bg-slate-700 dark:focus:bg-slate-800 dark:border-slate-600 focus:shadow-lg focus:outline-none transition"/>

            <button 
            type="submit"
            className="px-6 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
            >
            <span className="hidden md:inline">Add</span>
            <span className="inline md:hidden">+</span>
            </button>
        </form>
    )
}