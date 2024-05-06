import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import ItemStore from './Store/Post.store';
function App() {
  return (
    <>
      <Nav></Nav>
      <ItemStore>
        <Outlet />
      </ItemStore>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
