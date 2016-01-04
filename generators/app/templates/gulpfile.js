'use strict';

var gulp = require('gulp');
var liferayThemeTasks = require('liferay-theme-tasks');
var minimist = require('minimist');

var options = {
	gulp: gulp
};

var argv = minimist(process.argv.slice(2)); 

var pathBuild = argv.pathBuild;
var pathDist = argv.pathDist;

if (pathBuild) {
	options.pathBuild = pathBuild;
}

if (pathDist) {
	options.pathDist = pathDist;
}

liferayThemeTasks.registerTasks(options);