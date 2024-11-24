import mongoose from "mongoose";

export let connectDB = () => {

    mongoose.connect('mongodb://localhost:27017/pptestbook').then(() => {
        console.log('DB connected')
    }).catch(e => console.log(e))

}
