import React from 'react';
import styled from 'styled-components';
import css from '../App.css';

function Form( { list }) {

  function handleSubmit() {

  }

  function handleChange() {

  }

  return (
    <form onSubmit={handleSubmit} style={{width: '500px', margin: '0 auto', marginTop: '40px'}}>
      <fieldset>
        <legend>Add a Member</legend>
        <div className="form-group row">
          <label for="name" className="col-sm-2 col-form-label">
            Name
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your name"
                // value={user.username}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            // value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Role</label>
          <input
            type="role"
            className="form-control"
            name="role"
            placeholder="Role"
            onChange={handleChange}
            // value={user.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </fieldset>
    </form>
  );
}

export default Form;