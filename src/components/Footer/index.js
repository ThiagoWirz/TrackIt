import { Container } from "./style"
import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <Container>
            <Link to="/habitos">Hábitos</Link>
            <Link to="/hoje">
                <div>Hoje</div>
            </Link>
            <Link to="historico">Histórico</Link>
        </Container>
    )
}