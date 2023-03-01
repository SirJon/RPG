
import { useSelector, useDispatch } from "react-redux";
import {
  changeIntellect,
  upLearnability,
  upSurvival,
  upMedicine
} from "../../store/slice/gameSlice";

const Intellect = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.game.intellect);
  const {
    base,
    skills: {
      learnability,
      survival,
      medicine,
    }
  } = state;

  const changeIntellectHandler = (e) => {
    dispatch(changeIntellect(Number(e.target.value)))
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

  return (
    <div>
      <span>Интелект</span>
      <input
        type="number"
        value={base}
        onChange={(e) => changeIntellectHandler(e)}
      />
      <div>
        <span>Обучаемость: {learnability}</span>
        <button
          type="button"
          onClick={() => upLearnabilityHandler()}
        >
          Тренировать обучаемость
        </button>
      </div>
      <div>
        <span>Выживание: {survival}</span>
        <button
          type="button"
          onClick={() => upSurvivalHandler()}
        >
          Тренировать выживание
        </button>
      </div>
      <div>
        <span>Медицина: {medicine}</span>
        <button
          type="button"
          onClick={() => upMedicineHandler()}
        >
          Тренировать медицина
        </button>
      </div>
      <br />
    </div>
  )
};

export default Intellect;