import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Checkbox from "@mui/material/Checkbox";

import * as React from "react";
import { useState } from "react";
import { verifyMemberData } from "../../apiServer/verify";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import MemberApiServer from "../../apiServer/memberApiServer";
import { MemberUpdateData } from "../../../types/user";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function MySetting() {
  /* INITIALIZATION */
  const [file, setFile] = useState(verifyMemberData?.mb_image);

  const [memberUpdate, setMemberUpdate] = useState<MemberUpdateData>({
    mb_nick: "",
    mb_phone: "",
    mb_address: "",
    mb_email: "",
    mb_description: "",
    mb_image: "",
  });

  /**HANDLERS */
  const changeMemberNickHandler = (e: any) => {
    memberUpdate.mb_nick = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberPhoneHandler = (e: any) => {
    memberUpdate.mb_phone = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberAddressHandler = (e: any) => {
    memberUpdate.mb_address = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberEmailAddressHandler = (e: any) => {
    memberUpdate.mb_email = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberDescriptionHandler = (e: any) => {
    memberUpdate.mb_description = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const handleImagePreviewer = (e: any) => {
    try {
      const file = e.target.files[0];

      const fileTypes = file["type"],
        validTypes = ["image/jpg", "image/jpeg", "image/png"];
      assert.ok(validTypes.includes(fileTypes) && file, Definer.input_err2);

      memberUpdate.mb_image = file;
      setMemberUpdate({ ...memberUpdate });
      setFile(URL.createObjectURL(file));
    } catch (err) {
      console.log(`ERROR ::: handleImagePreviewer ${err}`);
      sweetErrorHandling(err).then();
    }
  };
  const handleSubmitButton = async () => {
    try {
      const memberService = new MemberApiServer();
      const result = await memberService.updateMemberData(memberUpdate);

      assert.ok(result, Definer.general_err1);
      await sweetTopSmallSuccessAlert(
        "Information modified successfully!",
        700,
        false
      );
      window.location.reload();
    } catch (err) {
      console.log(`ERROR ::: handleSubmitButton ${err}`);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div>
      <Container>
        <Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h1" gutterBottom>
              My Setting
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            ></Box>
          </Stack>

          <Divider sx={{ mt: 1, mb: 3 }} />

          <Stack>
            <Card sx={{ maxWidth: 850, p: "40px", mb: 4 }}>
              <CardActionArea>
                <Stack flexDirection={"row"}>
                  <Box
                    sx={{
                      mr: "20px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      width="180px"
                      height="180"
                      src={file}
                      alt="Setting user"
                      style={{ objectFit: "cover" }}
                    />
                    <Button
                      component="label"
                      style={{ minWidth: "0" }}
                      onChange={handleImagePreviewer}
                    >
                      <CloudDownloadIcon />
                      <input type="file" hidden />
                    </Button>
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      color="secondary"
                      onChange={changeMemberNickHandler}
                    >
                      {verifyMemberData?.mb_nick}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                      }}
                      onChange={changeMemberAddressHandler}
                    >
                      <LocationOnIcon sx={{ color: "#ff5a3c" }} />
                      {verifyMemberData?.mb_address ??
                        "Member adress does not exist"}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                      }}
                      onChange={changeMemberPhoneHandler}
                    >
                      <LocalPhoneIcon sx={{ color: "#ff5a3c" }} />
                      {verifyMemberData?.mb_phone}
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      onChange={changeMemberEmailAddressHandler}
                    >
                      <MailOutlineIcon sx={{ color: "#ff5a3c" }} />
                      {verifyMemberData?.mb_email ?? "No email adress"}
                    </Box>
                  </CardContent>
                </Stack>
              </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 850, p: "40px" }}>
              <Stack flexDirection={"row"}>
                <CardContent sx={{ margin: 0, padding: 0 }}>
                  <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    color="#071c1f"
                    sx={{ borderLeft: "2px solid #ff5a3c", pl: 2, mb: 2 }}
                  >
                    More Information
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "38ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      required
                      id="user-name"
                      label="Enter your name"
                      placeholder={verifyMemberData?.mb_nick}
                      onChange={changeMemberNickHandler}
                    />
                    <TextField
                      required
                      id="user-email"
                      label="Enter your email"
                      placeholder={verifyMemberData?.mb_email}
                      onChange={changeMemberEmailAddressHandler}
                    />

                    <TextField
                      required
                      id="user-address"
                      label="Enter your address"
                      placeholder={verifyMemberData?.mb_address}
                      onChange={changeMemberAddressHandler}
                    />

                    <TextField
                      id="outlined-number"
                      label="Number"
                      placeholder={verifyMemberData?.mb_phone}
                      type="number"
                      onChange={changeMemberPhoneHandler}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "78ch", mb: 4 },
                    }}
                    noValidate
                    autoComplete="off"
                    onChange={changeMemberDescriptionHandler}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="Description"
                      placeholder={verifyMemberData?.mb_description}
                      multiline
                      rows={6}
                    />
                  </Box>
                  <Box sx={{ mb: 3, display: "flex", alignItems: "center" }}>
                    <Checkbox {...label} />
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </Box>
                  <Button
                    size="large"
                    variant="contained"
                    onClick={handleSubmitButton}
                  >
                    Confirm
                  </Button>
                </CardContent>
              </Stack>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
