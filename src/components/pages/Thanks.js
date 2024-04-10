import Button from "../atoms/Button"
import Header from "../organisms/Header"
import Main from "../templates/Main"

export const Thanks = () => {
  return (
    <>


<div className="bg-primary text-white w-full h-full fixed block top-0 left-0  opacity-100 z-50">
  <span className="text-white-500 text-center opacity-75 top-1/4 my-0 mx-auto block relative w-1/3 h-0" >
   <p> !Confirmado! </p>
    <div className="flex justify-between items-center ml-10 p-2 " >
   <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"> <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/> </svg>


    </div>
   <p> Tu servicio ha sido procesado con exito </p>

  </span>

  <div className="p-4 absolute inset-x-0 bottom-0 flex items-center justify-center bg-white text-primary shadow-lg rounded-lg  " >
      <div className=" flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent mb-5 " >
        <div className=" w-full bg-white flex flex-col space-y-2 p-3 " >

        <Button> Volver al Inicio </Button>
        </div>
      </div>
      <div className=" flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent mb-5 " >
        <div className=" w-full bg-white flex flex-col space-y-2 p-3 " >

        <Button> Chatea con nosotros </Button>
        </div>
      </div>



  </div>

</div>



    </>
  )
}
