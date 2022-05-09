import { prisma } from './prisma';
import express from 'express'

const app = express();
app.use(express.json())

app.post('/feedbacks', (req, res) => {
  const { type, comment, screenshot } = req.body

  prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  })
})

app.listen(3333, () => {
  console.log('HTTP server reunning on port 3333!')
});
