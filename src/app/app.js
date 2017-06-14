import angular from 'angular';
import 'angular-ui-router';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.css';

import {CommonModule} from './common/common.module.js';

angular
  .module('app', [
    'ui.router',
    CommonModule
  ])
  .config($urlRouterProvider => {
    $urlRouterProvider.otherwise('/main');
  });
