# expo v49 and expo-router v2 monorepo reproduction

This reproduces an issue with expo v49 and expo-router v2 inside an monorepo with Yarn v1 workspaces.

## Steps to reproduce

1. Clone this repo
1. Run `yarn` to install dependencies
1. `cd packages/mobile`
1. Run `npx expo start --go --ios` to start the expo dev server
1. Observe `Unable to resolve "expo-router" from "../../node_modules/expo-head/build/ExpoHead.ios.js"`

## Versions

```
$ uname -a
Darwin macbook.local 22.6.0 Darwin Kernel Version 22.6.0: Wed Jul  5 22:21:53 PDT 2023; root:xnu-8796.141.3~6/RELEASE_ARM64_T6020 arm64
$ node --version
v18.16.0
$ yarn --version
1.19.0
$ npx expo --version
0.10.13
```
