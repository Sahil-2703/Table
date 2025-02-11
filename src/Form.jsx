import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
      </div>

      <div>
        <label>Age</label>
        <input
          type="number"
          {...register('age', {
            required: 'Age is required',
            min: { value: 1, message: 'Age must be greater than 0' },
          })}
        />
        {errors.age && <span style={{ color: 'red' }}>{errors.age.message}</span>}
      </div>

      <div>
        <label>Email</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;