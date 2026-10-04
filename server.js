require("dotenv").config();

const express = require("express");
const checkAge = require("./middleware");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/api/info", checkAge, (req, res) => {
    const name = req.query.name;
    const age = Number(req.query.age);

    res.json({
        name: name,
        age: age,
        message: "Được phép truy cập"
    });
});

app.get("/", (req, res) => {
    res.send("Server Express đang chạy!");
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});