import { useCallback, useRef, useState } from "react";
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
import BlogApiServer from "../../apiServer/blogApiServer";
import { serverApi } from "../../lib/config";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import { BoBlogInput } from "../../../types/boBlog";
import { useHistory } from "react-router-dom";

export const TuiEditor = (props: any) => {
  /* INITIALIZATION */
  const history = useHistory();
  const [blogArticleData, setBlogArticleData] = useState<BoBlogInput>({
    blog_content: "",
    blog_subject: "",
    blog_image: "",
    bo_id: "",
  });

  /**HANDLERS */
  const uploadImage = async (image: any) => {
    try {
      const blogService = new BlogApiServer();
      const image_name = await blogService.uploadImageToServer(image);

      blogArticleData.blog_image = image_name;
      setBlogArticleData({ ...blogArticleData });

      const source = `${serverApi}/${image_name}`;
      return source;
    } catch (err) {
      console.log("ERROR ::: uploadImage", err);
    }
  };

  const changeCategoryHandler = (e: any) => {
    blogArticleData.bo_id = e.target.value;
    setBlogArticleData({ ...blogArticleData });
  };

  const changeTitleHandler = useCallback(
    (e: any) => {
      blogArticleData.blog_subject = e.target.value;
      setBlogArticleData({ ...blogArticleData });
    },
    [blogArticleData.blog_subject]
  );

  const handleRegisterButton = async () => {
    try {
      const editor: any = editorRef.current;
      const blog_content = editor?.getInstance().getHTML();

      blogArticleData.blog_content = blog_content;
      assert.ok(
        blogArticleData.blog_content !== "" &&
          blogArticleData.bo_id !== "" &&
          blogArticleData.blog_subject !== "",
        Definer.input_err1
      );

      const blogService = new BlogApiServer();
      await blogService.createBlog(blogArticleData);
      await sweetTopSmallSuccessAlert("Article is created successfully");
      props.setBlogsRebuild(new Date());
      props.setValue("1");
    } catch (err) {
      console.log(`ERROR ::: handleRegisterButton ${err}`);
      sweetErrorHandling(err).then();
    }
  };

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
              value={blogArticleData.bo_id}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={changeCategoryHandler}
            >
              <MenuItem value="">
                <span>Choose Category</span>
              </MenuItem>
              <MenuItem value={"Real Estate"}>Real Estate</MenuItem>
              <MenuItem value={"Business"}>Business</MenuItem>
              <MenuItem value={"Decorate"}>Decorate</MenuItem>
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
            onChange={changeTitleHandler}
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
            const uploadImageURL = await uploadImage(image);
            console.log("uploadImageURL", uploadImageURL);
            callback(uploadImageURL);
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
          onClick={handleRegisterButton}
        >
          Publish
        </Button>
      </Stack>
    </Stack>
  );
};
