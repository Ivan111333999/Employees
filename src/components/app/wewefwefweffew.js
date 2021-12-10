import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter"; 
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employess-add-form";

import "./app.css";


class App extends Component {
    state = {
        data: [
            {name: 'Rotan', salary: 800 + '$', increase: false, like: false, id: 1},
            {name: 'Banan', salary: 3000 + '$', increase: false, like: false, id: 2},
            {name: 'Ivan', salary: 15000 + '$', increase: false, like: false, id: 3},
        ],
        term: '',
        filter: 'all'
    }

    maxId = 4

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }));
    }

    onAddEmployees = (name, salary) => {

        if (name === '' || salary === '') {
            return
        }

        const newItem = {
            name, 
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => ({
            data: [...data, newItem]
        }))
    }


    onToggleProp = (id, prop, value) => {
        this.setState(({data}) => ({
            data: data.map(item => {

                if (item.id === id) {   
                    return {...item, [prop]: prop === 'salary' ? value : !item[prop]}
                }
                return item;
            })
        })) 
    }

    searchEmp = (items, term) => {
        if (term === '') {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) !== -1;
        });
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onChangeFilter = (filter) => {
        this.setState({filter})
    }

    onFilterEmp = (items, filter) => {
        if (filter === 'all') {
            return items;
        }

        if (filter === 'like') {
            return items.filter(item => item.like)
        }

        if (filter === 'more') {
            return items.filter(item => item.salary > 1000)
        }
    }

    render() {

        const {data, term, filter} = this.state;
        const visibleData = this.onFilterEmp(this.searchEmp(data, term), filter);
        const countEmployees = data.length;
        const countPrize = data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo 
                    countEmployees={countEmployees}
                    countPrize={countPrize}/> 
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                        filter={filter}
                        onChangeFilter={this.onChangeFilter}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAddEmployees={this.onAddEmployees}/>
            </div>
        );
    }
}

// export default App;