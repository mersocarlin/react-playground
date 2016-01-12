import React from 'react';

import Button from './button';
import SkillList from './skill-list';

import './form-skills.scss';


export default React.createClass({
  getInitialState () {
    return {
      body: '',
      id: 0,
      skills: [],
      title: '',
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
    });
  },

  handleNewSkill (e) {
    e.preventDefault();

    this.setState({
      id: 0,
      body: '',
      title: '',
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
    });
  },

  render () {
    const { skills, body, title } = this.state;

    return (
      <div className="form-skills">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => this.setState({ title: e.target.value })}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Body</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => this.setState({ body: e.target.value })}
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
        />
      </div>
    );
  }
})
