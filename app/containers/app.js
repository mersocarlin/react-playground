import React from 'react';

import FormSkills from '../components/form-skills';

import './app.scss';


export default React.createClass({
  render () {
    return (
      <div className="react-playground">
        <div className="container">
          <FormSkills />
        </div>
      </div>
    );
  },
});
