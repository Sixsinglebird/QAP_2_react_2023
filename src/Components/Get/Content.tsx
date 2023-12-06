import { JSX } from "react";

const Content = (data:any) => {
    const formatData = (data:any) => {
        let tmp: JSX.Element[] = [];

        let dataKey = Object.keys(data.data._embedded)[0];

        switch (dataKey) {
            case "airport":
                let airports = data.data._embedded.airport
                for (let i = 0; i < airports.length; i++) {
                    tmp.push(
                        <div className={"airport"} key={i}>
                            <h3>Code: {airports[i].code}</h3>
                            <p>Nam: {airports[i].name}</p>
                        </div>
                    );
                }
                break;
        }




        return tmp;
    }

    return (
        <div className={"display_content"}>
            {formatData(data)}
        </div>
    );
};

export default Content;