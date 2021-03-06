const express = require('express');
const app = express();
const routes = require('./routes/routes');
const cors = require('cors');
const programas = require('./routes/programas');
const denuncia = require('./routes/denuncia');

//importante para conexion del front con el back
//Uso de cors
app.use(cors({origin: '*'}));
// conectar con el link de su frontend app.use(cors({origin: '*'}))

// Ajustes
app.set('port',process.env.PORT || 3001);
app.set('json spaces',2);
require ('dotenv').config

// Middlewares
app.use(express.json());

// Routes//
app.get('/', (req,res)=>{
  res.send('Hola chicos - Esta es nuestra primera App con Express y MySql')
})

app.use('/api',routes);
app.use('/api/programas',programas);
app.use('/api/denuncias',denuncia);



// Ajustes del servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
}); 