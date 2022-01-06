import Footer from "../Footer";
import Header from "../Header/Header";
import { Container, MyHabits } from "./style";
export default function HabitsPage() {
  return (
    <>
      <Header />
      <Container>
        <MyHabits>
          <p>Meus hábitos</p>
          <div>+</div>
        </MyHabits>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Container>
      <Footer />
    </>
  );
}
