import React, {useState, useEffect } from 'react'
import Header from "./Components/Header";
import Form from "./Components/Form";
import ItemsList from './Components/ItemsList';
import "./App.css";


const App = () => {
  const initialState = JSON.parse(localStorage.getItem("items")) || [];
  const [input,setInput]=useState("");
  const [items,setItems]=useState(initialState);
  const [editItem, setEditItem] = useState(null);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          items={items}
          setItems={setItems}
          editItem={editItem}
          setEditItem={setEditItem}

          />
        </div>
        <div>
        <ItemsList items={items} setItems={setItems} setEditItem={setEditItem} />
        </div>
      </div>  
    </div>
  );


};
export default App;