import { Li, Link, Nav, NavContainer, Ul } from './navbar.style'

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                    <Ul>
                        <Li>
                            <Link href="#about"> Sobre mi</Link>
                        </Li>
                        {/* <Li>
                        <Link href="#about">Experience</Link>
                    </Li> */}
                        <Li>
                            <Link href="#projects">Proyectos</Link>
                        </Li>
                        <Li>
                            <Link href="#contact">Contacta me</Link>

                        </Li>
                    </Ul>
            </NavContainer>
        </Nav>
    )
}

export default Navbar