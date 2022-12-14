import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Book from 'components/Book';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <Routes>
          <Route path="/book/:bookSlug" element={<Book />} />
        </Routes> */}
      </div>
    </BrowserRouter>
  );
};


export default App;
