import Connectdb from "@/lib/mongodb"
import Product from "@/models/Product"


export  async function GET(req) {
  await Connectdb()

  const products=await Product.find({})
  return new Response(JSON.stringify(products),{status:200})

}


export default GET