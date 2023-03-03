import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
  margin-left: 57px;
  text-decoration: none;
  font-size: 24px;
  text-align: center;
  color: ${colors.primary};
  ${(props) => props.$isFullLink};
`
export const ErrorLink = styled(Link)`
  max-width: 284px;
  max-height: 26px;
  color: ${colors.primary};
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  text-decoration-line: underline;
  margin-bottom: 150px;
`
