import './tareas.css'
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";
import { useState } from 'react';


const Tareas = ({tarea}) => {


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

    return (
        
            <div className={`${tarea.importancia}-tarea contentGeneral`}>
                <div className={"tareas-content"}>
                    <div className={"content-checkmark"}>
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
                        <MdDeleteOutline  />
                    </div>
                </div>
                {
                    subtareaVisible  && tarea.subTasks.map((subTask) => {
                        return (
                            <div className={"subtask-content"}>
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