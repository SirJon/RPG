import { useSelector } from "react-redux";

import style from "./Save.module.scss";

const Save = () => {
  const state = useSelector((state) => state.game);
  const name = state.name ? state.name : `personage`;
  return (
    <div className={style.container}>
      <a
        className={style.link}
        href={`data:text/plain;charset=utf-8,${JSON.stringify(state)}`}
        download={name}
      >
        Сохранить персонажа
      </a>
    </div>

  )
};

export default Save;