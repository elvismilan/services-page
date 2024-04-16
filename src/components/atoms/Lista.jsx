import { useNavigate } from 'react-router-dom';

export const Lista = ({servicio,showallicon=false}) => {
  const { id,image,precio,titulo } = servicio;
  const showicon = showallicon ?'':'hidden';
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/login');

  }

  return (
    <>
      <div className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent mb-5">
        <div className="w-2/3 bg-white flex flex-col space-y-2 p-3  inline-flex items-start space-x-2">
          <div className="text-slate-500"> {titulo} </div>
          <div className="text-slate-500">
            lorCulpa ipsum fugiat et excepteur ut sit aliqua aliquip mollit
            dolor aute dolor non ut. Nostrud labore.{" "}
          </div>
          <div className="text-slate-500">
            <span>Desde</span> Bs. {precio}{" "}
          </div>
        </div>
        <div>
          <img
            src={servicio.image}
            alt=""
            width="70"
            height="70"
            className="flex-none rounded-md bg-slate-100"
          />

          <div className="mt-2 float-end" onClick={onLogin}>
            <button
              type="button"
              className= {`btn-icon ${showicon} `  }
            >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12" height="12" viewBox="0 0 24 24" border="0">
            <path fillRule="evenodd" fill="#ffffff" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
          </svg>

              <span className="sr-only">Icon description</span>

            </button>
             <span
              className= {` mr-1.5 ${showicon} `  }
             >2</span>
            <button
              type="button"
              className="btn-icon"
            >

          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12" height="12" viewBox="0 0 24 24" border="0">
            <path fillRule="evenodd" fill="#ffffff" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
          </svg>

              <span className="sr-only">Icon description</span>

            </button>
          </div>
        </div>
      </div>
    </>
  );
}
