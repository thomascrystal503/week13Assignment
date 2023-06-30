/* import from the React library react and reactDOM
   import App component from the jsx with all the page components
   
   pulling in the global variable ReactDOM from the React library. 
   It has the methods: createRoot & render
   to sync the <div id='root'></div> fromt the index HTML and the virtual
   DOM. It renders the App component at the <div id='root'></div>*/

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*Requirements 
•	Create a LoginForm component that contains the following:
•	Username and password input fields, an h3 that says Log In, with a border.
Style the component using the default generated CSS file.
•	Create a Navigation component that contains links styled like a navbar.
•	The links don’t have to go anywhere.
•	Put the Navigation component at the top of the page and the LoginForm in the center of the page.

 */
