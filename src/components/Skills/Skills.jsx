
import { useSelector, useDispatch } from "react-redux";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Skill from "./Skill";
import { upForcePower } from "../../store/slice/gameSlice";
import { upStealth, upArchery } from "../../store/slice/gameSlice";
import { upLearnability, upSurvival, upMedicine } from "../../store/slice/gameSlice";
import { upIntimidation, upInsight, upAppearance, upManipulation } from "../../store/slice/gameSlice";

const Skills = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.game);
  const {
    force: {
      skills: {
        power,
      },
    },
    dexterity: {
      skills: {
        stealth,
        archery,
      },
    },
    intellect: {
      skills: {
        learnability,
        survival,
        medicine,
      },
    },
    charisma: {
      skills: {
        intimidation,
        insight,
        appearance,
        manipulation,
      },
    },
  } = state;

  const upPowerHandler = () => {
    dispatch(upForcePower())
  };

  const upStealthHandler = () => {
    dispatch(upStealth())
  };

  const upArcheryHandler = () => {
    dispatch(upArchery())
  };

  const upLearnabilityHandler = () => {
    dispatch(upLearnability())
  };

  const upSurvivalHandler = () => {
    dispatch(upSurvival())
  };

  const upMedicineHandler = () => {
    dispatch(upMedicine())
  };

  const upIntimidationHandler = () => {
    dispatch(upIntimidation())
  };

  const upInsightHandler = () => {
    dispatch(upInsight())
  };

  const upAppearanceHandler = () => {
    dispatch(upAppearance())
  };

  const upManipulationHandler = () => {
    dispatch(upManipulation())
  };

  const skills = [
    {
      name: `Атака`,
      handler: () => { upPowerHandler() },
      value: power,
    },
    {
      name: `Стелс`,
      handler: () => { upStealthHandler() },
      value: stealth,
    },
    {
      name: `Стрельба из лука`,
      handler: () => { upArcheryHandler() },
      value: archery,
    },
    {
      name: `Обучаемость`,
      handler: () => { upLearnabilityHandler() },
      value: learnability,
    },
    {
      name: `Выживание`,
      handler: () => { upSurvivalHandler() },
      value: survival,
    },
    {
      name: `Медицина`,
      handler: () => { upMedicineHandler() },
      value: medicine,
    },
    {
      name: `Запугивание`,
      handler: () => { upIntimidationHandler() },
      value: intimidation,
    },
    {
      name: `Проницательность`,
      handler: () => { upInsightHandler() },
      value: insight,
    },
    {
      name: `Внешний вид`,
      handler: () => { upAppearanceHandler() },
      value: appearance,
    },
    {
      name: `Манипулирование`,
      handler: () => { upManipulationHandler() },
      value: manipulation,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, m: 1, mb: 3 }}>
      <Typography variant="h5" component="h2">
        Скиллы вашего персонажа
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {skills.map((it, i) => {
          const { name, handler, value } = it;
          return (
            <Grid item xs={2} sm={4} md={4} key={name + i}>
              <Skill
                name={name}
                handler={handler}
                value={value}
              />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
};

export default Skills;