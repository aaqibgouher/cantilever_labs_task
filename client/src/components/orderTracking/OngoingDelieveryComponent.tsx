import React from "react";
import { Card, Typography, Grid, CardMedia, Divider, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ImageURL from "../../assets/Image.png";
import TimelineComponent from "./TimelineComponent";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconComponent from "../helpers/IconComponent";

const OngoingDeliveryComponent = () => {
  const theme = useTheme();

  return (
    <Grid>
      <Card
        sx={{
          padding: "24px",
          backgroundColor: theme.palette.primary.main,
          border: `1px solid ${theme.palette.secondary.main}`,
          boxShadow: "0px 8px 30px rgba(255, 255, 255, 0.5)",
          marginY: "1rem",
          //   height: "380px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Typography
            variant="body2"
            component="div"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Shipment number
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            EV-2011700346
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Food Materials
          </Typography>

          {/* Image at the top of the card */}
          <CardMedia
            component="img"
            image={ImageURL}
            alt="Card Image"
            sx={{
              height: "95px",
              width: "152px",
              position: "absolute",
              top: "-20px",
              right: "24px",
            }}
          />
        </Box>

        <Divider
          style={{
            margin: "1rem 0",
            backgroundColor: "#393C49",
          }}
        />

        {/* time line */}
        <Box>
          <TimelineComponent />
        </Box>

        <Divider
          style={{
            margin: "1rem 0",
            backgroundColor: "#393C49",
          }}
        />

        {/* client detail */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* Left Box */}
          <Box>
            <Typography
              variant="body2"
              component="div"
              sx={{ color: theme.palette.primary.contrastText }}
            >
              Client
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ color: theme.palette.primary.contrastText }}
            >
              Jenny Wilson
            </Typography>
            <Typography
              variant="body2"
              component="div"
              sx={{ color: theme.palette.primary.contrastText }}
            >
              Food State, LTD
            </Typography>
          </Box>

          {/* Right Box with Buttons */}
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton
              aria-label="delete"
              sx={{ backgroundColor: theme.palette.primary.contrastText }}
            >
              <IconComponent icon="PhoneIcon" />
            </IconButton>
            <IconButton
              aria-label="delete"
              sx={{ backgroundColor: theme.palette.primary.contrastText }}
            >
              <IconComponent icon="ChatIcon" />
            </IconButton>
          </Stack>
        </Box>
      </Card>
    </Grid>
  );
};

export default OngoingDeliveryComponent;
