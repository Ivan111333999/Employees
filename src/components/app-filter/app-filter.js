import "./app-filter.css";

const AppFilter = ({filter, onChangeFilter}) => {

    const buttonsData = [
        {name: 'all', text: 'Все сотрудники'},
        {name: 'like', text: 'Сотрудники на повышение'},
        {name: 'more', text: 'З/П больше 1000$'},
    ]

    const buttons = buttonsData.map(button => {
        
        const {name, text} = button;
        const activeClass = name === filter ? "btn btn-light" : "btn btn-outline-light"

        return (
            <button 
                key={name}
                className={activeClass}
                type="button"
                onClick={() => onChangeFilter(name)}>
                    {text}
            </button> 
        )
    }); 

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;