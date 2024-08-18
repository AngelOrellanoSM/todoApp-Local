import { useContext, useState } from 'react'
import '../FormularioTarea.css'
import { TaskContext } from '../../Contexts/TasksContext';

const FormularioTareaEdit = ({cerrarEstado, indexTarea}) =>{

    const {tasks, setTasks} = useContext(TaskContext);
    
    const indice = tasks.findIndex((task) => task.index === indexTarea);
    
    
    const formatDateToInputValue = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    
    const [datosLocales, setDatosLocales] = useState({
        titulo: tasks[indice].titulo ,
        fechaFormateada: formatDateToInputValue(tasks[indice].fecha) ,
        fecha: tasks[indice].fecha,
        etiqueta: tasks[indice].etiqueta ,
        importancia: tasks[indice].importancia ,
        descripcion: tasks[indice].descripcion ,
    });

    const handleForm = (e) => {
        e.preventDefault();
        const newTasks = [...tasks];
        newTasks[indice].titulo = datosLocales.titulo;
        newTasks[indice].fecha = datosLocales.fecha;
        newTasks[indice].etiqueta = datosLocales.etiqueta;
        newTasks[indice].importancia = datosLocales.importancia;
        newTasks[indice].descripcion = datosLocales.descripcion;
        setTasks(newTasks);
        cerrarEstado();
    }

    return (
        <div className={"formulario-content"}>
            <h2>Editar Tarea</h2>
            <form onSubmit={(e) => handleForm(e)}>
                <div className={"inputs-content"}>
                    <div className={"inputs-titulo"}>
                        <p>Titulo de la tarea</p>
                        <input
                            type='text' 
                            required
                            maxLength={50}
                            name='inputTitulo'
                            value={datosLocales.titulo}
                            onChange={(e) => {
                                setDatosLocales((prevValue) => ({
                                    ...prevValue,
                                    titulo: e.target.value,
                                }))
                            }}
                        />
                    </div>

                    <div className={"inputs-fecha"}>
                        <p>Fecha de finalización</p>
                        <input 
                            type='date'
                            name='inputDate'
                            required
                            value={datosLocales.fechaFormateada}
                            onChange={(e) => {
                                const fechaIngresada = new Date(e.target.value);
                                fechaIngresada.setDate(fechaIngresada.getDate() + 1);
                                setDatosLocales((prevValue) => ({
                                    ...prevValue,
                                    fechaFormateada: formatDateToInputValue(fechaIngresada),
                                    fecha: fechaIngresada,
                                }))
                            }}
                        />
                    </div>

                    <div className={"inputs-etiqueta"}>
                        <p>Etiqueta</p>
                        <input
                            type='text' 
                            maxLength={30}
                            name='inputEtiqueta'
                            value={datosLocales.etiqueta}
                            onChange={(e) => {
                                setDatosLocales((prevValue) => ({
                                    ...prevValue,
                                    etiqueta: e.target.value,
                                }))
                            }}
                        />
                    </div>

                    <div className={"inputs-importancia"}>
                        <p>Importancia</p>
                        <select name='inputImportancia' 
                            defaultValue={datosLocales.importancia}
                            required
                            onChange={(e) => {
                                setDatosLocales((prevValue) => ({
                                    ...prevValue,
                                    importancia: e.target.value,
                                }))
                            }}
                        >
                            <option value="" disabled>Selecciona una opcion</option>
                            <option value="Urgente">Urgente</option>
                            <option value="Importante">Importante</option>
                            <option value="Complementario">Complementario</option>
                        </select>
                    </div>

                </div>

                <div className={"textArea-content"}>
                    <p>Descripción de la tarea</p>
                    <textarea
                        required
                        maxLength={250}
                        name='inputDescripcion'
                        value={datosLocales.descripcion}
                        onChange={(e) => {
                            setDatosLocales((prevValue) => ({
                                ...prevValue,
                                descripcion: e.target.value,
                            }))
                        }}
                    ></textarea>
                </div>

                <div className={"button-content"}>
                    <button type='button' className={"button-cancelar"} onClick={cerrarEstado}>
                        Cancelar
                    </button>
                    <button type='submit' className={"button-aceptar"}>
                        Aceptar
                    </button>
                </div>
            </form>
        </div>
    )
}

export {FormularioTareaEdit}