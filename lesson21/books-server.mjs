import express from 'express'
import { fileURLToPath } from 'url';
import path from 'path';
import { apiRouter, siteRouter } from './module-resolver.mjs'


const app = express()


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// Web API endpoints
app.use('/api', apiRouter)
app.use('/site', siteRouter)


 
const PORT = 1904
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))



