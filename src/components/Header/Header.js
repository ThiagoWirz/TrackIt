import teste from "../../assets/img/teste.webp"
import { Container} from "./style"

export default function Header(){
    return(
        <Container>
            <h1>TrackIt</h1>
            <img src = {teste} alt = "user"/>
        </Container>
    )
}