import Main from "../templates/Main";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import List from "../molecules/List";
import Button from "../atoms/Button";
import { Lista } from "../atoms/Lista";

export const Empresa = () => {

 const servicios = [
   {
     id: 1,
     titulo: "Servicio 1",
     precio: "80",
     image: "https://placehold.co/200x200",
   },
   {
     id: 2,
     empresa: "Servicio 2",
     precio: "145",
     image: "https://placehold.co/200x200",
  },
    {
     id: 2,
     empresa: "Servicio 2",
     precio: "145",
     image: "https://placehold.co/200x200",
   },
 ];

  return (
    <Main header={<Header />}
    footer={<Footer />}
    >
      <List>
        <div className="grid grid-cols-1 gap-4">
          <article className="flex items-start space-x-6">
            <img
              src={"https://placehold.co/600x600"}
              alt=""
              width="145"
              height="145"
              className="flex-none rounded-md bg-slate-100"
            />
            <div className="relative h-full flex flex-col justify-end">
              <h2 className="text-secondary">Super Empresa</h2>
              <dl className="mt-2 flex text-sm leading-6 font-medium">
                <dt className="mr-3">
                  <span className="sr-only">Star rating</span>

                  <svg width="16" height="20" fill="#FF770F">
                    <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                  </svg>
                </dt>
                <dd className="font-semibold text-secondary">4.5</dd>
              </dl>
            </div>
          </article>
          <div className="col-span-full">
            <div className="mb-3 sm:mb-6">
              <img
                src="https://placehold.co/600x150"
                alt=""
                width="600"
                height="150"
                className="flex-none rounded-md bg-slate-100"
              />
            </div>
          </div>

          <div className="col-span-full">
            <div className="mb-3 sm:mb-6">
              <div className="flex justify-center">
                <Button type="submit" className="sm:h-[48px] !text-[14px]">
                  Como llegar
                </Button>
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <div className="mb-3 sm:mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>Bernardo Cardaria 212</div>
                <div className="text-right text-primary">Distancia 2 KM</div>
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <div className="mb-3 sm:mb-6">
        <h2 className='text-primary font-[600] mb-5 ' >
        Recomendado
        </h2>
            <div className="flex justify-center items-start " >
          <img
            src={ 'https://placehold.co/600x600' }
            alt=""
            width="120"
            height="120"
            className="flex-none rounded-md bg-slate-100 mr-5 bg-slate-500"
          />
          <img
            src={ 'https://placehold.co/600x600' }
            alt=""
            width="120"
            height="120"
            className="flex-none rounded-md bg-slate-100"
          />



            </div>

            </div>
          </div>

          <div className="col-span-full">
            <div className="mb-3 sm:mb-6">
              <ul>
                {servicios
                  ? servicios.map((servicio) => {
                      return (
                        <li key={servicio.id}>
                          <Lista servicio={servicio} />
                        </li>
                      );
                    })
                  : ""}
              </ul>
            </div>
          </div>

        </div>
      </List>
    </Main>
  );
}
