
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../../store/slice/personageSlice";

const Name = () => {
  const dispatch = useDispatch();
  const personage = useSelector((state) => state.personage);
  const { name } = personage;

  const changeNameHandler = (e) => {
    dispatch(changeName(e.target.value))
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
    </div>
  )
};

export default Name;