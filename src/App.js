import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from "./components/nav";
import Home from "./pages/home";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
