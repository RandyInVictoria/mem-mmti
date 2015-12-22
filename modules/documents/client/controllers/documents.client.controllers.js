'use strict';

angular.module('documents')
    .controller('controllerDocumentUploadGlobal', controllerDocumentUploadGlobal)
    .controller('controllerDocumentList', controllerDocumentList)
	.controller('controllerModalDocumentViewer', controllerModalDocumentViewer)
	.controller('controllerModalDocumentBuckets', controllerModalDocumentBuckets);

// -----------------------------------------------------------------------------------
//
// CONTROLLER: Document Upload General
//
// -----------------------------------------------------------------------------------
controllerDocumentUploadGlobal.$inject = ['$scope', 'Upload', '$timeout', 'Document', '_'];
/* @ngInject */
function controllerDocumentUploadGlobal($scope, Upload, $timeout, Document, _) {
	var docUpload = this;

	docUpload.fileList = [];

	$scope.$watch('project', function(newValue) {
		if (newValue) {
			docUpload.project = newValue;
		}
	});

	// get types for dropdown.
	docUpload.docTypes = Document.getDocumentTypes();


	$scope.$watch('files', function (newValue) {
		if (newValue) {
			_.each( newValue, function(file, idx) {
				docUpload.fileList.push(file);
			});
		}
		// add the file to our central list.
		// click the upload buton to actually upload this list.

		//docUpload.upload($scope.files);
	});

	$scope.$watch('file', function () {
		if (docUpload.file) {
			docUpload.upload([docUpload.file]);
		}
	});
	docUpload.log = '';

	docUpload.upload = function () {
		console.log ('uploading?');
		if (docUpload.fileList && docUpload.fileList.length) {
			for (var i = 0; i < docUpload.fileList.length; i++) {
				var file = $scope.files[i];
				if (!file.$error) {
					Upload.upload({
						url: '/api/commentdocument/publiccomment/56733270672dadc5372f7bea/upload', // todo: UPLOAD
						fields: {
							//	'username': $scope.username
						},
            			file: file
    				}).progress(function (evt) {
            			var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            			docUpload.log = 'progress: ' + progressPercentage + '% ' + evt.config.file.name + '\n' + docUpload.log;
					}).success(function (data, status, headers, config) {
						docUpload.log = 'file: ' + config.file.name + ', Response: ' + JSON.stringify(data) + '\n' + docUpload.log;
					});
				}
			}
		}
    };
}
// -----------------------------------------------------------------------------------
//
// CONTROLLER: Document List
//
// -----------------------------------------------------------------------------------
controllerDocumentList.$inject = ['$scope'];
/* @ngInject */
function controllerDocumentList($scope) {
	var docList = this;
	console.log($scope.documents);

	$scope.$watch('documents', function(newValue) {
		docList.filterDocuments = newValue;
	});

	$scope.$watch('filterBy', function(newValue) {
		docList.filterId = newValue;
	});
}
// -----------------------------------------------------------------------------------
//
// CONTROLLER: Modal: View Documents Comment
//
// -----------------------------------------------------------------------------------
controllerModalDocumentViewer.$inject = ['$modalInstance'];
//
function controllerModalDocumentViewer($modalInstance) {
	var md = this;
	md.ok = function () { $modalInstance.close(); };
	md.cancel = function () { $modalInstance.dismiss('cancel'); };
}
// -----------------------------------------------------------------------------------
//
// CONTROLLER: Modal: View Documents Comment
//
// -----------------------------------------------------------------------------------
controllerModalDocumentBuckets.$inject = ['$modalInstance'];
//
function controllerModalDocumentBuckets($modalInstance) {
	var docBuckets = this;
	docBuckets.ok = function () { $modalInstance.close(); };
	docBuckets.cancel = function () { $modalInstance.dismiss('cancel'); };
}
