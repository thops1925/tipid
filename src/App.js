// import Chart from './components/chart/Chart';
import MainNav from './components/main/MainNav';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className=" bg-gray-100 h-screen overflow-hidden ">
      <ToastContainer />
      <MainNav />
    </div>
  );
}

export default App;
