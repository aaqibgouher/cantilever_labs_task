import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, Share, MoreVert } from "@mui/icons-material";
import { ReactComponentType } from "../../interfaces/common";
import StatisticsComponent from "../report/StatisticsComponent";
import OrderReportComponent from "../report/OrderReportComponent";
import MostOrderedComponent from "../report/MostOrderedComponent";
import MostTypeOrderComponent from "../report/MostTypeOrderComponent";
import OngoingDelieveryComponent from "../orderTracking/OngoingDelieveryComponent";

const CardComponent: ReactComponentType = ({ cardType }) => {
  return (
    <>
      {cardType && cardType === "STATS" && <StatisticsComponent />}
      {cardType && cardType === "ORDER_REPORT" && <OrderReportComponent />}
      {cardType && cardType === "MOST_ORDERED" && <MostOrderedComponent />}
      {cardType && cardType === "MOST_TYPE_ORDRED" && (
        <MostTypeOrderComponent />
      )}
      {cardType && cardType === "ONGOING_DELIEVERY" && (
        <OngoingDelieveryComponent />
      )}
    </>
  );
};

export default CardComponent;
