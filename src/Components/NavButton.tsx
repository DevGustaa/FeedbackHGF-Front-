import type { JSX } from "@emotion/react/jsx-runtime";
import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type NavButtonProps = {
  text: string;
  link?: string;
  onClick?: () => void | Promise<void>;
};

const NavButton = ({ text, link, onClick }: NavButtonProps): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    } else if (link) {
      navigate(link);
    }
  }, [link, navigate, onclick]);

  return (
    <Button
      onClick={handleClick}
      sx={{
        width: "300px",
        height: "60px",
        backgroundColor: "#009688",
        color: "white ",
        fontSize: "24px",
        fontWeight: "bold",
        borderRadius: "20px",
        textTransform: "none",
        marginBottom: "10px",
      }}
    >
      {text}
    </Button>
  );
};

export default NavButton;
