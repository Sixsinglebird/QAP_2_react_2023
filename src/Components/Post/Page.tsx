import {useState} from "react";
import Content from "./Content";

const Page = () => {
    const[showAirports, setShowAirports] = useState(false);
    const[showAircraft, setShowAircraft] = useState(false);
    const[showPassengers, setShowPassengers] = useState(false);
    const[showCities, setShowCities] = useState(false);


    // @ts-ignore
    return (
        <div className={"page"} >
            <h3>POST</h3>
            <div className={"flex_space"}>
                <div className={"nav"}>
                    <button onClick={() => setShowAirports(!showAirports)}>Airport</button>
                    <button onClick={() => setShowAircraft(!showAircraft)}>Aircraft</button>
                    <button onClick={() => setShowPassengers(!showPassengers)}>Passenger</button>
                    <button onClick={() => setShowCities(!showCities)}>City</button>
                </div>
                <div className={"page_screen"}>
                    <div className={"content_panel"}>
                        {showAirports && <Content option={"airports"} />}
                        {showAircraft && <Content option={"aircraft"}/>}
                        {showPassengers && <Content option={"passengers"}/>}
                        {showCities && <Content option={"cities"}/>}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page;