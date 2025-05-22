import Connectdb from "@/lib/mongodb";
import Product from "@/models/Product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = params;

  if (!slug) {
    return new NextResponse(JSON.stringify({ error: "Product id Not found" }), {
      status: 404,
    });
  }

  await Connectdb();

  if (!mongoose.Types.ObjectId.isValid(slug)) {
    return new NextResponse(JSON.stringify({ error: "Invalid product ID" }), {
      status: 400,
    });
  }

  const product = await Product.findById(slug);

  if (!product) {
    return new NextResponse(JSON.stringify({ error: "Product not found" }), {
      status: 404,
    });
  }

  return new  NextResponse(JSON.stringify(product), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
