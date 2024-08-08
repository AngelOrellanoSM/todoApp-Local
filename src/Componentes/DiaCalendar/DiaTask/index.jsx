import './diaTask.css'

const DiaTask = ({task}) => {
    return (
        <div className={`taskCalendar-content ${task.importancia}`}>
            {task.titulo}
        </div>
    )
}

export {DiaTask}