import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
  Tooltip,
  Link,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import {
  useGetPendingRecruitsQuery,
  useUpdateRejectUserMutation,
} from "state/api";

import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
import WebsiteLinks from "components/WebsiteLinks";
import CuttingEdgeIcon from "components/CuttingEdgeIcon";
import amidrassilIcon from "assets/amidrassilIcon.jpg";
import battlenet from "assets/battlenet.png";
import discordIcon from "assets/discord.png";
import antorusIcon from "assets/antorusIcon.jpg";
import emeraldIcon from "assets/emeraldNightmareIcon.jpg";
import eternalPalaceIcon from "assets/eternalPalaceIcon.jpg";
import nathriaIcon from "assets/nathriaIcon.jpg";
import nightholdIcon from "assets/nightholdIcon.jpg";
import nzothIcon from "assets/nzothIcon.jpg";
import sodIcon from "assets/sodIcon.jpg";
import tombIcon from "assets/tombIcon.jpg";
import trialIcon from "assets/trialIcon.jpg";
import uldirIcon from "assets/uldirIcon.jpg";
import sotoIcon from "assets/sotoIcon.jpg";
import crucibleIcon from "assets/crucibleIcon.jpg";
import aberrusIcon from "assets/aberrusIcon.jpg";
import votiIcon from "assets/votiIcon.jpg";
function classColor(charClass) {
  switch (charClass) {
    case "Death Knight":
      return "#C41E3A";
      break;
    case "Demon Hunter":
      return "#A330C9";
      break;
    case "Druid":
      return "#FF7C0A";
      break;
    case "Evoker":
      return "#33937F";
      break;
    case "Hunter":
      return "#AAD372";
      break;
    case "Mage":
      return "#3FC7EB";
      break;
    case "Monk":
      return "#00FF98";
      break;
    case "Paladin":
      return "#F48CBA";
      break;
    case "Priest":
      return "#FFFFFF";
      break;
    case "Rogue":
      return "#FFF468";
      break;
    case "Shaman":
      return "#0070DD";
      break;
    case "Warlock":
      return "#8788EE";
      break;
    case "Warrior":
      return "#C69B6D";
      break;
  }
}

