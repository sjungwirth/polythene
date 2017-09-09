const fs            = require("fs");
const path          = require("path");

const atImport      = require("postcss-import");
const cssnano       = require("cssnano");
const cssnext       = require("postcss-cssnext")({browsers: ["> 1%", "last 2 versions", "IE 11"]});
const cssvariables  = require("postcss-css-variables");
const mqpacker      = require("css-mqpacker");
const nested        = require("postcss-nested");
const postcss       = require("postcss");
const mixins        = require("postcss-mixins");

const pkg           = JSON.parse(fs.readFileSync("./package.json"));
const name          = path.basename(pkg.name);
const inputCssPath  = "./src/css/index.css";
const outPath       = `./dist/${name}.css`;
const outPathMap    = `./dist/${name}.css.map`;

const saveToFile = (path, cssString) => 
  fs.writeFile(path, cssString, "ascii", err => {  
    // throws an error, you could also catch it here
    if (err) throw err;
  });

const cssString = fs.readFileSync(inputCssPath, "utf8");

const processors = [
  mixins,
  // Flatten/unnest rules
  nested,
  // Then process any CSS variables
  cssvariables(/*options*/),
  cssnext,
  mqpacker,
  cssnano
];

postcss(processors)
  .use(atImport({
    root: "./src/css/"
  }))
  .process(cssString, {
    to:  `${name}.css`,
    map: { inline: false }
  })
  .then(result => {
    saveToFile(outPath, result.css);
    saveToFile(outPathMap, result.map);
  });
