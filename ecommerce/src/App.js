import logo from './logo.svg';
import './App.css';
import {Navbar} from './Components/Navbar'
import {SimpleContainer} from './Components/Fullproduct'
import  SpacingGrid from './Components/ProductSection';
import {Routes,Route} from 'react-router-dom';
import Categories from './Components/Popup';
import Categorizedhome from './Components/CategorizedHome';
import {Mycarousel} from './Components/Carausel'

function App() {
  return (
   
<>
<Navbar/>
<Routes>
  
<Route path='/' element={<SpacingGrid/>}/>
<Route path='/fullproduct/:title' element={<SimpleContainer/>}/>
<Route path='/categories' element={<Categories/>}/>
<Route path='/categories/:key' element={<Categorizedhome/>}/>



{/* <MediaCard/> */}
{/* <SpacingGrid/> */}
{/* <SimpleContainer/> */}

</Routes>
</>


  );
}

export default App;
