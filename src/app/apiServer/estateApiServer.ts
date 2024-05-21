import axios from "axios";
import assert from "assert";

import { Definer } from "../lib/Definer";
import { serverApi as serverApi } from "../lib/config";
import { EstateSearchObj } from "../../types/others";
import { Estate } from "../../types/estate";

class EstateApiServer {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  async getTargetEstates(data: EstateSearchObj) {
    console.log('*****************************************************')
    try {
      const url = "/estate",
        result = await axios.post(this.path + url, data, {
          withCredentials: true,
        });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:", result.data.state);

      const estates: Estate[] = result.data.data;
      return estates;
    } catch (err: any) {
      console.log(`ERROR ::: getTargetEstates ${err.message}`);
      throw err;
    }
  }

  async getChosenEstate(estate_id: string) {
    try {
      const url = `/estate/${estate_id}`,
        result = await axios.get(this.path + url, {
          withCredentials: true,
        });

      assert.ok(result?.data, Definer.general_err1);
      /* assert.ok(result?.data?.state != "fail", result?.data?.message); */
      console.log("state:", result.data.state);

      const estate: Estate = result.data.data;
      return estate;
    } catch (err: any) {
      console.log(`ERROR ::: getChosenEstate ${err.message}`);
      throw err;
    }
  }
}

export default EstateApiServer;
