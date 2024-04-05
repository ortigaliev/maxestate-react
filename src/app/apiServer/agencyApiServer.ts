import { Definer } from "../lib/Definer";
import { serverApi } from "../lib/config";
import { Agency } from "../../types/user";
import { SearchObj } from "../../types/others";
import axios from "axios";
import assert from "assert";

class AgencyApiServer {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }
  async getAgencies(data: SearchObj) {
    try {
      const url = `/agencies?order=${data.order}&page=${data.page}&limit=${data.limit}`,
        result = await axios.get(this.path + url, { withCredentials: true });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const agency: Agency[] = result.data.data;
      return agency;
    } catch (err: any) {
      console.log(`ERROR ::: getAgencies ${err.message}`);
      throw err;
    }
  }
}
export default AgencyApiServer;
