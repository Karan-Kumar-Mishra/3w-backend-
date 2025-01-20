import Usermodel from "./Usermodel.js";
import getuser from "./getuser.js"; // this seems unused, consider removing if not needed

async function addUsers(user) {
  let res = await Usermodel.findOne({ name: user.usr.name });

  if (res == null) {
    // User does not exist, create a new one
    const newUser = new Usermodel({
      name: user.usr.name,
      social_media: user.social,
      images_url: user.urls,
    });
    // Save and return the new user document
    return await newUser.save();
  } else {
    // User exists, update images_url
    return await Usermodel.updateOne(
      { name: user.usr.name },
      { $push: { images_url: user.urls } }
    );
  }
}

export default addUsers;
