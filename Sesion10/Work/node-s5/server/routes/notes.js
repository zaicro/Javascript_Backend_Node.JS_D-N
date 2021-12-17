const express = require('express');
const router = express.Router();
const sequelize = require('sequelize');

router.get('/', async(req, res) => {
    const notes = await sequelize.models.Notes.findAll();
    return res.json(notes);
})
router.post('/', async(req, res) => {
    const { body } = req;
    const Note = await sequelize.models.Notes.create({
        heading: body.heading,
        content: body.content
    });
    Note.save();
    return res.json({ message: 'Created successfully', data: Note });
})
router.put('/:id', async(req, res) => {
    const { body, params: { id } } = req;
    const Note = await sequelize.models.Notes.findOne({ id });
    if (!Note) {
        return res.status(404).json({ message: 'Note not found' });
    }
    const NoteUpdate = await Note.update({
        heading: body.heading,
        content: body.content
    });
    return res.json({ message: 'Updated successfully', data: NoteUpdate });
})
router.delete('/:id', async(req, res) => {
    const { params: { id } } = req;
    const Note = await sequelize.models.Notes.findOne({ id });
    if (!Note) {
        return res.status(404).json({ message: 'Note not found' });
    }
    const NoteDestroy = await Note.destroy();
    return res.json({ message: 'Deleted successfully' });
})