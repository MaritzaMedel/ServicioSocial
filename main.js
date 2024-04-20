import Seccion from './Seccion.js';
import Pregunta from './Pregunta.js';
import Evaluacion from './Evaluacion.js';

let evaluacion = new Evaluacion("Evaluación de Empresa - Servicio Social");
let seccionA = new Seccion("a)Asesoría Académica");
let seccionB = new Seccion("b)Unidad Receptora");
let seccionC = new Seccion("c)Valores");
let seccionD = new Seccion("d)Apoyos");
let seccionE = new Seccion("e)Impacto del servicio social en la formación del prestador");

let posiblesRespuestasmultiple = ["Siempre", "Frecuentemente", "Algunas veces", "Nunca"];
let preguntas = [];

let pregunta1 = new Pregunta("1.¿Se le proporcionó asesoría?", "multiple", "");
posiblesRespuestasmultiple.forEach(respuesta => pregunta1.agregarPosibleRespuesta(respuesta));
preguntas.push(pregunta1);

let pregunta2 = new Pregunta("2.¿Le fue de utilidad la asesoría recibida?", "multiple", "")
posiblesRespuestasmultiple.forEach(respuesta => pregunta2.agregarPosibleRespuesta(respuesta));
preguntas.push(pregunta2);

let pregunta3 = new Pregunta("3.¿Solicitó al asesor(a) su opinión sobre lo que ha aprendido?", "multiple", "");
posiblesRespuestasmultiple.forEach(respuesta => pregunta3.agregarPosibleRespuesta(respuesta));
preguntas.push(pregunta3);

let pregunta4 = new Pregunta("4.¿Considera que necesita asesoría que sirva para establecer relaciones entre la teoría (conocimientos adquiridos) y la práctica a través del servicio social?", "multiple", "");
posiblesRespuestasmultiple.forEach(respuesta => pregunta4.agregarPosibleRespuesta(respuesta));
preguntas.push(pregunta4);

let pregunta5 = new Pregunta("5.Especifique la frecuencia de asesorías que recibió durante la realización del servicio social", "multiple", "");
posiblesRespuestasmultiple.forEach(respuesta => pregunta5.agregarPosibleRespuesta(respuesta));
preguntas.push(pregunta5);

let pregunta6 = new Pregunta("6.Especifique frecuencia de supervisiones que recibió durante la realización de su servicio social", "multiple", "");
posiblesRespuestasmultiple.forEach(respuesta => pregunta6.agregarPosibleRespuesta(respuesta));
preguntas.push(pregunta6);

let pregunta7 = new Pregunta("7.De los aspectos abordados (Asesoría Académica) ¿Qué considera que se debe mejorar para su asesoría y supervisión en el servicio social?", "abierta");
preguntas.push(pregunta7);

for (let i = 0; i < preguntas.length; i++) {
    seccionA.agregarPregunta(preguntas[i]);
}

preguntas = [];
let pregunta8 = new Pregunta("8.Si observó irregularidades en la unidad receptora que afectaron a su persona, ¿Las manifestó a las autoridades correspondientes?", "multiple", "");
posiblesRespuestasmultiple.forEach(respuesta => pregunta8.agregarPosibleRespuesta(respuesta));
preguntas.push(pregunta8);

let pregunta9 = new Pregunta("9.Recibió capacitación y actualización por parte de la unidad receptora para la elaboración y ejecución del proyecto? En caso de que su respuesta sea sí especifique cuantas.", "seleccion", "");
preguntas.push(pregunta9);

for (let i = 0; i < preguntas.length; i++) {
    seccionB.agregarPregunta(preguntas[i]);
}

preguntas = [];
let pregunta10 = new Pregunta("10.¿Al interactuar con su asesor(a) se mantuvo un trato respetuoso dentro y fuera de la institución?", "multiple", "");
posiblesRespuestasmultiple.forEach(respuesta => pregunta10.agregarPosibleRespuesta(respuesta));
preguntas.push(pregunta10);

