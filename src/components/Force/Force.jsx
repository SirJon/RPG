
import { useSelector, useDispatch } from "react-redux";
import { changeForce, upForcePower } from "../../store/slice/gameSlice";

const Force = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.game.force);
  const { base, skills: { power } } = state;

  const changeForceHandler = (e) => {
    dispatch(changeForce(Number(e.target.value)));
  };

  const upPowerHandler = () => {
    dispatch(upForcePower())
  };
  return (
    <div>
      <span>Сила</span>
      <input
        type="number"
        value={base}
        onChange={(e) => changeForceHandler(e)}
      />
      <div>
        <span>Атака: {power}</span>
        <button
          type="button"
          onClick={() => upPowerHandler()}
        >
          Тренировать атаку
        </button>
      </div>
      <br />
    </div>
  )
};

export default Force;