define(function (require) {

  'use strict';

  var angular = require('angular'),
    services = require('services/services'),
    directives = angular.module('app.directives', ['app.services']);
  directives.directive('appVersion', require('directives/VersionDirectives'));
  directives.directive('hideTabs', require('directives/hideTabsDirectives'));
  directives.directive('back', require('directives/backDirectives'));

  directives.directive('slideTree',require('directives/common/slideDirectives'));
  directives.directive('tabSub',require('directives/common/tabDirectives'));

  return directives;
});
