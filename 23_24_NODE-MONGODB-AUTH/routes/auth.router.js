const express = require('express');
const router = express.Router();

const controller = require("../controllers/auth.controllers");

router.post('/register', controller.register);
router.post('/login', controller.login);

// Exportar el router
module.exports = router;
