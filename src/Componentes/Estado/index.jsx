import './estado.css'
const Estado = ({estado, cantidad, click}) => {
    return (
        <div className={"estado-content"} onClick={() => click(estado)}>
            <p>{estado} ({cantidad})</p>
        </div>
    )
}

export {Estado}