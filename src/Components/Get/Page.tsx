import {useState} from "react";
import Content from "./Content";

const Page = () => {
    const[showAirports, setShowAirports] = useState(false);
    const[showAircraft, setShowAircraft] = useState(false);
    const[showPassengers, setShowPassengers] = useState(false);
    const[showCities, setShowCities] = useState(false);

    const[airports, setAirports] = useState(new Array());
    const[aircraft, setAircraft] = useState(new Array());
    const[passengers, setPassengers] = useState(new Array());
    const[cities, setCities] = useState(new Array());


    const ShowAirportsFunction = async () => {
        await fetchAirports();
        setShowAirports(!showAirports);
    }

    const ShowAircraftFunction = async () => {
        await fetchAircraft();
        setShowAircraft(!showAircraft);
    }

    const ShowPassengersFunction = async () => {
        await fetchPassengers();
        setShowPassengers(!showPassengers);
    };

    const ShowCitiesFunction = async () => {
        await fetchCities();
        setShowCities(!showCities);
    };

    const fetchCities = async () => {
        await fetch("http://localhost:80/city").then((response) => {
            return response.json();
        }).then((data) => {
            setCities(data);
        });
    };

    const fetchPassengers = async () => {
        await fetch("http://localhost:80/passenger").then((response) => {
            return response.json();
        }).then((data) => {
            setPassengers(data);
        });
    };

    const fetchAircraft = async () => {
        await fetch("http://localhost:80/aircraft").then((response) => {
            return response.json();
        }).then((data) => {
            setAircraft(data);
        });
    };

    const fetchAirports = async () => {
        await fetch(`http://localhost:80/airport`).then((response) => {
            return response.json();
        }).then((data) => {
            setAirports(data);
        });
    };

    return (
        <div className={"page"}>
            <h3>GET</h3>
            <div className={"flex_space"}>
                <div className={"nav"}>
                    <button onClick={ShowAirportsFunction}>Airports</button>
                    <button onClick={ShowAircraftFunction}>Aircraft</button>
                    <button onClick={ShowPassengersFunction}>Passengers</button>
                    <button onClick={ShowCitiesFunction}>Cities</button>
                </div>
                <div className={"page_screen"}>
                    {showAirports && <Content data={ airports } type={"airport"} />}
                    {showAircraft && <Content data={ aircraft } type={"aircraft"} />}
                    {showPassengers && <Content data={ passengers } type={"passenger"} />}
                    {showCities && <Content data={ cities } type={"city"} />}
                </div>
            </div>
        </div>
    )
}

export default Page;