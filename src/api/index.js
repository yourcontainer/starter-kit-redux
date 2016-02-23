import express from 'express'

const router = express.Router()

const tpl = require('../../tpl.json')

router.get('/', (req, res) => res.send('[ API UP ]'))

router.get('/tpl', (req, res) => {
  res.status(200).send(tpl)
})

export default router
