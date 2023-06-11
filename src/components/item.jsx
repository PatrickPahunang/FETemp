import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


library.add(faCartShopping);


const Item = ({image,product_name,product_price}) => {
    <div className='h-80 w-60 shadow-2xl rounded-lg'>
            <div>
              <img src={image} alt='Product' className='object-cover rounded-t-lg h-52 w-full object-top' />
            </div>
            <div className='text-start flex flex-col px-2'>
              <span className='font-bold text-xl mt-1'>{product_name}</span>
              <span className=' text-xl '>{product_price}</span>
            </div>
            <button className='transition ease-out duration-300 hover:bg-yellow-50 hover:text-slate-900 text-md h-12 mt-1 rounded-b-lg w-full bg-slate-900 text-yellow-50 text-center flex justify-center items-center'><FontAwesomeIcon icon={faCartShopping} className='h-6 pr-1 '/>Add to Cart</button>

          </div>
}

export default Item