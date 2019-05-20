---
title: netlify-cms
date: 
slug: netlify-cms
category: other
url: https://github.com/netlify/netlify-cms
tags:
description: A CMS for Static Site Generators
---
# Netlify CMS
[![Gitter Chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/netlify/netlifycms)

A CMS for static site generators. Give users a simple way to edit
and add content to any site built with a static site generator.

## How It Works

Netlify CMS is a single-page app that you pull into the `/admin` part of your site.

It presents a clean UI for editing content stored in a Git repository.

You setup a YAML config to describe the content model of your site, and typically
tweak the main layout of the CMS a bit to fit your own site.

When a user navigates to `/admin/` they'll be prompted to log in, and once authenticated
they'll be able to create new content or edit existing content.

Read more about Netlify CMS [Core Concepts](https://www.netlifycms.org/docs/intro/).

# Installation and Configuration

The Netlify CMS can be used in two different ways.

* A Quick and easy install, that requires you to create a single HTML file and a configuration file. All the CMS Javascript and CSS are loaded from a CDN.
  To learn more about this installation method, refer to the [Quick Start Guide](https://www.netlifycms.org/docs/quick-start/)
* A complete, more complex install, that gives you more flexibility but requires that you use a static site builder with a build system that supports npm packages.

# Community

Netlify CMS has a [Gitter community](https://gitter.im/netlify/netlifycms) where members of the community hang out and share things about the project, as well as give and receive support.

# Contributing

New contributors are always welcome! Check out [CONTRIBUTING.md](https://github.com/netlify/netlify-cms/blob/master/CONTRIBUTING.md) to get involved.

# Change Log

This project adheres to [Semantic Versioning](http://semver.org/).
Every release is documented on the Github [Releases](https://github.com/netlify/netlify-cms/releases) page.

# License

Netlify CMS is released under the [MIT License](LICENSE).
Please make sure you understand its [implications and guarantees](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html).

# Thanks

## Services
These services support Netlify CMS development by providing free infrastructure.
<p>
  <a href="https://www.travis-ci.org">
    <img src="https://raw.githubusercontent.com/netlify/netlify-cms/master/img/travis.png" height="38" alt="travis-ci" />
  </a>
  <img src="https://spacergif.org/spacer.gif" width="20"/>
  <a href="https://www.browserstack.com">
    <img src="https://raw.githubusercontent.com/netlify/netlify-cms/master/img/browserstack.png" height="38" alt="browserstack" />
  </a>
</p>
