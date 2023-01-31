import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.get('/', (req, res) => {
  res.send('HELLO')
})


app.get('/api/courses', async (req, res) => {
  //fetch all courses in a db 
  const courses = await prisma.course.findMany()
  res.status(200)
  res.json(courses)
})

app.post('/api/course', async (req, res) => {
  const enterCourse = await prisma.course.create({
    data: {
      title: 'Learn Golang',
      desc: 'Build APIs with Gin',
      duration: 12.4,
      Instructor: {
        connect: {
          Id: 1,
        }
      }
    }
  })
  res.status(201) //means record created succesfully
  res.json(enterCourse)
})

export default app;
