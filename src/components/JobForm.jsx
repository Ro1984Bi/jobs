import React, { useState } from 'react'
import '../css/JobForm.css'
import { v4 as uuidv4 } from 'uuid';

function JobForm(props) {

  const [input,setInput] = useState('')
  
  const handleChange = (e) => {
    setInput(e.target.value)

  }

  const handleSubmit = e => { 
    e.preventDefault()
    const newJob = {
      id: uuidv4(),
      text: input,
      completed: false
    }
  props.onSubmit(newJob)
  }

  return (
    <form onSubmit={handleSubmit} className='job-form'>
        <input
        className='job-input'
        type='text'
        placeholder='Add job'
        name='text'  
        onChange={handleChange}/> 
        <button className='job-button'>
            Add
        </button>
    </form>
  )
}

export default JobForm