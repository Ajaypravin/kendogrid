import axios from "axios";
import { StateModel } from "../models/StateModel";


/**
 * @class StateService
 * @description Storehouse for all state related APIs
 */
class StateService {

    public static async getStates():Promise<StateModel[]>{
      const {data} = await axios.get("https://api.npoint.io/2c71ded6354de7428006");
      return data
    }
}

export default StateService