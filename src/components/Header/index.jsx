// eslint-disable-next-line import/no-unresolved
import { DateTime } from '../DateTime'
import { Container } from './styles'

export function Header(){
  return(
    <Container>
      <div>murgia@thiago</div>
      <div><DateTime/></div>
      <div>Template Inpired by my Linux-Ubuntu</div>
    </Container>
  )
}