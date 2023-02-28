
import { useSelector, useDispatch } from "react-redux";
import { changeIntellect } from "../../store/slice/personageSlice";

const Intellect = () => {
  const dispatch = useDispatch();
  const personage = useSelector((state) => state.personage);
  const { intellect } = personage;

  const changeIntellectHandler = (e) => {
    dispatch(changeIntellect(e.target.value))
  };
  return (
    <div>
      <span>Интелект</span>
      <input
        type="number"
        value={intellect}
        onChange={(e) => changeIntellectHandler(e)}
      />
    </div>
  )
};

export default Intellect;