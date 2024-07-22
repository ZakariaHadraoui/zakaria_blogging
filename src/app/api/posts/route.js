import { getAuthSession } from "../../../utils/auth";
import prisma from "../../../utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
    ...(cat && { catSlug: cat } ),
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  };






  
  
  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany({
        where: query.where 
        
      }),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    // console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};



// CREATE A POST


// CREATE A POST
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const post = await prisma.Post.create({
      data: { 
        title:body.title,
        slug:body.slug,
        desc:body.desc,
        catSlug:body.catSlug,
        img:body.img,
        userEmail: session.user.email,
       
        
       


         
        },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

