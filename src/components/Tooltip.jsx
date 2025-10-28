import styles from './Tooltip.module.css';

const Tooltip = ({ children, text }) => {
  return (
    <span className={styles.tooltip} data-tooltip={text}>
      {children}
    </span>
  );
};

export default Tooltip;