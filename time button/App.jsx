import React, { useState } from 'react';

const App =  () => {

    let newTime = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(newTime);

    const UpdateTime = () => {
        let newCime = new Date().toLocaleTimeString();

        setCtime(newCime);
    }


    return(
        <>

        <h1> {ctime} </h1>
        <button onClick={UpdateTime}> get time </button>


        </>

    );
};










export default App;
