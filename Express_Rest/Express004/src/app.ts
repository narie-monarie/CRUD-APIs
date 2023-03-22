import express from 'express'
import prisma from '../prisma/client'

const app = express()
const port: number = 3001
app.use(express.json())

app.get('/', async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  })
  res.json(posts)
})

app.post('/user', async (req, res) => {
  const { name, email } = req.body
  const user = await prisma.user.create({
    data: {
      name,
      email,
    }
  })
  res.status(201).json(user)
})

app.post('/post', async (req, res) => {
  const { title, content, authorEmail } = req.body
  const post = await prisma.post.create({
    data: {
      title,
      content,
      published: false,
      author: { connect: { email: authorEmail } },
    },
  })
  res.status(201).json(post)
})

app.put('/publish/:id', async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.update({
    where: id,
    data: { published: true },
  })
  res.json(post)
})

app.delete('/user/:id', async (req, res) => {
  const user = await prisma.user.delete({
    where: {
      id: req.body,
    },
  })
  res.json(user)
})

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})
