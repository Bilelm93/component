
import './App.css';
import React from 'react';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import Photo from './Component/Profile/ProfilPhoto';


function App() {
  return (
    <>
     <header className="App-header">
     <FullName/>
     <Address/>
     <Photo/>

     </header>

    
     
     </>
  );
}

export default App;
