import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  profile_pic: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.models.Users || mongoose.model("Users", userSchema);


