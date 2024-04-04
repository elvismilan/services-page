import Button from "../atoms/Button";

export const Service = ({onClick}) => (
  <form className="text-center" method="POST" >
    <h3 className="h3 text-primary">Quieres tu servicio <br />en el local o a dimicilio?</h3>
    
    <div className="col-span-full">
      <div className="mb-3 sm:mb-12">
        <Button 
          bg="transition ease-in-out bg-transparent hover:bg-primary duration-300"
          tc="text-secondary hover:text-white "
          onClick={onClick}
          className="sm:h-[80px] lg-text-[26px] sm bordered">
          Servicio a domicilio
        </Button>
      </div>
    </div>
    <div className="col-span-full">
      <div className="mb-3 sm:mb-6">
        <Button 
          bg="transition ease-in-out bg-transparent hover:bg-primary duration-300"
          tc="text-secondary hover:text-white"
          className="sm:h-[80px] lg-text-[26px] bordered">
          Servicio en el local
        </Button>
      </div>
    </div>
  </form>
);

export default Service