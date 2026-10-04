function checkAge(req, res, next) {
    const age = Number(req.query.age);

    if (age < 18) {
        return res.status(403).json({
            message: "Bạn phải đủ 18 tuổi"
        });
    }

    next();
}

module.exports = checkAge;