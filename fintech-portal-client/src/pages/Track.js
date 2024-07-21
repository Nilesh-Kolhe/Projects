import axios from 'axios';
import React from 'react';
import { useParams } from "react-router-dom";

const Track = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>This is Tracking Page</h1>
            {id === undefined | null ?
                <>
                    <label>Enter Tracking ID: </label>
                    <br />
                    <input type='text' />
                    <br />
                    <button type='submit'> Track</button>
                </> : <h2>
                    Product id: {id}
                </h2>}

        </div>
    );
};

export default Track;