import { NextRequest, NextResponse } from "next/server"
import { data } from "../Padang.js"

export const GET = async(req) => {
  let url = req.url.split("/").reverse()
  let id = url[0]
  let datas = data()[id-1]
  if(datas == undefined) {
    return NextResponse.json({message:"Data gagal didapatkan"},{status:404})
  }
  else {
    return NextResponse.json({data:datas,message:"Data berhasil didapatkan"},{status:200})
  }
}