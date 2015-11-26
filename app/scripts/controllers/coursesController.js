/************************************************
Controlador para la ruta /cursos/

Proyecto: Codeando.org
Author: Paulo Andrade
Email: source.compu@gmail.com
Web: http://www.pauloandrade1.com
************************************************/

(function (){
	'use strict';

	function CoursesController(courseService)
	{
		var vm = this;
		
		vm.courses = courseService.query();
	}

	angular
		.module('app')
			.controller('coursesController', [
				'courseService',
				CoursesController
			]);
})();