import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Form from "./Form";

export default function App() {
  const [data, setData] = useState([]);

  function saveData(notetitle, notecontent) {
    setData((prev) => {
      return [...prev, { title: notetitle, content: notecontent }];
    });
  }
  function deleteData(id) {
    setData((prev) => {
      return prev.filter((dataitem, index) => {
        return index !== id;
      });
    });
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
            id={index}
            ondelete={deleteData}
          />
        );
      })}

      <Footer />
    </div>
  );
}
