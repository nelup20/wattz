const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      path = require("path"),
      cors = require("cors"),
      helmet = require("helmet");

const PORT = process.env.PORT || 8080;

app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", `${__dirname}/src/views`)
app.use(express.static(path.join(__dirname, "src/views/assets")));
app.use(cors({credentials: true, origin: true}));

const {indexRoutes, aboutRoutes, careerRoutes, productsRoutes, newsRoutes,
       faqRoutes, ticketRoutes, emailRoutes, newsletterRoutes, searchRoutes} = require("./src/routes");

app.use("/", indexRoutes);
app.use("/about", aboutRoutes);
app.use("/career", careerRoutes);
app.use("/products", productsRoutes);
app.use("/news", newsRoutes);
app.use("/faq", faqRoutes);
app.use("/ticket", ticketRoutes);
app.use("/email", emailRoutes);
app.use("/newsletter", newsletterRoutes);
app.use("/search", searchRoutes);

app.use((req, res) => {
  res.status(404);
  res.render("404");
});

app.listen(PORT, () => console.log(`Server started on Port ${PORT}: http://localhost:${PORT}/`));
