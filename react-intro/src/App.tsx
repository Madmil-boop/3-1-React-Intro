

import './App.css'
import './App.css'
import { useState } from "react";
 
const STORAGE_KEY = "react-list-items";
 
export function App() {
  const [items, setItems] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  });
 
  const [inputValue, setInputValue] = useState("");
 
  function addItem() {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    const newItems = [...items, trimmed];
    setItems(newItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
    setInputValue("");
  }
 
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") addItem();
  }
 
  return (
    <div>
      <h1>List Manager</h1>
 
      <form onSubmit={e => { e.preventDefault(); addItem(); }}>
        <input
          type="text"
          placeholder="Add a new item..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="submit">Add item</button>
      </form>
 
      <ul>
        {items.length === 0 ? (
          <li>No items yet — add one above.</li>
        ) : (
          items.map((item, index) => <li key={index}>{item}</li>)
        )}
      </ul>
    </div>
  );
}
 

export default App
