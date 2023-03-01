
import { useSelector, useDispatch } from "react-redux";
import {
  changeDexterity,
  upStealth,
  upArchery,
} from "../../store/slice/gameSlice";

const Dexterity = () => {
  const dispatch = useDispatch();
  const stateDexterity = useSelector((state) => state.game.dexterity);
  const { base, skills: { stealth, archery } } = stateDexterity;

  const changeDexterityHandler = (e) => {
    dispatch(changeDexterity(Number(e.target.value)));
  };

  const upStealthHandler = () => {
    dispatch(upStealth())
  };

  const upArcheryHandler = () => {
    dispatch(upArchery())
  };

  return (
    <div>
      <span>Ловкость</span>
      <input
        type="number"
        value={base}
        onChange={(e) => changeDexterityHandler(e)}
      />
      <div>
        <span>Стелс: {stealth}</span>
        <button
          type="button"
          onClick={() => upStealthHandler()}
        >
          Тренировать стелс
        </button>
      </div>
      <div>
        <span>Стрельба из лука: {archery}</span>
        <button
          type="button"
          onClick={() => upArcheryHandler()}
        >
          Тренировать струльбу
        </button>
      </div>
      <br />
    </div>
  )
};

export default Dexterity;