#!/usr/bin/env node
const inquirer = require('inquirer');
const fs = require('fs');

const gitattributesContent = `
# gitattributes
package-lock.json merge=npm-merge-driver

*.png    text diff=exif
*.svg    text diff=exif
*.cs     text diff=csharp
*.html   text diff=html
*.java   text diff=java
*.json diff=jsondiff

*.dll    binary
*.snk    binary

*.build  text
*.csproj text
*.dtd    text
*.md     text
*.nuspec text
*.rng    text
*.rngc   text
*.sln    text
*.xml    text
*.xsd    text
*.xsl    text
*.yml    text
.gitattributes text

*.sh     eol=lf
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
