import Container from "react-bootstrap/Container";
import NavbarSection from "./components/NavbarSection";
import HeroImage from "./components/HeroImage";
import ImageSection from "./components/ImageSection";
import ButtonsSection from "./components/ButtonsSection";
import RegistrationForm from "./components/RegistrationForm";
import ContactSection from "./components/ContactSection";
import UsersTable from "./components/UsersTable";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarSection />

      <header id="home" className="py-5">
        <Container>
          <h1 className="display-6 fw-bold mb-2">
            Bootstrap Assignment (React)
          </h1>
          <p className="text-muted mb-0">
            Components: Navbar, Form, Table, Images, and Buttons.
          </p>
        </Container>
      </header>

      <HeroImage />

      <main className="py-5">
        <Container>
          <ImageSection />
          <ButtonsSection />

          <section id="about" className="mb-5">
            <RegistrationForm />
          </section>

          <section className="mb-5">
            <UsersTable />
          </section>

          <section id="contact">
            <ContactSection />
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
