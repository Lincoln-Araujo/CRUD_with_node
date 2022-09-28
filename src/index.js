import express, { json } from 'express';
import { url } from 'inspector';

const server = express();

server.use(json());

const notes = [];

function  addNote () { 
    document.addEventListener('DOMContentLoaded', function() {
        let div = document.createElement('div');
        div.id = 'note-' + notes.length.toString;
        div.innerHTML = '';
        div.className = 'note';
    
        document.notes.appendChild(div);
    }, false);
}

// getting a product
server.get('/notes/:index', (req, res) => {
    const { index } = req.params;
    
    return res.json(notes[index]);
});

// getting all notes
server.get('/notes', (req, res) => {
    return res.json(notes);
});

// creating a new product
server.post('/notes', (req, res) => {
    const { name } = req.body;
    notes.push(name);

    return res.json(notes);
});

// updating a product
server.put('/notes/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    notes[index] = name;

    return res.json(notes);
});

// deleting a product
server.delete('/notes/:index', (req, res) => {
    const { index } = req.params;

    notes.splice(index, 1);
    return res.json({ message: 'item removed'});
})

server.listen(3000);