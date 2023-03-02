
import { useSelector, useDispatch } from "react-redux";

import TextField from '@mui/material/TextField';

import Download from "../Upload/Download/Download";

import style from './Parameters.module.scss';
import chain from "./image/chain.webp";
import background from "./image/background.webp";

import { changeName } from "../../store/slice/gameSlice";
import { changeForce } from "../../store/slice/gameSlice";
import { changeDexterity } from "../../store/slice/gameSlice";
import { changeIntellect } from "../../store/slice/gameSlice";
import { changeCharisma } from "../../store/slice/gameSlice";

const Parameters = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.game);
  const {
    name,
    options: {
      life,
    },
    force: {
      base: force,
    },
    dexterity: {
      base: dexterity,
    },
    intellect: {
      base: intellect,
    },
    charisma: {
      base: charisma,
    },
  } = state;

  const changeNameHandler = (e) => {
    dispatch(changeName(e.target.value))
  };

  const changeForceHandler = (e) => {
    dispatch(changeForce(Number(e.target.value)));
  };

  const changeDexterityHandler = (e) => {
    dispatch(changeDexterity(Number(e.target.value)));
  };

  const changeIntellectHandler = (e) => {
    dispatch(changeIntellect(Number(e.target.value)))
  };

  const changeCharismaHandler = (e) => {
    dispatch(changeCharisma(Number(e.target.value)))
  };

  return (
    <section className={style.conteiner}>
      <div className={style.chains}>
        <img
          src={chain}
          alt="chain"
          className={style["img--chain"]}
        />
        <img
          src={chain}
          alt="chain"
          className={style["img--chain"]}
        />
      </div>
      <div className={style.tree}>
        <img
          src={background}
          alt="background"
          className={style.background}
        />
        <div className={style.head}>
          <Download />
          <span
            className={style.span}
          >
            Жизненная сила: {life}
          </span>
        </div>
        <div>
          <TextField
            className={style.name}
            required
            label="Имя персонажа"
            value={name}
            onChange={(e) => changeNameHandler(e)}
          />
          <div className={style.base}>
            <TextField
              className={style.input}
              label="Сила"
              type="number"
              value={force}
              onChange={(e) => changeForceHandler(e)}
            />
            <TextField
              className={style.input}
              label="Ловкость"
              type="number"
              value={dexterity}
              onChange={(e) => changeDexterityHandler(e)}
            />
            <TextField
              className={style.input}
              label="Интелект"
              type="number"
              value={intellect}
              onChange={(e) => changeIntellectHandler(e)}
            />
            <TextField
              className={style.input}
              label="Харизма"
              type="number"
              value={charisma}
              onChange={(e) => changeCharismaHandler(e)}
            />
          </div>
        </div>
      </div>
    </section>

  )
};

export default Parameters;