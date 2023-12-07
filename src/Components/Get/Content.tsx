import { JSX } from "react";
import EditOptions from "./EditOptions";

const Content = (data:any) => {
    const formatData = (data:any) => {
        let tmp: JSX.Element[] = [];

        let dataKey = Object.keys(data.data._embedded)[0];

        switch (dataKey) {
            case "airport":
                let airports = data.data._embedded.airport
                console.log(data.data);
                console.log(airports);
                for (let i = 0; i < airports.length; i++) {
                    tmp.push(
                        <div className={"content_panel"} key={i}>
                            <h3>Code: {airports[i].code}</h3>
                            <div className={"flex"}>
                                <h4>{airports[i].name}</h4>
                                <EditOptions />
                            </div>
                        </div>
                    );
                }
                break;

            case "aircraft":
                let aircraft = data.data._embedded.aircraft;
                console.log(aircraft);
                for (let i = 0; i < aircraft.length; i++) {
                    tmp.push(
                        <div className={"content_panel"} key={i}>
                            <h3>{aircraft[i].airlineName}</h3>
                            <div className={"flex"}>
                                <h4>Type: {aircraft[i].type}</h4>
                                <h4>Model: {aircraft[i].model}</h4>
                                <EditOptions />
                            </div>
                        </div>
                    );
                }
                break;

            case "passenger":
                let passengers = data.data._embedded.passenger;
                for (let i = 0; i < passengers.length; i++) {
                    tmp.push(
                        <div className={"content_panel"} key={i}>
                            <div className={"flex"}>
                                <h3>{passengers[i].firstName} {passengers[i].lastName}</h3>
                                <h4>Phone: {passengers[i].phoneNumber}</h4>
                                <EditOptions />
                            </div>
                        </div>
                    );
                }
                break;

            case "city":
                let cities = data.data._embedded.city;
                for (let i = 0; i < cities.length; i++) {
                    tmp.push(
                        <div className={"content_panel"} key={i}>
                            <div className={"flex"}>
                                <h3>{cities[i].name}</h3>
                                <h4>{cities[i].province}</h4>
                                <EditOptions />
                            </div>
                        </div>
                    );
                }
                break;
        }




        return tmp;
    }

    return (
        <div className={"content"}>
            <h2>{Object.keys(data.data._embedded)[0]}</h2>
            {formatData(data)}
        </div>
    );
};

export default Content;