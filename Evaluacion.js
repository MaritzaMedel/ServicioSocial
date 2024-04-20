export default class Evaluacion {
    constructor(titulo) {
        this._titulo = titulo;
        this._secciones = [];
    }
    get titulo() {
        return _titulo;
    }
    set titulo(tituloNuevo) {
        this._titulo = tituloNuevo;
    }
    agregarSeccion(seccion) {
        this._secciones.push(seccion);
    }
}