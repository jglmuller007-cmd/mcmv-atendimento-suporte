
// Preenche automaticamente campos comuns
function preencherCampos() {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        if (input.name.toLowerCase().includes("nome")) {
            input.value = "Cliente Teste";
        }

        if (input.name.toLowerCase().includes("cpf")) {
            input.value = "123.456.789-00";
        }

        if (input.name.toLowerCase().includes("cidade")) {
            input.value = "São Paulo";
        }
    });
}

// Executa ao carregar a página
window.addEventListener("load", preencherCampos);
