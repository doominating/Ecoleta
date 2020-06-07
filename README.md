# Ecoleta (NodeJS, ReactJS & React-Native)

Desafio da Next Level Week #NLW1 da Rocketseat

- [Ecoleta (NodeJS, ReactJS & React-Native)](#ecoleta-nodejs-reactjs--react-native)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Roadmap](#roadmap)
  - [License](#license)

## Usage

On the web app, recyclable collection points can register their locations and useful information, allowing people to find it at the mobile app.

## Technologies

This app features all the latest tools and practices in javascript/typescript stack!

- ⚛️ **React JS** — A JavaScript library for building user interfaces - [site](https://reactjs.org/)
- ⚛️ **React Native** — A lib that provides a way to create native apps for Android and iOS - [site](https://facebook.github.io/react-native/)
- 💹 **Node JS** — A web framework for Node Js - [site](https://nodejs.org/)
- 📄 **TypeScript** — TypeScript is a typed superset of JavaScript that compiles to plain JavaScript - [site](https://www.typescriptlang.org/)
- 📄 **SQLite** — SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine - [site](https://www.sqlite.org/)
- **Express** - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications - [site](https://expressjs.com/pt-br/)

## Installation

Clone the project with the following command:

```sh
git clone https://github.com/doominating/Ecoleta.git
```

Then, get in the project dir and install the dependencies for each enviroment (backend, frontend and mobile):

```sh
cd Ecoleta/backend
npm install

cd Ecoleta/frontend
npm install

cd Ecoleta/mobile
npm install
```

Finally, you can start the applications (backend/frontend/mobile) with:

```sh
npm start
```

If you are in development environment, you can use the development server for backend (that runs nodemon for watches files modification and automatic re-start server):

```sh
npm dev
```

## Roadmap

- (**DONE**) Creates backend project;
- (**DONE**) Creates frontend project;
- (**DONE**) Creates mobile project;
- (**IN PROGRESS**) Implements advanced features;
- (**IN PROGRESS**) Add point address @frontend/mobile;
- (**IN PROGRESS**) Add point infos @frontend/mobile;
- Adds a success/fail modal on creates new point @frontend;
- Add multer fileFilter for image size and type @frontend;
- Dynamically loads UF/City to filter points in home page @mobile;
- Add "Or use my location" feature to select dynamically points in near region @mobile;
- Refactoring upload images serializations @backend;
- Refactoring to improve the code readability;

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
