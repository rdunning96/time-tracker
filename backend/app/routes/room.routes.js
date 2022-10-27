//room routes
const { authJwt } = require("../middleware");
const controller = require("../controllers/room.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/rooms", [authJwt.verifyToken], controller.getRooms);
  app.post("/api/rooms", [authJwt.verifyToken], controller.createRoom);
  app.delete(
    "/api/rooms/:roomId",
    [authJwt.verifyToken],
    controller.deleteRoom
  );
};
