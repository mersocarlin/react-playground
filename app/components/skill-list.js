import React from 'react';

import SkillItem from './skill-item';

import './skill-list.scss';


export default React.createClass({
  propTypes: {
    onClick: React.PropTypes.func,
    skills: React.PropTypes.array,
  },

  render () {
    const { onClick, skills } = this.props;

    return (
      <div className="list-group skill-list">
        {
          !skills.length && <div className="empty-list">Your skill list is empty.</div>
        }
        {
          skills.map((skill, idx) => {
            const { id, title, body } = skill;

            return (
              <SkillItem
                key={idx}
                id={id}
                body={body}
                onClick={onClick}
                title={title}
              />
            );
          })
        }
      </div>
    );
  }
});
