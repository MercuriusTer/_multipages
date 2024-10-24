import { useState } from "react";
import Variable from "../Variable/Variable";
import './add.css';

function Add({name}) {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    return ( 
        <div className="add-contrainer ">
            <h3 className="add-title">{name || 'Add'}</h3>
            <h2 className="add-display">
                <span className="badge bg-secondary">A={a}</span>
                <span className="badge bg-primary">A+B={a+b}</span>
                <span className="badge bg-secondary">B={b}</span>
            </h2>
            <div className="add-variable">
                <Variable name="A" value={a} setValue={setA} type={'int'}/>
                <Variable name="B" value={b} setValue={setB} type={'int'} />
            </div>
        </div>
     );
}

export default Add;