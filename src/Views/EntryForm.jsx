import React from 'react'

const EntryForm = () => {
  return (
    <div className='px-5 bg-gray-300'>
        
         <div className="flex-column input-container">
          <label className='rt text-lg' htmlFor="name">:نام</label>
          <input
            id="name"
            className='input-field'
            type="text"            
            placeholder="12345-1234567-1"
            required
          />
        </div>
        <div className="flex-column input-container">
          <label className='rt text-lg' htmlFor="cnic">:شناختی کارڈ</label>
          <input
            id="cnic"
            className='input-field'
            type="text"            
            placeholder="12345-1234567-1"
            required
          />
        </div>
        <div className="flex-column input-container">
          <label className='rt text-lg' htmlFor="fname">:والد کا نام</label>
          <input
            id="fname"
            className='input-field'
            type="text"            
            placeholder="12345-1234567-1"
            required
          />
        </div>
        <div className="flex-column input-container">
          <label className='rt text-lg' htmlFor="work">:پیشہ</label>
          <input
            id="work"
            className='input-field'
            type="text"            
            placeholder="12345-1234567-1"
            required
          />
        </div>
        <div className="flex-column input-container">
          <label className='rt text-lg' htmlFor="ph">:فون</label>
          <input
            id="ph"
            className='input-field'
            type="text"            
            placeholder="12345-1234567-1"
            required
          />
        </div>
        <div className="flex-column input-container">
          <label className='rt text-lg' htmlFor="ph">:ضلع</label>
          <input
            id="ph"
            className='input-field'
            type="text"            
            placeholder="12345-1234567-1"
            required
          />
        </div>
        <div className="flex-column input-container">
          <label className='rt text-lg' htmlFor="ph">:سینف</label>
          <input
            id="ph"
            className='input-field'
            type="text"            
            placeholder="12345-1234567-1"
            required
          />
        </div>

        <button type='submit' className='btn'>Submit</button>
    </div>
  )
}

export default EntryForm