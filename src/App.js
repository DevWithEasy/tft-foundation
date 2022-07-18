import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import './index.css';
import RouterManager from './RouterManager/RouterManager';

export default function App() {
  return (
    <div className="">
      <Header/>
      <RouterManager/>
      <Footer/>
    </div>
  );
}
