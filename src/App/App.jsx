import style from './App.module.scss';

import Parameters from "../components/Parameters/Parameters";
import Save from "../components/Upload/Save/Save";
import Skills from '../components/Skills/Skills';
import Options from '../components/Options/Options';
import Damage from '../components/Damage/Damage';
import Photo from '../components/Photo/Photo';
import Life from '../components/Life/Life';

import background from "./image/background.webp";

function App() {

  return (
    <section className={style.container}>
      <div className={style.left}>
        <Parameters />
        <Photo />
        <Save />
      </div>
      <div className={style.right}>
        <div className={style.option}>
          <Options />
          <Life />
        </div>
        <Skills />
        <Damage />
      </div>
      <img src={background} alt="background" className={style.background} />
    </section>

  );
}

export default App;
