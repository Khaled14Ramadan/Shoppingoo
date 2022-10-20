import notFound from '../../assets/image/notFound.svg'

const NotFound = () => {
  return (
    <div className='w-50 m-auto'>
        <img className='w-100' src={notFound} alt="" />
    </div>
  )
}

export default NotFound;