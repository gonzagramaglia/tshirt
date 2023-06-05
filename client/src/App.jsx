import { FaGithub } from 'react-icons/fa';
import Customizer from './pages/Customizer';
import Home  from './pages/Home';
import CanvasModel from './canvas';


function App() {

  return (
    <>
      <nav id='navbar' className='w-full h-[80px] md:h-[110px] flex items-center bg-[#050816] fixed z-20'>
        <a 
          href="https://www.gonza.gr/" 
          className='ml-[20px] md:ml-[65px]'
          target="_blank"
        >
          <img src='https://i.postimg.cc/9z5zvr3M/logo.png' alt="logo" className='h-[20px] md:h-[25px]' /> 
        </a>
        <a 
          href="https://github.com/gonzagramaglia/product" 
          className='ml-auto mr-[20px] md:mr-[65px]'
          target="_blank"
        >
          <FaGithub size={23} style={{ color: '#a9a6c3' }} />
        </a>
      </nav>
      <main className='app transition-all ease-in pt-28 bg-gray-100'>
        <Home />
        <CanvasModel />
        <Customizer />
      </main>
    </>
  )
}

export default App
