class NegociacaoController {

    constructor() {

        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputData = document.querySelector('#data');
        this._inputValor = document.querySelector('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

    }

    adiciona(event) {

        event.preventDefault();
        
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaForm()

        console.log(this._listaNegociacoes.getNegociacoes());


    }

    _criaNegociacao(){
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }
    
    _limpaForm() {
        this._inputData.value = '';
        this._inputQuantidade = 1;
        this._inputValor = 0.0;
        
        this._inputData.focus();
    }
}
