
import { useSelector, useDispatch } from "react-redux";
import { changeDexterity } from "../../store/slice/personageSlice";

const Dexterity = () => {
  const dispatch = useDispatch();
  const personage = useSelector((state) => state.personage);
  const { dexterity } = personage;

  const changeDexterityHandler = (e) => {
    dispatch(changeDexterity(e.target.value))
  };
  return (
    <div>
      <span>Ловкость</span>
      <input
        type="number"
        value={dexterity}
        onChange={(e) => changeDexterityHandler(e)}
      />
    </div>
  )
};

export default Dexterity;