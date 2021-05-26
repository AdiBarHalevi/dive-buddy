const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
      },
    lastName:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is invalid")
            }
        }
    },
    skillLevel:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

userSchema.statics.findByCredentials = async(email,password)=>{
    try{
        const user = await userModel.findOne({email})
    
        if(!user) throw new Error(`unable to login`)
    
        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch) throw new Error(`unable to login`)

        return user
    

    }catch(e){console.log(e)}


}

// hash pass before save
userSchema.pre("save",async function(next){
    this[`password` ]= await bcrypt.hash(this.password,8)
    next()
})

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };
