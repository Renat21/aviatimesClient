import React from "react";

import { observer } from 'mobx-react-lite';

const Overlay = observer((props) =>{
    if (!props.windowOpen){
        return null;
    }
    return (
        <div class="overlay" id="overlay-modal"></div>
    );
})

export default Overlay;