import { client } from './index.js';

export async function createCamera(data) {
    return await client.db('B33WD').collection('camera').insertOne(data);
}

export async function getAllCamera() {
    return await client.db('B33WD').collection('camera').find({}).toArray();
}

export async function getCameraById(id) {
    return await client.db('B33WD').collection('camera').findOne({ id: id });
}

export async function updateCamera(id, data) {
    return await client.db('B33WD').collection('camera').updateOne({ id: id }, { $set: data });
}

export async function deleteCamera(id) {
    return await client.db('B33WD').collection('camera').deleteOne({ id: id });
}
