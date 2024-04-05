import Button from "../atoms/Button";

const Footer = () =>  (
  <footer className="fixed bottom-0 left-0 w-full z-10 shadowFooter py-4 sm:py-8">
    <div className="container flexCenter mx-auto">
      <Button className="" href="#carrito">
        Ver Carrito
      </Button>
    </div>
  </footer>
)

export default Footer