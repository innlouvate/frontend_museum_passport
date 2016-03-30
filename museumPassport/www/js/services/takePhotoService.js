angular
  .module('museumPassport.photoServices', [])
  .factory('Photo', function($cordovaCamera, FileService, $cordovaFile, $q) {

    function takePhoto(question_id) {
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
          var newName = question_id + name;

          // var sourceDirectory = sourcePath.substring(0, sourcePath.lastIndexOf('/') + 1);
          // var sourceFileName = sourcePath.substring(sourcePath.lastIndexOf('/') + 1, sourcePath.length);

          $cordovaFile.copyFile(namePath, name, cordova.file.dataDirectory, newName)
            .then(function(info) {
              FileService.storeImage(newName);
              resolve();
            }, function(e) {
              reject();
            });
          });

      });
      return (cordova.file.dataDirectory + newName);
    }


    return {
      takePhoto: takePhoto
    }

  });
