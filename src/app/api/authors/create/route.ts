import { PrismaClient } from "@prisma/client";
import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export const GET = async () => {
  const allUsers = await prisma.author.findMany()
  console.log(allUsers)
}


/*export const POST = async (request: NextRequest) => {
  try {
    
    //const proxyResponse = await axios.post(proxyServerApiUrl, data);
    //const responseMessage = proxyResponse.data.choices[0].message;
    //const response = NextResponse.json(responseMessage, { status: 200 });

    //return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error?.response?.data.message
        ? error.response.data.message
        : "Unknown error. Please try again later"
      return NextResponse.json(
        { message: errorMessage },
        { status: 500 },
      );
    }
    console.error(error);
    return error;
  }
};
*/
