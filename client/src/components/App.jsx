import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Axios from "axios";
import Note from "./Note";
import Form from "./Form";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/notes").then((res) => {
      setData(res.data);
    });
  });

  function saveData(note) {
    Axios.post("http://localhost:3001/api/notes", note);
  }

  function deleteData(id) {
    Axios.delete("http://localhost:3001/api/notes/" + id);
  }

  return (
    <div>
      <Header />
      <Form onsubmit={saveData} />
      {data.map((item, index) => {
        return (
          <Note
            title={item.title}
            content={item.content}
            key={index}
            id={item._id}
            ondelete={deleteData}
          />
        );
      })}

      <Footer />
    </div>
  );
}
