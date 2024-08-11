import React from "react";
import { Box, Button } from "@mui/material";
import raiderioICON from "../assets/raiderioICON.png";
import wclICON from "../assets/WCLicon.png";
import wowprogressICON from "../assets/wowprogresslink-scr-1.png";

const WebsiteLinks = ({ rioUrl, wclUrl, wowProgUrl }) => {
  return (
    <Box display="flex" padding="5px">
      <a href={rioUrl}>
        <Box
          margin="0px 3px"
          component="img"
          alt="profile"
          src={raiderioICON}
          height="2rem"
          width="2rem"
          borderRadius="50%"
          sx={{ objectFit: "cover" }}
        />
      </a>
      <a href={wclUrl}>
        <Box
          margin="0px 3px"
          component="img"
          alt="profile"
          src={wclICON}
          height="2rem"
          width="2rem"
          borderRadius="50%"
          sx={{ objectFit: "cover" }}
        />
      </a>
      <a href={wowProgUrl}>
        <Box
          margin="0px 3px"
          component="img"
          alt="profile"
          src={wowprogressICON}
          height="2rem"
          width="2rem"
          borderRadius="50%"
          sx={{ objectFit: "cover" }}
        />
      </a>
    </Box>
  );
};

export default WebsiteLinks;
