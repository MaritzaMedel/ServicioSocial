export  default class Pregunta {
    constructor(enunciado, tipoPregunta, respuesta) {
        this._enunciado = enunciado; //String 
        this._tipoPregunta = tipoPregunta; //String [multiple,seleccion,abeirta]
        this._respuestas = [];
        this._respuesta = respuesta;

    }

    get enunciado() {
        return _enunciado;
    }
    set enunciado(enunciado) {
        this._enunciado = enunciado;
    }
    get tipoPregunta() {
        return _tipoPregunta;
    }
    set tipoPregunta(tipo) {
        this._tipoPregunta = tipoPregunta;
    }
    get respuesta() {
        return this._respuesta;
    }
    set respuesta(respuesta) {
        this._respuesta = respuesta;
    }

    agregarPosibleRespuesta(texto) {
        this._respuestas.push(texto);
    }
}