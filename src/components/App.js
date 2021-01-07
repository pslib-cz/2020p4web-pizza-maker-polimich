import React, { useState } from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
const App = () => {
  const [language, setLanguage] = useState("english");
  return (
    <div className="ui container">
      <div>
        Select a language:
        <i className="flag us" onClick={() => setLanguage("english")} />
        <i className="flag cz" onClick={() => setLanguage("czech")} />
      </div>
      <LanguageContext.Provider value={language}>
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
