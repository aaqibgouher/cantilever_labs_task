import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import IconComponent from "../helpers/IconComponent";

const TimelineComponent = () => {
  const theme = useTheme();

  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            <IconComponent icon="CircleIcon" color="#50D1AA" />
          </TimelineDot>
          <TimelineConnector
            sx={{ backgroundColor: theme.palette.primary.contrastText }}
          />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Sleep
          </Typography>
          <Typography sx={{ color: theme.palette.primary.contrastText }}>
            Because you need rest
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            <IconComponent icon="LocationIcon" color="#9290FE" />
          </TimelineDot>
          {/* <TimelineConnector
            sx={{ backgroundColor: theme.palette.primary.contrastText }}
          /> */}
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Sleep
          </Typography>
          <Typography sx={{ color: theme.palette.primary.contrastText }}>
            Because you need rest
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineComponent;
