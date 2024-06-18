import User from "../model/User";

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    // 404 - error mesage
    return res.status(404).json({ message: "No users found " }); //promises that
    //   agar user nhi mile toh yeh throw kar do
  }
  // success msg - 200
  return res.status(200).json({ message: "Connection Successful !" });
};
