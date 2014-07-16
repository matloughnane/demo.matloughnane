module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig ({

	  sass: {                              // Task
	    dist: {                            // Target
	      options: {                       // Target options
	        style: 'compact'				       // possible choices: nested, compact, compressed, expanded.
	      },
	      files: {                         // Dictionary of files
	        'assets/css/styles.css': 'assets/css/sass/styles.scss',       // 'destination': 'source'
	      }
	    }
	  }
})

  // Load plugins here
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

  // Define your tasks here
  	grunt.registerTask('default', ['sass']);
};
