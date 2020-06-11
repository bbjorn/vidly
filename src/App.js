import React from "react";
import "./App.css";
import Movies from "./components/movies";
import { library } from "@fortawesome/fontawesome-svg-core";
//@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

library.add(faHeart, faHeartRegular);
function App() {
  return (
    <main className="container">
      <Movies />
    </main>
  );
}

export default App;
