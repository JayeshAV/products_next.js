import Connectdb from "@/lib/mongodb"
import Product from "@/models/Product"

export async function POST(req){

    await Connectdb()
    const data=await req.json()

    if(!data || !data.price){
      return new Response("Name ad Price are required !",{status:400})
    }

    const product=new Product({
      name:data.name,
      price:data.price,
      description:data.description || "",
      category:data.category,
      image:data.image || ""
    })

    await product.save()

    return new Response(JSON.stringify(product),{status:201})

}


