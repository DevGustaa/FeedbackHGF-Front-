import type { JSX } from "@emotion/react/jsx-runtime";
import { Typography } from "@mui/material";

type TextProps = {
  text: string | JSX.Element;
  sizing?: boolean;
};

const Text = ({ text, sizing }: TextProps): JSX.Element => {
  return (
    <Typography
      sx={{
        width: "auto",
        height: "auto",
        fontSize: sizing ? "35px" : "28px",
        textAlign: "center",
      }}
    >
      {text}
    </Typography>
  );
};

export default Text;
