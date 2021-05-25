import {useState} from 'react'
 import './App.css';

function App() {
  const [color,setColor] = useState({
    co:'brown'
  })
  const {co} = color;

  const onChange =e =>{
    const c = e.target.value;
    setColor({co: c})
    
  }

  

  return (
    <div className="main" style={{backgroundColor:`${co}`}}>
      <div className="App" >
        <h1 style={{color:"#f7fd04"}}>Color Changer</h1>

        <div >
          <input type="color" onChange={e => onChange(e)} />
        </div>
        
          
         
        
    </div>

      
    </div>
    
  );
}

export default App;
