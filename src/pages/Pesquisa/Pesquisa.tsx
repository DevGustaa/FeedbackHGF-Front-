import type { JSX } from "@emotion/react/jsx-runtime";
import { Box } from "@mui/material";
import Text from "../../Components/Text";
import RadioRating from "../../Components/RadioRating";
import VoteRating from "./VoteRating";
import NavButton from "../../Components/NavButton";
import AtendimentoPng from "../../assets/images/Atendimento.png";
import RecepcaoPng from "../../assets/images/Consulta.png";
import LimpezaPng from "../../assets/images/Limpeza.png";
import TempoEsperaPng from "../../assets/images/Tempo.png";

const Pesquisa = (): JSX.Element => {
  const explicacao = (
    <p>
      <b>Avaliação Geral:</b> Em uma escala de 0 à 10, o quanto você indicaria o
      <b>Hospital Geral de Fortaleza</b> a um amigo ou familiar?
    </p>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px",
        width: "100%",
        height: "100%",
        gap: "10px",
      }}
    >
      <Box sx={{ width: "80%", height: "auto" }}>
        <Text text={explicacao} />
        <RadioRating />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <VoteRating
          text="Atendimento da Recepção"
          alt="Imagem de recepção"
          image={AtendimentoPng}
        />
        <VoteRating
          text="Profissional / Responsável pelo atendimento / consulta"
          alt="Imagem de profissinal"
          image={RecepcaoPng}
        />
        <VoteRating
          text="Limpeza do Local"
          alt="Imagem de um profissional limpando"
          image={LimpezaPng}
        />
        <VoteRating
          text="Tempo de espera para atendimento"
          alt="Imagem de um relógio"
          image={TempoEsperaPng}
        />
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavButton text="Enviar Pesquisa" link="/agradecimento" />
        </Box>
      </Box>
    </Box>
  );
};

export default Pesquisa;
