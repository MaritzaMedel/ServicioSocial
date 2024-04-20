export default class Seccion {
    constructor(titulo) {
        this._titulo = titulo;
        this._preguntas = [];
    }
    get titulo() {
        return _titulo;
    }
    set titulo(tituloNuevo) {
        this._titulo = tituloNuevo;
    }
    agregarPregunta(pregunta) {
        this._preguntas.push(pregunta);
    }
    eliminarPregunta(index) {
        //
    }
}