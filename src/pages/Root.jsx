import { Cached } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Root() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <>지원하지 않는 브라우저!</>;
  }
  return (
    <Stack spacing={1}>
      <Typography>내손안의 GPT</Typography>
      <Typography>{listening ? "ON" : "OFF"}</Typography>
      <Stack direction={"row"} spacing={1}>
        <Button
          variant="outlined"
          size="small"
          onClick={() =>
            SpeechRecognition.startListening({
              continuous: true,
              language: "ko",
            })
          }
        >
          시작
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => SpeechRecognition.stopListening()}
        >
          종료
        </Button>
        <IconButton size="small" color="warning" onClick={resetTranscript}>
          <Cached fontSize={"small"} />
        </IconButton>
      </Stack>
      <Box>{transcript}</Box>
    </Stack>
  );
}

export default Root;
