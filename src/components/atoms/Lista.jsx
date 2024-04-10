import { useNavigate } from 'react-router-dom';

export const Lista = ({servicio}) => {
  const { id,image,precio,titulo } = servicio;
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/programar');

  }

  return (
    <>
      <div className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent mb-5">
          <div className="w-2/3 bg-white flex flex-col space-y-2 p-3  inline-flex items-start space-x-2">
              <div className="text-slate-500"> {titulo} </div>
              <div className="text-slate-500">lorCulpa ipsum fugiat et excepteur ut sit aliqua aliquip mollit dolor aute dolor non ut. Nostrud labore. </div>
              <div className="text-slate-500"> <span>Desde</span> Bs. { precio } </div>
          </div>
          <div>
              <img src={servicio.image} alt="" width="70" height="70" className="flex-none rounded-md bg-slate-100" />

              <div className="mt-2 float-end" onClick={ onLogin } >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FF770F" className="bi bi-plus-circle-fill" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/> </svg>
              </div>
          </div>
      </div>
    </>
  )
}
