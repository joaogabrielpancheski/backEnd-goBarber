<div align="center">
  <img alt="GoBarber" src="https://ik.imagekit.io/joaogabrielpancheski/goBarberLogo_ma3Dr5ey9.png" />

  <br />
  <br />

  <img alt="Top language" src="https://img.shields.io/github/languages/top/joaogabrielpancheski/backEnd-goBarber.svg">

  <img alt="Language count" src="https://img.shields.io/github/languages/count/joaogabrielpancheski/backEnd-goBarber.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/joaogabrielpancheski/backEnd-goBarber.svg">

  <a href="https://github.com/joaogabrielpancheski/backEnd-goBarber/commits/master">
    <img alt="Last commit" src="https://img.shields.io/github/last-commit/joaogabrielpancheski/backEnd-goBarber.svg">
  </a>

  <a href="https://github.com/joaogabrielpancheski/backEnd-goBarber/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/joaogabrielpancheski/backEnd-goBarber.svg">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/joaogabrielpancheski/backEnd-goBarber">
</div>

## :clipboard: About

A barber scheduling application that allows users to schedule an appointment with a barber, and the barber to manage their appointment schedule. This project was developed at the [RocketSeat GoStack Bootcamp](https://rocketseat.com.br/gostack).

## :wrench: Tools

The following tools were used in this project:

- [NodeJS](https://nodejs.org)
- [Yarn](https://yarnpkg.com/)
- [Bcrypt.js](https://yarnpkg.com/package/bcryptjs)
- [CSV Parse](https://yarnpkg.com/package/csv-parse)
- [Date-fns](https://yarnpkg.com/package/date-fns)
- [Dotenv](https://yarnpkg.com/package/dot-env)
- [ESLint](https://yarnpkg.com/package/eslint)
- [Express](https://yarnpkg.com/package/express)
- [Jest](https://yarnpkg.com/package/jest)
- [JWT](https://yarnpkg.com/package/jsonwebtoken)
- [Multer](https://yarnpkg.com/package/multer)
- [Prettier](https://yarnpkg.com/package/prettier)
- [Redis](https://yarnpkg.com/package/redis)
- [TypeORM](https://yarnpkg.com/package/typeorm)
- [UUIDV4](https://yarnpkg.com/package/uuidv4)
- [VS Code](https://code.visualstudio.com/) with [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- And other packages....

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v12.16](https://nodejs.org) or higher and [Yarn v1.22](https://yarnpkg.com/) or higher installed on your computer. <br />
You'll also need to setup and run a Postgres, a Redis and a MongoDB database, and insert the necessary information in the .env file, based on the .env.example file, and the username and password on ormconfig.json file. <br />
On your command line:

```bash
# Clone this repository
$ git clone https://github.com/joaogabrielpancheski/backEnd-goBarber.git
# or
$ git clone git@github.com:joaogabrielpancheski/backEnd-goBarber.git

# Go into the repository
$ cd backEnd-goBarber

# Install dependencies
$ yarn install

# Run migrations to your database
$ yarn typeorm migration:run

# Run the server
$ yarn dev:server
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/joaogabrielpancheski/backEnd-goBarber/blob/master/LICENSE) for more information.

---

Developed by João Gabriel Pancheski 👨🏻‍💻 [Find me here](https://www.linkedin.com/in/joaogabrielpancheski/)
