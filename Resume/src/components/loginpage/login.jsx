// import React from 'react'
// import Login from "./components/loginpage/login1.jsx"

// export default function login() {
//   return (
//     <div>
//         <Login></Login>
//     </div>
//   )
// }

import React from 'react';
import './login.css';

const App = () => {
  const handleOpenWindow = () => {
    const newWindow = window.open("", "", "width=600,height=400");
    newWindow.document.write("<h1>Hello, this is a new window!</h1>");
    newWindow.document.write("<p>Feel free to style and add more content here.</p>");
  };

  return (
    <div className="App">
      <h1>React Open New Window Demo</h1>
      <button onClick={handleOpenWindow}>Open New Window</button>
    </div>
  );
};

export default App;
