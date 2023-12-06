import {useEffect, useState} from "react";
import GetPage from "./Get/Page";

const Display = () => {
    const[showGet, setShowGet] = useState(true);

    return (
        <div className={"display"} data-testid={"display_frame"}>
            <div className={"display_nav"} data-testid={"display_nav"}>
                <button onClick={() => setShowGet(!showGet)}>GET</button>
            </div>
            <div className={"display_body"} data-testid={"display_header"}>
            {showGet && <GetPage />}
            </div>
        </div>
    )
}

export default Display;