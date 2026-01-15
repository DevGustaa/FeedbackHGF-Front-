import type { JSX } from "@emotion/react/jsx-runtime";
import { Box } from "@mui/material";
import FeedbackImg from "../../assets/images/Agradecimento.png";
import TitleText from "../../Components/TitleText";
import Text from "../../Components/Text";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Thanks = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    const time = setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={FeedbackImg} style={{ width: "490px", height: "490px" }} />
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <TitleText text="Agradecemos sua colaboração" />
        <Text text="Sua opnião ajuda a cuidar de quem você ama!" />
      </Box>
    </Box>
  );
};

export default Thanks;
