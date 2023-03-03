import style from "./Option.module.scss";

const Option = ({ name, value }) => {
  return (
    <div className={style.container}>
      <span>{name}:</span>
      <span>{value}</span>
    </div>
  )
};

export default Option;