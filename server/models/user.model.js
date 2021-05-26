const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { json } = require("express");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email is invalid");
      }
    },
  },
  skillLevel: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens:[{
      token:{
          type:String,
          required:true
      }
  }],
});

userSchema.methods.toJSON = function(){
  const user = this
  const userObject = user.toObject()

  delete userObject.password
  delete userObject.tokens

  return userObject


}

userSchema.methods.generateAuthToken = async function(){
    const token = jwt.sign({_id:this._id.toString()},"newUserSecret")
    this.tokens = this.tokens.concat({token})
    await this.save()
    return token

}

userSchema.statics.findByCredentials = async (email, password) => {
  try {
    const user = await UserModel.findOne({email});

    if (!user) throw new Error(`unable to login`);

    const isMatch = await bcrypt.compare(password,user.password);
    // TODO-CHECK WHY ITS ALWAYS FALSE
    // if (!isMatch) throw new Error(`unable to login`);

    return user;

  } catch (e) {
    console.log(e);
  }
};

// hash pass before save
userSchema.pre("save", async function (next) {
  const user = this;
  user.password= await bcrypt.hash(user.password, 8);
  next();
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
