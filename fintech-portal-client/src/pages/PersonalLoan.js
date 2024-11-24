import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../ui-components/Button';
import { useNavigate } from "react-router-dom";
import AboutBackground from './images/Whoweare-1.jpg';
import './Loan.css';
import Footer from '../components/Footer';

const PersonalLoan = () => {

    return (
        <>
            <div className="loan-container">
                <p className='head'>Benefits of Personal Loan</p>
                <p>
                    Personal loans offer several benefits, making them an attractive option for many individuals. Let’s look at some of the advantages:
                    <h5>Versatile Usage</h5>
                    <p>You can use the loan amount for anything you want, such as paying for a dream vacation, covering medical bills, or consolidating debt.</p>
                    <h5>No Risk to Assets</h5>
                    <p>Since personal loans are unsecured, collateral is not required. Without the need for collateral, there’s no risk to your personal assets, making it a safe borrowing option.</p>
                    <h5>Quick Access to Lump Sum Amount</h5>
                    <p>You can access a lump sum amount as quickly as 24-36 hours. This flexibility allows you to cover immediate financial needs or emergencies without delay.</p>
                    <h5>Fixed Monthly Payments</h5>
                    <p>Fixed monthly payments allow you to create a budget and plan for other expenses throughout the loan term, keeping your finances stable</p>
                    <h5>Available for Salaried & Self-Employed</h5>
                    <p>Personal loans for salaried and self-employed individuals offer flexible financial solutions customized to meet diverse income needs. This ensures access to low-risk funds and helps manage finances effectively.</p>
                </p>
            </div>
            <Footer />
        </>
    );
};

export default PersonalLoan;