let pregunta11 = new Pregunta("11.¿Al interactuar con su supervisor(a) se mantuvo un trato respetuoso dentro y fuera de la institución?", "multiple", "");
posiblesRespuestasmultiple.forEach(respuesta => pregunta11.agregarPosibleRespuesta(respuesta));
preguntas.push(pregunta11);

let pregunta12 = new Pregunta("12.¿Colaboró con la unidad receptora en eventos académicos, sociales y/o culturales que tengan relación con la prestación de servicio social?", "multiple", "");
posiblesRespuestasmultiple.forEach(respuesta => pregunta12.agregarPosibleRespuesta(respuesta));
preguntas.push(pregunta12);

let pregunta13 = new Pregunta("13.¿Mantuvo una buena imagen y responsabilidad en las actividades de prestación de servicio social?", "multiple", "");
posiblesRespuestasmultiple.forEach(respuesta => pregunta13.agregarPosibleRespuesta(respuesta));
preguntas.push(pregunta13);

let pregunta14 = new Pregunta("14.¿Cuidó el mobiliario y los recursos que se le proporcionaron para realizar su servicio social?", "multiple", "");
posiblesRespuestasmultiple.forEach(respuesta => pregunta14.agregarPosibleRespuesta(respuesta));
preguntas.push(pregunta14);

let pregunta15 = new Pregunta("15.¿Tuvo disponibilidad para las labores de equipo e individuales?", "multiple", "");
posiblesRespuestasmultiple.forEach(respuesta => pregunta15.agregarPosibleRespuesta(respuesta));
preguntas.push(pregunta15);

for (let i = 0; i < preguntas.length; i++) {
    seccionC.agregarPregunta(preguntas[i]);
}

preguntas = [];
let pregunta16 = new Pregunta("16.¿Se le proporcionó recursos materiales (mobiliario, papelería, instrumentos de trabajo, etc.) para la realización de las actividades de servicio social?", "multiple", "");
posiblesRespuestasmultiple.forEach(respuesta => pregunta16.agregarPosibleRespuesta(respuesta));
preguntas.push(pregunta16);

let pregunta17 = new Pregunta("17.¿Recibió beca de apoyo económico por la realización de servicio social? En caso de que su repuesta sea sí,especifique el monto mensual.", "seleccion", "");
preguntas.push(pregunta17);

for (let i = 0; i < preguntas.length; i++) {
    seccionD.agregarPregunta(preguntas[i]);
}

preguntas = [];
let pregunta18 = new Pregunta("18.¿Aplicó los conocimientos aprendidos en situaciones prácticas y profesionales?", "multiple", "");
posiblesRespuestasmultiple.forEach(respuesta => pregunta18.agregarPosibleRespuesta(respuesta));
preguntas.push(pregunta18);

let pregunta19 = new Pregunta("19.Especifique el tipo de conocimientos aplicados en el desarrollo del proyecto donde realizó su servicio social. (De acuerdo al perfil profesional)", "abierta", "");
preguntas.push(pregunta19);

let pregunta20 = new Pregunta("20.Especifique el tipo de habilidades aplicadas en el desarrollo del proyecto donde realizó su servicio social. (De acuerdo perfil profesional).", "abierta", "");
preguntas.push(pregunta20);

let pregunta21 = new Pregunta("21.¿Considera que el haber interactuado con otras disciplinas, le redituó algún aprendizaje?", "multiple", "");
pregunta21.agregarPosibleRespuesta("Sí");
pregunta21.agregarPosibleRespuesta("No");
pregunta21.agregarPosibleRespuesta("No tuve");
preguntas.push(pregunta21);

let pregunta22 = new Pregunta("22.Especifique el tipo de aprendizaje obtenido al interaccionar con otras disciplinas durante el desarrollo del proyecto.", "abierta", "");
preguntas.push(pregunta22);

let pregunta23 = new Pregunta("23.Especifique la problemática que abordó en el proyecto donde realizó su servicio social.", "abierta", "");
preguntas.push(pregunta23);

let pregunta24 = new Pregunta("24.Especifique el tipo de aprendizaje obtenido al participar en la solución de la problemática del sector atendido.", "abierta", "");
preguntas.push(pregunta24);

