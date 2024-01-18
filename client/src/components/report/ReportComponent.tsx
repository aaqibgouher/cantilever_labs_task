import { Box, Grid, Paper, Typography, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CardComponent from "../helpers/CardComponent";

const ReportComponent = () => {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {/* First column (8 units) */}
          <Grid item xs={8}>
            {/* Title */}
            <Box sx={{ margin: "24px" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: theme.palette.primary.contrastText }}
              >
                Dashboard
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ color: theme.palette.secondary.contrastText }}
              >
                Tuesday 2 Feb, 2021
              </Typography>
              <Divider
                style={{
                  margin: "1rem 0",
                  backgroundColor: "#393C49",
                }}
              />
            </Box>

            {/* stats component */}
            <Box sx={{ margin: "24px" }}>
              <CardComponent cardType="STATS"></CardComponent>
            </Box>

            {/* order report component */}
            <Box sx={{ margin: "24px" }}>
              <CardComponent cardType="ORDER_REPORT"></CardComponent>
            </Box>
          </Grid>

          {/* Second column (4 units) */}
          <Grid item xs={4}>
            {/* most ordered */}
            <Box sx={{ margin: "24px" }}>
              <CardComponent cardType="MOST_ORDERED"></CardComponent>
            </Box>

            {/* most type of order */}
            <Box sx={{ margin: "24px" }}>
              <CardComponent cardType="MOST_TYPE_ORDRED"></CardComponent>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ReportComponent;
