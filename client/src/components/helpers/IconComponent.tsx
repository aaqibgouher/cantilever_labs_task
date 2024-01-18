import React, { Suspense } from "react";
import * as MuiIcons from "@mui/icons-material";
import { ReactComponentProps } from "../../interfaces/common";

const IconComponent: React.FC<ReactComponentProps> = ({
  icon,
  color,
  margin,
  size,
}) => {
  const Icons: Record<string, React.ComponentType<any>> = {
    StoreIcon: MuiIcons.Storefront,
    HomeIcon: MuiIcons.HomeOutlined,
    ShareIcon: MuiIcons.Share,
    ChartIcon: MuiIcons.PieChartOutlineOutlined,
    MessageIcon: MuiIcons.EmailOutlined,
    NotificationIcon: MuiIcons.NotificationsNoneOutlined,
    SettingIcon: MuiIcons.SettingsOutlined,
    LogoutIcon: MuiIcons.LogoutOutlined,
    DolalrIcon: MuiIcons.MonetizationOnOutlined,
    DishIcon: MuiIcons.BookmarkBorderOutlined,
    CustomerIcon: MuiIcons.PeopleAltOutlined,
    ArrowDownIcon: MuiIcons.KeyboardArrowDownOutlined,
    FilterIcon: MuiIcons.TuneOutlined,
    SearchIcon: MuiIcons.SearchOutlined,
    CircleIcon: MuiIcons.Circle,
    LocationIcon: MuiIcons.LocationOn,
    PhoneIcon: MuiIcons.LocalPhone,
    ChatIcon: MuiIcons.Chat,
  };

  const SelectedIcon = Icons[icon as keyof typeof Icons];

  if (!SelectedIcon) {
    return <div>Icon not found</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SelectedIcon sx={{ color, margin, fontSize: size }} />
    </Suspense>
  );
};

export default IconComponent;
