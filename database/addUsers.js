import Usermodel from "./Usermodel.js";
import getuser from "./getuser.js";
async function addUsers(user) {
    let res = await getuser(user.usr.name)
        if(res==null)
        {
            const newUser = new Usermodel({
                name: user.usr.name,
                social_media: user.social,
                //   images_url: user.urls
            })
            await newUser.save()
        }
        else
        {
            await Usermodel.updateOne({ name: user.usr.name }, { $push: { images_url: user.urls } })
        }

}
export default addUsers;