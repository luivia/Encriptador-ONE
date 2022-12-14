document.querySelector("#copiar").style.display = 'none';
document.querySelector("#limpar").style.display = 'none';
document.querySelector("#msgCriptografada").style.display = 'none';
document.querySelector("#descriptografar").disabled = true;
document.querySelector("#semMensagem").style.display = '';
document.querySelector("#msgTxt").focus()
document.querySelector("#msgTxt").addEventListener('keypress', pegarMensagem);

function pegarMensagem(msg) {
    var msg = document.querySelector('#msgTxt').value.toLowerCase();
    if (msg === '') {
        document.querySelector("#descriptografar").disabled = true;
    } else {
        document.querySelector("#descriptografar").disabled = false;
        return msg
    }
}

function mostrarMensagem() {
    var criptoTxt = document.querySelector('#msgCriptografada');
    if (criptoTxt === '') {
        document.querySelector("#semMensagem").style.display = '';
    } else {
        document.querySelector("#semMensagem").style.display = 'none';
        document.querySelector("#copiar").style.display = '';
        document.querySelector("#limpar").style.display = '';
        document.querySelector("#msgCriptografada").style.display = '';
        return criptoTxt
    }
}

function copiarTexto() {
    var textoCopia = mostrarMensagem();
    textoCopia.select();
    textoCopia.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.querySelector("#msgTxt").focus();
}

function limparTexto() {
    msgTxt = mostrarMensagem();
    if (msgTxt !== '') {
        document.querySelector("#copiar").style.display = 'none';
        document.querySelector("#msgCriptografada").value = '';
        document.querySelector("#msgCriptografada").style.display = 'none';
        document.querySelector("#limpar").style.display = 'none';
        document.querySelector("#semMensagem").style.display = '';
        document.querySelector("#msgTxt").focus();
    }
}

function criptografar() {
    var msgTxt = pegarMensagem(msgTxt);

    var alfabetoEncriptar = {
        'a': 'ai',
        '??': '??i',
        '??': '??i',
        '??': '??i',
        '??': '??i',
        'e': 'enter',
        '??': '??nter',
        '??': '??nter',
        '??': '??nter',
        'i': 'imes',
        '??': '??mes',
        '??': '??mes',
        'o': 'ober',
        '??': '??ber',
        '??': '??ber',
        '??': '??ber',
        '??': '??ber',
        'u': 'ufat',
        '??': '??fat'
    }

    var msgCriptografada = msgTxt.replace(/[a????????e??????i????o????????u??]/img, function (i) {
        return alfabetoEncriptar[i];
    });
    mostrarMensagem().value = msgCriptografada;
}

function descriptografar() {
    var msgTxt = pegarMensagem(msgTxt);

    var alfabetoDecriptar = {
        'ai': 'a',
        '??i': '??',
        '??i': '??',
        '??i': '??',
        '??i': '??',
        'enter': 'e',
        '??nter': '??',
        '??nter': '??',
        '??nter': '??',
        'imes': 'i',
        '??mes': '??',
        '??mes': '??',
        'ober': 'o',
        '??ber': '??',
        '??ber': '??',
        '??ber': '??',
        '??ber': '??',
        'ufat': 'u',
        '??fat': '??'
    }
    
    for (i in alfabetoDecriptar) {
        if (msgTxt.includes(i)) {
            msgTxt = msgTxt.replaceAll(i, alfabetoDecriptar[i]);
        }
    }
    mostrarMensagem().value = msgTxt;
}