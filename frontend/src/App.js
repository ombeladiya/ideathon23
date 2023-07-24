import Navbar from './components/Navbar';
import Problem from './components/Problem';
import TeamItem from './components/TeamItem';

import {

  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from './components/Home';
import Schedule from './components/Schedule';
import Regis from './components/Regis';
import Footer from './components/Footer';
import FileData from './components/FileData';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Problems' element={<Problem />} />
          <Route path='/register/:problem' element={<Regis />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/Team' element={<TeamItem />} />
          <Route path='/uploadppt' element={<FileData />} />
        </Routes>
        <Footer />

      </BrowserRouter>

    </>
  );
}

export default App;
