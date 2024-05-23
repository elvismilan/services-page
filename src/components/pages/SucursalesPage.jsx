import {useNavigate} from 'react-router-dom';
import Button from "../atoms/Button"
import { SucursalesItem } from "../atoms/SucursalesItem"
import List from "../molecules/List"
import Footer from "../organisms/Footer"
import Header from "../organisms/Header"
import Main from "../templates/Main"
import { useDispatch, useSelector } from 'react-redux';
import { startListSucursales } from '../../store/branch';
import { useEffect, useState } from 'react';
import { startListProveedores } from '../../store';

export const SucursalesPage = () => {

  const {selected} = useSelector( state => state.booking );
  const branches = useSelector( state => state.branch.item );
	const providers = useSelector((state) => state.proveedor.item)
  const category = useSelector((state) => state.category.selected)

  const [useCategoriesFilter, setuseCategoriesFilter] = useState(null)
	const [filtered, setFiltered] = useState([])

  const dispatch = useDispatch();

  const defaultItems = [
      { id: 1,  empresa: 'Negocio 1', puntaje: '4.5', latitud: '100', longitud: '200' , logo: 'https://placehold.co/600x600', tipo: 'D',
        categoria: ['uñas'],
      },
      { id: 2,  empresa: 'Negocio 2', puntaje: '4.5', latitud: '100', longitud: '200' , logo: 'https://placehold.co/600x600', tipo: 'D',
        categoria: ['uñas'],
      },
      { id: 3,  empresa: 'Negocio 3', puntaje: '4.5', latitud: '100', longitud: '200' , logo: 'https://placehold.co/600x600', tipo: 'D',
        categoria: ['uñas'],
      }
  ];

  const navigate = useNavigate();

  useEffect(() => {
    dispatch( startListSucursales() );
    dispatch( startListProveedores() );
			setFiltered(providers)
		// const filteredByCategory = filterProvidersByCategory()

//    let filtered = filteredByBranchAvailability()

    console.log(filtered);
  }, [])

  // const filteredByBranchAvailability = () => {
  //   return ;
  // };

	// const filterProvidersByCategory = () => {
	// 	const filteredByCategory = providers.filter(({ categories }) => {
	// 		return useCategoriesFilter
	// 			? categories.includes(category._id?.toString())
	// 			: true
	// 	})
	// 	return filteredByCategory
	// }

   const filteredByBranchAvailability = (providers) =>  selected.isInBranch ?
	 	providers.filter(provider => branches.filter(branch => branch.providerId === provider._id).length > 0)
	 	: providers

  const onLogin = (  ) => {
    navigate('/login');
  }

  return (
    <>
      <Main header={<Header />} footer={<Footer />}>
        <List>
          <Button  className="btn-auto font-normal mb-5" disabled={true} > Sucursales </Button>
          <ul>
            { filtered.map((item) => (
              <SucursalesItem key={item.id} {...item}  />
           ))}
          </ul>
        </List>
      </Main>
    </>
  );
}
