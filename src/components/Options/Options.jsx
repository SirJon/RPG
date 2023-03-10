
import { useSelector } from "react-redux";

import style from "./Options.module.scss";
import background from "./image/background.webp";
import chain from "../../assets/image/chain.webp";

import Option from "./Option/Option";

const Options = () => {
  const state = useSelector((state) => state.game);
  const {
    options: {
      evasion,
      energy,
    },
  } = state;

  const options = [
    {
      name: `Уклонение`,
      value: evasion,
    },
    {
      name: `Энергичность`,
      value: energy,
    },
  ];

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
        {options.map((it, i) => {
          const { name, value } = it;
          return (
            <Option
              name={name}
              value={value}
              key={name + i}
            />
          )
        })}
      </div>
    </div>
  )
};

export default Options;