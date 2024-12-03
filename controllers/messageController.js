import { User } from "../models/messageModels.js";

export const messageController = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.send("Please Fill Full Form");
  }
  // try {
  await User.create({
    name,
    email,
    message,
  });
  res.status(200).json({
    success: true,
    message: "Message Sent",
    // user,
  });
  // } catch (err) {
  //   res.status(400).json({
  //     success: false,
  //     message: "Please fill full form",
  //     err,
  //   });
};
// };
