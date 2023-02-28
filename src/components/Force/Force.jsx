
import { useSelector, useDispatch } from "react-redux";
import { changeForce, upForcePower } from "../../store/slice/forceSlice";

const Force = () => {
  const dispatch = useDispatch();
  const force = useSelector((state) => state.force);
  const { index, skills: { power } } = force;

  const changeForceHandler = (e) => {
    dispatch(changeForce(Number(e.target.value)))
  };

  const changePowerHandler = () => {
    dispatch(upForcePower())
  };
  return (
    <div>
      <span>Сила</span>
      <input
        type="number"
        value={index}
        onChange={(e) => changeForceHandler(e)}
      />
      <span>Атака: {power}</span>
      <button
        type="button"
        onClick={() => changePowerHandler()}
      >Тренировать атаку</button>
    </div>
  )
};

export default Force;