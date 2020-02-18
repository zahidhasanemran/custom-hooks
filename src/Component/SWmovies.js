import React,{useState, useEffect} from 'react';
import Axios from 'axios';


function SWmovies(props) {
    
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState("");

    useEffect( () => {
        async function getData(){
            const response = await Axios.get(`https://swapi.co/api/films/${number}`);
            setMovie(response.data);
        }
        getData();
    }, [number]);

    return (
        <div>
            <h1>Movie List</h1>
            <h4>{movie.title} </h4>
            <p>{movie.opening_crawl}</p>
            <select onChange={e=> setNumber(e.target.value)} name="" id="" value={number}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    );
}

export default SWmovies;