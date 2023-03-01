import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Get Started</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build the Community Your Fans will Love</h1>

            <p>
              Huddle re-imagines the way we build our communities. You have a
              voice, but so does your audience, Create connections your users as
              you engage in genuine discussions.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started for Free
            </Button>

            <Image src="./images/illustration-mockups.svg" alt="" />
          </div>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
