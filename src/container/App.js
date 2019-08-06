import React, { useState } from 'react';
import Header from '../components/Header';
import Rows from '../components/Rows';
import EngVersion from '../translations/eng';
import UaVersion from '../translations/ua';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [isEng, setIsEng] = useState(true);
  const lang = isEng ? EngVersion : UaVersion;

  return (
    <div className="container">
      <Header lang={lang} isEng={isEng} setIsEng={setIsEng} />
      <table className="table">
        <tbody>
          <Rows lang={lang} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
