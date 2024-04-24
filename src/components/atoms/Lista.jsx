import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActiveModal, setActiveService } from '../../store/servicios';

export const Lista = ({servicio,showallicon=false}) => {
  const { _id,imageURL,unitPrice,name,description } = servicio;
  const showicon = showallicon ?'':'hidden';
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onAddCart = () => {
    dispatch( setActiveService( { _id,imageURL,unitPrice,name,description } ) );
    dispatch( setActiveModal() );
  }

  const onIncremet = () => {
    console.log('incrementar');
  }
  const onDecrement = () =>{
    console.log('decrementar');
  }


  return (
    <>
      <div className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent mb-5">
        <div className="w-2/3 bg-white flex flex-col space-y-2 p-3  inline-flex items-start space-x-2">
          <div className="text-slate-500 ">
            {" "}
            <strong>{name}</strong>{" "}
          </div>
          <div className="text-slate-500">
            {!!description ? description.substring(0, 85) : ""}
          </div>
          <div className="text-slate-500">
            <span>Desde</span> <strong> Bs. {unitPrice} </strong>
          </div>
        </div>
        <div>
          <img
            src={imageURL}
            alt=""
            width="70"
            height="70"
            className="flex-none rounded-md bg-slate-100"
          />

          <div className="mt-2 float-end align-center">
            {showallicon ? (
              <>
                <span onClick={ onDecrement }  className="especial plus-minus-button minus"></span>
                <span className=" mr-1.5 ">{servicio.cant}</span>
                <span onClick={ onIncremet }  className=" especial plus-minus-button plus "></span>
              </>
            ) : (
              <span
                onClick={onAddCart}
                className={` especial plus-minus-button plus   `}
              ></span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
