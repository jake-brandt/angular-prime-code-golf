export const MainComponent = {
  template: require('./main.html'),
  controller: class MainComponent {
    $onInit() {
      this.primes = [];
    }
  }
};
