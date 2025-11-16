import type { JSX } from "@emotion/react/jsx-runtime";
import { Box } from "@mui/material";
import start from "../../assets/images/Start.png";
import TitleText from "../../Components/TitleText";
import Text from "../../Components/Text";
import NavButton from "../../Components/NavButton";

const Start = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", height: "80%", width: "100%" }}>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={start} style={{ width: "450px", height: "450px" }} />
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: "30px",
            alignItems: "center",
          }}
        >
          <TitleText text="Você pode nos ajudar?" />
          <Text text="Responda uma pesquisa rápida sobre o atendimento recebido." />
          <Text text="Sua opnião faz diferença!" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: " center",
          justifyContent: "center",
        }}
      >
        <NavButton text="Iniciar pesquisa" link="/pesquisa" />
      </Box>
    </Box>
  );
};

export default Start;
