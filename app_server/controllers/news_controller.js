// access local file system
const fs = require('fs');         // expensive
// read the JSON data file
const latest_news = JSON.parse(fs.readFileSync('./data/latest_news.json', 'utf8'));       // not best practice, expensive
const vacation_tips = JSON.parse(fs.readFileSync('./data/vacation_tips.json', 'utf8'));       // not best practice, expensive

const news = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - News';
    res.render('news', {title: pageTitle, latest_news, vacation_tips});
}

module.exports = {
    news
}