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
        alignItems: "center",
        "& .MuiFormControlLabel-label": {
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        },
      }}
    />
  );
};

export default MyFormControlEmoji;
