import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Option = ({ name, value }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>
          {name}: {value}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default Option;