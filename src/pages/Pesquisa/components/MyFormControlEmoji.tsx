import type { JSX } from "@emotion/react/jsx-runtime";
import { FormControlLabel } from "@mui/material";
import MyRadioEmoji from "./MyRadioEmoji";

type MyFormControlEmojiProps = {
  value: string;
  label: string;
  emoji: string;
};

const MyFormControlEmoji = ({
  value,
  label,
  emoji,
}: MyFormControlEmojiProps): JSX.Element => {
  return (
    <FormControlLabel
      value={value}
      control={<MyRadioEmoji emoji={emoji} />}
      label={label}
      labelPlacement="bottom"
      sx={{
        display: "flex",
        flex: "1",
        width: "5px",
        flexDirection: "column",

        // Wrapper do control (radio)
        "& .MuiFormControlLabel-labelPlacementBottom": {
          marginLeft: 0,
        },

        "& .MuiFormControlLabel-label": {
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        },

        // Centraliza o MyRadioEmoji
        "& .MuiRadio-root, & .MuiButtonBase-root": {
          margin: 0,
          padding: 0,
        },
      }}
    />
  );
};

export default MyFormControlEmoji;
