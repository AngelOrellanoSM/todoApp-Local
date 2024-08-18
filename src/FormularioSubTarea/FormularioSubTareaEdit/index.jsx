import { IoClose } from 'react-icons/io5'
import '../formularioSubTarea.css'
import { useContext, useState } from 'react'
import { TaskContext } from '../../Contexts/TasksContext'

const FormularioSubTareaEdit = ({cerrarEstado, indexTarea, indexSubTarea}) => {

    const {tasks, setTasks} = useContext(TaskContext);

    const indiceTarea = tasks.findIndex((task) => task.index === indexTarea);
    const indiceSubTarea = tasks[indiceTarea].subTasks.findIndex((subtask) => subtask.index === indexSubTarea);
    
    const [datosLocales, setDatosLocales] = useState({
        titulo: tasks[indiceTarea].subTasks[indiceSubTarea].titulo,
        descripcion: tasks[indiceTarea].subTasks[indiceSubTarea].descripcion,
    })

    const handleForm = (e) => {
        e.preventDefault();
        const newTasks = [...tasks];
        newTasks[indiceTarea].subTasks[indiceSubTarea].titulo = datosLocales.titulo;
        newTasks[indiceTarea].subTasks[indiceSubTarea].descripcion = datosLocales.descripcion;
        setTasks(newTasks);
        cerrarEstado();
    }


    return (
        <div className={"formularioSub-content"}>
            <div className={"formularioSub-tituloContent"}>
                <h2>Editar Sub Tarea</h2> 
                <IoClose className={"icono"} onClick={cerrarEstado}/>
            </div>
            <form onSubmit={handleForm}>
            
                <div className={"formularioSub-titulo"}>
                    <p>Titulo de la sub-tarea</p>
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

                <div className={"formularioSub-descripcion"}>
                    <p>Descripción de la sub-tarea</p>
                    <textarea
                        required
                        maxLength={200}
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

export {FormularioSubTareaEdit}