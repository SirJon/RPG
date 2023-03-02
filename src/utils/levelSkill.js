const levelSkill = (value) => {
  switch (value) {
    case 0:
      return `Нетренированный`;
    case 1:
      return `Новичок`;
    case 2:
      return `Ученик`;
    case 3:
      return `Адепт`;
    case 4:
      return `Эксперт`;
    case 5:
      return `Мастер`;

    default:
      return `Нетренированный`;
  }
};

export default levelSkill;
