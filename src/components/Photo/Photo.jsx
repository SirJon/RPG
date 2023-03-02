import style from './Photo.module.scss';
import avatar from "./image/avatar.webp";
import image1 from "./image/1.webp";
import image2 from "./image/2.webp";
import image3 from "./image/3.webp";

const Photo =() => {
  return(
    <div className={style.container}>
      <div className={style.wrapper}>
        <img src={image1} alt="image1" className={style.min}/>
        <img src={image2} alt="image2" className={style.min}/>
        <img src={image3} alt="image3" className={style.min}/>
      </div>
      <img src={avatar} alt="avatar" className={style.big}/>
    </div>
  )
}

export default Photo;