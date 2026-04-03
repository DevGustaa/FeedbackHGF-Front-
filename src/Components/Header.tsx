import type { JSX } from "@emotion/react/jsx-runtime";
import { Box, Typography } from "@mui/material";
import LogoHgf from "../Assets/Images/LogoHgf.png";

const Header = (): JSX.Element => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "15%",
        backgroundColor: "#009688",
        paddingInline: "20px",
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <Typography
        sx={{
          height: "auto",
          color: "white",
          fontSize: "40px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Pesquisa de Satisfação do Usuário
      </Typography>
      <Box
        sx={{
          width: "auto",
          height: "80%",
          backgroundColor: "white",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5px",
        }}
      >
        <img
          src={LogoHgf}
          alt="Logo do HGF"
          style={{
            height: "100%",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
