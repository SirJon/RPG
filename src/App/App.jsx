import style from './App.module.scss';

import Parameters from "../components/Parameters/Parameters";
import Save from "../components/Upload/Save/Save";
import Skills from '../components/Skills/Skills';
import Options from '../components/Options/Options';
import Damage from '../components/Damage/Damage';
import Photo from '../components/Photo/Photo';
import background from "./image/background.webp";

function App() {

  return (
    <section className={style.container}>
      <div>
        <Parameters />
        <Photo />
      </div>
      <div>
        <Save />
        <Skills />
        <Options />
        <Damage />
      </div>
      <img src={background} alt="background" className={style.background}/>
    </section>

  );
}

export default App;
