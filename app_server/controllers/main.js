const index = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Home';
    res.render('index', {title: pageTitle});
}

module.exports = {
    index
}