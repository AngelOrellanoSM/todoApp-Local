import './tareas.css'
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import { useContext, useState } from 'react';
import { TaskContext } from '../../Contexts/TasksContext';
import { IoMdAddCircleOutline } from "react-icons/io";
import { Modal } from '../../Modal';
import { FormularioSubTarea } from '../../FormularioSubTarea';
import { FormularioTareaEdit } from '../../FormularioTarea/FormularioTareaEdit';



const Tareas = ({tarea, onComplete, onDelete, onDeleteSubTask}) => {

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


    const [añadirSubTarea, setAñadirSubTarea] = useState(false);
    const [editarTarea, setEditarTarea] = useState(false);


    return (
        
            <div className={`${tarea.importancia}-tarea contentGeneral`}>
                <div className={"tareas-content"}>
                    <div className={"content-checkmark"} onClick={onComplete}>
                        {tarea.completado === 1 && <FaCheck />}
                    </div>
                    <p className={"content-texto"}>
                        {tarea.descripcion}
                    </p>
                    <p>{tarea.fecha.getDate()}/{tarea.fecha.getMonth()+1}/{tarea.fecha.getFullYear()}</p>
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
                        <FaRegEdit  onClick={() => setEditarTarea(true)}/>
                        <MdDeleteOutline onClick={onDelete} />
                        <IoMdAddCircleOutline onClick={() => setAñadirSubTarea(true)}/>
                    </div>
                    {
                        añadirSubTarea && 
                        <Modal>
                            <FormularioSubTarea cerrarEstado={() => setAñadirSubTarea(false)} indexTarea={tarea.index}></FormularioSubTarea>
                        </Modal>
                    }
                    {
                        editarTarea && 
                        <Modal>
                            <FormularioTareaEdit cerrarEstado={() => setEditarTarea(false)} indexTarea={tarea.index}></FormularioTareaEdit>
                        </Modal>
                    }
                </div>
                {
                    subtareaVisible  && tarea.subTasks.map((subTask) => {
                        return (
                            <div className={"subtask-content"} key={`${tarea.index}.${subTask.index}`}>
                                <div className={"subtask-check"} onClick={() => completeSubTask(subTask.index)}>
                                    {subTask.completado === 1 && <FaCheck />}
                                </div>
                                <p className={"content-texto"}>
                                    {subTask.descripcion}
                                </p>
                                <div className={"content-icons"}>
                                    <FaRegEdit  />
                                    <MdDeleteOutline  onClick={() => onDeleteSubTask(tarea.index, subTask.index)}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>       
    )
}

export {Tareas}