import teste from "../../assets/img/teste.webp"
import { Container} from "./style"
import { useContext } from "react"
import UserContext from "../../Contexts/userContext"

export default function Header(){
    const {user} = useContext(UserContext)
    return(
        <Container>
            <h1>TrackIt</h1>
            <img src = "https://pbs.twimg.com/profile_images/1080320726501068801/49LHg6UN_400x400.jpg" alt = "user"/>
        </Container>
    )
}