import {useState} from 'react';
const PutDachesComponent=()=>{
    const [numbers, setNumbers] = useState('')
    const changeInput=(event)=>{
        event.preventDefault();
        const newValue=event.value.join(',')
        setNumbers(newValue)
    }
    return(
        <input name="entryNumbers" value={numbers} onChange={changeInput} >{numbers}</input>
    )
};
export default PutDachesComponent;