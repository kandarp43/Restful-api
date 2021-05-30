const express = require('express')
const router = express.Router()
//import model
const Post = require('../models/Post')

router.get('/', async (req, res) => {
  try {
    const post = await Post.find()
    res.json(post)
  } catch (err) {
    res.json({ message: err })
  }
})
router.post('/add', async (req, res) => {
  const { title, description } = req.body
  const post = new Post({
    title,
    description,
  })
  try {
    const savedPost = await post.save()
    res.json(savedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
  } catch (err) {
    res.json({ message: err })
  }
})

router.delete('/:postId', async (req, res) => {
  try {
    const remove = await Post.remove({ _id: req.params.postId })
    res.json(remove)
  } catch (err) {
    res.json({ message: err })
  }
})

router.patch('/:postId', async (req, res) => {
  try {
    const postUpdate = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title} }
    )
    res.json(postUpdate)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
