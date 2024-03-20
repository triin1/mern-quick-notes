const Note = require("../../models/note");

async function index(req, res) {
    try {
        const notes = await Note.find({user: req.user._id});
        res.json(notes);
    } catch (err) {
        res.status(400).json(err);
    };  
};

async function create(req, res) {
    try {
        const note = await Note.create({
            text: req.body.text,
            user: req.user._id
        });
        res.json(note)
    } catch (err) {
        res.status(400).json(err);
    }
};  

module.exports = {
    index,
    create
};