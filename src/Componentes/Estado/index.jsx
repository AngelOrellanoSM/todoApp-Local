import './estado.css'
const Estado = ({estado, cantidad, click, selected}) => {
    return (
        <div className={`estado-content ${selected?"seleccionado":""}` } onClick={() => click(estado)}>
            <p>{estado} ({cantidad})</p>
        </div>
    )
}

export {Estado}