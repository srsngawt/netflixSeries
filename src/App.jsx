import React from "react";
import Card from "./Card";
import Cdata from "./Cdata";

function App(){
    return(
        <>
            <div className="head">
                <h1 className="heading">A Netflix Top Series</h1>
            </div>
            {Cdata.map((val)=>{
                return(
                    <Card 
                        link={val.link}
                        src={val.src}
                        sname={val.sname}
                    />
                );
            })}
        </>
    );
}

export default App;
