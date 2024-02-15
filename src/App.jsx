import './App.css';
import { useRef, useEffect, useState } from 'react';

function App() {

  const [items, setItems] = useState([]);
  const [newItemName, setnewItemName] = useState("");
  // const [newItemQuantity, setnewItemQuantity] = useState("");
  const [currentIndex, setCurrentIndex] = useState(-1);

  let itemName = useRef();
  // let itemQuantity = useRef();

  useEffect(() => {
    itemName.current.focus();
  }, []);

  function handleDelete(index) {
    window.confirm("Are you sure you want to delete this music band?") &&
      setItems(items.filter((item, i) => i !== index));
  };

  function handleItemChange (event) {
    setnewItemName(event.target.value);
  };

  function handleSubmit (event) {
    event.preventDefault();
    // If item exists then update items array  if not add item to the items array
    if (currentIndex >= 0) {
      const updatedItems = [...items];
      updatedItems[currentIndex] = { item: newItemName };
      setItems(updatedItems);
      setCurrentIndex(-1);
    } else {
      // if (itemName.current.value === "" || itemQuantity.current.value === "") {
      if (itemName.current.value === "") {
        // window.alert("Enter item name and quantity");
        window.alert("Enter a music band name");
      } else {
        // setItems([...items, { item: newItemName, quantity: newItemQuantity}]);
        setItems([...items, { itemName: newItemName }]);
      };
    }
    setnewItemName("");
  };

  return (
    <div className="App">
      <div className='container'>
        <h1 className='text-center'>Music bands list</h1>
        <form className='display-flex' style={{ justifyContent: "center" }} onSubmit={handleSubmit} >
          <div className='m-1'>
            <input 
              name="name"
              placeholder="name"
              style={{ border: "1px solid #E5B80B"}}
              ref={itemName}
              value={newItemName}
              onChange={handleItemChange}
            />
          </div>
          {/* <div className='m-1'>
            <input 
              name="quantity"
              placeholder="quantity"
              style={{ border: "1px solid #E5B80B"}}
              ref={itemQuantity}
            />
          </div> */}
          <button 
            type="submit"
            style={{ border: "1px solid #E5B80B", backgroundColor: "#E5B80B" }}
          >
            Save
          </button>
        </form> 

        <ul className='container text-left'>
          {items.map((item, index) => (
            <li 
              key={index}
              className='display-flex m-1 space-between'
            >
              {item.itemName}
            <div>
              <button 
                style={{ border: "1px solid #595959", backgroundColor: "#595959", margin: "0 0.5rem" }}
              >
                Edit
              </button>
              <button 
                style={{ border: "1px solid #A11713", backgroundColor: "#A11713" }}
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <br />
            </div>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
