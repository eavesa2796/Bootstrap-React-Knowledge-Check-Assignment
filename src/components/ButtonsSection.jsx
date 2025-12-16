import Button from "react-bootstrap/Button";

function ButtonsSection() {
  return (
    <div className="d-flex justify-content-center gap-3 my-4">
      <Button variant="primary">Always Visible Button</Button>
      <Button variant="outline-secondary" className="d-none d-md-block">
        Hidden on Small Screens
      </Button>
    </div>
  );
}

export default ButtonsSection;
