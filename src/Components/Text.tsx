import type { JSX } from "@emotion/react/jsx-runtime";
import { Typography } from "@mui/material";

type TextProps = {
  text: string | JSX.Element;
  erro?: boolean;
};

const Text = ({ text, erro }: TextProps): JSX.Element => {
  return (
    <Typography
      sx={{
        width: "auto",
        height: "auto",
        fontSize: "28px",
        textAlign: "center",
        color: erro ? "#ce7c00" : "inherit",
      }}
    >
      {text}
    </Typography>
  );
};

export default Text;
