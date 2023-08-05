import PropTypes from 'prop-types';
import css from './Statistics.module.css'
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <div className={css.statistics}> 
      <p>good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>bad: {bad} </p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage?positivePercentage:0}%</p>
    </div>
}
Statistics.protoTypes = {
   good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  positivePercentage: PropTypes.func.isRequired,
}