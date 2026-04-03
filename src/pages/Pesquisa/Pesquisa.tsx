import type { JSX } from "@emotion/react/jsx-runtime";
import { Box } from "@mui/material";
import Text from "../../Components/Text";
import RadioRating from "../../Components/RadioRating";
import VoteRating from "./components/VoteRating";
import NavButton from "../../Components/NavButton";
import AtendimentoPng from "../../assets/images/Atendimento.png";
import RecepcaoPng from "../../assets/images/Consulta.png";
import LimpezaPng from "../../assets/images/Limpeza.png";
import TempoEsperaPng from "../../assets/images/Tempo.png";
import { useFeedback } from "../../context/feedbackContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { postFeedback } from "../../api/APIService";
import type { FeedBack } from "../../context/feedbackModel";
import { Setor } from "../../enums/setorEnum";
import { useEffect, useRef, useState } from "react";

const Pesquisa = (): JSX.Element => {
  const explicacao = (
    <span>
      <b>Avaliação Geral:</b> Em uma escala de 0 à 10, o quanto você indicaria o
      <b> Hospital Geral de Fortaleza</b> a um amigo ou familiar?
    </span>
  );
  const { feedback, resetFeedback } = useFeedback();
  const feedbackRef = useRef(feedback);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [tentouEnviar, setTentouEnviar] = useState(false);
  const [tentativas, setTentativas] = useState(0);

  useEffect(() => {
    feedbackRef.current = feedback;
  }, [feedback]);

  const camposObrigatorios: (keyof FeedBack)[] = [
    "avaliacao_geral",
    "atendimento_recepcao",
    "responsavel_atendimento",
    "limpeza_local",
    "tempo_espera",
  ];

  const handleSubmit = async () => {
    setTentouEnviar(true);
    setTentativas((prev) => prev + 1);

    const camposFaltando = camposObrigatorios.filter(
      (campo) => feedbackRef.current[campo] === undefined,
    );

    if (camposFaltando.length > 0) return; // ✅ bloqueia sem alert, a cor já avisa

    const setorParam = searchParams.get("setor") ?? "";
    const setorValor = Setor[setorParam as keyof typeof Setor];

    const payload = { ...feedbackRef.current, setor: setorValor };

    try {
      await postFeedback(payload as FeedBack);
      resetFeedback();
      navigate(`/agradecimento?setor=${setorParam}`);
    } catch (error: any) {
      console.log("3. erro do backend:", JSON.stringify(error.response?.data));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: "5px",
        height: "100%",
      }}
    >
      <Box sx={{ width: "80%", height: "auto" }}>
        <Text
          erro={
            tentouEnviar && feedbackRef.current["avaliacao_geral"] === undefined
          }
          text={explicacao}
        />
        <RadioRating
          erro={
            tentouEnviar && feedbackRef.current["avaliacao_geral"] === undefined
          }
          tentativas={tentativas}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <VoteRating
          tentativas={tentativas}
          text="Atendimento da Recepção"
          alt="Imagem de recepção"
          image={AtendimentoPng}
          field="atendimento_recepcao"
          erro={
            tentouEnviar &&
            feedbackRef.current["atendimento_recepcao"] === undefined
          }
        />
        <VoteRating
          tentativas={tentativas}
          text="Responsável pelo atendimento / consulta"
          alt="Imagem de profissinal"
          image={RecepcaoPng}
          field="responsavel_atendimento"
          erro={
            tentouEnviar &&
            feedbackRef.current["responsavel_atendimento"] === undefined
          }
        />
        <VoteRating
          tentativas={tentativas}
          text="Limpeza do Local"
          alt="Imagem de um profissional limpando"
          image={LimpezaPng}
          field="limpeza_local"
          erro={
            tentouEnviar && feedbackRef.current["limpeza_local"] === undefined
          }
        />
        <VoteRating
          tentativas={tentativas}
          text="Tempo de espera para atendimento"
          alt="Imagem de um relógio"
          image={TempoEsperaPng}
          field="tempo_espera"
          erro={
            tentouEnviar && feedbackRef.current["tempo_espera"] === undefined
          }
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavButton text="Enviar Pesquisa" onClick={handleSubmit} />
      </Box>
    </Box>
  );
};

export default Pesquisa;
