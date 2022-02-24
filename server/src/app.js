import express from 'express';
import tasksRoutes from './routes/tasks.js';
import cors from 'cors';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from './swaggerOptions.js';

const specs = swaggerJSDoc(options)

const app = express();

app.use(express.json());

app.use(cors()); /* sirve para poder conectar cualquier backend con mi app*/

app.use(morgan("dev"));/*permite ver por consola las solicitudes que se hacen al backend */

app.use(tasksRoutes);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;