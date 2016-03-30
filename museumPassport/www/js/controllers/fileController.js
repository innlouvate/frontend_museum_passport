
angular
  .module('museumPassport.files', [])
  .controller('FileController', function($scope, $cordovaCamera, $cordovaFile) {
    $scope.fileName = "";
    $scope.uploadPicture = function() {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 1024,
        targetHeight: 768,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation: true
      };

      $cordovaCamera.getPicture(options).then(function(sourcePath) {
        var sourceDirectory = sourcePath.substring(0, sourcePath.lastIndexOf('/') + 1);
        var sourceFileName = sourcePath.substring(sourcePath.lastIndexOf('/') + 1, sourcePath.length);

        console.log("Copying from : " + sourceDirectory + sourceFileName);
        console.log("Copying to : " + cordova.file.dataDirectory + sourceFileName);
        $cordovaFile.copyFile(sourceDirectory, sourceFileName, cordova.file.dataDirectory, sourceFileName).then(function(success) {
           $scope.fileName = cordova.file.dataDirectory + sourceFileName;
        }, function(error) {
           console.dir(error);
        });

      }, function(err) {
           console.log(err);
      });
  }
});
