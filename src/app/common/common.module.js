import angular from 'angular';

import {MainModule} from './main/main.module.js';

export const CommonModule = angular
  .module('common', [
    MainModule
  ])
  .name;
