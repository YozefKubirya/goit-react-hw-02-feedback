import PropTypes from 'prop-types'
import css from './FeedBackOptions.module.css'
export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
   return <div className={css.buttons}>
      {options.map((option) =>
<button key={ option} name={option} type='button' onClick={onLeaveFeedback}>{option}</button>)}
    </div>
}
FeedBackOptions.propTypes = {
   options: PropTypes.arrayOf(PropTypes.string.isRequired),
   onLeaveFeedback:PropTypes.func.isRequired,
}