import angular from 'angular';
import 'angular-mocks';
import {MainModule} from './main.module.js';

describe('MainModule', () => {
  it('should be defined', () => {
    let module;
    try {
      module = angular.module(MainModule);
    } catch (ex) { }
    expect(module).toBeDefined();
  });

  describe('config', () => {
    describe('states', () => {
      describe('\'main\' state', () => {
        var state = null;

        beforeEach(done => {
          angular.mock.module('app');
          angular.mock.module(MainModule);
          angular.mock.inject($state => {
            state = $state.get('main');
            done();
          });
        });

        it('should be not null', () => {
          expect(state).not.toEqual(null);
        });
        it('should have the URL \'/main\'', () => {
          expect(state.url).toBe('/main');
        });
        it('should employ \'main\' component', () => {
          expect(state.component).toBe('main');
        });
      });
    });
  });

  describe('MainComponent', () => {
    let numbers = [];

    /*
    * Find all numbers on page for each test
    */
    beforeEach(done => {
      angular.mock.module('app');
      angular.mock.module(MainModule);
      angular.mock.inject(($rootScope, $compile) => {
        numbers = [];
        const element = $compile('<main>Loading...</main>')($rootScope);
        $rootScope.$digest();
        const numberElements = element.find('h1');

        angular.forEach(numberElements, (v, k) => {
          if (angular.element(v).hasClass('prime-number__value')) {
            numbers.push(angular.element(v).text());
          }
        });

        done();
      });
    });

    /*
    * Our unit tests
    */

    it('should have 7 numbers', () => {
      expect(numbers.length).toEqual(7);
    });

    it('should only contain prime numbers', () => {
      let i = 0;

      for (i = 0; i < numbers.length; i++) {
        const number = Number.parseInt(numbers[i], 10);

        let prime = true;
        let x = 0;
        let y = 0;

        for (x = 2; x < number; x++) {
          for (y = 2; y < number; y++) {
            if (x * y === number) {
              prime = false;
              break;
            }
          }
        }

        expect(prime).toBeTruthy();
      }
    });

    it('should contain \'5\' (string) as its third number', () => {
      expect(numbers[2]).toEqual('5');
    });

    it('prime number list should not contain duplicate entries', () => {
      const recordedValues = {};
      let i = 0;
      let foundDuplicate = false;

      for (i = 0; i < numbers.length; i++) {
        if (typeof recordedValues[numbers[i]] !== 'undefined') {
          foundDuplicate = true;
          break;
        }
        recordedValues[numbers[i]] = true;
      }
      expect(!foundDuplicate).toBeTruthy();
    });
  });
});
