
import { useSelector, useDispatch } from "react-redux";
import {
  changeCharisma,
  upIntimidation,
  upInsight,
  upAppearance,
  upManipulation
} from "../../store/slice/gameSlice";

const Charisma = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.game.charisma);
  const {
    base,
    skills: {
      intimidation,
      insight,
      appearance,
      manipulation,
    }
  } = state;

  const changeCharismaHandler = (e) => {
    dispatch(changeCharisma(Number(e.target.value)))
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

  return (
    <div>
      <span>Харизма</span>
      <input
        type="number"
        value={base}
        onChange={(e) => changeCharismaHandler(e)}
      />
      <div>
        <span>Запугивание: {intimidation}</span>
        <button
          type="button"
          onClick={() => upIntimidationHandler()}
        >
          Тренировать запугивание
        </button>
      </div>
      <div>
        <span>Проницательность: {insight}</span>
        <button
          type="button"
          onClick={() => upInsightHandler()}
        >
          Тренировать проницательность
        </button>
      </div>
      <div>
        <span>Внешний вид: {appearance}</span>
        <button
          type="button"
          onClick={() => upAppearanceHandler()}
        >
          Тренировать внешний вид
        </button>
      </div>
      <div>
        <span>Манипулирование: {manipulation}</span>
        <button
          type="button"
          onClick={() => upManipulationHandler()}
        >
          Тренировать манипулирование
        </button>
      </div>
    </div>
  )
};

export default Charisma;