import { useDispatch, useSelector } from 'react-redux'
import { BOOKING_ADD_TO_CART, BOOKING_REMOVE_FROM_CART } from '../store'

const useServiceCartRf = () => {
	const dispatch = useDispatch()

	const changeQuantity = (serviceOrder, qty) => {
		const serviceO= {
			...serviceOrder,
			cant:qty
		}
		// serviceO.cant = qty
		if (qty < 1) {
      return dispatch(BOOKING_REMOVE_FROM_CART(serviceO.service._id));
		}
		serviceO.precio = qty * serviceO.service.unitPrice
    //TODO: estimatesworkMinutes
		serviceO.estimatedWorkMinutes = qty * 60

    dispatch( BOOKING_ADD_TO_CART(serviceO) );
	}
	return {
		changeQuantity,
	}
}

export default useServiceCartRf
