import colors from '../../utils/colors'
import styled from 'styled-components'
import HomeBG from '../../assets/homeBG.png'
import Card from '../../components/Card'
import accomodationData from '../../datas/logements.json'

const HomeWrapper = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`

// const Illustration = styled.img`
//   object-fit: cover;
//   height: 100%;
//   width: 100%;
//   border-radius: 25px;
//   filter: brightness(80%);
// `

const BannerContainer = styled.div`
  height: 225px;
  margin-bottom: 40px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${HomeBG});
  background-position: center;
  background-size: cover;
  // filter: brightness(80%);
  border: 1px white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BannerTitle = styled.h1`
  color: ${colors.white};
  size: 48px;
`

const GalleryContainer = styled.div`
  background-color: #f6f6f6;
  border: 1px #f6f6f6;
  border-radius: 25px;
`

function Home() {
  const { data, error } = useFetch(
    `https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`
  )

  return (
    <HomeWrapper>
      <BannerContainer>
        <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
      </BannerContainer>
      <GalleryContainer>
        <Card />
      </GalleryContainer>
    </HomeWrapper>
  )
}

export default Home
