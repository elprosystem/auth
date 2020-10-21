"use strict";

require("./controllers/UserController");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use('/', (req, res) => {
  return res.json({
    menssage: 'Hello Word!'
  });
});
app.listen(3000, () => console.log("Server...."));