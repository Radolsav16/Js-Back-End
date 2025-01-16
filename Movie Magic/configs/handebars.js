import exphbs from "express-handlebars";

export default function hbsConfig(app) {
  const handlebars = exphbs.create({ extname: ".hbs" });

  app.engine(".hbs", handlebars.engine);

  app.set("view engine", ".hbs");
  app.set("views", "./src/views");
}
