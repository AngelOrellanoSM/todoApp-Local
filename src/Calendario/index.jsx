import './calendario.css'

const Calendario = () => {
    const dias = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

    return (
        <div className={"calendario-content"}>
            <div className={"content-year"}>
                <p>2024</p>
            </div>
            <div className={"content-month"}>
                <button>Anterior</button>
                <p>Julio</p>
                <button>Next</button>
            </div>
            <div className={"content-days"}>
                {dias.map((dia) => {
                    return (
                        <p>{dia}</p>
                    )
                })}
            </div>
        </div>
    )
}

export {Calendario}