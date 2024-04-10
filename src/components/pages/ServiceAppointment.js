import Main from "../templates/Main";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Appointment from "../organisms/Appointment";
import List from "../molecules/List";

const ServiceAppointment = (props) => {

  return (
    <Main
      header={<Header />}

    >
      <List>
        <Appointment />
      </List>

    </Main>
  )
}

export default ServiceAppointment
