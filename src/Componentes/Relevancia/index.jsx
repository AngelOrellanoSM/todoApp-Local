import { useContext } from 'react'
import { Tareas } from '../Tareas'
import './relevancia.css'
import { TaskContext } from '../../Contexts/TasksContext'


const Relevancia = ({relevancia}) => {

    const {taskDerivado, setTasks, tasks} = useContext(TaskContext); 

    const completarTarea = (index) => {
        const newTasks = [...tasks];
        const indice = newTasks.findIndex((task) => task.index === index);
        
        if(newTasks[indice].completado === 0){
            newTasks[indice].completado = 1;
            if(newTasks[indice].subTasks.length > 0){
                newTasks[indice].subTasks.forEach((subtask) => subtask.completado = 1);
            }
        }else{
            newTasks[indice].completado = 0;
            if(newTasks[indice].subTasks.length > 0){
                newTasks[indice].subTasks.forEach((subtask) => subtask.completado = 0);
            }
        }
        setTasks(newTasks);
    }

    const deleteTarea = (index) => {
        const newTasks = [...tasks];
        const indice = newTasks.findIndex((task) => task.index === index);
        newTasks.splice(indice, 1);
        setTasks(newTasks);
    }

    return (
        <div className={`relevancia-content ${relevancia}-content`}>
            <div className={`content-titulo ${relevancia}`}>
                <p>{relevancia}</p>   
            </div>
            <div className={"content-tareas"}>
                {
                    taskDerivado.filter((task) => task.importancia === relevancia).map((task) => {
                        return (
                            <div key={task.index}>
                                <Tareas 
                                    tarea={task} 
                                    onComplete={() => completarTarea(task.index)}
                                    onDelete = {() => deleteTarea(task.index)}
                                ></Tareas>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export {Relevancia}