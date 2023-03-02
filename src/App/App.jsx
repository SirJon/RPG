import './App.module.scss';

import Parameters from "../components/Parameters/Parameters";
import Save from "../components/Upload/Save/Save";
import Skills from '../components/Skills/Skills';
import Options from '../components/Options/Options';
import Damage from '../components/Damage/Damage';

function App() {

  return (
    <section>
      <Parameters />
      <Save />
      <Skills />
      <Options />
      <Damage />
    </section>

  );
}

export default App;
