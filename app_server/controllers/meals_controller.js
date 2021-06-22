// access local file system
const fs = require('fs');         // expensive
// read the JSON data file
const foods = JSON.parse(fs.readFileSync('./data/foods.json', 'utf8'));       // not best practice, expensive

const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', {title: pageTitle, foods});
}

module.exports = {
    meals
}