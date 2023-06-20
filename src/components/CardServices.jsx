import "../styles/services.css"

const Card = (props) => {
  const { Icon, disc, title } = props;
  return (
    <div className="card_container card_efect">
      <span className='green heart-icon'>{<Icon />}</span>
      <h1>{title}</h1>
      <p>{disc}</p>
    </div>
  )
}

export default Card;