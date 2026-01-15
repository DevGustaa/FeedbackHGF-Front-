import type { JSX } from "@emotion/react/jsx-runtime";
import { Radio } from "@mui/material";

const MyRadio = (props: any): JSX.Element => {
  return (
    <Radio
      {...props}
      sx={{
        "& .MuiSvgIcon-root": { fontSize: 46 },
      }}
    />
  );
};

export default MyRadio;
