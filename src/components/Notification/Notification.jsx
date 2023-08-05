import PropTypes from 'prop-types'
export const Notification = ({ title }) => {
    return <>
        {title && (
            <p>{title}</p>
        )}
    </>
}
Notification.propTypes = {
    title: PropTypes.string.isRequired,
}