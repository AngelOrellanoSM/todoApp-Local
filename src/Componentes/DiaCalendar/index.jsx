import { FechaContext } from '../../Contexts/FechaContext';
import { TaskContext } from '../../Contexts/TasksContext';
import { DiaTask } from './DiaTask';
import './diaCalendar.css'
import { useContext } from 'react';

const DiaCalendar = ( {dia, mes, año, fechaCalendar}) => {

    const {fechaActual} = useContext(FechaContext);
    const {tasks} = useContext(TaskContext);

    const taskDelDia = tasks.filter((task) => {
        if(task.fecha.getFullYear()  === año && task.fecha.getDate() === dia && task.fecha.getMonth() === mes){
            return true;
        }else{
            return false;
        }
    });

    return (
        <div className={`diaCalendar-content`}>
            <div className={`content-day`}>
                <p className={`
                    ${
                        fechaActual.getDate() === dia ?
                        fechaActual.getMonth() === mes ? 
                        fechaActual.getFullYear() ? 'dayActual' : '' : '' : '' 
                    }
                    
                    ${
                        fechaCalendar.getMonth() === mes ? 'mesActual' : 'mesDiferente'
                    }

                `}>
                    {dia}
                </p>
            </div>

            <div className={'content-tasks'}>
                {   
                    taskDelDia.map((task, index) => {
                        return (
                            <DiaTask task={task} key={index}></DiaTask>
                        )
                    })
                }
            </div>
        </div>
    )
}

export {DiaCalendar};