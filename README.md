Nodejs version compare module
=========

Allows you to compare version strings in the format 1.2.3.4 flexably and easily

## Installation

    npm install ver-compare

## Usage

    var versionCompare = require('ver-compare');
    versionCompare.compareVersions('1.2.3.4','4.3.2.1');
    // result is either 1,0,-1,undefined

## Release History

* 0.1.0 Initial release
