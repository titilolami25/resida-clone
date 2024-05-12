import './App.css';
import { IoLogOutOutline } from "react-icons/io5";

function App() {
  return (
    <div className="App">
      <main className="App-header">
    {/* header section */}
      <header className ="header">
        
        {/* left section*/}
        <section>
          <span className="span">SEFE</span>
          <span className="span">TODO</span>
        </section>

        {/*right section*/}
        <section>
        <IoLogOutOutline size={30}color="orangered"/>
        </section>
        </header>  

        {/* body section*/} 
        <br/>
        <body className="body">
          <span>Todo Done</span>         
        </body>
      </main>
    </div>
  );
}

export default App;
