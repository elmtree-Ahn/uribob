import styled from 'styled-components';

const title = "불고기";

const url = (e) => {
return `https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query=${e}`
};

const ItemCard = () => {
  return(
    <ItemCardStyle>
      <h1>{title}</h1>
      <a href={url(title)}>고고고</a>
    </ItemCardStyle>
  )
}

const ItemCardStyle = styled.div`
width: 20vw;
height: 25vw;
background-color: white;
`

export default ItemCard;