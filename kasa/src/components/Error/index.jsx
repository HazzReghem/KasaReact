import styled from 'styled-components'
import colors from '../../utils/colors'
import ErrorImg from '../../assets/404.png'
import { ErrorLink } from '../../utils/StyledLink'

const ErrorWrapper = styled.div`
  margin-top: 185px;
  max-width: 1440px;
  max-height: 1024px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ErrorSubtitle = styled.h2`
  margin: 60px 0 150px 0;
  max-width: 872px;
  max-height: 51px;
  color: ${colors.primary};
  font-weight: 500;
  font-size: 36px;
  line-height: 51px;
  display: flex;
  align-items: flex-end;
`

const Illustration = styled.img`
  max-width: 597px;
  max-height: 263px;
`
// REDIRECTION NON FONCTIONNEL !!!!!
function Error() {
  return (
    <ErrorWrapper>
      <Illustration src={ErrorImg} alt="Erreur 404" />
      <ErrorSubtitle>
        Oups ! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <ErrorLink to="/">Retourner sur la page d'accueil</ErrorLink>
    </ErrorWrapper>
  )
}

export default Error
