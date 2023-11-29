function contarPalavras() {
    var inputText = document.getElementById('inputText').value;
    
    // Remova caracteres especiais e divida o texto em palavras
    var palavras = inputText.replace(/[^\w\s]/gi, '').split(/\s+/);

    // Remova palavras vazias resultantes da divisão
    palavras = palavras.filter(function(palavra) {
        return palavra.length > 0;
    });

    // Exiba a contagem de palavras
    var resultado = document.getElementById('result');
    resultado.textContent = `Total de palavras: ${palavras.length}`;
}
