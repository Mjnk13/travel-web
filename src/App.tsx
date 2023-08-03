import './App.css';
import Navbar from './include/Navbar';
import Jumbotron from './include/Jumbotron';
import Partners from './include/Partners';
import Category from './include/Category';
import HoneymoonSpecial from './include/HoneymoonSpecial';
import FastAndEasy from './include/FastAndEasy';
import LibertyStatueBackground from './include/LibertyStatueBackground';
import Promotion from './include/Promotion';
import PromotionBanner from './include/PromotionBanner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron/>
      <Partners/>
      <Category/>
      <HoneymoonSpecial/>
      <FastAndEasy/>
      <LibertyStatueBackground/>
      <Promotion />
      <PromotionBanner/>
    </div>
  );
}

export default App;
