import Chart from "react-apexcharts";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const data = [
  { name: "Delivery", value: 80, color: "#65B0F6" },
  { name: "To Go", value: 40, color: "#FFB572" },
  { name: "Dine in", value: 60, color: "#FF7CA3" },
];

const options: any = {
  chart: {
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: "16px",
        },
        value: {
          fontSize: "12px",
        },
      },
      hollow: {
        size: "30%",
      },
    },
  },
  labels: data.map((item) => item.name),
  colors: data.map((item) => item.color),
};

const RadialBarChartComponent = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ marginY: "1rem" }}
    >
      {/* Left Side (Chart) */}
      <Box style={{ width: "70%" }}>
        <Chart
          options={options}
          series={data.map((item) => item.value)}
          type="radialBar"
        />
      </Box>

      {/* Right Side (Legend) */}
      <Box
        style={{ width: "30%" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {data.map((item, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  backgroundColor: item.color,
                  width: "16px",
                  height: "16px",
                  display: "inline-block",
                  borderRadius: "50%",
                  marginRight: "8px",
                }}
              ></span>

              <Typography
                variant="body2"
                gutterBottom
                sx={{
                  color: theme.palette.primary.contrastText,
                }}
              >
                {item.name}
              </Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default RadialBarChartComponent;
