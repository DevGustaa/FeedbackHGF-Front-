import type { JSX } from "@emotion/react/jsx-runtime";
import { FormControlLabel } from "@mui/material";
import MyRadio from "./Radio";

type MyFormControlProps = {
  value: string;
  label: string;
};

const MyFormControl = ({ value, label }: MyFormControlProps): JSX.Element => {
  return (
    <FormControlLabel
      value={value}
      control={<MyRadio />}
      label={label}
      labelPlacement="bottom"
      sx={{
        display: "flex",
        flex: "1",
        justifyContent: "center",
        flexDirection: "column",
        margin: 0,
        gap: "4px",
        "& .MuiFormControlLabel-label": {
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        },
        "& .MuiRadio-root": {
          width: "auto",
        },
      }}
    />
  );
};

export default MyFormControl;
