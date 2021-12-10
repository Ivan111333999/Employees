import './app-info.css'

const AppInfo = ({countEmployees, countPrize}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {countEmployees}</h2>
            <h2>Премию получат: {countPrize}</h2>
        </div>
    )
}

export default AppInfo;