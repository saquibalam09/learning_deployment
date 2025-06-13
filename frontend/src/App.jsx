import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://learning-deployment-u35k.onrender.com")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching message:", error));

    /*
    fetch("http://localhost:5000/") // Your backend URL
    .then(res => res.text())      // since it's plain text
    .then(data => {
      console.log(data);          // Output: "Welcome to the backend server!"
    }); 
    */
  }, []);
  // console.log(message);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Frontend</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
