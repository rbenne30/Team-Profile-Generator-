// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(answers => {
      console.log("generatingReadme")
      writeToFile("index.html",generateMarkdown({...content}))
  })
}
