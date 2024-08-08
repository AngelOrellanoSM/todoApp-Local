import './tareas.css'
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import { useContext, useState } from 'react';
import { TaskContext } from '../../Contexts/TasksContext';


const Tareas = ({tarea, onComplete, onDelete}) => {

    const {tasks, setTasks} = useContext(TaskContext);

    // CONTADOR DE LAS SUBTAREAS ---------------------------------------------------
    const completados = tarea.subTasks.filter((subtask) => subtask.completado === 1).length;

    const total = tarea.subTasks.length;
    //------------------------------------------------------------------------------

    //FUNCION PARA MOSTRAR LAS SUBTAREAS -------------------------------------------
    const [subtareaVisible, setSubtareaVisible] = useState(false);

    const hacerVisible = () => {
        setSubtareaVisible(!subtareaVisible)
    }
    //------------------------------------------------------------------------------

    // COMPLETAR UNA SUBTAREA -----------------------------------------------------------

    const completeSubTask = (index) => {
        const newTask = [...tasks];
        const indiceTask = newTask.findIndex((task) => task.index === tarea.index);
        const indice = newTask[indiceTask].subTasks.findIndex((subtask) => subtask.index === index);
        if(newTask[indiceTask].subTasks[indice].completado === 0){
            newTask[indiceTask].subTasks[indice].completado = 1; 
            if(!newTask[indiceTask].subTasks.some((subtask) => subtask.completado === 0)){
                newTask[indiceTask].completado = 1;
            }
        }else{
            newTask[indiceTask].subTasks[indice].completado = 0;
             newTask[indiceTask].completado =  0;
        }
        setTasks(newTask);
    }   

    //--------------------------------------------------------------------------------------

    return (
        
            <div className={`${tarea.importancia}-tarea contentGeneral`}>
                <div className={"tareas-content"}>
                    <div className={"content-checkmark"} onClick={onComplete}>
                        {tarea.completado === 1 && <FaCheck />}
                    </div>
                    <p className={"content-texto"}>
                        {tarea.descripcion}
                    </p>
                    <p>{tarea.fecha.getDate()}/{tarea.fecha.getMonth()}/{tarea.fecha.getFullYear()}</p>
                    <div className={"content-etiqueta"}>
                        {tarea.etiqueta}
                    </div>
                    <div className={"content-icons"}>
                        { 
                            total !== 0 && 
                            <div className={"icons-subtask"} onClick={hacerVisible}>
                                <HiOutlineMenu />
                                <p>{completados} / {total}</p>
                            </div>
                        }
                        <FaRegEdit  />
                        <MdDeleteOutline onClick={onDelete} />
                    </div>
                </div>
                {
                    subtareaVisible  && tarea.subTasks.map((subTask) => {
                        return (
                            <div className={"subtask-content"} onClick={() => completeSubTask(subTask.index)} key={`${tarea.index}.${subTask.index}`}>
                                <div className={"subtask-check"}>
                                    {subTask.completado === 1 && <FaCheck />}
                                </div>
                                <p className={"content-texto"}>
                                    {subTask.descripcion}
                                </p>
                                <div className={"content-icons"}>
                                    <FaRegEdit  />
                                    <MdDeleteOutline  />
                                </div>
                            </div>
                        )
                    })
                }
            </div>       
    )
}

export {Tareas}