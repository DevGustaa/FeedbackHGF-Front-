import type { JSX } from "@emotion/react/jsx-runtime";
import { Box, FormControl, RadioGroup } from "@mui/material";
import MyFormControl from "./MyFormControl";
import { useFeedback } from "../context/feedbackContext";
import { useEffect, useState } from "react";

type RadioRatingProps = {
  erro?: boolean;
  tentativas?: number;
};

const RadioRating = ({ erro, tentativas }: RadioRatingProps): JSX.Element => {
  const { updateFeedback } = useFeedback();
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
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        animation: shaking ? "shake 0.5s ease" : "none",
        "@keyframes shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "75%": { transform: "translateX(5px)" },
        },
      }}
    >
      <FormControl
        sx={{
          width: "90%",
        }}
      >
        <RadioGroup
          row
          onChange={(e) =>
            updateFeedback({ avaliacao_geral: Number(e.target.value) })
          }
          sx={{
            display: "flex",
            flexDirection: "row",
            flex: "1",
            justifyContent: "center",
            flexWrap: "nowrap",
            "& .MuiFormControlLabel-root": {
              flex: 1,
              justifyContent: "center",
            },
            "& .MuiFormControlLabel-label": {
              fontSize: 20,
              textAlign: "center",
            },
          }}
          name="radio-buttons-group"
        >
          <MyFormControl value="01" label="01" />
          <MyFormControl value="02" label="02" />
          <MyFormControl value="03" label="03" />
          <MyFormControl value="04" label="04" />
          <MyFormControl value="05" label="05" />
          <MyFormControl value="06" label="06" />
          <MyFormControl value="07" label="07" />
          <MyFormControl value="08" label="08" />
          <MyFormControl value="09" label="09" />
          <MyFormControl value="10" label="10" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default RadioRating;
