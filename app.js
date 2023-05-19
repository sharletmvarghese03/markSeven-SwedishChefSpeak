var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');

var outputDiv = document.querySelector('#output');

var serverURL = `https://api.funtranslations.com/translate/chef.json`;

function getTranslationURL(input) {
	return serverURL + `?` + `text` + input;
}
