// MAPA - Programação Front End
// Rodrigo de Castro Vidigal - RA: 1801867-5

var contador = 0;
var tipoCliente = ["C-", "R-", "P-"]
var cxAtendente = ["Atendente 1", "Atendente2", "Atendente3"]
var listaSenha = [];
var senhaGeral = [];
var senhaVazia = [];


// Área dos botões dos clientes

function btnComum(){

	var senhaComum = [tipoCliente[0]+contador];
	document.getElementById("senhaCliente").innerHTML = senhaComum;
	listaSenha.push(senhaComum);
	contador++;

}

function btnPrioritario(){

	var senhaPrioritario = ["P-"+contador];
	document.getElementById("senhaCliente").innerHTML = senhaPrioritario;
	listaSenha.push(senhaPrioritario);
	contador++;

}


function btnRapido(){

	var senhaRapido = ["R-"+contador];
	document.getElementById("senhaCliente").innerHTML = senhaRapido;
	listaSenha.push(senhaRapido);
	contador++;

}


// Função de audio chamada

function audioChamada(){
	var audio = new Audio('audio/chamada.wav');
	audio.play();

}


// Área dos botões do atendente

function btnAtd1(){
	
	//var removeSenha = [SenhaGeral];
	senhaGeral = listaSenha.shift();
	
	if([senhaGeral].includes(undefined)){	

		alert("Não há senhas para exibir!"); 	

		
	} else{

		document.getElementById("verSenha").innerHTML = senhaGeral;
		document.getElementById("atend").innerHTML = "Atendente 1";
		audioChamada();
				
	}
		

}


function btnAtd2(){
	
	//var removeSenha = [SenhaGeral];
	senhaGeral = listaSenha.shift();

	
	if([senhaGeral].includes(undefined)){	

		alert("Não há senhas para exibir!"); 	

		
	} else{

		document.getElementById("verSenha").innerHTML = senhaGeral;
		document.getElementById("atend").innerHTML = "Atendente 2";
		audioChamada();
				
	}
	

}

function btnAtd3(){
	
	//var removeSenha = [SenhaGeral];
	senhaGeral = listaSenha.shift();
	
	if([senhaGeral].includes(undefined)){	

		alert("Não há senhas para exibir!"); 	

		
	} else{

		document.getElementById("verSenha").innerHTML = senhaGeral;
		document.getElementById("atend").innerHTML = "Atendente 3";
		audioChamada();

				
	}
		

}

