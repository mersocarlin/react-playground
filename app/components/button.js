import React from 'react';


export default React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired,
    text: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf([
      'default', 'primary', 'success', 'info', 'warning', 'danger',
    ]),
  },

  getDefaultProps () {
    return {
      size: '',
      type: 'default',
    };
  },

  render () {
    const { onClick, text, type } = this.props;
    const cssClass = `btn btn-${type}`;

    return (
      <a onClick={onClick} className={cssClass} href="#" role="button">
        {text}
      </a>
    );
  },
});