let pregunta25 = new Pregunta("25.Especifique las acciones que realizó durante la prestación de servicio social.", "abierta", "");
preguntas.push(pregunta25);

let pregunta26 = new Pregunta("26.Especifique el No. de poblaciones beneficiadas con las acciones", "abierta", "");
preguntas.push(pregunta26);

let pregunta27 = new Pregunta("27.¿Participó en un proyecto de investigación en la realización del servicio social?", "multiple", "");
pregunta27.agregarPosibleRespuesta("Sí");
pregunta27.agregarPosibleRespuesta("No");
preguntas.push(pregunta27);

let pregunta28 = new Pregunta("28.¿En qué fases del proyecto participó?", "abierta", "");
preguntas.push(pregunta28);

let pregunta29 = new Pregunta("29.¿Se le reconoció su participación en ese proyecto de investigación? En caso de que su respuesta sea sí especifique como se le reconoció.", "seleccion", "");
preguntas.push(pregunta29);

let pregunta30 = new Pregunta("30.De los aspectos abordados ¿qué considera que se debe mejorar para la realización del servicio Social?", "abierta", "");
preguntas.push(pregunta30);

for (let i = 0; i < preguntas.length; i++) {
    seccionE.agregarPregunta(preguntas[i]);
}

evaluacion.agregarSeccion(seccionA);
evaluacion.agregarSeccion(seccionB);
evaluacion.agregarSeccion(seccionC);
evaluacion.agregarSeccion(seccionD);
evaluacion.agregarSeccion(seccionE);

let formulario = document.getElementById("formularioEvaluacion");

evaluacion._secciones.forEach(seccion => {
    let seccionHTML = document.createElement("div");
    seccionHTML.innerHTML = `<h2 class="mt-5">${seccion._titulo}</h2>`;
    seccion._preguntas.forEach(pregunta => {
        if (pregunta._tipoPregunta == "multiple") {
            let opcionesHTML = pregunta._respuestas.map(respuesta => `<option value="${respuesta}">${respuesta}</option>`).join('');
            seccionHTML.innerHTML += `
                <label>${pregunta._enunciado}</label>
                <select class="form-control" name="${pregunta._enunciado}">
                    ${opcionesHTML}
                </select>
            `;
        } else if (pregunta._tipoPregunta == "abierta") {
            seccionHTML.innerHTML += `
                <label>${pregunta._enunciado}</label>
                <input type="text" class="form-control" placeholder= "Escribe aquí" name="${pregunta._enunciado}">
            `;
        } else if (pregunta._tipoPregunta == "seleccion") {
            seccionHTML.innerHTML += `
                <label>${pregunta._enunciado}</label>
                <div>
                    <input type="radio" id="${pregunta._enunciado}-si" name="${pregunta._enunciado}-opcion" value="si">
                    <label for="${pregunta._enunciado}-si">Sí</label>
                </div>
                <div>
                    <input type="radio" id="${pregunta._enunciado}-no" name="${pregunta._enunciado}-opcion" value="no">
                    <label for="${pregunta._enunciado}-no">No</label>
                </div>
                <input type="text" class="form-control" placeholder= "Escribe aquí" name="${pregunta._enunciado}-opcion">
            `;
        }
    });
    formulario.appendChild(seccionHTML);
});

document.getElementById("enviarFormulario").addEventListener("click", function () {
    let respuestas = {};

    let elementos = formulario.elements;
    for (let i = 0; i < elementos.length; i++) {
        let elemento = elementos[i];
        respuestas[elemento.name] = elemento.value;
    }

    localStorage.setItem("respuestasEvaluacion", JSON.stringify(respuestas));
});


document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("respuestasEvaluacion")) {
        let respuestasGuardadas = JSON.parse(localStorage.getItem("respuestasEvaluacion"));
        for (let pregunta in respuestasGuardadas) {
            let elemento = document.querySelector(`[name="${pregunta}"]`);
            if (elemento) {
                elemento.value = respuestasGuardadas[pregunta];
            }
        }
    }
});
