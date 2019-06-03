# Why

This application was built using [GatsbyJS](https://www.gatsbyjs.org/), a React based markdown static site generator.

Static site generators are great applications for any small scale based content driven system. In this case, a listing of plugins written for a popular software application in the scientific community. These generators shine when content needs to be updated with some frequency, but not enough to justify adding in the complexities of a traditional persistent data store.

Static site generation was selected as the approach because static sites require little overhead to host on the back end and you can find a number of Platforms as a Service (PAAS) companies offering full services for free when hosting a static site. Since generated static sites have the overhead costs of content rendering offloaded to the developer environment at build time, you can offload these calculations to a PASS free tier service and build a new version of the site by updating a JSON data store file within the repository.

# How

With the technical approach set, we looked at a number of static site generator frameworks as well as PAAS options and settled on GatsbyJS as our generator, GitHub as our git and deployment PAAS, and Netlify as our static site web host PAAS.

Plugin Content deployment follows the code workflow below:

* A JSON [file](data/plugins/PluginsList.js) is updated with the url and the owner of the plugin.
* On building of the static site, the GitHub v4 GraphQL based API is queried for corresponding plugin information as well as the plugin's `README.md` file.
* Using GatsbyJS, corresponding markdown and json files are generated for persistent storage within the repository. (Once a plugin is created during build, it will not overwrite these data files again from the GitHub v4 API build process. This means updating the README in a plugin repository will not see a corresponding update in this repository).

The workflow above can be implemented manually and make for easy plugin repository maintenance. This project also provides documentation on how to automate this process, so plugin submission can be accomplished without manual intervention by the repository maintainer.

# Set Up

* Github Setup
* Netlify Setup
* Workflow Image

# Netlify Setup

* Enable [Git Gateway](https://www.netlify.com/docs/git-gateway/)
* Adding ENV variables

# Commands:

* npm Commands
* deployment

# Plugin Front Matter
* Table of all fields and defaults/options

# Plugin Contributors & Managing Git Events

* Github App
* GraphQL query of collaborator Information

# Managing Permissions

* Github CODEOWNERS file
* plugin directories for md


# Project Future Direction
