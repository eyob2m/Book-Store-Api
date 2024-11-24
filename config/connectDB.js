import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
export let connectDB = () => {

    // eslint-disable-next-line no-undef
    mongoose.connect(process.env.MONGOURL).then(() => {
        console.log('DB connected')
    }).catch(e => console.log(e))

}
