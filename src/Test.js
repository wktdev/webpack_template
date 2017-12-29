var $ = require("jquery");
class Test {
	constructor(app){
		this.getData();
	}

	getData(){
		$("div").text("Yes it works")
		console.log("hello world");
	}
}

module.exports = Test