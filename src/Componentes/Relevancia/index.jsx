import { Tareas } from '../Tareas'
import './relevancia.css'

const Relevancia = () => {
    return (
        <div className={'relevancia-content'}>
            <div className={"content-titulo"}>
                <p>Importante</p>   
            </div>
            <div className={"content-tareas"}>
                <Tareas />
                <Tareas />
            </div>
        </div>
    )
}

export {Relevancia}