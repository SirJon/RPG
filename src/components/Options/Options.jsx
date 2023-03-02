
import { useSelector } from "react-redux";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Option from "./Option";

const Options = () => {
  const state = useSelector((state) => state.game);
  const {
    options: {
      life,
      evasion,
      energy,
    },
  } = state;

  const options = [
    {
      name: `Жизненная сила`,
      value: life,
    },
    {
      name: `Уклонение`,
      value: evasion,
    },
    {
      name: `Энергичность`,
      value: energy,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, m: 1, mb: 3 }}>
      <Typography variant="h5" component="h2">
        Параметры вашего персонажа
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={1}
      >
        {options.map((it, i) => {
          const { name, value } = it;
          return (
            <Option
              name={name}
              value={value}
              key={name + i}
            />
          )
        })}
      </Box>
    </Box>
  )
};

export default Options;