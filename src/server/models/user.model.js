import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
	email: String,
	name: String,
	password: String,
	image: String,
	role: String,
	isLoggedIn: Boolean,
	addresses:[{
		name: String,
		mobileNo: String,
		pincode: String,
		street: String,	
		city: String,
		state: String,
		houseNo: String,
		area: String,
		landmark: String,
	}],
	favourites:[{
		productKey : String
		// combination of title and date added by seller
	}],
	cart:[{
		Key: String,
		dateAdded: Date,
		deliveryDate: Date,
	}],
	orderHIstory:[{
		Key: String,
		dateAdded: Date,
		dateDelivered: Date,
	}],
});

export default mongoose.model("users", UserSchema);
