// const routes = require('../server')
// const express = require('express')
// const { CONFIG } = require('./config/config')
// const connect = require('./db/connect')

// const app = express()
// // const { seedTracks, seedPlaylist, seedGenres, seedUsers } = require('./db/seed')

// connect().then(async function onServerInit() {
//   CONFIG.development.logger.info(`DB connected`)
//   // await seedTracks();
//   // await seedPlaylist();
//   // await seedGenres();
//   // await seedUsers();
// })

// app.use('/api', routes)

// // port
// app.listen(CONFIG.development.app.PORT, () => {
//   CONFIG.development.logger.info(
//     `Server running at ${CONFIG.development.app.PORT}`
//   )
// })
