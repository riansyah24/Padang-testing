import { NextRequest, NextResponse } from "next/server"
import { data } from "./Padang.js"

export const GET = (req) => {
  return NextResponse.json({data:data(),message:"Hehe"},{status:200})
}