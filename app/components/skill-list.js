import React from 'react';

import SkillItem from './skill-item';

import './skill-list.scss';


export default React.createClass({
  propTypes: {
    onClick: React.PropTypes.func,
    skills: React.PropTypes.array,
    shouldUpdate: React.PropTypes.bool.isRequired,
  },

  getInitialState () {
    return {
      search: '',
      skills: this.props.skills,
    };
  },

  componentWillReceiveProps (nextProps) {
    if (!nextProps.shouldUpdate) {
      return;
    }

    this.setState({
      search: '',
      skills: nextProps.skills,
    });
  },

  handleChange (e) {
    const value = e.target.value.toLowerCase();
    let { skills } = this.props;

    if (value) {
      skills = skills
        .filter(skill =>
          skill.title.toLowerCase().indexOf(value) !== -1 ||
          skill.body.toLowerCase().indexOf(value) !== -1);
    }

    this.setState({
      search: e.target.value,
      skills,
    });
  },

  render () {
    const { onClick } = this.props;
    const { skills, search } = this.state;

    return (
      <div className="skill-list">
        <input
          type="text"
          onChange={this.handleChange}
          className="form-control searchbox"
          placeholder="Type to search.."
          value={search}
        />
        {!skills.length && <div className="empty-list">Your skill list is empty.</div> }
        <div className="list-group">
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
      </div>
    );
  },
});
