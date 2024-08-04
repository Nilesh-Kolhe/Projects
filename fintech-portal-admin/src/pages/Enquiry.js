import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from 'react';
import './Enquiry.css';

// Theme
import { AgGridReact } from "ag-grid-react";
// React Grid Logic
import "ag-grid-community/styles/ag-grid.css";
// Core CSS
import "ag-grid-community/styles/ag-theme-material.css";


const Enquiry = () => {

    const quickFilterText = '';
    const gridRef = useRef();

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([]);
    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "_id", headerName: 'id' },
        { field: "firstName" },
        { field: "lastName" },
        { field: "email" },
        { field: "contact" },
        { field: "type" }
    ]);
    const defaultColDef = () => { 
        return {
            width: 150,
            cellStyle: { fontWeight: 'bold' },
        };
    };
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_FINTECH_SERVER_URL}/getAllEnquiries`)
            .then(response => {
                console.log('Enquiries: ', response.data);
                setRowData(response.data);
            })
            .catch(error => console.error('Error Quering Enquiries !', error));
    }, []);

    const onFilterTextBoxChanged = useCallback(() => {
        gridRef.current.api.setGridOption(
            "quickFilterText",
            document.getElementById("filter-text-box").value,
        );
    }, []);

    return (
        <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
            <span className='head'>Enquiries Received</span>
            <input
                type="text"
                id="filter-text-box"
                placeholder="filter..."
                onInput={onFilterTextBoxChanged}
                style={{ width: "200px" }}
            />

            <div
                className={
                    "ag-theme-material"
                }
                style={{ width: "100%", height: "100%" }}
            >
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                    quickFilterText={quickFilterText}
                />
            </div>
        </div>
    );
};

export default Enquiry;