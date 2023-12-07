import {useState} from "react";

type ContentProps = {
    option: string
}

const Content = ({option}: ContentProps) => {
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [airline, setAirline] = useState("");
    const [type, setType] = useState("");
    const [model, setModel] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [cityName, setCityName] = useState("");
    const [province, setProvince] = useState("");

    const postAirport = (code:string,name:string) => {
        fetch("http://localhost:80/airport", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: code,
                name: name
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            alert("Airport Posted");
        });
    };

    const postAircraft = (airline:string,type:string,model:string) => {
        fetch("http://localhost:80/aircraft", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                airlineName: airline,
                type: type,
                model: model
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            alert("Aircraft Posted");
        });
    };

    const postPassenger = (firstName:string,lastName:string,phoneNumber:string) => {
        fetch("http://localhost:80/passenger", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            alert("Passenger Posted");
        });
    };

    const postCity = (cityName:string,province:string) => {
        fetch("http://localhost:80/city", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: cityName,
                province: province
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            alert("City Posted");
        });
    };

    const returnContent = (option:string) => {
        let tmp;
        switch (option){
            case "airports":
                tmp = (
                    <div className={"content_panel"}>
                        <h3>Airports</h3>
                        Code: <input id={"code"} type={"text"} onChange={(event_data) => setCode(event_data.target.value)}/>
                        Name: <input id={"name"} type={"text"} onChange={(event_data) => setName(event_data.target.value)} />
                        <button onClick={() => postAirport(code,name)}>Submit</button>
                    </div>
                );
                break;
            case "aircraft":
                tmp = (
                    <div className={"content_panel"}>
                        <h3>Aircraft</h3>
                        Airline: <input type={"text"} onChange={(event_data) => setAirline(event_data.target.value)} />
                        Type: <input type={"text"} onChange={(event_data) => setType(event_data.target.value)} /> <br/>
                        Model: <input type={"text"} onChange={(event_data) => setModel(event_data.target.value)} />
                        <button onClick={() => postAircraft(airline,type,model)}>Submit</button>
                    </div>
                );
                break;
            case "passengers":
                tmp = (
                    <div className={"content_panel"}>
                        <h3>Passenger</h3>
                        First Name: <input type={"text"} onChange={(event_data) => setFirstName(event_data.target.value)}/>
                        Last Name: <input type={"text"} onChange={(event_data) => setLastName(event_data.target.value)}/> <br/>
                        Phone Number: <input type={"text"} onChange={(event_data) => setPhoneNumber(event_data.target.value)} />
                        <button onClick={() => postPassenger(firstName,lastName,phoneNumber)}>Submit</button>
                    </div>
                );
                break;
            case "cities":
                tmp = (
                    <div className={"content_panel"}>
                        <h3>Cities</h3>
                        Name: <input type={"text"} onChange={(event_data) => setCityName(event_data.target.value)} />
                        Province: <input type={"text"} onChange={(event_data) => setProvince(event_data.target.value)} />
                        <button onClick={() => postCity(cityName,province)}>Submit</button>
                    </div>
                );
        }
        return tmp;
    };

    return (
        <div className={"content"}>
            {returnContent(option)}
        </div>
    );
};

export default Content;