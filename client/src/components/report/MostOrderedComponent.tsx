import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Grid,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import IconComponent from "../helpers/IconComponent";
import { useSelector } from "react-redux";

const MostOrderedComponent = () => {
  const theme = useTheme();
  const mostUsedState = useSelector(
    (state: any) => state.reportReducer.mostOrdered
  );

  return (
    <>
      <Grid>
        <Card
          sx={{
            padding: "24px",
            backgroundColor: theme.palette.primary.main,
            overflowY: "auto",
            height: "380px",
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
              Most Ordered
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
          <List>
            {mostUsedState && mostUsedState.length ? (
              mostUsedState.map((most: any, index: number) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        sx={{ color: theme.palette.primary.contrastText }}
                      >
                        {most.name}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.secondary.contrastText }}
                      >
                        {most.count} dishes ordered
                      </Typography>
                    }
                  />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="No Items" />
              </ListItem>
            )}
          </List>

          {/* button */}
          <Button
            variant="outlined"
            sx={{
              marginTop: "1rem",
              color: theme.palette.secondary.main,
              border: `1px solid ${theme.palette.secondary.main}`,
              width: "100%",
            }}
          >
            View All
          </Button>
        </Card>
      </Grid>
    </>
  );
};

export default MostOrderedComponent;
