function EnviarFormulario() {
    //Capturar os valores e criar a variavel para o objeto (JSON)
    var dadosAluno = new Object();

    dadosAluno.Email = document.getElementById("E-mail").value;
    dadosAluno.Senha = document.getElementById("Senha").value;

    //Converter para String JSON
    var json = JSON.stringify(dadosAluno)

    console.log(json)
    console.log(dadosAluno.valueOf())

}

function EnviarCadastro() {
    //Capturar os valores e criar a variavel para o objeto (JSON)
    var dadosAlunoCadastro = new Object();

    dadosAlunoCadastro.email = document.getElementById("email").value;
    dadosAlunoCadastro.senha = document.getElementById("Senha").value;
    dadosAlunoCadastro.cpf = document.getElementById("CPF").value;
    dadosAlunoCadastro.telefone = document.getElementById("Telefone").value;
    dadosAlunoCadastro.endereco = document.getElementById("Endereco").value;
    dadosAlunoCadastro.cep = document.getElementById("CEP").value;
    dadosAlunoCadastro.cartao = document.getElementById("card").value;
    dadosAlunoCadastro.numCar = document.getElementById("numCar").value;


    //Converter para String JSON
    var json2 = JSON.stringify(dadosAlunoCadastro)

    console.log(json2)
    console.log(dadosAlunoCadastro.valueOf())

}