import style from './Skill.module.scss';
import { MAX_LEVEL_SKILL } from "../../../constants/constants";

import levelSkill from '../../../utils/levelSkill';

const Skill = (props) => {
  const { name, handler, value, img, base: { name: nameBase, value: valuebase } } = props.data;
  const isActiv = valuebase <= value;
  const isMaxLevel = value !== MAX_LEVEL_SKILL;
  return (
    <div className={style.container}>
      <img src={img} alt="" />
      <div className={style.info}>
        <span className={style.name}>{name}</span>
        <span>Уровень: {levelSkill(value)}</span>
        <div className={style.upskill}>
          {isActiv && <span className={style.error}>Прокачайте базовое умение {nameBase}</span>}
          {isMaxLevel &&
            <button
              disabled={isActiv}
              className={style.button}
              onClick={(e) => handler(e)}
            >Тренировать</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Skill;
