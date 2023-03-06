import colors from '../../utils/colors'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardTitle = styled.div`
  font-size: 18px;
  color ${colors.white};
`

const CardWrapper = styled.div`
  padding: 55px 60px 50px 60px;
  height: 340px;
  width: 340px;
  border-radius: 10px;
`
function Card({ title, picture }) {
  return (
    <CardWrapper>
      <CardTitle />
    </CardWrapper>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

export default Card
