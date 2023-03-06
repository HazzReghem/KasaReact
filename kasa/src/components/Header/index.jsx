import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/logoHeader.png'
import { StyledLink } from '../../utils/StyledLink'

const HomeLogo = styled.img`
  max-height: 68px;
  max-width: 210.32px;
`
const NavContainer = styled.nav`
  padding: 40px 100px 65px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={Logo} alt="Logo Kasa" />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
