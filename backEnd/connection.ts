import mongoose from "mongoose"

export  async function connection (url: string) {
    return await mongoose.connect(url, {dbName: "CourseSelling"})
}

