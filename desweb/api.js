function chamar_api(){
	fetch('https://random-d.uk/api/images/51.jpg')
	  .then(response => response.json())
	  .then(data => exibir_imagem(data));
}

function exibir_imagem(data){
	document.getElementById("img").src = data.message;
}
