import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import supertest from 'supertest';
import app from '../../../index'; 

const request = supertest(app);

let mongoServer: MongoMemoryServer;
let server: any;

let studentId: String;

export const studentData = {
  name: 'Anu Ouseph',
  email: 'anu.ouseph@gmail.com',
  phone: '9675445678',
  enrollNo: 'X345W987543',
  date: "2024-05-21T14:11:36.392Z",
}

beforeAll(async () => {
  jest.setTimeout(30000); 
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
  server = app.listen(process.env.PORT || 5000);
});

afterAll(async () => {
  await mongoose.disconnect();
  if (mongoServer) {
    await mongoServer.stop();
  }
  if (server) {
    server.close(); 
  }
});

describe('student', () => {

  describe('create new student', () => {

    it('should return new student', async () => {
      const res = await request.post('/').send(studentData);
      expect(res.status).toBe(200);
      expect(res.body.data).toEqual({
        _id: expect.any(String),
        name: 'Anu Ouseph',
        email: 'anu.ouseph@gmail.com',
        phone: '9675445678',
        enrollNo: 'X345W987543',
        date: "2024-05-21T14:11:36.392Z",
        __v: 0
      })
      studentId = res.body.data._id;
    })

    it('should return 400 for invalid request', async () => {
      const res = await request.post('/').send({
        name: '',
        email: 'inavlid email',
        phone: '8696723456'
      })
      expect(res.status).toBe(400);
      expect(res.body).toHaveProperty('name','BadRequestError')
    })
  })

  describe('get students', () =>{

    it('should return list of students', async () =>{
      const res = await request.get('/');
      expect(res.status).toBe(200);
      expect(res.body.data).toBeInstanceOf(Array);
      expect(res.body.data.length).toBeGreaterThan(0);
    })
  })

  describe('update student', () => {

    it('should return updated student data', async () => {
      const res = await request.put(`/${studentId}`).send({
        name: 'anchu ouseph',
      });
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('name','anchu ouseph')
    })

    it('should return 404 for updating non existent student', async () => {
      const res = await request.put('/60e3b5f65b4d4b001c7e0a3d').send({
        name: 'anu ouseph',
      })
      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty('name','NotFoundError')
    })
  })

  describe('delete student', () => {

    it('should delete student', async () => {
      const res = await request.delete(`/${studentId}`);
      expect(res.status).toBe(200);
    })

    it('should return 404 for deleting non existent student', async () => {
      const res = await request.delete('/60e3b5f65b4d4b001c7e0a3d');
      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty('name','NotFoundError')
    })
  })

})
