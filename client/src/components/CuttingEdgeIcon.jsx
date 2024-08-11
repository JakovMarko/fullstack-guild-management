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

const CuttingEdgeIcon = ({ raid, id, border, margin, padding }) => {
  if (raid === "amirdrassil-the-dreams-hope") {
    return (
      <Box margin={margin} border={border} padding={padding}>
        <Tooltip
          arrow
          placement="bottom"
          size="ld"
          variant="solid"
          title={
            <span style={{ color: "black", fontSize: 15 }}>
              {raid.replace(/-/g, " ")}
            </span>
          }
        >
          <Box
            component="img"
            src={amidrassilIcon}
            sx={{
              height: "25px",
              width: "25px",
            }}
          />
        </Tooltip>
      </Box>
    );
  } else if (raid === "aberrus-the-shadowed-crucible") {
    return (
      <Box margin={margin} border={border} padding={padding}>
        <Tooltip
          arrow
          placement="bottom"
          size="ld"
          variant="solid"
          title={
            <span style={{ color: "black", fontSize: 15 }}>
              {raid.replace(/-/g, " ")}
            </span>
          }
        >
          <Box
            component="img"
            src={aberrusIcon}
            sx={{
              height: "25px",
              width: "25px",
            }}
          />
        </Tooltip>
      </Box>
    );
  } else if (raid === "vault-of-the-incarnates") {
    return (
      <Box margin={margin} border={border} padding={padding}>
        <Tooltip
          arrow
          placement="bottom"
          size="ld"
          variant="solid"
          title={
            <span style={{ color: "black", fontSize: 15 }}>
              {raid.replace(/-/g, " ")}
            </span>
          }
        >
          <Box
            component="img"
            src={votiIcon}
            sx={{
              height: "25px",
              width: "25px",
            }}
          />
        </Tooltip>
      </Box>
    );
  } else if (raid === "sepulcher-of-the-first-ones") {
    return (
      <Box margin={margin} border={border} padding={padding}>
        <Tooltip
          arrow
          placement="bottom"
          size="ld"
          variant="solid"
          title={
            <span style={{ color: "black", fontSize: 15 }}>
              {raid.replace(/-/g, " ")}
            </span>
          }
        >
          <Box
            component="img"
            src={sotoIcon}
            sx={{
              height: "25px",
              width: "25px",
            }}
          />
        </Tooltip>
      </Box>
    );
  } else if (raid === "sanctum-of-domination") {
    return (
      <Box margin={margin} border={border} padding={padding}>
        <Tooltip
          arrow
          placement="bottom"
          size="ld"
          variant="solid"
          title={
            <span style={{ color: "black", fontSize: 15 }}>
              {raid.replace(/-/g, " ")}
            </span>
          }
        >
          <Box
            component="img"
            src={sodIcon}
            sx={{
              height: "25px",
              width: "25px",
            }}
          />
        </Tooltip>
      </Box>
    );
  } else if (raid === "castle-nathria") {
    return (
      <Box margin={margin} border={border} padding={padding}>
        <Tooltip
          arrow
          placement="bottom"
          size="ld"
          variant="solid"
          title={
            <span style={{ color: "black", fontSize: 15 }}>
              {raid.replace(/-/g, " ")}
            </span>
          }
        >
          <Box
            component="img"
            src={nathriaIcon}
            sx={{
              height: "25px",
              width: "25px",
            }}
          />
        </Tooltip>
      </Box>
    );
  } else if (raid === "uldir") {
    return (
      <Box margin={margin} border={border} padding={padding}>
        <Tooltip
          arrow
          placement="bottom"
          size="ld"
          variant="solid"
          title={
            <span style={{ color: "black", fontSize: 15 }}>
              {raid.replace(/-/g, " ")}
            </span>
          }
        >
          <Box
            component="img"
            src={uldirIcon}
            sx={{
              height: "25px",
              width: "25px",
            }}
          />
        </Tooltip>
      </Box>
    );
  } else if (raid === "the-eternal-palace") {
    return (
      <Box margin={margin} border={border} padding={padding}>
        <Tooltip
          arrow
          placement="bottom"
          size="ld"
          variant="solid"
          title={
            <span style={{ color: "black", fontSize: 15 }}>
              {raid.replace(/-/g, " ")}
            </span>
          }
        >
          <Box
            component="img"
            src={eternalPalaceIcon}
            sx={{
              height: "25px",
              width: "25px",
            }}
          />
        </Tooltip>
      </Box>
    );
  } else if (raid === "crucible-of-storms") {
    return (
      <Box margin={margin} border={border} padding={padding}>
        <Tooltip
          arrow
          placement="bottom"
          size="ld"
          variant="solid"
          title={
            <span style={{ color: "black", fontSize: 15 }}>
              {raid.replace(/-/g, " ")}
            </span>
          }
        >
          <Box
            component="img"
            src={crucibleIcon}
            sx={{
              height: "25px",
              width: "25px",
            }}
          />
        </Tooltip>
      </Box>
    );
  } else if (raid === "the-emerald-nightmare") {
    return (
      <Box margin={margin} border={border} padding={padding}>
        <Tooltip
          arrow
          placement="bottom"
          size="ld"
          variant="solid"
          title={
            <span style={{ color: "black", fontSize: 15 }}>
              {raid.replace(/-/g, " ")}
            </span>
          }
        >
          <Box
            component="img"
            src={emeraldIcon}
            sx={{
              height: "25px",
              width: "25px",
            }}
          />
        </Tooltip>
      </Box>
    );
  } else if (raid === "trial-of-valor") {
    return (
      <Box margin={margin} border={border} padding={padding}>
        <Tooltip
          arrow
          placement="bottom"
          size="ld"
          variant="solid"
          title={
            <span style={{ color: "black", fontSize: 15 }}>
              {raid.replace(/-/g, " ")}
            </span>
          }
        >
          <Box
            component="img"
            src={trialIcon}
            sx={{
              height: "25px",
              width: "25px",
            }}
          />
        </Tooltip>
      </Box>
    );
  } else if (raid === "the-nighthold") {
    return (
      <Box margin={margin} border={border} padding={padding}>
        <Tooltip
          arrow
          placement="bottom"
          size="ld"
          variant="solid"
          title={
            <span style={{ color: "black", fontSize: 15 }}>
              {raid.replace(/-/g, " ")}
            </span>
          }
        >
          <Box
            component="img"
            src={nightholdIcon}
            sx={{
              height: "25px",
              width: "25px",
            }}
          />
        </Tooltip>
      </Box>
    );
  } else if (raid === "tomb-of-sargeras") {
    return (
      <Box margin={margin} border={border} padding={padding}>
        <Tooltip
          arrow
          placement="bottom"
          size="ld"
          variant="solid"
          title={
            <span style={{ color: "black", fontSize: 15 }}>
              {raid.replace(/-/g, " ")}
            </span>
          }
        >
          <Box
            component="img"
            src={tombIcon}
            sx={{
              height: "25px",
              width: "25px",
            }}
          />
        </Tooltip>
      </Box>
    );
  } else if (raid === "antorus-the-burning-throne") {
    return (
      <Box margin={margin} border={border} padding={padding}>
        <Tooltip
          arrow
          placement="bottom"
          size="ld"
          variant="solid"
          title={
            <span style={{ color: "black", fontSize: 15 }}>
              {raid.replace(/-/g, " ")}
            </span>
          }
        >
          <Box
            component="img"
            src={antorusIcon}
            sx={{
              height: "25px",
              width: "25px",
            }}
          />
        </Tooltip>
      </Box>
    );
  }
};

