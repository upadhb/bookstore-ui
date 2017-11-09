
# bookstore-ui
## Description
This repository contains the source code for a bookstore app.

## Before you begin

Perform the following steps:
1. Make sure you have the latest version of [Node.js][node] installed. This also contains **npm**, a package manager. 
If on Linux or Mac OS, we recommend using a tool like [NVM][nvm] (Linux) or [HomeBrew][brew] (macOS), which allows you to swap between installed versions of Node.
2. If using IntelliJ, ensure your JavaScript language version is set to ECMAScript 6.
3. Install the Angular CLI:
  ```bash
  npm install -g @angular/cli
  ```
4. Clone this repository.


### Install your dependencies

Run the following command in the same directory as the **package.json** file, to install all required dependencies for the project:
```bash
npm install
```

### (Optional) Alternative dependency managers

You can alternatively use [Yarn][yarn], which is a (super) fast package manager with some very nice features:
```bash
yarn install
```

If you choose to use yarn, set it as your default package manager for the Angular CLI:
```bash
ng set --global packageManager=yarn
```

It is highly-recommended to check-in the generated **yarn.lock** file.

## (Optional) Link the npm scripts to IntelliJ
Right-click the **package.json** file in IntelliJ and select *Show npm Scripts*. This allows you to easily run these with a double-click.

[node]: https://nodejs.org/en/download/
[brew]: https://brew.sh/
[nvm]: https://github.com/creationix/nvm#installation
[yarn]: https://yarnpkg.com/lang/en/docs/install/


## Building

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
Use `ng build -prod` flag for a production build.

## Deploying

Run `ng build -prod` to generate a production build, which will end up in a new `/dist` directory.

Run the following to generate a Docker image, including the static build files:
```bash
docker build -t bookstore-ui-image .
```

Run the generated Docker image, with port mapping to the host
```bash
docker run --name bookstore-ui -d -p 8080:80 bookstore-ui-image
```

Open http://localhost:8080/ on your browser.
