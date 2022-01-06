import { Container} from "./style"
import { useContext } from "react"
import UserContext from "../../Contexts/userContext"

export default function Header(){
    const {user} = useContext(UserContext)
    return(
        <Container>
            <h1>TrackIt</h1>
            <img src = {user.image} alt = "user"/>
        </Container>
    )
}