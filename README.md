> **Warning**: **This project is early in development. It is neither fully functional nor ready for use.**

<h1 align="center">
  <a href="https://gd.adibarra.com/">
    <img src="./packages/client/public/favicon.svg" alt="Logo" height="128">
  </a>
  <br>
  The GDProject
</h1>

<h3 align="center"><strong>A blazing fast web app for grade distribution analysis.</strong></h3>


<p align="center">
  <a href="#">
    <img src="https://img.shields.io/github/license/GDProject/gd-website" alt="license">
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/issues/GDProject/gd-website" alt="issues">
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/issues-pr-closed/GDProject/gd-website?color=g" alt="pull requests">
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/last-commit/GDProject/gd-website" alt="last commit">
  </a>
  <br />
  <a href="#about">About</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#usage">Usage</a> •
  <a href="#license">License</a>
</p>

<!-- ![screenshot](./.github/screenshot.png) -->

## About

The GDProject is a web app that allows users to search for courses and view statistics about them. The goal of this project is to provide a better way to analyze grade distributions. Currently, for most universities, the only way to do this is to manually search through massive reports or spreadsheets.

The project can be seen in action at [here](https://gd.adibarra.com/).

## Getting Started

If you want to run the project locally, follow the instructions below.

### Prerequisites

This project uses [pnpm](https://pnpm.io/) as its package manager. It is optional, but highly recommended. If you don't have it installed, you can install it with the following command:

```bash
# this will install pnpm globally
$ npm install -g pnpm
```

### Installation
```bash
# clone the repo
$ git clone https://github.com/GDProject/gd-project

# install dependencies
$ pnpm install
```

## Usage
```bash
# to build the app for production
$ pnpm build

# ----- OR -----

# to start the dev environment
$ pnpm dev
```

## License

This project is licensed under the **MIT license**.

See [LICENSE](./LICENSE) for more information.
