import { ChangeEvent, useState } from "react";
import logo from "./assets/Logo.svg";
import { NewNoteCard } from "./components/NewNoteCard";
import { NoteCard } from "./components/NoteCard";

interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStoreged = localStorage.getItem("notes");

    if (notesOnStoreged) {
      return JSON.parse(notesOnStoreged);
    }
    return [];
  });

  function onNoteCreated(content: string) {
    const note = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    // criando um novo novo array e
    // adicionando uma nova nota no começo
    const notesArray = [note, ...notes];

    localStorage.setItem("notes", JSON.stringify(notesArray)); // notesArray para formato JSON
    setNotes(notesArray);
  }

  function onSearchNote(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function onDeleteNote(id: string) {
    const notesArray = notes.filter((note) => {
      return note.id != id;
    });

    setNotes(notesArray);
    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  const filteredNotes =
    search != ""
      ? notes.filter((note) =>
          note.content.toLowerCase().includes(search.toLowerCase())
        )
      : notes;

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <img src={logo} alt="nlw expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas anotações..."
          className="w-full bg-transparent text-3xl font-semibold text-slate-400 tracking-tight outline-none placeholder:text-slate-500"
          onChange={onSearchNote}
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {filteredNotes.map((note) => {
          return (
            <NoteCard key={note.id} note={note} onDeleteNote={onDeleteNote} />
          );
        })}
      </div>
    </div>
  );
}
