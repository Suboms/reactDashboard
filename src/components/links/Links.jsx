
import { NavLink } from 'react-router-dom'
import PropTypes from "prop-types"

const Links = ({label, to, icon}) => {
  return (
    <NavLink to={to}>
        <span>{icon}</span>
        <span>{label}</span>
    </NavLink>
  )
}

Links.propTypes = {
    label:PropTypes.string,
    to:PropTypes.string,
    icon:PropTypes.element
}
export default Links