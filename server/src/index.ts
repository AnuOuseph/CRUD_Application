import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'

import DbConnect from './config/Database'
import StudentRoutes from './modules/student/routes/StudentRoute'
import ErrorHandler from './middlewares/ErrorMiddleware'

config()

const app = express()

// Middlewares
app.use(cors({
    origin: 'https://crud-application-henna.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
})); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing Middlewares
app.use('/', StudentRoutes)

// ErrorHandling Middleware
app.use(ErrorHandler);

// Export the app for testing
export default app;

// Separate logic for starting server
if (require.main === module) {
    const Server = async () => {
        try {
            await DbConnect(process.env.MONGO_URI!);
            const port = process.env.PORT || 5000;
            app.listen(port, () => {
                console.log(`Server connected on port ${port}`);
            });
        } catch (error) {
            console.log(error);
        }
    };
    Server();
}

