import { useState } from 'react';
import Logo from './Component/Logo';
import Form from './Component/Form';
import PackingList from './Component/PackingList';
import Stats from './Component/Stats';


export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  };

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleDeleteAll() {
    const confirmed = window.confirm("Are you sure you want to delete all items?");
    if (confirmed) setItems([]);
    // setItems((items) => items.filter((item) => item === ''))
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item));
  };

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList items={items} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem} handleDeleteAll={handleDeleteAll} />
      <Stats items={items} />
    </div>
  )
}









