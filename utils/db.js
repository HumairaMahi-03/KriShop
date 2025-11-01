import mongoose from "mongoose";

const connect = async () => {
    const uri = "mongodb+srv://humairamumtahinmahi_db_user:oTBvrnt9drb3ljyc@cluster0.spuzwbu.mongodb.net/KrishopDB?retryWrites=true&w=majority&appName=Cluster0"
    await mongoose.connect(uri)
}

export default connect
