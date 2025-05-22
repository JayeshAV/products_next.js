import Connectdb from "@/lib/mongodb"
import Product from "@/models/Product"
import { NextResponse } from "next/server"


export  async function GET(req) {
  await Connectdb()

  
  const searchParams=req.nextUrl.searchParams

   console.log("category url",searchParams)

   const category=searchParams.get('category')
   const order=searchParams.get('order')

   console.log("category",category)
   console.log("order",order)


   let filter={}
   if(category && category !== "all"){
    filter.category=category
   }

   let sort={}
   if(order === "asc"){ sort.price=1 }
   else if(order === "desc"){ sort.price=-1 }
   
    

  const products=await Product.find(filter).sort(sort)
  return new NextResponse(JSON.stringify(products),{status:200})

}

export default GET