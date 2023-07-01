
import './App.css';
import formImage from './assets/logopic.jpg';
import { Signup } from './components/signup';


function App() {
  return (
    <>
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-5'>
          <Signup />
        </div>
        <div className='col-md-7'>
          <img className=' img-fluid w-100' src={formImage} alt="Imagen formulario" />
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;
