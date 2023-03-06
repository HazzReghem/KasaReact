import colors from '../../utils/colors'
import styled from 'styled-components'
import AboutBG from '../../assets/aboutBG.png'

const AboutWrapper = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`

const BannerContainer = styled.div`
  height: 225px;
  margin-bottom: 40px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${AboutBG});
  background-position: center;
  background-size: cover;
  // filter: brightness(80%);
  border: 1px white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`

function About() {
  return (
    <AboutWrapper>
      <BannerContainer />
    </AboutWrapper>
  )
}

export default About
