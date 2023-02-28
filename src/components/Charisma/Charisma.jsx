
import { useSelector, useDispatch } from "react-redux";
import { changeCharisma } from "../../store/slice/personageSlice";

const Charisma = () => {
  const dispatch = useDispatch();
  const personage = useSelector((state) => state.personage);
  const { charisma } = personage;

  const changeCharismaHandler = (e) => {
    dispatch(changeCharisma(e.target.value))
  };
  return (
    <div>
      <span>Харизма</span>
      <input
        type="number"
        value={charisma}
        onChange={(e) => changeCharismaHandler(e)}
      />
    </div>
  )
};

export default Charisma;