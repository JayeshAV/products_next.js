import Connectdb from "@/lib/mongodb"
import Product from "@/models/Product"


export  async function DELETE(req,{params}) {
  await Connectdb()
   
  const id=await params.slug

    console.log(id)

  const deleteproducts=await Product.findByIdAndDelete(id)
  
  return new Response(JSON.stringify(deleteproducts),{
    status:200,
    headers:{"Content-Type":"application/json"}
  })

}

