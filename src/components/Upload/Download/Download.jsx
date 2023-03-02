import { useDispatch } from "react-redux";

import style from './Download.module.scss';

import { uploadNewPersonage } from "../../../store/slice/gameSlice";

const Download = () => {
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = function () {
      const obj = JSON.parse(reader.result)
      dispatch(uploadNewPersonage(obj))
    };
  }
  return (
    <label
      className={style.label}
    >
      Загрузить своего персонажа
      <input
        type="file"
        onChange={(e) => handlerChange(e)}
        hidden
      />
    </label>
  )
};

export default Download;