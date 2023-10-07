import './App.scss'
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header.jsx';
import BestPeople from './Component/Section/BestPeople/BestPeople';
import BestSellers from './Component/Section/BestSellers/BestSellers';
import Handiwork from './Component/Section/Handiwork/Handiwork';
import LogoSection from './Component/Section/LogoSection/LogoSection';
import ModernShoes from './Component/Section/ModernShoes/ModernShoes';
import NikeClub from './Component/Section/NikeClub/NikeClub';
import Shoes from './Component/Section/Shoes/Shoes.jsx'
import Visionaries from './Component/Section/Visionaries/Visionaries';
import Warranty from './Component/Section/Warranty/Warranty';

function App() {
  return (
    <div className="App">
      <Header />
      <Shoes />
      <Handiwork />
      <BestSellers />
      <ModernShoes />
      <LogoSection />
      <BestPeople />
      <Visionaries />
      <NikeClub />
      <Warranty />
      <Footer />
    </div>
  );
}

export default App;
