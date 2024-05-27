import { useDispatch } from "react-redux";
import { BOOKING_SET_BRANCH } from "../../store";
import { useNavigate } from "react-router-dom";

export const SucursalesItem = (item) => {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id,addressInfo,name } = item;

  const onSelect = (item) => {
    console.log(item);
    dispatch( BOOKING_SET_BRANCH(item) );
    navigate('/empresa');
  }

  return (
    <>
      <li key={id}>
        <div className="grid grid-cols-2 gap-4 mb-5">
          <article onClick={ () => onSelect(item) } className="flex items-start space-x-6 cursor-pointer">
            <div className="relative h-full flex flex-col justify-end">
              <h2 className="text-secondary">{name}</h2>
              <dl className="mt-2 flex text-sm leading-6 font-medium">
                <dt className="mr-3">
                  { addressInfo.street }
                </dt>
                <dd className="font-semibold text-secondary"></dd>
              </dl>
            </div>
          </article>
          <div className="flex flex-col justify-end align-end ">
            <div className="text-right">  </div>
            <div className="text-primary text-right"> Direccion 2 km </div>
          </div>
        </div>
      </li>
    </>
  );
}
