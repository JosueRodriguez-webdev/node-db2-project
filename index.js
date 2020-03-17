const server = require("./api/server");

const PORT = 5001;
server.listen(PORT, () => {
  console.log(`Server is running in localhost:${PORT}`);
});
