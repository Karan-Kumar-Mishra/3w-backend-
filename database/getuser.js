import Usermodel from "./Usermodel.js";
async function getuser(value) {
    try {
        return await Usermodel.findOne({name:value});
      } catch (error) {
        return error;
      }
}
export default getuser;