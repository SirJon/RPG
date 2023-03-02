import { useSelector } from "react-redux";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Save = () => {
  const state = useSelector((state) => state.game);
  const name = state.name ? state.name : `personage`;
  return (
    <Box
      sx={{
        m: 1,
      }}>
      <Typography variant="subtitle1" component="div">
        Сохраните своего пресонажа к себе на компьютер
      </Typography>
      <Button
        variant="contained"
        color="success"
        component="label"
      >
        <Link
          color="inherit"
          underline="hover"
          href={`data:text/plain;charset=utf-8,${JSON.stringify(state)}`}
          download={name}
        >
          Save
        </Link>
      </Button>
    </Box>

  )
};

export default Save;