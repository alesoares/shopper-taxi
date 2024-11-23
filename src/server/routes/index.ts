/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';

import { StatusCodes } from 'http-status-codes';


const router = Router();


router.get('/', (req, res) => {

  res.send('Olá DEV!!! { º__º }');

});


/**
 *  Responsável por listar as viagens realizadas
 *  por um determinado usuário
 */
router.get('/ride/{customer_id}?driver_id={id_motorista}', (_eq, res) => {

  res.send('Olá DEV!!! { º__º }');

});


/**
 * Responsável por receber a origem e o destino 
 * da viagem e realizar os cálculos dos valores da viagem.
 */
router.post('/ride/estimate', (req, res) => {

  res.send('Olá DEV!!! { º__º }');

});


/**
 * Responsável por confirmar a viagem e gravá-la no histórico.
 */
router.patch('/ride/confirm', (req, res) => {

  res.send('Olá DEV!!! { º__º }');

});


export { router };
