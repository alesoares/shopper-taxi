import express from 'express';


const server = express();


server.get('/', (req, res) => {

    res.send('Olá DEV!!! { º__º }');

});


export { server };
