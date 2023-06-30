/* import the app css, Navigation, & LoginForm components

export the App that will be displayed.
 displays the Navigation component 1st
 displays the LoginForm component 2nd*/

import "./App.css";
import Navigation from "./Nav";
import LoginForm from "./Section";

function App() {
  return (
    <div className="App">
      <Navigation />
      <LoginForm />
    </div>
  );
}

export default App;
