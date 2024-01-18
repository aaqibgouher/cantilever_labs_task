import {
  Box,
  Grid,
  Typography,
  InputAdornment,
  TextField,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import IconComponent from "../helpers/IconComponent";
import CardComponent from "../helpers/CardComponent";
import MapComponent from "./MapComponent";

const OrderTrackingComponent = () => {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {/* First column (8 units) */}
          <Grid item xs={4}>
            {/* Title */}
            <Box sx={{ margin: "24px" }}>
              <TextField
                sx={{
                  height: "52px",
                  "& .MuiOutlinedInput-root": {
                    borderColor: theme.palette.primary.contrastText, // Change border color
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: theme.palette.primary.contrastText, // Change placeholder color
                  },
                }}
                fullWidth
                variant="outlined"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <IconComponent
                          icon="SearchIcon"
                          color={theme.palette.primary.contrastText}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <IconComponent
                          icon="FilterIcon"
                          color={theme.palette.primary.contrastText}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: theme.palette.primary.contrastText,
                  marginY: "1rem",
                }}
              >
                Ongoing Delivery
              </Typography>

              {/* order */}
              <Box>
                {[1, 2, 3].map((index: number) => (
                  <CardComponent
                    key={index}
                    cardType="ONGOING_DELIEVERY"
                  ></CardComponent>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Second column (4 units) */}
          <Grid item xs={8}>
            {/* map */}
            <Box sx={{ height: "700px", width: "100%" }}>
              <MapComponent />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OrderTrackingComponent;
