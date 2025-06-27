/* 

React, Functional Programming, HTML, Tailwind, Typescript, DRY Principles

Neatt.tsx
import { FunctionComponent } from "react";
import TopNav from "../../components/website/TopNav";
import Contact from "../../components/website/Contact";
import Footer from "../../components/website/Footer";
import Header from "./neatt/header";

const Neatt: FunctionComponent = () => {
    return (
        <div className="max-w-[1440px] mx-auto w-full">
            <TopNav />
            <Header />
            <Contact />
            <Footer />
        </div>
    );
};

export default Neatt;


Header.tsx
import { FunctionComponent } from "react";
import NeattHeaderpic from '../../../assets/neatt-header.png';
import Button, { BUTTON_THEMES } from "../../../components/Button";

const Header: FunctionComponent = () => {
    return (
        <div className="flex align-content">
            <h1>NEATT</h1>
            <p>Welcome to NEATT, your resource for understanding eligibility </p>
            <Button text='REGISTER' theme={BUTTON_THEMES.INVERSE} styles='rounded-none' />
            <p>or</p>
            <Button text='SIGN IN' theme={BUTTON_THEMES.PRIMARY} styles='rounded-none' />
            <img src={NeattHeaderpic} className="w-[862px] height-[331px]" />
        </div>
    )
};

export default Header;
*/

/*

React, Functional Programming, Axios, Typescript, DRY Principles, Asynchronous Code

EventHelpers.ts
import axios from "axios";
import { IEvent } from "../../constants/events";

const BASE_URL = process.env.REACT_APP_CLIENTVITALS_API;

const formatEvent: () => IEvent = () => {
    return {
        id: '',
        name: '',
        sponsor:'',
        date: '',   
        location:'',   
        available:'',  
        takenSpots:'',  
        createdAt:'',  
        upDatedAt:'',  
    };
};

const newEvent = async (payload: { name: string, sponsor: string, location: string, date: string, available: string }) => {
    try {
        const result = await axios.post(`${BASE_URL}/events/add`, payload);
        return result
    } catch (error) {
        throw error;
    }
};

const updateEvent = async (eventData: IEvent) => {
    try {
        const link = `${BASE_URL}/events/edit`;
        const result = await axios.put(link, eventData);
        return result;
    } catch (error) {
        throw error;
    }
};

const getAllEvents = async () => {
    try {
        const result = await axios.get(`${BASE_URL}/events/all`);
        return result;
    } catch (error) {
        throw error
    };
};

export default {
    formatEvent,
    newEvent,
    updateEvent,
    getAllEvents
};

*/