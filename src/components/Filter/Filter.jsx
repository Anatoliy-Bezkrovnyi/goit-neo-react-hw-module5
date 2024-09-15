import { useSearchParams } from "react-router-dom";
const Filter = () => { 

    const [params, setParams] = useSearchParams();

    const filteredValue = params.get('title') ?? '';

     const handleChangeFilter = (newFilter) => {
        params.set('title', newFilter);
        setParams(params);
    }

    return (
        <input type="text" value={filteredValue} onChange={({target: {value}}) => handleChangeFilter(value)}/>
    );
}
 
export default Filter;