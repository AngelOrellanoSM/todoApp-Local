import { useContext } from 'react'
import { Tareas } from '../Tareas'
import './relevancia.css'
import { TaskContext } from '../../Contexts/TasksContext'


const Relevancia = ({relevancia}) => {

    const {taskDerivado} = useContext(TaskContext); 

    return (
        <div className={`relevancia-content ${relevancia}-content`}>
            <div className={`content-titulo ${relevancia}`}>
                <p>{relevancia}</p>   
            </div>
            <div className={"content-tareas"}>
                {
                    taskDerivado.filter((task) => task.importancia === relevancia).map((task) => {
                        return (
                            <div key={task.titulo}>
                                <Tareas tarea={task}></Tareas>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export {Relevancia}