import './Variable.css'

function Variable({type, name, value, setValue}) {
    return ( 
        <div className='variable-wrapper'>
            <h3 className='variable-title'>{name || 'Variable'}</h3>
            <button className='btn btn-danger' onClick={() => setValue(value-1)}>-</button>
            <span className='variable-value'>{type && type === 'int' ? value : value.toFixed(2)}</span>
            <button className='btn btn-success' onClick={() => setValue(value+1)}>+</button>
        </div>
    ) ;
}

export default Variable;