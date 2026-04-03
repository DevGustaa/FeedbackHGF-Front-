import type { JSX } from "@emotion/react/jsx-runtime";
import { Radio, type RadioProps } from "@mui/material";

type MyRadioEmojiProps = RadioProps & {
  emoji: string;
};

const MyRadioEmoji = ({ emoji, ...props }: MyRadioEmojiProps): JSX.Element => {
  const emojiStyle = {
    width: "45px",
    height: "45px",
    fontSize: 28,
    lineHeight: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box" as const,
  };

  return (
    <Radio
      {...props}
      disableRipple
      icon={
        <span role="img" aria-label="emoji" style={emojiStyle}>
          {emoji}
        </span>
      }
      checkedIcon={
        <span
          role="img"
          aria-label="emoji"
          style={{
            ...emojiStyle,
            border: "3px solid #00776bff",
            borderRadius: "50%",
          }}
        >
          {emoji}
        </span>
      }
      sx={{
        padding: 0,
        margin: 0,
        "& .MuiSvgIcon-root": { fontSize: 40 },
      }}
    />
  );
};

export default MyRadioEmoji;
