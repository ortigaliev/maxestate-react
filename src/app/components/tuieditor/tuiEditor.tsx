import { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Stack,
  Typography,
  Select,
  TextField,
} from "@mui/material";

export const TuiEditor = (props: any) => {
  const editorRef = useRef();
  return (
    <Stack>
      <Stack
        direction={"row"}
        style={{}}
        justifyContent={"flex-start"}
        mb={2}
        gap={2}
      >
        <Box className={"form_row"} style={{ width: "300px" }}>
          <Typography style={{ color: "#ff5a3c", margin: "10px" }} variant="h3">
            Article Category
          </Typography>
          <FormControl sx={{ width: "100%", background: "white" }}>
            <Select
              value={"celebrity"}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <span>Choose Category</span>
              </MenuItem>
              <MenuItem value={"celebrity"}>celebrities</MenuItem>
              <MenuItem value={"evaluation"}>Agency rating</MenuItem>
              <MenuItem value={"story"}>Story</MenuItem>
              <MenuItem value={"story"}>Expert advice</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="form_row" style={{ width: "300px" }}>
          <Typography style={{ color: "#ff5a3c", margin: "10px" }} variant="h3">
            Blog Title
          </Typography>
          <TextField
            id="filled-basic"
            label="Title"
            variant="outlined"
            style={{ width: "300px" }}
          />
        </Box>
      </Stack>
      {/* @ts-ignore */}
      <Editor
        ref={editorRef}
        placeholder="Type here"
        previewStyle="vertical"
        height="auto"
        initialEditType="WYSIWYG"
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["image", "table", "link"],
          ["ul", "ol", "task"],
        ]}
        hooks={{
          addImageBlobHook: async (image: any, callback: any) => {
            return false;
          },
        }}
        events={{
          load: function (param: any) {},
        }}
      />
      <Stack direction={"row"} justifyContent={"cenetr"}>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "30px", width: "250px", height: "45px" }}
        >
          Publish
        </Button>
      </Stack>
    </Stack>
  );
};
