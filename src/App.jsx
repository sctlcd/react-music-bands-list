import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1 className='text-center'>Music bands list</h1>
        <form className='display-flex' style={{ justifyContent: "center" }}>
          <div className='m-1'>
            <input name="name" placeholder="name" style={{ border: "1px solid gold"}} />
          </div>
          <div className='m-1'>
            <input name="quantity" placeholder="quantity" style={{ border: "1px solid gold"}} />
          </div>
          <button type="submit" style={{ border: "1px solid gold", backgroundColor: "gold" }}>Search</button>
        </form> 
        <ul className='container text-left'>
          <li className='display-flex m-1 space-between'>
            name
            <div>
              <button style={{ border: "1px solid green", backgroundColor: "green", margin: "0 0.5rem" }}>Edit</button>
              <button style={{ border: "1px solid red", backgroundColor: "red" }}>Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
