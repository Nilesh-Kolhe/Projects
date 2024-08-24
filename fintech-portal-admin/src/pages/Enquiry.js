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
        { field: '_id', headerName: 'id', width: '300px', fontWeight: 'bold', fontSize: '100px' },
        { field: 'firstName', width: '125px' },
        { field: 'lastName', width: '125px' },
        { field: 'email', width: '250px' },
        { field: 'contact', width: '200px' },
        { field: "type", width: '100px' }
    ]);
    const defaultColDef = () => {
        return {
            cellStyle: { fontWeight: 'bold' },
        };
    };
    const paginationOptions = {
        pagination: true,
        paginationPageSize: 5,
        paginationPageSizeSelector: [10, 15, 20, 25, 50, 100]
    }
    // const pagination = true;
    // const paginationPageSize = 5;
    // const paginationPageSizeSelector = [10, 15, 20, 25, 50, 100];

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
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
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
                    pagination={paginationOptions.pagination}
                    paginationPageSize={paginationOptions.paginationPageSize}
                    paginationPageSizeSelector={paginationOptions.paginationPageSizeSelector}
                />
            </div>
        </div>
    );
};

export default Enquiry;