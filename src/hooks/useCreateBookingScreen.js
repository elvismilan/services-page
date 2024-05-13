import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from 'react-router-dom'
import _fetch from './../wrappers/_fetch'
import { startCreateBooking } from '../store/booking/thunks'

export const useCreateBookingScreen = () => {

	const provider = useSelector((state) => state.proveedor.selected)
	const booking = useSelector((state) => state.booking.selected)
  const dispatch = useDispatch()
	//const navigation = useNavigation()
	const [valueFact, setValueFact] = useState({ razonSocial: '', nit: '' })
	const [availability, setAvailability] = useState({
		0: [],
		1: [],
		2: [],
		3: [],
		4: [],
		5: [],
		6: [],
	})
	const [addresses, setAddresses] = useState([])
	const [hourPicker, setHourPicker] = useState([])
	const [user, setUser] = useState(null)
  const [dialogVisible, setDialogVisible] = useState(false)
	const [discount, setDiscount] = useState(0)
	const [paymentMethods, setPaymentMethods] = useState([
		{ label: 'Efectivo', value: 'Efectivo' },
	])
	const [hour, setHour] = useState(null)

	const [maxAvailableAfterHours, setMaxAvailableAfterHours] = useState(24)

  const getAvailability = async () => {
		try {
			let response = await _fetch(
				"https://test.teayudo.com.bo"+ '/api/availability/' + provider._id,
				{
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
				}
			)
			let responseJSON = await response.json()
			let availability = {
				0: [],
				1: [],
				2: [],
				3: [],
				4: [],
				5: [],
				6: [],
			}
			responseJSON.data?.availability?.map((e) => {
				availability[e.dayIndex].push(e)
			})
			setAvailability(availability)
		} catch (error) {
			console.error(error)
		}
	}

  const getAddresses = async () => {
		let user = JSON.parse(await localStorage.getItem('user'))
		setUser(user)
		const rawAddresses = user.directions.filter((e) => e.state)
		const addressesPicker = rawAddresses.reduce(
			(array, element) => [
				...array,
				{
					...element,
					label: element.direction,
					// value: JSON.stringify(element),
					value: element,
					key: element._id,
				},
			],
			[]
		)
		setAddresses(addressesPicker)
	}


	const onSubmit = () => {
		if (
			!booking.bookingDate ||
			!hour ||
			!booking.paymentInfo.paymentMethod ||
			(!booking.isInBranch && !booking.customer.address._id) ||
			booking.serviceCart.length === 0
		) {
			setDialogVisible(true)
			return
		}
		setDialogVisible(false)
		dispatch(
      startCreateBooking(
				{
					...booking,
					paymentInfo: {
						...booking?.paymentInfo,
						totalPrice: booking?.paymentInfo?.totalPrice - discount,
						couponCode: booking?.coupon?.coupon?.code,
					},
					customer: {
						...booking.customer,
						_id: user._id,
						fullName: (user.first_name + ' ' + user.last_name).trim(),
						phone: user.phone,
						pushToken: user.pushToken,
						email: user.email,
					},
					provider: {
						_id: provider._id,
						name: provider.first_name,
						email: provider.email,
						logoURL: provider.picture,
						phone: provider.phone,
					},
					notes: booking?.billingInfo?.notes || '',
				},
				//navigation
			)
		)
	}

	useEffect(() => {
		const qrEnabledArray = booking.serviceCart?.map((e) => e.service?.qrEnabled)
		const _paymentMethods = [{ label: 'Efectivo', value: 'Efectivo' }]
		if (!qrEnabledArray.includes(false)) {
			_paymentMethods.push({ label: 'QR', value: 'QR' })
		}

		const cardPaymentEnabledArray = booking.serviceCart?.map(
			(e) => e.service?.cardPaymentEnabled
		)
		if (!cardPaymentEnabledArray.includes(false)) {
			_paymentMethods.push(
				{
					label: 'Tarjeta de crédito/débito',
					value: 'Tarjeta',
				},
				{
					label: 'Tigo Money',
					value: 'Tigo Money',
				}
			)
		}
		setPaymentMethods(_paymentMethods)
		setMaxAvailableAfterHours(
			booking.serviceCart.reduce(
				(a, b) =>
					Math.max(
						a?.service?.availableAfterHours ?? 0,
						b?.service?.availableAfterHours ?? 24
					),
				-Infinity
			)
		)
	}, [booking.serviceCart])

	useEffect(() => {
		if (
			!booking.bookingDate ||
			!hour ||
			!booking.paymentInfo.paymentMethod ||
			(!booking.isInBranch && !booking.customer.address._id)
		) {
			setDialogVisible(true)
			return
		} else {
			setDialogVisible(false)
		}
		setDialogVisible(false)
	}, [
		booking.bookingDate,
		hour,
		booking.paymentInfo.paymentMethod,
		booking.customer.address._id,
	])



	return {
		// showCalendarModal,
		// closeModal,
		// _hourPicker,
		maxAvailableAfterHours,
		availability,
		// showCouponrModal,
		// setShowCouponModal,
		dialogVisible,
		// onVerifyCoupon,
		// setShowCalendarModal,
		hour,
		// _setHour,
		hourPicker,
		discount,
		paymentMethods,
		// selectedValue,
		// onValueCh,
		addresses,
		setDialogVisible,
		onSubmit,
		valueFact,
		setValueFact,
		// handleValueFact,
	}



}
