# gitattributes

## Overview

`.gitattributes` to configure your git repo

## Usage

```diff
# gitattributes
+ *.build  text
+ *.cs     text diff=csharp
+ *.csproj text
+ *.dll    binary
+ *.dtd    text
+ *.html   text diff=html
+ *.java   text diff=java
+ *.md     text
+ *.nuspec text
+ *.rng    text
+ *.rngc   text
+ *.sh     eol=lf
+ *.bash   eol=lf
+ *.zsh    eol=lf
+ *.shfbproj text
+ *.sln    text
+ *.snk    binary
+ *.xml    text
+ *.xsd    text
+ *.xsl    text
+ *.yml    text
.gitattributes text
KEY      text
LICENSE+ * text
# text files
+ *.docx diff=word
# date
date+ *.txt filter=dater
# merges
# // git config --global merge.ours.driver true
database.xml merge=ours
# merge driver custom
+ package-lock.json merge=npm-merge-driver
+ npm-shrinkwrap.json merge=npm-merge-driver
# image formats
+ *.png diff=exif
+ *.jpg diff=exif
+ *.svg diff=exif
# gpg related
+ *.gpg filter=gpg diff=gpg
+ *.asc filter=gpg diff=gpg
# git archive 
test/ export-ignore
# git encryption 
+ secrets.txt filter=git-crypt diff=git-crypt
# create new definitions for each file. You can also add patterns in the following way:
+ *.key filter=git-crypt diff=git-crypt
+ secretdir/+ * filter=git-crypt diff=git-crypt

```

## Examples

```bash
$ npx npm-merge-driver install
npx: installed 52 in 1.953s
npm-merge-driver: npm-merge-driver installed to `git config --local` and .git/info/attributes
workstation~ /Users/sbacha/sambacha-solidity-coverage master
$ cat .git/info/attributes
npm-shrinkwrap.json merge=npm-merge-driver
package-lock.json merge=npm-merge-driver
```

## LICENSE

SPDX-License-Identifier: ISC/Apache-2.0 
