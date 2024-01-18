import { ReactComponentType } from "../../interfaces/common";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import IconComponent from "../helpers/IconComponent";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";

const StatisticsComponent = () => {
  const theme = useTheme();
  const statisticsStore = useSelector(
    (state: any) => state.reportReducer.statistics
  );

  return (
    <>
      <Grid container spacing={2}>
        {statisticsStore && statisticsStore.length ? (
          statisticsStore.map((stats: any, index: number) => (
            <Grid item xs={4} key={index}>
              <Card
                sx={{
                  padding: "24px",
                  backgroundColor: theme.palette.primary.main,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconComponent icon={stats.icon} color={stats.color} />
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{
                      color: stats.incresed ? "#50D1AA" : "#FF7CA3",
                      marginLeft: 1,
                    }}
                  >
                    {stats.label}
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ color: theme.palette.primary.contrastText }}
                >
                  {stats.value}
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ color: theme.palette.secondary.contrastText }}
                >
                  {stats.type}
                </Typography>
              </Card>
            </Grid>
          ))
        ) : (
          <p>No stats</p>
        )}
      </Grid>
    </>
  );
};

export default StatisticsComponent;
