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
*.png diff=exif
*.gpg filter=gpg diff=gpg
*.asc filter=gpg diff=gpg
`;

module.exports = gitattributesContent;
