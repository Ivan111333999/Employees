import { useState } from "react";
// import "./employees-add-form.css"
import "./employees-add-form.scss"

const EmployeesAddForm = ({onAddEmployees}) => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');


    const onValueChange = (e) => {
        e.target.name === "name" ? setName(e.target.value) : setSalary(e.target.value); 
    }

    const onAddedForm = (e) => {
        e.preventDefault();

        onAddEmployees(name, salary);
        setName('') 
        setSalary(''); 
    }

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={onAddedForm}>
                    <input 
                        type="text" 
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={onValueChange}/>
                    <input 
                        type="number" 
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={onValueChange}/>
                    <button 
                        type="submit"
                        className="btn btn-outline-light">
                            Добавить
                    </button>
                </form>
            </div>
        )
}

export default EmployeesAddForm;