const Product = ({
  _id,
  charName,
  charServer,
  wowProgUrl,
  rioUrl,
  wclUrl,
  charID,
  charILVL,
  charClass,
  charSpec,
  charProfilePicture,
  charCEList,
  currentGuild,
  guildWLCProfile,
  guildRankings,
  charRaidProgress,
  charRecruitStatus,
  charCommentary,
  battleNet,
  discord,
  charRoleLogs,
  charLogsScore,
  bossesKilled,
  createdAt,
}) => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);
  const [rejectUser] = useUpdateRejectUserMutation();
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  let currentTime = Date.now();
  let postedTime = Date.parse(createdAt);
  const handleButtonClickBattleNet = () => {
    setTooltipOpen(true);
    navigator.clipboard.writeText(battleNet);

    const timeoutId = setTimeout(() => {
      setTooltipOpen(false);
      clearTimeout(timeoutId); // Clear the timeout to prevent multiple timeouts
    }, 5000);
  };
  const handleButtonClickDiscord = () => {
    setTooltipOpen(true);
    navigator.clipboard.writeText(discord);

    const timeoutId = setTimeout(() => {
      setTooltipOpen(false);
      clearTimeout(timeoutId); // Clear the timeout to prevent multiple timeouts
    }, 5000);
  };
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
        border: "1px solid black",
      }}
    >
      <CardContent>
        <FlexBetween
          flexWrap="wrap"
          border={`2px solid ${theme.palette.primary[400]}`}
        >
          <Box display="flex" flexWrap="wrap">
            <Box
              position="relative"
              component="img"
              sx={{
                maxHeightheight: 110,
                width: 110,
                border: `2px solid ${theme.palette.primary[600]}`,
              }}
              alt="Character profile picture"
              src={charProfilePicture}
            />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              paddingLeft="0.5rem"
            >
              <Typography
                sx={{ fontSize: 16 }}
                color={classColor(charClass)}
                gutterBottom
              >
                {charSpec} {charClass}
              </Typography>
              <Typography sx={{ fontSize: 18 }} gutterBottom>
                Name: {charName}
              </Typography>
              <Typography sx={{ fontSize: 15 }} gutterBottom>
                {currentGuild && (
                  <span>
                    Guild :
                    <Link
                      href={guildWLCProfile}
                      color="inherit"
                      target="_blank"
                      rel="noopener"
                      sx={{ fontSize: 16, color: "white" }}
                    >
                      {currentGuild.name}
                    </Link>
                  </span>
                )}
              </Typography>
              <Typography sx={{ fontSize: 13 }} gutterBottom>
                Realm: {charServer.split("-").join(" ").toUpperCase()}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignContent="flex-start"
            maxHeight="100%"
            maxWidth="30%"
          >
            <Typography
              sx={{ fontSize: 16 }}
              color={theme.palette.secondary[400]}
              align="center"
              gutterBottom
            >
              Item level: {charILVL}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Previous CE experience:
            </Typography>
            <Box display="flex" flexDirection="row" flexWrap="wrap">
              {charCEList.length > 0 &&
                charCEList.map((item, index) => {
                  return (
                    <CuttingEdgeIcon raid={item} id={index} margin="2px" />
                  );
                })}
            </Box>
          </Box>
          {/* LINKS TO OTHER SITES */}
          <Box display="flex" alignContent="space-between">
            <Box
              display="flex"
              flexDirection="column"
              alignContent="space-between"
            >
              <Box paddingBottom="2rem">
                <WebsiteLinks
                  rioUrl={rioUrl}
                  wclUrl={wclUrl}
                  wowProgUrl={wowProgUrl}
                />
              </Box>
              <Box align="center">
                <Tooltip open={tooltipOpen} title="Copied to clipboard!">
                  <Box
                    component="img"
                    alt="battlenet"
                    height="2rem"
                    width="2rem"
                    borderRadius="50%"
                    src={battlenet}
                    onClick={(e) => handleButtonClickBattleNet()}
                    sx={{ cursor: "pointer" }}
                  />
                </Tooltip>
                {discord && (
                  <Tooltip open={tooltipOpen} title="Copied to clipboard!">
                    <Box
                      component="img"
                      alt="discord"
                      height="2rem"
                      width="2rem"
                      borderRadius="50%"
                      src={discordIcon}
                      onClick={handleButtonClickDiscord}
                      sx={{ cursor: "pointer" }}
                    />
                  </Tooltip>
                )}
              </Box>
            </Box>
          </Box>
        </FlexBetween>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" flexDirection="row">
            {/* {AMIDRSSIL PROGRESS AND LOGS CONTAINER} */}
            <Box
              display="flex"
              flexDirection="column"
              margin="5px 10px 5px 5px"
              alignItems="center"
            >
              {/* IMAGE ICON */}
              <a
                href={`https://www.warcraftlogs.com/character/eu/${charServer}/${charName.toLowerCase()}#partition=-1`}
              >
                <Box
                  component="img"
                  sx={{
                    maxHeight: 30,
                    width: 30,
                    border: `2px solid ${theme.palette.primary[600]}`,
                  }}
                  alt="Amidrassil"
                  src={amidrassilIcon}
                />
              </a>
              {/* LOGS BEST AND MEDIAN */}
              <Box align="center">
                <Typography variant="h5">
                  {charRaidProgress && (
                    <span>{charRaidProgress.amidrassil}</span>
                  )}
                </Typography>
                <Typography variant="h5">
                  {charLogsScore && (
                    <span>Best: {charLogsScore.amidrassilBest}</span>
                  )}
                </Typography>
                <Typography variant="h5">
                  {charLogsScore && (
                    <span>Median: {charLogsScore.amidrassilMedian}</span>
                  )}
                </Typography>
              </Box>
            </Box>

            {/* {ABERRUS PROGRESS AND LOGS CONTAINER} */}
            <Box
              display="flex"
              flexDirection="column"
              margin="5px 10px 5px 5px"
              alignItems="center"
            >
              <a
                href={`https://www.warcraftlogs.com/character/eu/${charServer}/${charName.toLowerCase()}#zone=33`}
              >
                <Box
                  component="img"
                  sx={{
                    maxHeight: 30,
                    width: 30,
                    border: `2px solid ${theme.palette.primary[600]}`,
                  }}
                  alt="Amidrassil"
                  src={aberrusIcon}
                />
              </a>
              {/* LOGS BEST AND MEDIAN */}
              <Box align="center">
                <Typography variant="h5">
                  {charRaidProgress && <span>{charRaidProgress.aberrus}</span>}
                </Typography>
                <Typography variant="h5">
                  {charLogsScore && (
                    <span>Best: {charLogsScore.aberrusBest}</span>
                  )}
                </Typography>
                <Typography variant="h5">
                  {charLogsScore && (
                    <span>Median: {charLogsScore.aberrusMedian}</span>
                  )}
                </Typography>
              </Box>
            </Box>

            {/* {VOTI PROGRESS AND LOGS CONTAINER} */}
            <Box
              display="flex"
              flexDirection="column"
              margin="5px 10px 5px 5px"
              alignItems="center"
            >
              <a
                href={`https://www.warcraftlogs.com/character/eu/${charServer}/${charName.toLowerCase()}#zone=31`}
              >
                <Box
                  component="img"
                  sx={{
                    maxHeight: 30,
                    width: 30,
                    border: `2px solid ${theme.palette.primary[600]}`,
                  }}
                  alt="Voti"
                  src={votiIcon}
                />
              </a>
              {/* LOGS BEST AND MEDIAN */}
              <Box align="center">
                <Typography variant="h5">
                  {charRaidProgress && <span>{charRaidProgress.voti}</span>}
                </Typography>
                <Typography variant="h5">
                  {charLogsScore && <span>Best: {charLogsScore.votiBest}</span>}
                </Typography>
                <Typography variant="h5">
                  {charLogsScore && (
                    <span>Median: {charLogsScore.votiMedian}</span>
                  )}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* {PREVIOUS RAIDS PROGRESS} */}
          <Box>
            <h1>Prev Raids</h1>
          </Box>
        </Box>
        <Box padding="5px" backgroundColor={theme.palette.primary[600]}>
          <Typography variant="body1">{charCommentary}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="body1" color="grey" margin="5px">
              Posted:
              {Math.ceil((currentTime - postedTime) / 1000 / 60 / 60)} hours ago
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={() => {
                let rejectedUser = {
                  id: charID,
                  charRecruitStatus: "rejected",
                };
                rejectUser(rejectedUser);
              }}
            >
              <PersonAddIcon sx={{ fontSize: "3rem", color: "white" }} />
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const Products = () => {
  const { data, isLoading } = useGetPendingRecruitsQuery();
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  console.log(data);
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="RECRUITS"
        subtitle="Here you can find the latest recruitment posts from wowprogress and raiderio"
      />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(2, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
          }}
        >
          {data.map(
            ({
              _id,
              charName,
              charServer,
              wowProgUrl,
              rioUrl,
              wclUrl,
              charID,
              charILVL,
              charClass,
              charSpec,
              charProfilePicture,
              charCEList,
              currentGuild,
              guildWLCProfile,
              guildRankings,
              charRaidProgress,
              charRecruitStatus,
              charCommentary,
              battleNet,
              discord,
              charRoleLogs,
              charLogsScore,
              bossesKilled,
              createdAt,
            }) => (
              <Product
                _id={_id}
                charName={charName}
                charServer={charServer}
                wowProgUrl={wowProgUrl}
                rioUrl={rioUrl}
                wclUrl={wclUrl}
                charID={charID}
                charILVL={charILVL}
                charClass={charClass}
                charSpec={charSpec}
                charProfilePicture={charProfilePicture}
                charCEList={charCEList}
                currentGuild={currentGuild}
                guildWLCProfile={guildWLCProfile}
                guildRankings={guildRankings}
                charRaidProgress={charRaidProgress}
                charRecruitStatus={charRecruitStatus}
                charCommentary={charCommentary}
                battleNet={battleNet}
                discord={discord}
                charRoleLogs={charRoleLogs}
                charLogsScore={charLogsScore}
                bossesKilled={bossesKilled}
                createdAt={createdAt}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading ...</>
      )}
    </Box>
  );
};

export default Products;
