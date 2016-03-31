angular
  .module('museumPassport.imageStoreServices', [])
  .factory('FileService', function() {

    var images;
    var IMAGE_STORAGE_KEY = 'images';

    function getImages() {
      var img = window.localStorage.getItem(IMAGE_STORAGE_KEY);
      if (img) {
         images = JSON.parse(img);
      } else {
        images = [];
      }
      return images;
    };

    function storeImage(img) {
      images.push(img);
      window.localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(images));
    };

    return {
      storeImage: storeImage,
      getImages: getImages
    };
  })
