import express from 'express'
import { fileURLToPath } from 'url';
import path from 'path';
import { apiRouter, siteRouter } from './module-resolver.mjs'
import hbs from 'hbs'



const app = express()


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const viewsPath = path.join(__dirname, 'views')

// view engine setup
app.set('views', viewsPath);
app.set('view engine', 'hbs');  

// 
//hbs.registerPartials(partialsDir)

app.use(express.json())
app.use(express.urlencoded())

// Web API endpoints
app.use('/api', apiRouter)
app.use('/site', siteRouter)


 
const PORT = 1904
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))



