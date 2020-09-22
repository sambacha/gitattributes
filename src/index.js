#!/usr/bin/env node
const inquirer = require('inquirer');
const fs = require('fs');

const gitattributesContent = `
# gitattributes
*.build  text
*.cs     text diff=csharp
*.csproj text
*.dll    binary
*.dtd    text
*.html   text diff=html
*.java   text diff=java
*.md     text
*.nuspec text
*.rng    text
*.rngc   text
*.sh     eol=lf
*.shfbproj text
*.sln    text
*.snk    binary
*.xml    text
*.xsd    text
*.xsl    text
*.yml    text
.gitattributes text
KEY      text
LICENSE* text
`;

(async () => {
  const { option } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'option',
      message: 'Get the .gitattributes file',
      default: false,
    },
  ]);
  if (option) {
    const cwd = process.cwd();
    fs.writeFileSync(`${cwd}/.gitattributes`, gitattributesContent);
    console.log('.gitattributes successfully created');
  } else {
    console.log(`.gitattributes creation failed choose 'y' to create it`);
  }
})();
