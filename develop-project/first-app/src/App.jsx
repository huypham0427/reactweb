import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Home} from './components/Home'
import {About} from './components/About'
import { Location } from './Location';
import {Nav} from './components/Nav'
import { Portfolio } from './components/descriptions/Portfolio';
import { Typography, Button, Box } from "@material-ui/core";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {GymPages} from './components/GymPages';



function App() {
  return (
    <div>
      
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/location' element={<Location />}></Route>
     </Routes>
    <Portfolio/>
    <GymPages />

    </div>
  );
}

export default App;
