//Insert the data inside the course table


import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const main = async () => {
  //Queries
  //  insert into course table
  const course = await prisma.course.create({
    data: {
      title: 'Learning Prisma with Nodejs',
      desc: 'Learn how to use prisman ORM',
      duration: 2.5,
    }
  })
  console.log(course)
  const courses = await prisma.course.findMany()
  console.log(courses)

  //create a new Video
  const newVideo = await prisma.video.create({
    data: {
      title: 'Learning Relations',
      desc: 'One to Many relationships',
      url: 'youtube.com/slizher',
      courseId: 1
    }
  })
  console.log(newVideo)

  //Needs to be Worked on
  const videos = await prisma.video.findMany({
    include: {
      Course: {},
    }
  })
  console.log(videos)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

  //api/course GET
  //api/course POST
  //api/course PUT
  //api/course/id GET
  //api/course/id DELETE
