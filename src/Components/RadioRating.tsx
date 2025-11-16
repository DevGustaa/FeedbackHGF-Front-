import type { JSX } from "@emotion/react/jsx-runtime";
import { Box, FormControl, RadioGroup } from "@mui/material";
import MyFormControl from "./MyFormControl";

const RadioRating = (): JSX.Element => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FormControl
        sx={{
          width: "90%",
        }}
      >
        <RadioGroup
          row
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
