
const List = (props) => {
  return (
    <div className="flexCenter py-4 pb-16" >
      <div className="container">
        <ul className="">
          {props.children}
        </ul>
      </div>
    </div>
  )
}

export default List
