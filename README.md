<h1 align="center">
  <br>
  <a href="https://gd.adibarra.com/"><img src="https://raw.githubusercontent.com/GDProject/gd-website/master/public/favicon.svg" alt="Logo" width="200"></a>
  <br>
  The GDProject
  <br>
</h1>

<h4 align="center">A blazing fast web app to analyze grade distributions for courses taught anywhere.</h4>

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/github/license/GDProject/gd-website" alt="license">
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/issues/GDProject/gd-website" alt="issues">
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/issues-pr/GDProject/gd-website" alt="pull requests">
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/last-commit/GDProject/gd-website" alt="last commit">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#request-data">Request Data</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://raw.githubusercontent.com/GDProject/gd-website/master/public/screenshot.png)

<p align="center">The goal of this project to help analyze the massive amounts of course data and statistics released every semester by many universities.</p>
<p align="center">In order to do this, our goal is to create a web app that will allow users to easily search for courses and view statistics about them.</p>
<p align="center">As part of this project, we will create a REST API that will allow other developers to use our data in their own projects.</p>
</p>

---

## Key Features
- Blazing fast loading times
- Fully responsive design, mobile and desktop
- Sleek, intuitive, and non-cramped UI/UX
- Flexible and powerful analysis tools

## Roadmap
- [x] <s>Migrate to Vue.js</s>
- [ ] <s>Add i18n support</s>
- [ ] Migrate to TypeScript
- [ ] Interface redesign is fully completed
- [ ] Create a REST API
- [ ] Migrate to REST API
- [ ] Backend redesign is fully completed
- [ ] Polling (and auto DB rebuild) for new data
- [ ] Generate share link that allows users to share their search results

## Request Data
Don't see your university?

If you would like to see your university's data on this website, please see [here](https://github.com/GDProject/gd-parser#request-data).

## How To Use
1. Run [gd-parser](https://github.com/GDProject/gd-parser) to build database
2. Rename example_gd_config.js to gd_config.js
3. Modify the values in gd_config.js to suit your environment
4. Then run the following pnpm commands:
    ```bash
    # if you don't have pnpm installed
    $ npm install -g pnpm

    # install dependencies
    $ pnpm install

    # build the app
    $ pnpm build

    # serve from /dist
    $ pnpm serve

    # --- OR ---

    # if developing then install then
    $ pnpm dev
    ```

## Contributing
1. Fork the repo
2. Create new branch, `feat-<feature-name>` or `fix-<bug-name>`
3. Make some changes
4. Create pull request
5. Wait for review
6. Merge
7. Celebrate
8. Repeat

## Credits
- [Vitesse](https://github.com/antfu/vitesse) for the fantastic Vue.js base configuration template

## License
MIT
