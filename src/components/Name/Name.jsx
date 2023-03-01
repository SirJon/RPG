
import { useSelector, useDispatch } from "react-redux";
import { changeName, getDamage } from "../../store/slice/gameSlice";

const Name = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.game);
  const {
    name,
    options: {
      life,
      evasion,
      energy,
    }
  } = state;

  const changeNameHandler = (e) => {
    dispatch(changeName(e.target.value))
  };

  const getDamageHandler = () => {
    dispatch(getDamage())
  };

  return (
    <div>
      <span>Имя</span>
      <input
        type="text"
        value={name}
        placeholder="Имя персонажа"
        onChange={(e) => changeNameHandler(e)}
      />
      <div>
        <span>Жизненная Сила: {life}</span>
        <button
          type="button"
          onClick={() => getDamageHandler()}
        >
          Получить урон
        </button>
      </div>
      <div>
        <span>Уклонение: {evasion}</span>
      </div>
      <div>
        <span>Энергичность: {energy}</span>
      </div>
      <br />
    </div>
  )
};

export default Name;