import React, { useState } from 'react';

// regex for valid phone number 

const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
  // declare current state and state setter 
  const [phone, setPhone] = useState("")
  const handleChange = ({ target })=> {
    const newPhone = target.value;
    const isValid = validPhoneNumber.test(newPhone);
    if (isValid) {
        const handleChange = ({target}) => setPhone(newPhone.value)
    }
    // just ignore the event, when new value is invalid
  };

  return (
    <div className='phone'>
      <label for='phone-input'>Phone: </label>
      <input id='phone-input' onChange={handleChange} value={phone}/>
    </div>
  );
}


