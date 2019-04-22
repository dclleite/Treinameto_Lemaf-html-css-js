class MensagemView extends View {


    constructor(elemento) {
        super(elemento);
    }


    template(model) {

        // if ternario, se model.texto estiver vazio, retorna um paragrafo sem nada
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }
}
