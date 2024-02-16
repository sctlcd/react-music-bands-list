import './App.css';
import { useRef, useEffect, useState } from 'react';

function App() {

  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newNumberOfTimes, setNewNumberOfTimes] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);

  let itemName = useRef();
  let numberOfTimes = useRef();

  useEffect(() => {
    itemName.current.focus();
  }, []);

  function handleEdit(index) {
    setCurrentIndex(index);
    const { itemName, numberOfTimes } = items[index];
    setNewItemName(itemName);
    setNewNumberOfTimes(numberOfTimes);
  }

  function handleDelete(index) {
    window.confirm("Are you sure you want to this music band?") &&
      setItems(items.filter((item, i) => i !== index));
  };

  function handleItemChange (event) {
    setNewItemName(event.target.value);
  };

  function handleNumberOfTimes(event) {
    setNewNumberOfTimes(event.target.value);
  }

  function handleSubmit (event) {
    event.preventDefault();
    // If item exists then update items array if not add item to the items array
    if (currentIndex >= 0) {
      const updatedItems = [...items];
      updatedItems[currentIndex] = { itemName: newItemName, numberOfTimes: newNumberOfTimes };
      setItems(updatedItems);
      setCurrentIndex(-1);
    } else {
      if (itemName.current.value === "" || numberOfTimes.current.value === "") {
        window.alert("Enter music band name and number of times seen");
      } else {
        setItems([...items, { itemName: newItemName, numberOfTimes: newNumberOfTimes }]);
      };
    }
    setNewItemName("");
    setNewNumberOfTimes("");
  };

  return (
    <div className="App">
      <div className='container'>
        <h1 className='text-center mb-3'>Music bands list</h1>
        <form className='display-flex' style={{ justifyContent: "center" }} onSubmit={handleSubmit} >
          <div className='m-1'>
            <input 
              name="name"
              placeholder="music band name"
              ref={itemName}
              value={newItemName}
              onChange={handleItemChange}
              type="text"
            />
          </div>
          <div className='m-1'>
            <input 
              name="number"
              placeholder="number of times"
              ref={numberOfTimes}
              value={newNumberOfTimes}
              onChange={handleNumberOfTimes}
              type='number'
            />
          </div>
          <button 
            type="submit"
            className='btn btn-primary'
          >
            { currentIndex >= 0 ? "Update" : "Add" }
          </button>
        </form> 

        <ul className='container text-left'>
          {items.map((item, index) => (
            <li 
              key={index}
              className='display-flex m-1 space-between'
            >
              <div>
                <span className='bold'>{item.itemName}</span> 
                <span className='small'> seen {item.numberOfTimes} {item.numberOfTimes > 1 ? "times" : "time"}</span>
              </div>
              <div>
                <button 
                  onClick={() => handleEdit(index)}
                  className='btn btn-edit'
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(index)}
                  className='btn btn-delete'
                  icon="fa-solid fa-arrow-right-to-bracket"
                >
                  Delete
                </button>
            </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
