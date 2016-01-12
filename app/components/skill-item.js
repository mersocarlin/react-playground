import React from 'react';


export default React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    body: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
  },

  handleClick () {
    const { id, onClick } = this.props;

    onClick(id);
  },

  render () {
    const { body, title } = this.props;

    return (
      <a onClick={this.handleClick} href="#" className="list-group-item">
        <h4 className="list-group-item-heading">{title}</h4>
        <p className="list-group-item-text">{body}</p>
      </a>
    );
  },
});
