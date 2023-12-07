import {useState,useEffect} from "react";

import GetPage from "./Get/Page";
import PostPage from "./Post/Page";

const Display = () => {
    const[showGet, setShowGet] = useState(true);
    const[showPost, setShowPost] = useState(false);

    useEffect(() => {
        if (showPost) {
            setShowGet(!showPost)
        }
    }, [showPost])

    useEffect(() => {
        if (showGet) {
            setShowPost(!showGet)
        }
    }, [showGet])

    return (
        <div className={"display"} data-testid={"display_frame"}>
            <div className={"display_nav"} data-testid={"display_nav"}>
                <button onClick={() => setShowGet(!showGet)}>GET</button>
                <button onClick={() => setShowPost(!showPost)}>POST</button>
            </div>
            <div className={"display_body"} data-testid={"display_header"}>
            {showGet && <GetPage />}
            {showPost && <PostPage />}
            </div>
        </div>
    )
}

export default Display;