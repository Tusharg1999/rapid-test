import styled from 'styled-components'

let styles = {}

styles.Container = styled.nav`
padding: 1rem;
display: flex;
width: 100%;
max-width: 1280px;
margin: 0 auto;
align-items: center;
justify-content: space-between;
`

styles.List = styled.ul`
display: flex;
gap:1rem;
align-items: center;
`

export default styles