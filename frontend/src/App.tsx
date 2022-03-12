import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import { Navbar } from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/form" element={<Listing />} />
            <Route path=":movieId" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
