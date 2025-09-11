const { NextResponse } = require("next/server")

const connect = async () => {
    const uri = "mongodb+srv://humairamumtahinmahi_db_user:oTBvrnt9drb3ljyc@cluster0.spuzwbu.mongodb.net/KrishopDB?retryWrites=true&w=majority&appName=Cluster0"
    try {
        await mongoose.connect(uri)

    }
    catch (error) {
        return NextResponse.json({ message: "Database connection failed" , error: (error)},  { status: 500 })
    }
}

export default connect
