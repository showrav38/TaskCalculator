import './App.css';
import CalcScreen from './components/CalcScreen/CalcScreen';
import CaclBody from './components/CalcBody/CaclBody';
import Darktheme from './components/Darktheme/Darktheme';

function App() {
  return (
    <>
      <Darktheme />
      <CalcScreen />
      <CaclBody />
    </>
  );
}

export default App;
