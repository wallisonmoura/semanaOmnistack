const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const {
  validLogIn,
  validOngCreate,
  validOngProfile,
  validIncidentsListPage,
  validIncidentsCreate,
  validIncidentsDelete
} = require("./utils/routeValidations");

const router = express.Router();

router.post("/session", validLogIn(), SessionController.create);

router.get("/ongs", OngController.read);
router.post("/ongs", validOngCreate(), OngController.create);

router.get("/profile", validOngProfile(), ProfileController.read);

router.get("/incidents", validIncidentsListPage(), IncidentController.read);

router.post("/incidents", validIncidentsCreate(), IncidentController.create);

router.delete(
  "/incidents/:id",
  validIncidentsDelete(),
  IncidentController.delete
);

module.exports = router;
