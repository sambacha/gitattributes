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
*.bash   eol=lf
*.zsh    eol=lf
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

# text files
*.docx diff=word

# date
date*.txt filter=dater

# merges
# // git config --global merge.ours.driver true
database.xml merge=ours

# merge driver custom
package-lock.json merge=npm-merge-driver
npm-shrinkwrap.json merge=npm-merge-driver

# image formats
*.png diff=exif
*.jpg diff=exif
*.svg diff=exif

# gpg related
*.gpg filter=gpg diff=gpg
*.asc filter=gpg diff=gpg

# git archive 
test/ export-ignore

# git encryption 

secrets.txt filter=git-crypt diff=git-crypt
# create new definitions for each file. You can also add patterns in the following way:

*.key filter=git-crypt diff=git-crypt
secretdir/** filter=git-crypt diff=git-crypt

# Prevent /bin/sh scripts from being clobbered by autocrlf=true
git_ssh text eol=lf
repo text eol=lf
hooks/* text eol=lf

# Git LFS

## 3D Files

*.cs diff=csharp text
*.cginc text
*.shader text

*.mat merge=unityyamlmerge eol=lf
*.anim merge=unityyamlmerge eol=lf
*.unity merge=unityyamlmerge eol=lf
*.prefab merge=unityyamlmerge eol=lf
*.physicsMaterial2D merge=unityyamlmerge eol=lf
*.physicMaterial merge=unityyamlmerge eol=lf
*.asset merge=unityyamlmerge eol=lf
*.meta merge=unityyamlmerge eol=lf
*.controller merge=unityyamlmerge eol=lf


## git-lfs ##

#Image
*.jpg filter=lfs diff=lfs merge=lfs -text
*.jpeg filter=lfs diff=lfs merge=lfs -text
*.png filter=lfs diff=lfs merge=lfs -text
*.gif filter=lfs diff=lfs merge=lfs -text
*.psd filter=lfs diff=lfs merge=lfs -text
*.ai filter=lfs diff=lfs merge=lfs -text

#Audio
*.mp3 filter=lfs diff=lfs merge=lfs -text
*.wav filter=lfs diff=lfs merge=lfs -text
*.ogg filter=lfs diff=lfs merge=lfs -text

#Video
*.mp4 filter=lfs diff=lfs merge=lfs -text
*.mov filter=lfs diff=lfs merge=lfs -text

#3D Object
*.FBX filter=lfs diff=lfs merge=lfs -text
*.fbx filter=lfs diff=lfs merge=lfs -text
*.blend filter=lfs diff=lfs merge=lfs -text
*.obj filter=lfs diff=lfs merge=lfs -text

#ETC
*.a filter=lfs diff=lfs merge=lfs -text
*.exr filter=lfs diff=lfs merge=lfs -text
*.tga filter=lfs diff=lfs merge=lfs -text
*.pdf filter=lfs diff=lfs merge=lfs -text
*.zip filter=lfs diff=lfs merge=lfs -text
*.dll filter=lfs diff=lfs merge=lfs -text
*.unitypackage filter=lfs diff=lfs merge=lfs -text
*.aif filter=lfs diff=lfs merge=lfs -text
*.ttf filter=lfs diff=lfs merge=lfs -text
*.rns filter=lfs diff=lfs merge=lfs -text
*.reason filter=lfs diff=lfs merge=lfs -text
*.lxo filter=lfs diff=lfs merge=lfs -text

`;

module.exports = gitattributesContent;
