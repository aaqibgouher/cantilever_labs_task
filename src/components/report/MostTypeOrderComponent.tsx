import { Card, Typography, Grid, Box, Button, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import IconComponent from "../helpers/IconComponent";
import RadialBarChartComponent from "./RadialBarChartComponent";

const MostTypeOrderComponent = () => {
  const theme = useTheme();

  return (
    <>
      <Grid>
        <Card
          sx={{
            padding: "24px",
            backgroundColor: theme.palette.primary.main,
            overflowY: "auto",
            minHeight: "333px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: theme.palette.primary.contrastText,
              }}
            >
              Most Type of Order
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: theme.palette.primary.contrastText,
                border: `1px solid ${theme.palette.secondary.contrastText}`,
              }}
              startIcon={<IconComponent icon="ArrowDownIcon" />}
            >
              Today
            </Button>
          </Box>
          <Divider
            style={{
              margin: "1rem 0 2px 0",
              backgroundColor: "#393C49",
            }}
          />
          <RadialBarChartComponent />
        </Card>
      </Grid>
    </>
  );
};

export default MostTypeOrderComponent;
