import mongoose from "mongoose";
import crypto from "crypto";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  email: {
    type: String,
    required: "email is required",
  },
  name: {
    type: String,
    required: "name is required",
  },
  hashed_password: {
    type: String,
    required: "password is required",
  },
  image: String,
  role: {
    type: String,
    required: "role is required",
  },
  isLoggedIn: Boolean,
  addresses: [
    {
      name: String,
      mobileNo: String,
      pincode: String,
      street: String,
      city: String,
      state: String,
      houseNo: String,
      area: String,
      landmark: String,
    },
  ],
  favourites: [
    {
      productKey: String,
      // combination of title and date added by seller
    },
  ],
  cart: [
    {
      Key: String,
      dateAdded: Date,
      deliveryDate: Date,
    },
  ],
  orderHIstory: [
    {
      Key: String,
      dateAdded: Date,
      dateDelivered: Date,
    },
  ],
});

UserSchema.virtual("password").set(function(input){
  this._password = input;
  this.salt = this.makeSalt();
  this.hashed_password = this.encryptPassword(input);
}).get(function(){
  return this._password;
});

UserSchema.virtual('salt');

UserSchema.methods = {
  makeSalt: function(){
    return Math.round(new Date().valueOf() * Math.random()) + '';
  },
  encryptPassword: function(password){
    if(!password) return "";
    try{
      return crypto.createHmac('sha1', this.salt).update(password).digest("hex");
    }
    catch(err){
      return "";
    }
  }
}

export default mongoose.model("Users", UserSchema);
