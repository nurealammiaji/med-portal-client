import { Outlet } from 'react-router-dom';
import './App.css'
import Navigation from './common/Navigation';
import Footer from './common/Footer';

function App() {

  return (
    <>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
