import express from 'express';
import { createCamera, getAllCamera, getCameraById, updateCamera, deleteCamera } from './helper.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const data = req.body;
    console.log(data);
    const result = await createCamera(data);
    res.send(result);
})

router.get('/', async (req, res) => {
    const camera = await getAllCamera();
    res.send(camera);
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const camera = await getCameraById(id);
    camera ? res.send(camera) : res.status(404).send('camera not found');
})

router.put('/:id', async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    console.log(data);
    const result = await updateCamera(id, data);
    console.log(result);
    res.send(result);
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const camera = await deleteCamera(id);
    camera.deletedCount > 0 ? res.send(camera) : res.status(404).send('camera not found');
})


export const cameraRouter = router;