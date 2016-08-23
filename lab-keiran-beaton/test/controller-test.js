'use strict';


describe('testing controllers used in routing', function() {
  beforeEach(() => {
    angular.mock.module('imageApp');
    angular.mock.inject(($controller) => {
      this.homeController = new $controller('HomeController');
      this.fullsizeController = new $controller('FullsizeController');
      this.thumbnailController = new $controller('ThumbnailController');
      this.errorController = new $controller('ErrorController');
    });
  });

  it('home controller should create a list of images', () => {
    expect(this.homeController.images.length > 0).toBe(true);
    expect(this.homeController.images.length).toBe(4);
  });

  it('fullsize controller should create a list of images', () => {
    expect(this.fullsizeController.images.length > 0).toBe(true);
    expect(this.fullsizeController.images.length).toBe(4);
  });

  it('fullsizeController should be able to test for valid id', () => {
    expect(this.fullsizeController.isValidId('keiran')).toBe(false);
    expect(this.fullsizeController.isValidId(2)).toBe(true);
  });

  it('thumbnail controller should create a list of images', () => {
    expect(this.thumbnailController.images.length > 0).toBe(true);
    expect(this.thumbnailController.images.length).toBe(4);
  });

  it('error controller should use the error message from rootScope', () => {
    expect(this.errorController.errorMessage).toBe('Error trying to access unknown page');
  });
});
