import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactBar = () => {
    return (
        <div className='flex p-3 bg-yellow-300 flex-col md:flex-row items-center justify-center'>
            <div className='px-20 text-blue-600'>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <a href="mailto:info@bothiagro.in">info@bothiagro.in</a>
            </div>
            <div className='px-20'>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +91-7757889965
            </div>
            <div className='md:px-20'>
                <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                Umri District Nanded, Maharashtra - 431807
            </div>
        </div>
    );
}

export default ContactBar;
