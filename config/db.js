// here we write logic, using that we can connect with the database

import mongoose  from "mongoose";

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://ambarishdandekar:8830699474@cluster0.uiuipzs.mongodb.net/cuisine-courier').then(()=> console.log("DB Connected"));

}  