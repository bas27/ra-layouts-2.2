import PropTypes from 'prop-types';

export default function IconSwitch({ icon, onSwitch }) {
  return (
    <div className="iconSwitch">
      <span
        className="material-icons"
        onClick={() => onSwitch()}
      >{icon}</span>
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.string.isRequired
}
