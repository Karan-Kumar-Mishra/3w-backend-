import Usermodel from "./Usermodel.js";
async function getUsers() {
    try {
        return await Usermodel.find();
      } catch (error) {
        return error;
      }

}
export default getUsers;