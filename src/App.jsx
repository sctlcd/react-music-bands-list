import './App.css';
import { useRef, useEffect, useState } from 'react';

function App() {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  // const [newQuantity, setNewQuantity] = useState("");

  let itemName = useRef();
  let itemQuantity = useRef();

  useEffect(() => {
    itemName.current.focus();
  }, []);

  function handleSubmit (event) {
    event.preventDefault();
    // if (itemName.current.value === "" || itemQuantity.current.value === "") {
    if (itemName.current.value === "") {
      // window.alert("Enter item name and quantity");
      window.alert("Enter a music band name");
    } else {
      // setItems([...items, { item: newItem, quantity: newQuantity}]);
      setItems([...items, { item: newItem }]);
    }
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
          <li className='display-flex m-1 space-between'>
            name
            <div>
              <button 
                style={{ border: "1px solid #595959", backgroundColor: "#595959", margin: "0 0.5rem" }}
              >
                Edit
              </button>
              <button 
                style={{ border: "1px solid #A11713", backgroundColor: "#A11713" }}
              >
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
