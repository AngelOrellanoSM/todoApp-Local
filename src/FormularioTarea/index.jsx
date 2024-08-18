import { useContext, useState } from 'react';
import './FormularioTarea.css'
import { TaskContext } from '../Contexts/TasksContext';

const FormularioTarea = ({cerrarEstado}) => {

    const {tasks, setTasks} = useContext(TaskContext);

    const [newTaskValue, setNewTaskValue] = useState({
        index: tasks[tasks.length - 1] ? tasks[tasks.length - 1].index + 1 : 1,
        titulo: "",
        descripcion: "",
        etiqueta: "",
        importancia: "",
        fecha: null,
        completado: 0,
        subTasks: []
    });


    const crearTodo = (e) =>{
        e.preventDefault();
        if(tasks.length !== 0){
            const nuevosTask = [...tasks, newTaskValue];
            setTasks(nuevosTask);
        }else{
            setTasks([newTaskValue]);
        }
        cerrarEstado();
    }


    return (
        <div className={"formulario-content"}>
            <h2>Añadir Nueva Tarea</h2>
            <p>Los campos con <span>*</span> son obligatorios.</p>
            <form onSubmit={(e) => crearTodo(e)}>
                <div className={"inputs-content"}>

                    <div className={"inputs-titulo"}>
                        <p>Titulo de la tarea <span>*</span></p>
                        <input
                            type='text' 
                            required
                            maxLength={50}
                            name='inputTitulo'
                            onChange={(e) => setNewTaskValue(prevValue => ({
                                ...prevValue,
                                titulo: e.target.value,
                            }))}
                        />
                    </div>

                    <div className={"inputs-fecha"}>
                        <p>Fecha de finalización <span>*</span></p>
                        <input 
                            type='date'
                            name='inputDate'
                            required
                            onChange={(e) => {
                                const fechaIngresada = new Date(e.target.value);
                                fechaIngresada.setDate(fechaIngresada.getDate() + 1);
                                setNewTaskValue(prevValue => ({
                                    ...prevValue,
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
                            onChange={(e) => setNewTaskValue(prevValue => ({
                                ...prevValue,
                                etiqueta: e.target.value,
                            }))}
                        />
                    </div>

                    <div className={"inputs-importancia"}>
                        <p>Importancia <span>*</span></p>
                        <select name='inputImportancia' 
                            defaultValue={""}
                            required
                            onChange={(e) => setNewTaskValue(prevValue => ({
                                ...prevValue,
                                importancia: e.target.value,
                        }))}>
                            <option value="" disabled>Selecciona una opcion</option>
                            <option value="Urgente">Urgente</option>
                            <option value="Importante">Importante</option>
                            <option value="Complementario">Complementario</option>
                        </select>
                    </div>

                </div>

                <div className={"textArea-content"}>
                    <p>Descripción de la tarea <span>*</span></p>
                    <textarea
                        required
                        maxLength={250}
                        name='inputDescripcion'
                        onChange={(e) => setNewTaskValue(prevValue => ({
                            ...prevValue,
                            descripcion: e.target.value,
                        }))}
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

export {FormularioTarea};