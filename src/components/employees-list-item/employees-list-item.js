import "./employees-list-item.css";

const EmployeesListItem = (props) => {

    const changeValue = (e) => {
        onToggleProp(e)
    }

    const {name, salary, increase, like, onDelete, onToggleProp} = props;

    let activeClass = 'list-group-item d-flex justify-content-between';

    if (increase) {
        activeClass += ' increase';
    }

    if (like) {
        activeClass += ' like'
    }

    return (
        <li className={activeClass}>
            <span  
                className="list-group-item-label"
                data-toggle="like"
                onClick={onToggleProp}>
                    {name}
            </span>
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary}
                data-toggle="salary"
                onChange={changeValue}/>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    type="button"
                    className="btn-cookie btn-sm"
                    data-toggle="increase"
                    onClick={onToggleProp}>
                        <i className="fas fa-cookie"></i>
                </button>

                <button 
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}
export default EmployeesListItem;