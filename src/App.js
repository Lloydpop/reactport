import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
function App() {
  return (
    <div>
      <Navbar/>
      <AnimatedRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
