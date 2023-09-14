import './App.css';
import { Footer } from './components/footer';
import { UploadImage } from './components/uploadImage';

function App() {
  return (
    <div className='relative h-screen w-screen flex flex-col items-center justify-center' >
      <UploadImage/>
      <Footer/>
    </div>
  );
}

export default App;
