import { useDispatch } from "react-redux";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { getDamage } from '../../store/slice/gameSlice';

const Damage = () => {
  const dispatch = useDispatch();

  const getDamageHandler = () => {
    dispatch(getDamage())
  };
  return (
    <Box
      sx={{
        m: 1,
      }}>
      <Button
        variant="contained"
        color="error"
        onClick={() => getDamageHandler()}
      >
        Атаковать персонажа
      </Button>
    </Box >
  )
};

export default Damage;