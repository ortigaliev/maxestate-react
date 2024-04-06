import axios from "axios";
import { serverApi } from "../lib/config";
import assert from "assert";
import { Definer } from "../lib/Definer";
import { BoBlog, SearchBlogsObj } from "../../types/boBlog";

class BlogApiServer {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
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
}
export default BlogApiServer;
