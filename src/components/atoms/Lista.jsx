import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActiveModal, setActiveService } from '../../store/servicios';
import { setActiveItem, updateItem } from '../../store';
import useServiceCartRf from '../../hooks/useServiceCartRf';

export const Lista = ({servicio,showallicon=false,quantity=0,orden=''}) => {
  // const [cantidad, setCantidad] = useState(cant);
  const { changeQuantity } = useServiceCartRf();
  const { _id,imageURL,unitPrice,name,description } = servicio;
  const showicon = showallicon ?'':'hidden';
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onAddCart = () => {
    //dispatch( setActiveService( { _id,imageURL,unitPrice,name,description } ) );
    dispatch( setActiveService( servicio ) );
    dispatch( setActiveModal() );
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
                <span
                  onClick={ () =>{
                    changeQuantity(orden, Number(orden.quantity) - 1)
                  }
                    //onDecrement
                  }
                  className="especial plus-minus-button minus"></span>
                <span className=" mr-1.5 ">{ orden.quantity }</span>
                <span onClick={ () => {
											changeQuantity(orden, Number(orden.quantity) + 1)
                  }
                  //onIncremet
                  }
                  className=" especial plus-minus-button plus "></span>
              </>
            ) : (
              <span
                onClick={
                  onAddCart
                }
                className={` especial plus-minus-button plus   `}
              ></span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
