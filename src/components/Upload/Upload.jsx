import { useDispatch } from "react-redux";
import { uploadNewPersonage } from "../../store/slice/gameSlice";

const Upload = () => {
  const dispatch = useDispatch();
  const handlerChange = (e) => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);

    reader.onload = function() {
      const obj = JSON.parse(reader.result)
      dispatch(uploadNewPersonage(obj))
      
      console.log(obj);
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
  }
  return(
    <input 
    type="file" 
    onChange={(e) => handlerChange(e)}
    />
  )
};

export default Upload;