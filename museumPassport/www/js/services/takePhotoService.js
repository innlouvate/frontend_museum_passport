angular
  .module('museumPassport.photoServices', [])
  .factory('Photo', function($cordovaCamera, FileService, $cordovaFile, $q, Response) {

    // var imageName;
    //
    // function imageNameSet(url) {
    //   imageName = url;
    // }

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
          var newName = question.question.id + name;

          // var sourceDirectory = sourcePath.substring(0, sourcePath.lastIndexOf('/') + 1);
          // var sourceFileName = sourcePath.substring(sourcePath.lastIndexOf('/') + 1, sourcePath.length);

          $cordovaFile.copyFile(namePath, name, cordova.file.dataDirectory, newName)
            .then(function(info) {
              FileService.storeImage(newName);
              // return (cordova.file.dataDirectory + newName);
              Response.saveUrl(question, (cordova.file.dataDirectory + newName));
              // imageNameSet(cordova.file.dataDirectory + newName);
              resolve();
            }, function(e) {
              reject();
            });
          });

      });
      // return (cordova.file.dataDirectory + newName);
    }

    // function urlForImage() {
    //   var trueOrigin = cordova.file.dataDirectory + imageName;
    //   return trueOrigin;
    // }


    return {
      takePhoto: takePhoto,
      // imageNa8me: imageName
    }

  });
