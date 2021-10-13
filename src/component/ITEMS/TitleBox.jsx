import styled from 'styled-components'

const TitleBox = (props) => {
  return(
    <TitleBoxStyle>{props.title}</TitleBoxStyle>
  )
}

const TitleBoxStyle = styled.div`
margin: 5vw 0;

font-size: 2rem;
font-weight: 600;
letter-spacing: -1px;
text-align: center;
`

export default TitleBox;