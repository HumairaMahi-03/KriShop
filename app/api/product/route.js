
import connect from "@/utils/db"
import { NextResponse } from "next/server";
import Product from "@/Model/Product";


export const GET  = async () => {
    await connect();
    console.log("Connected to database");
    const data = await Product.find()
    return NextResponse.json(data, {status: 200} )

}
