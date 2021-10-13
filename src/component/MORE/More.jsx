import styled from 'styled-components'
import TitleBox from '../ITEMS/TitleBox';

const More = () => {
  return(
    <MoreStyle>
      <TitleBox title="이런 음식은 어떻소?"/>
    </MoreStyle>
  )
}

const MoreStyle = styled.div`
padding-top: 70px;
`

export default More;