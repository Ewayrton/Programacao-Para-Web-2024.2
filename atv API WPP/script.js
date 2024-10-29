function gravar(todes){
    let nome = document.getElementById("nomee").value;
    let endereco = document.getElementById("end").value;
    let email = document.getElementById('ema').value;
    let telefone = document.getElementById('tel').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('endereco', endereco);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);

    alert('Dados enviados com sucesso!');

}

function enviar(){
    let nome = localStorage.getItem('nome');
    let endereco = localStorage.getItem('endereco');
    let email = localStorage.getItem('email');
    let telefone = localStorage.getItem('telefone');
    
    let todes = "Nome: " + nome + "\n" + "Endereço: " + endereco + "\n" + "Email: " +  email + "\n" + "Telefone:" + telefone;
    //let todes = `Nome: ${nome}\nEndereço: ${endereco}\nEmail: ${email}\nTelefone: ${telefone}`;

    const url = "https://api.whatsapp.com/send?phone=" + telefone + "&text=" + encodeURIComponent(todes);
    //const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(todes)}`;

    window.open(url, "_blank");

}

function exibir(){
    let nome = localStorage.getItem('nome');
    let endereco = localStorage.getItem('endereco');
    let email = localStorage.getItem('email');
    let telefone = localStorage.getItem('telefone');
    let todes = "Nome: " + nome + "\n" + "Endereço: " + endereco + "\n" + "Email: " +  email + "\n" + "Telefone:" + telefone;

    if (nome && endereco && email && telefone ) {
        document.getElementById('resultado').innerHTML = todes;
        console.log(todes);
        

    } else {
        document.getElementById('resultado').innerHTML = `<p>Nenhum dado encontrado.</p>`;
    }

}