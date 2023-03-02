import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import levelSkill from '../../utils/levelSkill';

const Skill = ({ name, handler, value }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography >
          Уровень: {levelSkill(value)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={(e) => handler(e)}
        >
          Тренировать
        </Button>
      </CardActions>
    </Card>
  );
};

export default Skill;
