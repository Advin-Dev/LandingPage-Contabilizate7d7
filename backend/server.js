const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const validator = require('validator');
const winston = require('winston');
require('dotenv').config(); // Carga de variables de entorno

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de logger con Winston
const logger = winston.createLogger({
  level: 'error',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.Console({ level: 'info' }) // También se imprime en consola
  ],
});

// Configuración de transporte de correo
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: true,
  },
});

// Endpoint para enviar el correo
app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message || !validator.isEmail(email)) {
    return res.status(400).send("Datos inválidos.");
  }

  const mailOptions = {
    from: "noreply@contablilizateen7de7.com",
    to: "rogeliocontreras0305@gmail.com",
    replyTo: email,
    subject: `Nuevo mensaje de ${name}`,
    text: `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("El mensaje ha sido enviado con éxito. ¡Gracias por tu contacto!");
  } catch (error) {
    // Registrar error usando Winston
    logger.error(`Error al enviar el correo: ${error.message}`, { timestamp: new Date().toISOString() });

    // Respuesta genérica al cliente
    res.status(500).send("Hubo un problema al enviar el correo. Por favor, intenta de nuevo más tarde.");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
