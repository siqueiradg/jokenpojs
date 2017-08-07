function jokenpo(player){

		do {
			maquina = Math.round(Math.random() * 3);
		}while (maquina == 0)

			if (player == maquina){
				resultado = '<img src="img/' + player + '.png" /><span class="x">x</span><img src="img/' + maquina + '.png" />';
				resultado = resultado + '<div class="result"><p class="resultado">Ops! Empate!</p></div>';
			}
			else if (player == 1 && maquina == 3) {
				resultado = '<img src="img/' + player + '.png" /><span class="x">x</span><img src="img/' + maquina + '.png" />';
				resultado = resultado + '<div class="result"><p class="resultado"><span class="nome">Você </span>ganhou!</p></div>';
			}

			else if (player == 2 && maquina == 1) {
				resultado = '<img src="img/' + player + '.png" /><span class="x">x</span><img src="img/' + maquina + '.png" />';
				resultado = resultado + '<div class="result"><p class="resultado"><span class="nome">Você </span>ganhou!</p></div>';
			}

			else if (player == 3 && maquina == 2) {
				resultado = '<img src="img/' + player + '.png" /><span class="x">x</span><img src="img/' + maquina + '.png" />';
				resultado = resultado + '<div class="result"><p class="resultado"><span class="nome">Você </span>ganhou!</p></div>';
			}
			else{
				resultado = '<img src="img/' + player + '.png" /><span class="x">x</span><img src="img/' + maquina + '.png" />';
				resultado = resultado + '<div class="result"><p class="resultado"><span class="nome">O CPU </span>ganhou!</p></div>';
			}
		document.getElementById("final").innerHTML = resultado;
	}