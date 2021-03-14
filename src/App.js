import React,{useState,useEffect} from 'react';
import './App.css';
import AppRouter from './config/router'

const Loader = () => {
  return (
    <div className = "loading-wrapper" >
      <br/>
      <br/>
      <div className="text-center">
            <img alt="Logo Deck Restoration services" src="images/logo.JPEG XR" width="200"/>
      </div>
      <h1 className="text-center loadingHeaderTxt">Deck Restoration services</h1>
      <div className="loading">
        <span />
        <span />
        <span />
        <span />
        <span />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h5 className="text-center w100">ALL RIGHTS RESERVED. Deck RESTORATION SERVICES 2021</h5>
      </div>
   </div>
  );
}

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const finishLoading = () => {
    setIsLoaded(true);
  }
  useEffect(() => {
    setTimeout(finishLoading, 2000);
  })

  return (
    <div>
      {(isLoaded == true) ? (
        <div>
          <AppRouter />
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default App;
