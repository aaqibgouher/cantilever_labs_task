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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import IconComponent from "../helpers/IconComponent";

const OrderReportComponent = () => {
  const theme = useTheme();
  const orderReportsState = useSelector(
    (state: any) => state.reportReducer.orderReports
  );
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (
      orderReportsState &&
      orderReportsState.rows &&
      orderReportsState.columns
    ) {
      setRows(orderReportsState.rows);
      setColumns(orderReportsState.columns);
    }
  }, [orderReportsState]);

  return (
    <>
      <Grid>
        <Card
          sx={{
            padding: "24px",
            backgroundColor: theme.palette.primary.main,
            height: "450px",
            overflowY: "auto",
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
              Order Report
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: theme.palette.primary.contrastText,
                border: `1px solid ${theme.palette.secondary.contrastText}`,
              }}
              startIcon={<IconComponent icon="FilterIcon" />}
            >
              Filter Order
            </Button>
          </Box>

          {/* table */}
          <Table>
            <TableHead>
              <TableRow>
                {columns && columns.length ? (
                  columns.map((header, index) => (
                    <TableCell
                      key={index}
                      sx={{ color: theme.palette.secondary.contrastText }}
                    >
                      {header}
                    </TableCell>
                  ))
                ) : (
                  <TableCell>No col</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: any, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell
                    sx={{ color: theme.palette.secondary.contrastText }}
                  >
                    <span
                      style={{
                        backgroundColor: row.color,
                        width: "20px",
                        height: "20px",
                        display: "inline-block",
                        borderRadius: "50%",
                        marginRight: "8px",
                      }}
                    ></span>
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{ color: theme.palette.secondary.contrastText }}
                  >
                    {row.menu}
                  </TableCell>
                  <TableCell
                    sx={{ color: theme.palette.secondary.contrastText }}
                  >
                    {row.amount}
                  </TableCell>
                  <TableCell
                    sx={{ color: theme.palette.secondary.contrastText }}
                  >
                    {row.status === "COMPLETED" && (
                      <Chip
                        label="Completed"
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: "#50D1AA", color: "#50D1AA" }}
                      />
                    )}
                    {row.status === "PENDING" && (
                      <Chip
                        label="Pending"
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: "#FFB572", color: "#FFB572" }}
                      />
                    )}
                    {row.status === "PREPARING" && (
                      <Chip
                        label="Preparing"
                        size="small"
                        sx={{ borderColor: "#9290FE", color: "#9290FE" }}
                        variant="outlined"
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Grid>
    </>
  );
};

export default OrderReportComponent;
