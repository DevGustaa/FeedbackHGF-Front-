import type { JSX } from "@emotion/react/jsx-runtime";
import { Box } from "@mui/material";
import start from "../../assets/images/Start.png";
import TitleText from "../../Components/TitleText";
import Text from "../../Components/Text";
import NavButton from "../../Components/NavButton";
import { useSearchParams } from "react-router-dom";

const Start = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const setorParam = searchParams.get("setor") ?? "";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
          gap: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={start} style={{ width: "450px", height: "450px" }} />

        <Box
          sx={{
            width: "auto",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
          height: "30%",
        }}
      >
        <NavButton
          text="Iniciar pesquisa"
          link={`/pesquisa?setor=${setorParam}`}
        />
      </Box>
    </Box>
  );
};

export default Start;
