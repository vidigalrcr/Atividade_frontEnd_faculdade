// MAPA - Programação Front End
// Rodrigo de Castro Vidigal - RA: 1801867-5

var contador = 0;
var tipoCliente = ["C-", "R-", "P-"]
var cxAtendente = ["Atendente 1", "Atendente2", "Atendente3"]

var listaSenhaComum = [];
var listaSenhaPrioritaria = [];
var listaSenhaRapida = [];

var senhaGeral = [];


var senhaVazia = [];


// Área dos botões dos clientes

function btnComum(){

	var senhaComum = [tipoCliente[0]+contador];
	document.getElementById("senhaCliente").innerHTML = senhaComum;
	listaSenhaComum.push(senhaComum);
	contador++;

}

function btnPrioritario(){

	var senhaPrioritario = ["P-"+contador];
	document.getElementById("senhaCliente").innerHTML = senhaPrioritario;
	listaSenhaPrioritaria.push(senhaPrioritario);
	contador++;

}


function btnRapido(){

	var senhaRapido = ["R-"+contador];
	document.getElementById("senhaCliente").innerHTML = senhaRapido;
	listaSenhaRapida.push(senhaRapido);
	contador++;

}


// Função de audio chamada

function audioChamada(){
	var audio = new Audio('audio/chamada.wav');
	audio.play();

}


// Área dos botões do atendente

function btnAtd1(){
	
	senhaGeral = listaSenhaPrioritaria.shift();
	
	if([senhaGeral].includes(undefined)){	

		//alert("Não há senhas para exibir!"); 	
		senhaGeral = listaSenhaRapida.shift();

		if([senhaGeral].includes(undefined)){

			senhaGeral = listaSenhaComum.shift();

			if([senhaGeral].includes(undefined)){

				//alert("Não há senhas para exibir!");
			
			} else{

				document.getElementById("verSenha").innerHTML = senhaGeral;
				document.getElementById("atend").innerHTML = "Atendente 1";
				audioChamada();

			}


		
		} else{

			document.getElementById("verSenha").innerHTML = senhaGeral;
			document.getElementById("atend").innerHTML = "Atendente 1";
			audioChamada();

		}
		
	} else{

		document.getElementById("verSenha").innerHTML = senhaGeral;
		document.getElementById("atend").innerHTML = "Atendente 1";
		audioChamada();
				
	}

}


function btnAtd2(){
	
	senhaGeral = listaSenhaRapida.shift();
	
	if([senhaGeral].includes(undefined)){	

		//alert("Não há senhas para exibir!"); 	
		senhaGeral = listaSenhaPrioritaria.shift();

		if([senhaGeral].includes(undefined)){

			senhaGeral = listaSenhaComum.shift();

			if([senhaGeral].includes(undefined)){

				//alert("Não há senhas para exibir!");
			
			} else{

				document.getElementById("verSenha").innerHTML = senhaGeral;
				document.getElementById("atend").innerHTML = "Atendente 2";
				audioChamada();

			}


		
		} else{

			document.getElementById("verSenha").innerHTML = senhaGeral;
			document.getElementById("atend").innerHTML = "Atendente 2";
			audioChamada();

		}
		
	} else{

		document.getElementById("verSenha").innerHTML = senhaGeral;
		document.getElementById("atend").innerHTML = "Atendente 2";
		audioChamada();
				
	}

}

function btnAtd3(){
	
	senhaGeral = listaSenhaRapida.shift();
	
	if([senhaGeral].includes(undefined)){	

		//alert("Não há senhas para exibir!"); 	
		senhaGeral = listaSenhaPrioritaria.shift();

		if([senhaGeral].includes(undefined)){

			senhaGeral = listaSenhaComum.shift();

			if([senhaGeral].includes(undefined)){

				//alert("Não há senhas para exibir!");
			
			} else{

				document.getElementById("verSenha").innerHTML = senhaGeral;
				document.getElementById("atend").innerHTML = "Atendente 3";
				audioChamada();

			}


		
		} else{

			document.getElementById("verSenha").innerHTML = senhaGeral;
			document.getElementById("atend").innerHTML = "Atendente 3";
			audioChamada();

		}
		
	} else{

		document.getElementById("verSenha").innerHTML = senhaGeral;
		document.getElementById("atend").innerHTML = "Atendente 3";
		audioChamada();
				
	}

}

function btnAtd4(){
	
	senhaGeral = listaSenhaComum.shift();
	
	if([senhaGeral].includes(undefined)){	

		//alert("Não há senhas para exibir!"); 	
		senhaGeral = listaSenhaPrioritaria.shift();

		if([senhaGeral].includes(undefined)){

			senhaGeral = listaSenhaRapida.shift();

			if([senhaGeral].includes(undefined)){

				//alert("Não há senhas para exibir!");
			
			} else{

				document.getElementById("verSenha").innerHTML = senhaGeral;
				document.getElementById("atend").innerHTML = "Atendente 4";
				audioChamada();

			}


		
		} else{

			document.getElementById("verSenha").innerHTML = senhaGeral;
			document.getElementById("atend").innerHTML = "Atendente 4";
			audioChamada();

		}
		
	} else{

		document.getElementById("verSenha").innerHTML = senhaGeral;
		document.getElementById("atend").innerHTML = "Atendente 4";
		audioChamada();
				
	}

}

