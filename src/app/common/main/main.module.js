import angular from 'angular';

import {MainComponent} from './main.component.js';

export const MainModule = angular
  .module('main', [
    'ui.router'
  ])
  .config($stateProvider => {
    $stateProvider.state('main', {
      url: '/main',
      component: 'main'
    });
  })
  .component('main', MainComponent)
  .name;
