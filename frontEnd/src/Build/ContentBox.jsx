import {
  Card,
  Button,
  CardContent,
  Typography,
  CardActions,
  Box,
} from "@mui/material";

const BoxMaking = () => {
  return (
    <Box
      sx={{
        maxWidth: "400px",
        textAlign: "center",
        flex: "1 0 200px",
        marginBottom: "10px",
      }}
    >
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Edit</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default BoxMaking;
