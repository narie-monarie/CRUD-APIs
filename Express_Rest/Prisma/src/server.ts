import express from 'express'
import { PrismaClient } from '@prisma/client'
import { body } from 'express-validator'

const app = express()
const prisma = new PrismaClient()

//middleware
// app.use((req, res, next) => {
//   console.log(`${req.url} ${new Date().toDateString()}`)
//   next()
// })
//
app.use(express.json())

app.get('/', (req, res) => {
  res.send('HELLO')
})


app.get('/api/courses', async (req, res) => {
  //fetch all courses in a db 
  const courses = await prisma.course.findMany()
  res.status(200)
  res.json(courses)
})

app.post('/api/course',
  body('title').isString().notEmpty(),
  async (req, res) => {

    //create new Instructor
    // const instructor = await prisma.instructor.create({
    //   data: {
    //     name: 'John Ondiek',
    //     zip: '00208',
    //     city: 'Chutiya',
    //     country: 'India',
    //     email: 'johnondiek2@gmail.com',
    //   }
    // })
    //Validate the Parameters (check for errors)

    //create new course
    const enterCourse = await prisma.course.create({
      data: {
        title: req.body.title,
        desc: req.body.desc,
        duration: req.body.duration,
        instructorId: req.body.instructorId,
      }
    })
    //res.status(201) //means record created succesfully
    res.status(201).json(enterCourse)
  })

export default app;
