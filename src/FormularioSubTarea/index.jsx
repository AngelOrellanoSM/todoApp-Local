import { useContext, useState } from 'react';
import './formularioSubTarea.css'
import { IoClose } from "react-icons/io5";
import { TaskContext } from '../Contexts/TasksContext';


const FormularioSubTarea = ({cerrarEstado, indexTarea}) => {

    const {tasks, setTasks} = useContext(TaskContext);

    const indiceTask = tasks.findIndex((task) => task.index === indexTarea);
    
    const [newSubTask, setNewSubTask] = useState({
        index: tasks[indiceTask].subTasks[tasks[indiceTask].subTasks.length - 1] ? tasks[indiceTask].subTasks[tasks[indiceTask].subTasks.length - 1].index + 1  : 1,
        titulo: "",
        descripcion: "",
        completado: 0,
    })
   
    const crearSubTarea = (e) =>{
        e.preventDefault();

        const newTask = tasks.map((task) => {
            if(task.index === indexTarea){
                return {
                    ...task,
                    completado: 0,
                    subTasks: [...task.subTasks, newSubTask],
                };
            }
            return task;
        });        
        setTasks(newTask);
        cerrarEstado();
    }


    return (
        <div className={"formularioSub-content"}>
            <div className={"formularioSub-tituloContent"}>
                <h2>Añadir Nueva Sub Tarea</h2> 
                <IoClose className={"icono"} onClick={cerrarEstado}/>
            </div>
            <p className={"indicacion"}>Los campos con <span>*</span> son obligatorios.</p>
            <form onSubmit={(e) => crearSubTarea(e)}>
               
                <div className={"formularioSub-titulo"}>
                    <p>Titulo de la sub-tarea <span>*</span></p>
                    <input
                        type='text' 
                        required
                        maxLength={50}
                        name='inputTitulo'
                        onChange={(e) => {
                            setNewSubTask((prevValue) => ({
                                ...prevValue,
                                titulo: e.target.value,
                            }))
                        }}
                    />
                </div>

                <div className={"formularioSub-descripcion"}>
                    <p>Descripción de la sub-tarea <span>*</span></p>
                    <textarea
                        required
                        maxLength={200}
                        name='inputDescripcion'
                        onChange={(e) => {
                            setNewSubTask((prevValue) => ({
                                ...prevValue,
                                descripcion: e.target.value,
                            }))
                        }}
                    ></textarea>
                </div>

                <div className={"formularioSub-button-content"}>
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

export {FormularioSubTarea};