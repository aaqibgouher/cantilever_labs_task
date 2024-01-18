import { Drawer, List, ListItem, ListItemIcon, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import IconComponent from "./IconComponent";
import { useTheme } from "@mui/material/styles";

const SidebarComponent = () => {
  const theme = useTheme();
  const location = useLocation();
  const sidebarState = useSelector((state: any) => state.helperReducer.sidebar);

  return (
    <Drawer
      variant="permanent"
      className="drawerWidth"
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          backgroundColor: theme.palette.primary.main,
        },
      }}
    >
      <List sx={{ justifyContent: "center" }}>
        {sidebarState && sidebarState.length ? (
          sidebarState.map((sidebar: any) => (
            <ListItem
              key={sidebar.icon}
              sx={{
                justifyContent: "center",
                height: sidebar.height,
                backgroundColor:
                  location.pathname === sidebar.target
                    ? theme.palette.primary.light
                    : "",
              }}
            >
              <Box
                sx={{
                  backgroundColor:
                    location.pathname === sidebar.target
                      ? theme.palette.secondary.main
                      : "",
                  borderRadius:
                    location.pathname === sidebar.target ? `10px` : "",
                }}
              >
                <Link
                  to={sidebar.target}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemIcon>
                    <IconComponent
                      icon={sidebar.icon}
                      color={
                        location.pathname === sidebar.target
                          ? theme.palette.primary.contrastText
                          : sidebar.color
                      }
                      margin={sidebar.margin}
                      size={sidebar.size}
                    />
                  </ListItemIcon>
                </Link>
              </Box>
            </ListItem>
          ))
        ) : (
          <p>No data</p>
        )}
      </List>
    </Drawer>
  );
};

export default SidebarComponent;
