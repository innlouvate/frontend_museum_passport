angular
  .module('museumPassport.imageStoreServices', [])
  .factory('FileService', function() {

    var IMAGE_STORAGE_KEY = 'museum_images';

    function storeImage(img) {
      window.localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(images));
    };

    return {
      storeImage: storeImage
    };
  })
