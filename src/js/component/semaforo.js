import React from "react";

const Semaforo = () => {

    
    return (
        <div className="container bg-image">
            <div className="base bg-black mx-auto">
                    <div className="row">
                        <button className="light bg-danger border-0"></button>
                    </div>
                    <div className="row">
                        <button className="light bg-warning border-0"></button>
                    </div>
                    <div className="row">
                        <button className="light bg-success border-0"></button>
                    </div>
            </div>
        </div>
    );
};

export default Semaforo