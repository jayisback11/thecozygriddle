import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from "../../data.json";

function Footer() {
    const [newDate, setNewDate] = useState('');
    useEffect(() => {
        let todayDate = new Date();
        let todayYear = todayDate.getFullYear();
        setNewDate([todayYear])
    }, []);

  return (
    <footer className='bg-body-tertiary' id='footer'>
        <p className='pt-3 pb-3 m-0 text-center'>Copyright &copy; {data.footer.businessname}, 2025</p>
    </footer>
  )
}

export default Footer;