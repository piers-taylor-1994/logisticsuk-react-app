import { useEffect, useState } from "react";
import "./homepage.scss";

const driversData = require('./data/drivers.json');

const DayBoxes = (props) => {
    let boxes = [];
    let dates = ["2021-02-01", "2021-02-02", "2021-02-03", "2021-02-04", "2021-02-05", "2021-02-06", "2021-02-07"]; 
    dates.forEach(date => {
        let style = props.tracedDays.includes(date) ? "box box-green" : "box";
        boxes.push(<span className={style} key={date}></span>)
    });

    return (
        <div className="boxes">
            {boxes}
        </div>
    )
}

function Drivers() {
    const data = driversData.data;
    const [drivers, setDrivers] = useState(data);

    useEffect(() => {
        setDrivers(data);
    }, [data])

    const onSearch = (e) => {
        if (e.target.value === "") setDrivers(data);
        else {
            let newList = data.filter(item => 
                item.surname.toLowerCase().includes(e.target.value.toLowerCase())
                || item.forename.toLowerCase().includes(e.target.value.toLowerCase())
                || item.vehicleRegistration.toLowerCase().includes(e.target.value.toLowerCase()));
            setDrivers(newList);
        }
    }

    let rows = drivers.map(driver => {
        let rest = 0, available = 0, drive = 0, work = 0, total = 0;
        let tracedDays = [];

        driver.traces.forEach(trace => {
            tracedDays.push(trace.date);
            trace.activity.forEach(activity => {
                switch (activity.type) {
                    case "rest":
                        rest += activity.duration;
                        break;
                    case "available":
                        available += activity.duration;
                        break;
                    case "drive":
                        drive += activity.duration;
                        break;
                    case "work":
                        work += activity.duration;
                        break;
                    default:
                        break;
                }

                total += activity.duration;
            });
        })

        return (
            <div className="row" key={driver.driverID}>
                <span>{driver.surname}</span>
                <span>{driver.forename}</span>
                <span>{driver.vehicleRegistration}</span>
                <span>{rest}</span>
                <span>{available}</span>
                <span>{drive}</span>
                <span>{work}</span>
                <span>{total}</span>
                <DayBoxes tracedDays={tracedDays} />
            </div>
        )
    })

    return (
        <div className="drivers">
            <div className="search">
                <label>
                    Search:
                    <input onChange={onSearch} />
                </label>
            </div>
            <div className="drivers-header">
                <div className="column-header">
                    <span>Surname</span>
                    <span>Forename</span>
                    <span>Reg</span>
                    <span>R</span>
                    <span>A</span>
                    <span>D</span>
                    <span>W</span>
                    <span>Total</span>
                </div>
                <div className="days-header">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                </div>
            </div>
            {rows}
        </div>
    )
}

function Homepage() {
    return (
        <div className="homepage">
            <Drivers />
        </div>
    )
}

export { Homepage };