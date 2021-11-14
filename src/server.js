const app = require("./index")

const connect = require("./configs/db")

app.listen(process.env.PORT || 3000, async function(){
  await connect();
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
