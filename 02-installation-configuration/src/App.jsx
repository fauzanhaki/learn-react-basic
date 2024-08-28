import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }
  return (
    <>
      <Header />
      <button onClick={handleLikes}>Like ({likes})</button>
    </>
  );
}

export default App;
