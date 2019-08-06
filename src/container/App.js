import React, { useState } from 'react';
import Header from '../components/Header';
import Rows from '../components/Rows';
import UaVersion from '../translations/eng';
import EngVersion from '../translations/eng';

import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [isEng, setLang] = useState(true);
  const lang = isEng ? EngVersion : UaVersion;

  return (
    <div className="container">
      <Header lang={lang} isEng={isEng} setLang={setLang} />
      <table className="table">
        <Rows lang={lang} />
      </table>
    </div>
  );
}

export default App;
