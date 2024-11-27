const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());



// Ruta para buscar personajes

app.get('/api/superhero/search/:name', async (req, res) => {
    const { name } = req.params;
    const API_KEY = process.env.SUPERHERO_API_KEY;

    try {
        const response = await axios.get(`https://www.superheroapi.com/api.php/${API_KEY}/search/${name}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el personaje', error: error.message });
    }
});

// Ruta para obtener un personaje por ID

app.get('/api/superhero/:id', async (req, res) => {
    const { id } = req.params;
    const API_KEY = process.env.SUPERHERO_API_KEY;

    try {
        const response = await axios.get(`https://www.superheroapi.com/api.php/${API_KEY}/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el personaje', error: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`corriendo en  http://localhost:${PORT}`);
    });
