import axios from "axios";
import { serverApi } from "../lib/config";
import assert from "assert";
import { Definer } from "../lib/Definer";
import {
  BoBlog,
  BoBlogInput,
  SearchBlogsObj,
  SearchMemberBlogsObj,
} from "../../types/boBlog";

class BlogApiServer {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async uploadImageToServer(image: any) {
    try {
      let formData = new FormData();
      formData.append("blog_image", image);

      console.log(image);
      const result = await axios(`${this.path}/blog/image`, {
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state", result.data.state);

      const image_name: string = result.data.data;
      return image_name;
    } catch (err: any) {
      console.log(`ERROR ::: uploadImageToServer ${err.message}`);
      throw err;
    }
  }
  public async createBlog(data: BoBlogInput) {
    try {
      const result = await axios.post(this.path + "/blog/create", data, {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state", result.data.state);

      const blog: BoBlog = result.data.data;
      return blog;
    } catch (err: any) {
      console.log(`ERROR ::: createBlog ${err.message}`);
      throw err;
    }
  }

  public async getTargetBlogs(data: SearchBlogsObj) {
    try {
      let url = `/blog/target?bo_id=${data.bo_id}&page=${data.page}&limit=${data.limit}`;
      if (data.order) url += `&order=${data.order}`;

      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state", result.data.state);

      const blogs: BoBlog[] = result.data.data;
      return blogs;
    } catch (err: any) {
      console.log(`ERROR ::: getTargetBlogs ${err.message}`);
      throw err;
    }
  }

  public async getMemberCommunityBlogs(data: SearchMemberBlogsObj) {
    try {
      let url = `/blog/articles?mb_id=${data.mb_id}&page=${data.page}&limit=${data.limit}`;

      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state", result.data.state);

      const blogs: BoBlog[] = result.data.data;
      return blogs;
    } catch (err: any) {
      console.log(`ERROR ::: getMemberCommunityBlogs ${err.message}`);
      throw err;
    }
  }

  public async getChosenBlog(bo_id: string) {
    try {
      let url = `/blog/single-blog/${bo_id}`;

      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state", result.data.state);

      const blog: BoBlog = result.data.data;
      return blog;
    } catch (err: any) {
      console.log(`ERROR ::: getChosenBlog ${err.message}`);
      throw err;
    }
  }
}
export default BlogApiServer;
