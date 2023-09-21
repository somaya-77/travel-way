import { useState } from 'react';

export default function Form({ handleAddItems }) {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handelSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = { id: Date.now(), description, quantity, packed: false };

        console.log(newItem);
        handleAddItems(newItem);

        setDescription("");
        setQuantity(1);
    };

    return (
        <div>
            <form className="add-form" onSubmit={handelSubmit}>
                <h3>What do you need for your 😍 trip?</h3>
                <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
                    {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
                        <option value={num} key={num}>{num}</option>
                    ))}
                </select>

                <input type="text" placeholder="Item...." value={description}
                    onChange={(e) => setDescription(e.target.value)} />

                <button>Add</button>
            </form>
        </div>
    )
}