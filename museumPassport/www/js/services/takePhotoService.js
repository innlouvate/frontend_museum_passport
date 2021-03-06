angular
  .module('museumPassport.photoServices', [])
  .factory('Photo', function($cordovaCamera, FileService, $cordovaFile, $q, Response) {

    function takePhoto(question) {
      return $q(function(resolve, reject) {
        var options = {
          quality: 50,
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: false,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 1024,
          targetHeight: 768,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation: true
        };

        $cordovaCamera.getPicture(options).then(function(imageUrl) {
          var name = imageUrl.substr(imageUrl.lastIndexOf('/') + 1);
          var namePath = imageUrl.substr(0, imageUrl.lastIndexOf('/') + 1);
          var newName = name + '_Q' + question.question.id;

          $cordovaFile.copyFile(namePath, name, cordova.file.dataDirectory, newName)
            .then(function(info) {
              FileService.storeImage(newName);
              Response.saveUrl(question, (cordova.file.dataDirectory + newName))
            resolve(cordova.file.dataDirectory + newName);
          });
      });
    });
  }

    return {
      takePhoto: takePhoto,
    }

  });
