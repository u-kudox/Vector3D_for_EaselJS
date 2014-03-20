module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		uglify : {
			vector3d : {
				options : {
					banner : grunt.file.read('src/License.js'),
				},
				src : ['src/Vector3D.js'],
				dest : 'lib/vector3d-<%= pkg.version %>.min.js'
			}
		},
		copy : {
			vector3d : {
				files : [{expand:true, cwd:'lib/', src:'vector3d-<%= pkg.version %>.min.js', dest:'examples/js/'}]
			}
		},
		watch : {
			vector3d : {
				files : ['src/Vector3D.js', 'src/License.js'],
				tasks : ['vector3d']
			}
		},
		clean : {
			vector3d : {
				src : ['lib/vector3d-*.js', 'examples/js/vector3d-*.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('vector3d', ['clean:vector3d', 'uglify:vector3d', 'copy:vector3d']);
};