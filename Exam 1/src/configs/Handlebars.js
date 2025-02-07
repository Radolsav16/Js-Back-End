import handlebars from "express-handlebars";

function handlebarsConfig(app) {
  app.engine(
    "hbs",
    handlebars.engine({
      extname: "hbs",
      encoding: "utf-8",
    })
  );

  app.set("view engine", "hbs");
  app.set("views", "./src/views");
}

export default handlebarsConfig;
