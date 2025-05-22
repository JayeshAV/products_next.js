import Connectdb from "@/lib/mongodb"
import Product from "@/models/Product"
import { NextResponse } from "next/server"

export async function POST(req){

    await Connectdb()
    const data=await req.json()

    if(!data || !data.price){
      return new NextResponse("Name ad Price are required !",{status:400})
    }

    const product=new Product({
      name:data.name,
      price:data.price,
      description:data.description || "",
      category:data.category,
      image:data.image || ""
    })

    await product.save()

    return new NextResponse(JSON.stringify(product),{status:201})

}


