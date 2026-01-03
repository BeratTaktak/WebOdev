

function sayfaDegistir() {

		var girilen = document.getElementById("dizilisKutusu").value;
			

		if (girilen == "4-4-2" || girilen == "442") {
			window.location.href = "en_degerli_442.html";
		} 
			
			
		else if (girilen == "3-4-1-2" || girilen == "3412") {
			window.location.href = "en_degerli_3412.html";
		}
			
			
		else if (girilen == "3-4-2-1" || girilen == "3421") {
			window.location.href = "en_degerli_3421.html";
		}
			
			
		else if (girilen == "4-2-3-1" || girilen == "4231") {
			window.location.href = "en_degerli_4231.html";
		}
			
			
		else {
		
			alert("Lütfen geçerli bir diziliş giriniz! ( 4-4-2, 3-4-1-2, 3-4-2-1 veya 4-2-3-1 )");
		}
	}