async function cadastrarMeme() {
    const url ="https://66fc5de4c3a184a84d16e0ed.mockapi.io/api/memes"
    const linkDigitado = document.querySelector('#linkImagem').value
    const tituloDigitado = document.querySelector('#titulo').value
    let dadosMeme = {
        linkImagem: linkDigitado,
        dataCadastro: new Date(),
        titulo: tituloDigitado,
        likes: 0
    }
    console.log(dadosMeme)
    const resposta = await fetch(url,{
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(dadosMeme)


    })
    alert("Meme cadastrado com sucesso !!!")
    
}

