import type { JSX } from "@emotion/react/jsx-runtime";
import { Box, FormControl, RadioGroup, Typography } from "@mui/material";
import MyFormControlEmoji from "./MyFormControlEmoji";

type VoteRatingProps = {
  text: string;
  image: string;
  alt: string;
};

const VoteRating = ({ text, image, alt }: VoteRatingProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: "85%",
        height: "17%",
        backgroundColor: "#E8E8E8",
        borderRadius: "22px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#009688",
          width: "35%",
          borderRadius: "22px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          paddingInline: "10px",
        }}
      >
        <img src={image} alt={alt} style={{ width: "65px", height: "65px" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              width: "auto",
              height: "auto",
              fontSize: "14px",
              fontWeight: "bold",
              textWrap: "wrap",
              textAlign: "center",
            }}
          >
            {text}
          </Typography>
        </Box>
      </Box>
      <FormControl sx={{ width: "65%" }}>
        <RadioGroup
          row
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            height: "100%",
            gap: "5%",
            "& .MuiFormControlLabel-label": { fontSize: 20 },
          }}
          name="radio-buttons-group"
        >
          <MyFormControlEmoji value="01" label="" emoji="😢" />
          <MyFormControlEmoji value="02" label="" emoji="🙁" />
          <MyFormControlEmoji value="03" label="" emoji="😐" />
          <MyFormControlEmoji value="04" label="" emoji="🙂" />
          <MyFormControlEmoji value="05" label="" emoji="😄" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default VoteRating;
