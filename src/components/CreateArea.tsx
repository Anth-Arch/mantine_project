import { ChangeEvent, FormEvent, useState } from "react";

type Note ={
    title: string;
    content: string;
}

type CreateAreaProps = {
  onAdd: (note: Note) => void;
};

function CreateArea({onAdd} : CreateAreaProps) {
  const [note, setNote] = useState<Note>({
    title: "",
    content: ""
  });

  function handleChange(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event: FormEvent) {
    event.preventDefault();
    onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
