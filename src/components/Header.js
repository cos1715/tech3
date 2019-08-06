import React from 'react';
import Img from '../assets/me.jpg';

const Header = ({ lang, isEng, setIsEng }) => {  
  return (
    <>
      <div className="jumbotron">
        <header className="display-3">
          <h1 className="App-title">{lang.resume}</h1>
        </header>
        <button className="btn btn-primary btn-lg float-right" onClick={() => setIsEng(!isEng)}>
          {lang.btn_txt}
        </button>
      </div>
      <img src={Img} alt="me" className="w-25 mb-3" />
    </>
  );
};

export default Header;