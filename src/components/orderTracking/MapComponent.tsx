import { CardMedia } from "@mui/material";
import mapImg from "../../assets/mapImg.png";

const MapComponent = () => {
  return (
    <>
      <CardMedia
        component="img"
        image={mapImg}
        alt="Card Image"
        sx={{
          objectFit: "contain",
          height: "100%",
          width: "100%",
          marginTop: "2rem",
        }}
      />
    </>
  );
};

export default MapComponent;
