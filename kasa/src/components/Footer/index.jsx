import Logo from '../../assets/logoFooter.png'
import styled from 'styled-components'
import colors from '../../utils/colors'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  max-height: 209px;
  background-color: ${colors.black};
`

const FooterLogo = styled.img`
  max-width: 122px;
  max-height: 39.44px;
  margin-bottom: 29px;
`

const Rights = styled.span`
  font-size: 24px;
  line-height: 34px;
  max-width: 513px;
  max-height: 46px;
  margin-bottom: 30px;
  color: ${colors.white};
`

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={Logo} alt="Logo Kasa" />
      <Rights>© 2020 Kasa. All rights reserved</Rights>
    </FooterContainer>
  )
}

export default Footer
