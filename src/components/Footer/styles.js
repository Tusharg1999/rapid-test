import styled from 'styled-components';
let Styles = {}

Styles.Wrapper = styled.footer`
padding: 5rem;
p{
    color: gray;
}
h1{
    font-size: 1.2rem;
    font-weight: 600;
    color: blue;
}
h2{
    font-weight: 600;
}
`
Styles.Container = styled.div`
display: flex;
gap: 2rem;
margin:0 auto;
justify-content: space-around;

`
Styles.FirstDiv = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`

Styles.SecondDiv = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`

export { Styles };