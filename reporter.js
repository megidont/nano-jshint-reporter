/*jshint esversion: 6*/

//Quick and dirty jshint reporter script to make jshint output compatible with nano linting!
//remember to add your `linter jshint --reporter=[dirtoreporter]/reporter.js` to your js.nanorc!

module.exports = {
	reporter: function (errors) {

		if(errors.length == 0){

			console.log("PASS:1: No errors to report!");

		}else{
			for(var error of errors){

				console.log(`${error.file}:${error.error.line}:${error.error.character}: ${error.error.id} - ${error.error.reason}

${error.error.line}:${error.error.evidence}

(${error.error.code} in ${error.error.scope})
`);

			}

		}

	}
};