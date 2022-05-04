import express from "express";
import morgan from "morgan";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 8011;

app.set("view engine", "pug");
app.set("views", process.cwd() + "/server/views");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static("dist"));

const fakeDB = () => {
    const dataFile = fs.readFileSync(
        process.cwd() + "/server/data/fake.json",
        "utf-8"
    );
    const dataJson = JSON.parse(dataFile);
    const innerData = dataJson.serviceData;
    const range = innerData.length + 1;
    const target = Math.floor(Math.random() * range);
    innerData.splice(target, 10);
    const editedData = {
        serviceData: innerData,
    };
    return editedData;
};

const apiController = async (req, res) => {
    res.json(fakeDB());
};

app.post("/post", apiController);
app.get("/get", apiController);

app.get("/", async (req, res) => res.render("index"));

const listen = () => {
    app.listen(
        PORT,
        console.log(
            `\n\n\n===============================\nServer Listening on: http://localhost:${PORT}`
        )
    );
};

console.log("server will be start in 3000ms..");
setTimeout(listen, 3000);
