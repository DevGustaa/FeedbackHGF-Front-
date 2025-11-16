import type { JSX } from "@emotion/react/jsx-runtime";
import { Typography } from "@mui/material";

type TitleTextProps = {
  text: string;
};

const TitleText = ({ text }: TitleTextProps): JSX.Element => {
  return (
    <Typography
      sx={{
        width: "auto",
        height: "auto",
        fontSize: "45px",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {text}
    </Typography>
  );
};

export default TitleText;
