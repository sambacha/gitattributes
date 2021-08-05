#!/usr/bin/env node
/** 
* @file giattributes cli
* @version 1.2.1
* @param init `.gitattributes` config 
*/

const inquirer = require('inquirer');
const fs = require('fs-extra');

const gitattributesContent = `
# gitattributes
package-lock.json merge=npm-merge-driver
*.sh     eol=lf
*.png    text diff=exif
*.svg    text diff=exif
*.html   text diff=html
*.java   text diff=java
*.json diff=jsondiff

*.md     text
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
    /** @note eventually change to async  */
    fs.writeFileSync(`${cwd}/.gitattributes`, gitattributesContent);
    console.log('.gitattributes successfully created');
  } else {
    console.log(`.gitattributes creation failed choose 'y' to create it`);
  }
})();
/** @exports gitattributes */
