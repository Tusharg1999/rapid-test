import styled from 'styled-components'

let Styles = {}

Styles.Wrapper = styled.div`
max-width:1280px;
margin: 0 auto;
`

Styles.FirstContainer = styled.div`
display: flex;
align-items: center;
height: 50vh;
h1{
    font-size: 2.2rem;
}

p{
    color: gray;
}

.button-Container{
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-right: 2rem;
    margin-top: 2rem;
}
`

Styles.Button = styled.button`
outline: none;
border: none;
border-radius: 5px;
padding: 1rem 1rem ;
color: ${({ color }) => color};
background-color: ${({ background }) => background};
`

Styles.LeftContainer = styled.div`
flex:1;
display: flex;
flex-direction: column;
gap: 1rem;
align-items: center;
`

Styles.RightContainer = styled.div`
flex:1;
`

Styles.SecondContainer = styled.div`
display: flex;
padding: 1rem;
justify-content: center;
gap: 1rem;

p{
    color: gray;
}

.features{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width:320px;
    padding: 10px;
}
`

Styles.PartnersContainer = styled.div`
padding: 1rem;
width: 100%;
left: 0;
.line{
    height: 1px;
    width: 100%;
    position: absolute;
    left: 0;
    border-top: 1px solid rgba(0,0,0,0.1);
}
.container{
    padding: 1rem;
    margin:0 auto;
    width: 55%;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo-container{
    height: 150px;
    width: 150px;
}
`

Styles.LoginContainer = styled.div`
display: flex;
gap: 1rem;
background-color: #fafafa;
padding: 5rem;
align-items: center;

.left-container{
flex: 1;
}

.right-container{
    flex: 1;
    display: flex;
    flex-direction:column;
    gap: 2rem;
    justify-content: center;
    height: 100%;
}
b{
    color: lightgreen;
}

h1{
    font-size: 2rem;
}
p{
    color: gray;
}
`

Styles.FocusContainer = styled.div`
display: flex;
gap: 1rem;
background-color: #fafafa;
padding: 5rem;
align-items: center;

p{
    color: gray;
}

.left-container{
  flex: 1;
    display: flex;
    flex-direction:column;
    gap: 2rem;
    justify-content: center;
    height: 100%;
}
b{
    color: blue;
}

h1{
    font-size: 2rem;
}

.key-div{
    display: flex;
    flex-direction: column;
    padding: 10px;
}


.right-container{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        transform: scale(1.5);
    }
}
`

export default Styles;