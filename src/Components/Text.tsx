import type { JSX } from "@emotion/react/jsx-runtime";
import { Typography } from "@mui/material";

type TextProps = {
  text: string | JSX.Element;
};

const Text = ({ text }: TextProps): JSX.Element => {
  return (
    <Typography
      sx={{
        width: "auto",
        height: "auto",
        fontSize: "24px",
        textAlign: "center",
      }}
    >
      {text}
    </Typography>
  );
};

export default Text;
