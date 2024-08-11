import React from "react";
import { Box, Tooltip } from "@mui/material";
import antorusIcon from "../assets/antorusIcon.jpg";
import emeraldIcon from "../assets/emeraldNightmareIcon.jpg";
import eternalPalaceIcon from "../assets/eternalPalaceIcon.jpg";
import nathriaIcon from "../assets/nathriaIcon.jpg";
import nightholdIcon from "../assets/nightholdIcon.jpg";
import nzothIcon from "../assets/nzothIcon.jpg";
import sodIcon from "../assets/sodIcon.jpg";
import tombIcon from "../assets/tombIcon.jpg";
import trialIcon from "../assets/trialIcon.jpg";
import uldirIcon from "../assets/uldirIcon.jpg";
import sotoIcon from "../assets/sotoIcon.jpg";
import crucibleIcon from "../assets/crucibleIcon.jpg";
import amidrassilIcon from "../assets/amidrassilIcon.jpg";
import aberrusIcon from "../assets/aberrusIcon.jpg";
import votiIcon from "../assets/votiIcon.jpg";
import { useGetRecruitsQuery } from "state/api";

const BossesKilled = (raid) => {
  const { data, isLoading } = useGetRecruitsQuery();
  return <div>BossesKilled</div>;
};

export default BossesKilled;
