import { useDispatch } from "react-redux";

import style from "./Damage.module.scss";

import { getDamage } from '../../store/slice/gameSlice';

const Damage = () => {
  const dispatch = useDispatch();

  const getDamageHandler = () => {
    dispatch(getDamage())
  };
  return (
    <div className={style.container}>
      <button
        className={style.button}
        onClick={() => getDamageHandler()}
      >
        Атаковать персонажа
      </button>
    </div>
  )
};

export default Damage;