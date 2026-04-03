import type { JSX } from "@emotion/react/jsx-runtime";
import { Box, FormControl, RadioGroup, Typography } from "@mui/material";
import MyFormControlEmoji from "./MyFormControlEmoji";
import type { FeedBackUpdate } from "../../../context/feedbackModel";
import { useFeedback } from "../../../context/feedbackContext";
import { useEffect, useState } from "react";

type VoteRatingProps = {
  text: string;
  image: string;
  alt: string;
  field: keyof FeedBackUpdate;
  erro?: boolean;
  tentativas?: number;
};

const VoteRating = ({
  text,
  image,
  alt,
  field,
  erro,
  tentativas,
}: VoteRatingProps): JSX.Element => {
  const { updateFeedback } = useFeedback();
  const handleChange = (value: string) => {
    updateFeedback({ [field]: Number(value) });
  };
  const [shaking, setShaking] = useState(false);
  useEffect(() => {
    if (erro) {
      setShaking(true);
      setTimeout(() => setShaking(false), 500); // ✅ remove após a animação
    }
  }, [tentativas]);

  return (
    <Box
      sx={{
        width: "85%",
        height: "auto",
        minHeight: "80px",
        backgroundColor: erro ? "#FFF3E0" : "#d9d9d9ff", // laranja bem claro
        border: erro ? "2px solid #FF9800" : "2px solid transparent",
        borderRadius: "22px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animation: shaking ? "shake 0.5s ease" : "none",
        "@keyframes shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: erro ? "#FF9800" : "#009688",
          width: "30%",
          minWidth: "180px",
          height: "100%",
          borderRadius: "22px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          paddingInline: "10px",
          gap: "8px",
        }}
      >
        <img
          src={image}
          alt={alt}
          style={{ width: "65px", height: "65px", flexShrink: 0 }}
        />
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 1.2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {text}
        </Typography>
      </Box>
      <FormControl sx={{ flex: 1, height: "auto" }}>
        <RadioGroup
          row
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            "& .MuiFormControlLabel-label": {
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
              color: "#555",
            },
          }}
          name="radio-buttons-group"
        >
          <MyFormControlEmoji value="01" label="Péssimo" emoji="😢" />
          <MyFormControlEmoji value="02" label="Ruim" emoji="🙁" />
          <MyFormControlEmoji value="03" label="Regular" emoji="😐" />
          <MyFormControlEmoji value="04" label="Bom" emoji="🙂" />
          <MyFormControlEmoji value="05" label="Muito bom" emoji="😄" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default VoteRating;