export default CuttingEdgeIcon;

// "raid_achievement_curve": [
//     {
//       "raid": "amirdrassil-the-dreams-hope",
//       "aotc": "2023-11-17T14:48:56.000Z",
//       "cutting_edge": "2024-02-13T20:09:57.000Z"
//     },
//     {
//       "raid": "aberrus-the-shadowed-crucible",
//       "aotc": "2023-05-11T21:47:35.000Z",
//       "cutting_edge": "2023-06-06T17:14:16.000Z"
//     },
//     {
//       "raid": "vault-of-the-incarnates",
//       "aotc": "2022-12-19T14:18:53.000Z",
//       "cutting_edge": "2023-03-02T19:11:37.000Z"
//     },
//     {
//       "raid": "sepulcher-of-the-first-ones",
//       "aotc": "2022-04-02T21:16:33.000Z",
//       "cutting_edge": "2022-06-13T22:10:48.000Z"
//     },
//     {
//       "raid": "sanctum-of-domination",
//       "aotc": "2021-09-17T19:39:45.000Z",
//       "cutting_edge": "2021-10-04T18:11:00.000Z"
//     },
//     {
//       "raid": "castle-nathria",
//       "aotc": "2021-01-21T20:34:15.000Z",
//       "cutting_edge": "2021-03-12T18:38:20.000Z"
//     },
//     {
//       "raid": "uldir",
//       "aotc": "2018-10-17T21:07:31.000Z",
//       "cutting_edge": "2018-12-13T21:17:56.000Z"
//     },
//     {
//       "raid": "the-eternal-palace",
//       "aotc": "2019-07-12T21:31:29.000Z",
//       "cutting_edge": "2019-08-10T20:03:19.000Z"
//     },
//     {
//       "raid": "crucible-of-storms",
//       "aotc": "2019-04-19T21:15:33.000Z",
//       "cutting_edge": "2019-07-03T19:19:56.000Z"
//     },
//     {
//       "raid": "the-emerald-nightmare",
//       "aotc": "2016-09-25T21:01:21.000Z",
//       "cutting_edge": "2016-10-15T17:46:57.000Z"
//     },
//     {
//       "raid": "trial-of-valor",
//       "aotc": "2016-11-12T19:53:33.000Z",
//       "cutting_edge": "2016-11-30T22:16:23.000Z"
//     },
//     {
//       "raid": "the-nighthold",
//       "aotc": "2017-01-21T17:39:47.000Z",
//       "cutting_edge": "2017-02-04T13:11:16.000Z"
//     },
//     {
//       "raid": "tomb-of-sargeras",
//       "aotc": "2017-06-22T16:05:22.000Z",
//       "cutting_edge": "2017-08-14T18:16:29.000Z"
//     },
//     {
//       "raid": "antorus-the-burning-throne",
//       "aotc": "2017-11-30T23:12:19.000Z",
//       "cutting_edge": "2017-12-14T17:51:56.000Z"
//     }
//   ]
