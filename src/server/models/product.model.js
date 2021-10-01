import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: "Name is required"
    },
    seller:{
        type: String,
        required: "seller is required"
    },
    image:{
        type: String,
        required: "image is required"
    },
    rating: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: "price cannot be empty"
    },
    onSale: {
        type: Boolean,
        default: false
    },
    isFavourite: {
        type: Boolean,
        default: false
    },
    tags: [String]
})

export default mongoose.model("product", ProductSchema);