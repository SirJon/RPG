import { useSelector } from "react-redux";

import style from "./Life.module.scss";
import background from "./image/background.webp";
import chain from "../../assets/image/chain.webp";

import Option from "../Options/Option/Option";

const Life = () => {
  const state = useSelector((state) => state.game);
  const { options: { life } } = state;

  return (
    <div className={style.container}>
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
        <img src={background} alt="background" className={style.background} />
        <Option
          name="Жизненная сила"
          value={life}
        />
      </div>
    </div>
  )
};

export default Life;