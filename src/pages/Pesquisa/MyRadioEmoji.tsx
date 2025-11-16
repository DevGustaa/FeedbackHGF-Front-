import type { JSX } from "@emotion/react/jsx-runtime";
import { Radio, type RadioProps } from "@mui/material";

type MyRadioEmojiProps = RadioProps & {
  emoji: string;
};

const MyRadioEmoji = ({ emoji, ...props }: MyRadioEmojiProps): JSX.Element => {
  return (
    <Radio
      {...props}
      icon={
        <span
          role="img"
          aria-label="emoji"
          style={{
            fontSize: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {emoji}
        </span>
      }
      checkedIcon={
        <span
          role="img"
          aria-label="emoji"
          style={{
            fontSize: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {emoji}
        </span>
      }
      sx={{
        "& .MuiSvgIcon-root": { fontSize: 40 },
      }}
    ></Radio>
  );
};

export default MyRadioEmoji;
