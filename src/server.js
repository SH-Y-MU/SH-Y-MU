// const express = require('express')
// const { json } = require('body-parser')
// const helmet = require('helmet')
// const morgan = require('morgan')
// const cors = require('cors')
// const { config } = require('./src/config')

// const {
//   UserRouter,
//   TrackRouter,
//   GenreRouter,
//   MeRouter,
//   PlaylistRouter,
//   SearchRouter,
// } = require('./src/routes')
// const { errorMiddleware } = require('./src/middleware')

// const app = express()

// app.use(morgan('dev'))
// app.use(helmet())
// app.use(
//   json({
//     limit: '50mb',
//   })
// )
// app.use(express.urlencoded({ limit: '10mb', extended: true }))

// app.use(
//   cors({
//     origin: config.development.client.URL,
//   })
// )

// app.use(errorMiddleware)

// app.use('/user', UserRouter)
// app.use('/tracks', TrackRouter)
// app.use('/genre', GenreRouter)
// app.use('/me', MeRouter)
// app.use('/playlist', PlaylistRouter)
// app.use('/search', SearchRouter)

// module.exports = app
