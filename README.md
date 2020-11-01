# gitattributes

## Overview

`.gitattributes` to configure your git repo

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
