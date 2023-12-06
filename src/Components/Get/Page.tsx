import {useState,useEffect} from "react";
import Content from "./Content";

const Page = () => {
    const[showAirports, setShowAirports] = useState(false);
    const[airports, setAirports] = useState(new Array());

    const ShowAirportsFunction = async () => {
        await fetchAirports();
        setShowAirports(!showAirports);
    }

    const fetchAirports = async () => {
        await fetch("http://localhost:80/airport").then((response) => {
            return response.json();
        }).then((data) => {
            setAirports(data);
        });
    };

    return (
        <>
            <h3>GET</h3>
            <ul className={"get_nav"}>
                <li>
                    <button onClick={ShowAirportsFunction}>Airports</button>
                </li>
            </ul>
            <div className={"page_display"}>
                {showAirports && <Content data={ airports } type={"airport"} />}
            </div>
        </>
    )
}

export default Page;