"use client"
import Image from 'next/image'
function CheckOut() {
  return (
    <div>
        <div className='flex flex-col sm:flex-row gap-10 m-1 sm:m-5 justify-around items-center'>
        <div>
            <form className=''>
        <h1 className='text-4xl font-semibold mt-10 mb-10'>Billing Details</h1>
                <div className='flex flex-col gap-5'>
                <label >First Name</label>
                <input type="text" className='bg-gray-100 p-2 sm:px-20 '/>
                <label >First Name</label>
                <input type="text" className='bg-gray-100 p-2 sm:px-20 '/>
                <label >First Name</label>
                <input type="text" className='bg-gray-100 p-2 sm:px-20 '/>
                <label >First Name</label>
                <input type="text" className='bg-gray-100 p-2 sm:px-20 '/>
                <label >First Name</label>
                <input type="text" className='bg-gray-100 p-2 sm:px-20 '/>
                <label >First Name</label>
                <input type="text" className='bg-gray-100 p-2 sm:px-20 '/>
                <label >First Name</label>
                <input type="text" className='bg-gray-100 p-2 sm:px-20 '/>
                <div>

                <input type='checkbox' />
                <label >Save Information for the next purchase</label>
                </div>
                </div>
            </form>
        </div>
        <div className='flex flex-col gap-10 w-full sm:w-2/6'>
          
            <div className='w-full sm:w-5/6 gap-10 flex flex-col'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center'>
                    
                <Image src={'/test.png'} width={70} height={70} alt='falskj' />
                <p>Product title</p>
                </div>
                <p>$389</p>
            </div>

            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center'>
                    
                <Image src={'/test.png'} width={70} height={70} alt='falskj' />
                <p>Product title</p>
                </div>
                <p>$389</p>
            </div>
            <div className='flex flex-col gap-5'>
          
          <div className='flex flex-row mt-5 justify-between'>
            <p>Subtotal:</p>
            <p>$1023</p>
          </div>
          <div className='mx-auto w-full h-1 bg-gray-300'></div>
          <div className='flex flex-row justify-between'>
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className='mx-auto w-full h-1 bg-gray-300'></div>
          <div className='flex flex-row justify-between'>
            <p>Total:</p>
            <p>$1023</p>
          </div>
        </div>
            <form className='flex flex-col'>
                <div className='flex flex-row justify-between items-center'>
                <div className='flex flex row gap-5'> 
                <input type="radio" id='bank' name='paymentMethod'/>
                <label htmlFor='bank' onClick={() => document.getElementById('bank').checked = true}>Bank</label>
                </div>
                <div className='w-40 h-1 mb-5'>

                  <Image src={'/payments.png'} width={200} height={10} alt='falk' />
                </div>
                </div>
                <div className='flex flex-row gap-5 mt-10'>

                <input type="radio" name='paymentMethod' id='cash'/>
                <label htmlFor='cash' onClick={() => document.getElementById('cash').checked = true}>Cash On Delivery</label>
                </div>
            </form>
            
            </div>
                <div className=' flex flex-row gap-2 sm:gap-5 flex-wrap mt-5 '>

                <input type="text" placeholder='Coupon code' className='border rounded p-3 border-black' />
                 <button className='p-3 px-7 text-lg text-white bg-red-600 rounded'>Apply coupon</button>
                </div>
                <button className='p-3 px-3 w-40 text-lg text-white bg-red-600 rounded mb-10  '>Place Order</button>
        </div>
        </div>
    </div>
  )
}

export default CheckOut