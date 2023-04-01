import { Cached } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function SpeechComponent() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const methods = useForm({
    mode: "onChange",
  });

  const { handleSubmit } = methods;

  const handlers = {
    onSpeechStart: () => {
      SpeechRecognition.startListening({
        continuous: true,
        language: "ko",
      });
    },
    onSpeechEnd: () => {
      SpeechRecognition.stopListening();
    },
  };

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
          onClick={handlers.onSpeechStart}
        >
          시작
        </Button>
        <Button variant="outlined" size="small" onClick={handlers.onSpeechEnd}>
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

export default SpeechComponent;
