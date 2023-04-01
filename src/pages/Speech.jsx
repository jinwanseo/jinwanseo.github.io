import { Cached, Mic } from "@mui/icons-material";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { blueGrey, green, teal } from "@mui/material/colors";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import * as gptAPI from "../app/api/gpt";

function SpeechComponent() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [answer, setAnswer] = useState();

  const methods = useForm({
    mode: "onChange",
  });

  const { handleSubmit } = methods;

  const handlers = {
    onSpeechStart: () => {
      setAnswer(null);
      SpeechRecognition.startListening({
        continuous: true,
        language: "ko",
      });
    },
    onSpeechEnd: async () => {
      // 중지
      SpeechRecognition.stopListening();

      // 업로드
      const { data, status } = await gptAPI.uploadSpeech({
        question: "안녕하세요",
      });

      resetTranscript();
      if (status < 300) {
        setAnswer(data.answer);
      }

      // 리셋
      resetTranscript();
    },
  };

  if (!browserSupportsSpeechRecognition) {
    return <>지원하지 않는 브라우저!</>;
  }
  return (
    <Stack spacing={1}>
      <Typography
        variant="suttitle1"
        color={teal[900]}
        fontSize={20}
        fontWeight={700}
      >
        내손안의 GPT
      </Typography>
      <Stack direction="row" spacing={1}>
        <Typography>{transcript}</Typography>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <IconButton
          size="large"
          color={listening ? green["A200"] : blueGrey[400]}
          sx={{
            border: `2px solid ${listening ? green["A200"] : blueGrey[400]}`,
            ":hover": {
              scale: 1.1,
            },
          }}
          onClick={listening ? handlers.onSpeechEnd : handlers.onSpeechStart}
        >
          <Mic fontSize="large" />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Typography>{answer}</Typography>
      </Stack>
    </Stack>
  );
}

export default SpeechComponent;
