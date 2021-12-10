import { useState, useEffect } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter"; 
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employess-add-form";

import "./app.css";

const App = () => {

    const [data, setData] = useState([
        {name: 'Rotan', salary: 800 + '$', increase: false, like: false, id: 1},
        {name: 'Banan', salary: 3000 + '$', increase: false, like: false, id: 2},
        {name: 'Ivan', salary: 15000 + '$', increase: false, like: false, id: 3},
    ]);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');
    const [maxId, setMaxId] = useState(4);

    const deleteItem = (id) => {
        setData(data => data.filter(item => item.id !== id))
    }

    const onAddEmployees = (name, salary) => {

        if (name === '' || salary === '') {
            return;
        }
        setMaxId(maxId => ++maxId);
        
        const newItem = {
            name, 
            salary: salary + '$',
            increase: false,
            like: false,
            id: maxId
        }
        setData(data => [...data, newItem])
    }


    const onToggleProp = (id, prop, value) => {
        setData(data => {
            return data.map(item => {

                if (item.id === id) {   
                    return {...item, [prop]: prop === 'salary' ? value : !item[prop]}
                }
                return item;
            })
        });
    }

    const searchEmp = (items, term) => {
        if (term === '') {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) !== -1;
        });
    }

    const onUpdateSearch = (term) => {
        setTerm(term)
    }

    const onChangeFilter = (filter) => {
        setFilter(filter)
    }

    const onFilterEmp = (items, filter) => {
        if (filter === 'all') {
            return items;
        }

        if (filter === 'like') {
            return items.filter(item => item.like)
        }

        if (filter === 'more') {
            return items.filter(item => item.salary.replace('$', '') > 1000)
        }
    }

    const visibleData = onFilterEmp(searchEmp(data, term), filter);
    const countEmployees = data.length;
    const countPrize = data.filter(item => item.increase).length;


    return (
        <div className="app">
            <AppInfo 
                countEmployees={countEmployees}
                countPrize={countPrize}/> 

            <div className="search-panel">
                <SearchPanel onUpdateSearch={onUpdateSearch}/>
                <AppFilter 
                    filter={filter}
                    onChangeFilter={onChangeFilter}/>
            </div>

            <EmployeesList 
                data={visibleData}
                onDelete={deleteItem}
                onToggleProp={onToggleProp}/>
            <EmployeesAddForm onAddEmployees={onAddEmployees}/>
        </div>
    );
}

export default App;