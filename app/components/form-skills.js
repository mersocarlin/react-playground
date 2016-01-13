import React from 'react';

import Button from './button';
import SkillList from './skill-list';
import skillsFixture from '../fixture/skills-sample';
import './form-skills.scss';


export default React.createClass({
  getInitialState () {
    return {
      body: '',
      id: 0,
      skills: skillsFixture,
      title: '',
      shouldUpdateList: true,
    };
  },

  handleSkillItemClick (skillId) {
    const { skills } = this.state;
    const skill = skills.find(s => s.id === skillId);

    if (!skill) {
      return null;
    }

    this.setState({
      id: skill.id,
      body: skill.body,
      title: skill.title,
      shouldUpdateList: false,
    });
  },

  handleNewSkill (e) {
    e.preventDefault();

    this.setState({
      id: 0,
      body: '',
      title: '',
      shouldUpdateList: true,
    });
  },

  handleSubmit (e) {
    e.preventDefault();

    const { id, skills, body, title } = this.state;

    if (!body || !title) {
      return null;
    }

    if (id === 0) {
      skills.push({
        id: skills.length + 1,
        title,
        body,
      });
    } else {
      const index = skills.findIndex(s => s.id === id);
      skills[index] = {
        id,
        body,
        title,
      };
    }

    this.setState({
      skills,
      id: 0,
      title: '',
      body: '',
      shouldUpdateList: true,
    });
  },

  handleChange (e) {
    const state = this.state;
    state[e.target.name] = e.target.value;

    this.setState(state);
  },

  render () {
    const { skills, body, title, shouldUpdateList } = this.state;

    return (
      <div className="form-skills">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={this.handleChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Body</label>
            <input
              type="text"
              name="body"
              className="form-control"
              onChange={this.handleChange}
              value={body}
            />
          </div>
          <Button
            onClick={this.handleNewSkill}
            text="New"
            type="primary"
          />
          <Button
            onClick={this.handleSubmit}
            text="Save"
            type="info"
          />
        </form>

        <SkillList
          onClick={this.handleSkillItemClick}
          skills={skills}
          shouldUpdate={shouldUpdateList}
        />
      </div>
    );
  },
});
