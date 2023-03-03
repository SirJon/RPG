
import { useSelector, useDispatch } from "react-redux";

import style from './Skills.module.scss';
import chain from "../../assets/image/chain.webp";
import background from "./image/background.webp";

import Skill from "./Skill/Skill";
import { upForcePower } from "../../store/slice/gameSlice";
import { upStealth, upArchery } from "../../store/slice/gameSlice";
import { upLearnability, upSurvival, upMedicine } from "../../store/slice/gameSlice";
import { upIntimidation, upInsight, upAppearance, upManipulation } from "../../store/slice/gameSlice";

import powerImg from "./image/power.webp";
import stealthImg from "./image/stealth.webp";
import archeryImg from "./image/archery.webp";
import learnabilityImg from "./image/learnability.webp";
import survivalImg from "./image/survival.webp";
import medicineImg from "./image/medicine.webp";
import intimidationImg from "./image/intimidation.webp";
import insightImg from "./image/insight.webp";
import appearanceImg from "./image/appearance.webp";
import manipulationImg from "./image/manipulation.webp";

const Skills = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.game);
  const {
    force: {
      base: force,
      skills: {
        power,
      },
    },
    dexterity: {
      base: dexterity,
      skills: {
        stealth,
        archery,
      },
    },
    intellect: {
      base: intellect,
      skills: {
        learnability,
        survival,
        medicine,
      },
    },
    charisma: {
      base: charisma,
      skills: {
        intimidation,
        insight,
        appearance,
        manipulation,
      },
    },
  } = state;

  const upPowerHandler = () => {
    dispatch(upForcePower())
  };

  const upStealthHandler = () => {
    dispatch(upStealth())
  };

  const upArcheryHandler = () => {
    dispatch(upArchery())
  };

  const upLearnabilityHandler = () => {
    dispatch(upLearnability())
  };

  const upSurvivalHandler = () => {
    dispatch(upSurvival())
  };

  const upMedicineHandler = () => {
    dispatch(upMedicine())
  };

  const upIntimidationHandler = () => {
    dispatch(upIntimidation())
  };

  const upInsightHandler = () => {
    dispatch(upInsight())
  };

  const upAppearanceHandler = () => {
    dispatch(upAppearance())
  };

  const upManipulationHandler = () => {
    dispatch(upManipulation())
  };

  const skills = [
    {
      name: `Атака`,
      handler: () => { upPowerHandler() },
      value: power,
      img: powerImg,
      base: {
        name: `Сила`,
        value: force,
      },
    },
    {
      name: `Стелс`,
      handler: () => { upStealthHandler() },
      value: stealth,
      img: stealthImg,
      base: {
        name: `Ловкость`,
        value: dexterity,
      },
    },
    {
      name: `Стрельба из лука`,
      handler: () => { upArcheryHandler() },
      value: archery,
      img: archeryImg,
      base: {
        name: `Ловкость`,
        value: dexterity,
      },
    },
    {
      name: `Обучаемость`,
      handler: () => { upLearnabilityHandler() },
      value: learnability,
      img: learnabilityImg,
      base: {
        name: `Интелект`,
        value: intellect,
      },
    },
    {
      name: `Выживание`,
      handler: () => { upSurvivalHandler() },
      value: survival,
      img: survivalImg,
      base: {
        name: `Интелект`,
        value: intellect,
      },
    },
    {
      name: `Медицина`,
      handler: () => { upMedicineHandler() },
      value: medicine,
      img: medicineImg,
      base: {
        name: `Интелект`,
        value: intellect,
      },
    },
    {
      name: `Запугивание`,
      handler: () => { upIntimidationHandler() },
      value: intimidation,
      img: intimidationImg,
      base: {
        name: `Харизма`,
        value: charisma,
      },
    },
    {
      name: `Проницательность`,
      handler: () => { upInsightHandler() },
      value: insight,
      img: insightImg,
      base: {
        name: `Харизма`,
        value: charisma,
      },
    },
    {
      name: `Внешний вид`,
      handler: () => { upAppearanceHandler() },
      value: appearance,
      img: appearanceImg,
      base: {
        name: `Харизма`,
        value: charisma,
      },
    },
    {
      name: `Манипулирование`,
      handler: () => { upManipulationHandler() },
      value: manipulation,
      img: manipulationImg,
      base: {
        name: `Харизма`,
        value: charisma,
      },
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
        {skills.map((it, i) => {
          const { name } = it;
          return (
            <Skill
              data={it}
              key={name + i}
            />
          )
        })}
      </div>
    </div>

  )
};

export default Skills;