import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { SocketContext } from "../../content/socket";

import { ChatGreetMsg, ChatInfoMsg, ChatMessage } from "../../../types/others";
import { verifyMemberData } from "../../apiServer/verify";
import { sweetErrorHandling, sweetFailureProvider } from "../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { RippleBadge } from "../../MaterialTheme/styled";
import { BorderColor } from "@mui/icons-material";

const NewMessage = (data: any) => {
  if (data.new_mesage.mb_id == verifyMemberData?._id) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            bgcolor: "#D0ECE8",
            p: "8px 10px",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "25px",
            borderTopRightRadius: "25px",
            mb: "10px",
          }}
        >
          {data.new_mesage.msg}
        </Box>
      </Box>
    );
  } else {
    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar alt={data.new_mesage.mb_nick} src={data.new_mesage.mb_image} />
        <Box
          sx={{
            bgcolor: "#e4e4e4",
            p: "8px 10px",
            borderTopLeftRadius: "25px",
            borderTopRightRadius: "25px",
            borderBottomRightRadius: "25px",
            mb: "10px",
          }}
        >
          {data.new_mesage.msg}
        </Box>
      </Box>
    );
  }
};

export function BlogChat() {
  // INITIALIZATION
  const [messagesList, setMessagesList] = useState([]);
  const socket = useContext(SocketContext);
  const [onlineUsers, setOnlineUsers] = useState<number>(0);
  const textInput: any = useRef(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    socket.connect();
    console.log("PRINTED");
    socket?.on("connect", function () {
      console.log("CLIENT: connected");
    });
    socket?.on("newMsg", (new_mesage: ChatMessage) => {
      console.log("CLIENT: new message");
      messagesList.push(
        //@ts-ignore
        <NewMessage new_mesage={new_mesage} key={messagesList.length} />
      );
      setMessagesList([...messagesList]);
    });

    socket?.on("greetMsg", (msg: ChatGreetMsg) => {
      console.log("CLIENT: greet message");
      messagesList.push(
        //@ts-ignore
        <Typography
          style={{
            textAlign: "center",
            fontSize: "large",
            fontFamily: "serif",
          }}
        >
          {msg.text}, dear {verifyMemberData?.mb_nick ?? "guest"}
        </Typography>
      );
      setMessagesList([...messagesList]);
    });

    socket?.on("infoMsg", (msg: ChatInfoMsg) => {
      console.log("CLIENT: info message");
      setOnlineUsers(msg.total);
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  /**HANDLER */
  const getInputMesageHandler = useCallback(
    (e: any) => {
      const text = e.target.value;
      setMessage(text);
    },
    [message]
  );

  const getKeyHandler = (e: any) => {
    try {
      if (e.key == "Enter") {
        assert.ok(message, Definer.input_err3);
        onClickHandler();
      }
    } catch (err: any) {
      sweetErrorHandling(err).then();
    }
  };

  const onClickHandler = () => {
    try {
      if (!verifyMemberData) {
        textInput.current.value = "";
        sweetFailureProvider("Please login first", true);
        return false;
      }
      textInput.current.value = "";
      assert.ok(message, Definer.input_err3);

      const mb_image_url =
        verifyMemberData?.mb_image ?? "/images/default_user.png";

      socket.emit("createMsg", {
        msg: message,
        mb_id: verifyMemberData?._id,
        mb_nick: verifyMemberData?.mb_nick,
        mb_image: mb_image_url,
      });
      setMessage("");
    } catch (err: any) {
      console.log("onClickhandler, Error", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Stack className="chat_frame" width="30%">
      <Stack>
        <Card
          sx={{
            maxWidth: "100%",
            MaxHeight: "580px",
            bgcolor: "#E3F2FD",
            padding: "20px 17px",
            borderRadius: "30px",
          }}
        >
          <CardContent sx={{}}>
            <Box>
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                style={{ textAlign: "center" }}
              >
                Chat
                <RippleBadge
                  style={{ margin: "-30px 0 0 20px" }}
                  badgeContent={onlineUsers}
                />
              </Typography>
            </Box>
            <Divider sx={{ bgcolor: "#E4E4E4" }} />
            <Box sx={{ mt: 6, overflowY: "visible" }}>
              {messagesList}
              <Divider sx={{ mt: 2, mb: 2 }} />
            </Box>
          </CardContent>
          <Box sx={{ display: "flex" }}>
            <input
              ref={textInput}
              type="text"
              name="message"
              style={{
                borderRadius: 30,
                width: "100%",
                padding: "12px 20px",
                margin: "8px 0",
                border: "none",
              }}
              placeholder="Type here"
              onKeyDown={getKeyHandler}
              onChange={getInputMesageHandler}
            />

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ borderRadius: "30px", p: 1.2 }}
              onClick={onClickHandler}
            ></Button>
          </Box>
        </Card>
      </Stack>
    </Stack>
  );
}
