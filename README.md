# real-estate-project
A simple, single page implementation for showing real estate information with Vue.js.

## Commands
* `npm install` - Installs required packages for the project to run.
* `npm run serve` - Compiles and hot-reloads for development.
* `npm run build` - Compiles and minifies for production.
* `npm run lint` - Lints and fixes files.
* `npm run serve:production` - Runs a tiny serve to test your production version locally. Only run this after you have ran the build step.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Instructions
### Getting set up
1. `cp .env .env.local` - Create a local overwrite for the env file.
2. Open up `.env.local` and add whatever URL you like for fetching listing info.
3. `npm install`

## Getting started
1. `npm run serve`
2. Follow the instructions on the terminal for how to access the site locally or through the local network.

### Test deployment
1. `npm run build` - Build a production version of the app
2. `npm run serve:production` - Use a tiny server to test your production version locally.
3. Follow the instructions on the terminal for how to access the site locally or through the local network.

## Possible improvements
* More thorough accessibility support, such as adding better descriptions on alt image tags.
* More precise lazy loading of images with wider browser support. This could also involve lazy loading a couple images at a time that are just out of sight.
* Connecting light and dark mode to fall back on operating system setting and provide localstorage overwrite.
* Integrate [swiper](https://www.npmjs.com/package/swiper) to make an info card carousel for mobile users.
* Provide buttons to collapse longer listing description, or photo gallery.
* Remove all font awesome icons that are not being used.
* Create a seperate page for displaying a listing photo gallery to reduce the number of images loaded on desktop.
* Add some information on who to contact or any steps that a user could take when they find a listing they like.
* Integrate something like JSDoc.
* Move all hard coded text into JSON files to allow for internationalization.
* Provide sensible defaults or loading icons while the network request is being made to get listing information.
