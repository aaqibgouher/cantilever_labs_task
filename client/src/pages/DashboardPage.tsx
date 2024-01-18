import { useLocation } from "react-router-dom";
import ReportComponent from "../components/report/ReportComponent";
import OrderTrackingComponent from "../components/orderTracking/OrderTrackingComponent";
import { ReactComponentType, RouteMappingType } from "../interfaces/common";
import DashboardLayout from "../layouts/DasboardLayout";

const DashboardPage: ReactComponentType = () => {
  const location = useLocation();
  let current: string = "";
  const routeMapping: RouteMappingType = {
    report: ReportComponent,
    "order-tracking": OrderTrackingComponent,
  };

  current = location.pathname.split("/")[1];

  //   creating component
  const CurrentComponent = routeMapping[current];

  return (
    <DashboardLayout>
      <CurrentComponent />
    </DashboardLayout>
  );
};

export default DashboardPage;
