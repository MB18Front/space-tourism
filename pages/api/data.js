// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// "use server";
// import {NextResponse} from "next/server";

// const GET = async () => {
//   return NextResponse.json({
//     m: "m" 
//   })
// }

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}