import React from 'react'
import logo from '../assets/Jamiat_Ulema-e-Islam_Logo.png'
import flag from '../assets/flag.png'

const DataScreen = () => {
    const [data, setData] = React.useState([])

    React.useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('https://localhost:3000/login')
            const data = await response.json()
            setData(data)
        }
        fetchData()
     
    },[])
    return (
        <>
        <button className="">Logout</button>
        <div className=" min-h-screen print:px-4   px-16 py-3 min-w-[1300px] xl:min-w-[100%] overflow-auto ">
            <div className='bg-white py-3 print:pr-16  gap-5 justify-around  hidden xl:flex print:flex items-center flex-row-reverse '>
                <img className='w-[10%]' src={logo} alt="" />
                <div className="flex-column gap-5">
                    <h2 className='text-4xl font-extrabold  '>جمعیت علماء اسلام</h2>
                    <div className="flex items-center gap-2">
                        <span className="bg-black  rounded-2xl pt-2 px-4 pb-4 text-white text-xl rt"> مجلس عمومی</span>
                        <span className=' size-12 pb-3 flex items-center  text-2xl justify-center text-left font-extrabold bg-white border-2 border-black rounded-full '>1</span>
                    </div>
                </div>
                <div className="self-baseline flex-column gap-4">
                    <h3 className='flex gap-3 font-bold'>
                        <span> ______________________</span>
                       : یونین کونسل
                    </h3>
                    <h3 className='flex gap-3 font-bold'>
                        <span> ______________________</span>
                       : تحصیل
                    </h3>
                    <h3 className='flex gap-3 font-bold'>
                        <span> ______________________</span>
                       : ضلع
                    </h3>
                </div>
                <img src={flag} className='w-[14%]' alt="" />
            </div>
            <div className="hidden xl:flex print:flex flex-row-reverse print:pr-32 px-6 gap-5">
                <h3 className='flex gap-3 font-bold'>
                    <span> __________________________</span>
                   : روکنیت
                </h3>
                <h3 className='flex gap-3 font-bold'>
                    <span> __________________________</span>
                  :  کول عمومی
                </h3>
                <h3 className='flex gap-3 font-bold'>
                    <span> ____________________________</span>
                   : تا ریخ مجوزہ مجلس عمومی
                </h3>
            </div>

            <table className='custom-table font-semibold mt-7 '>
                <thead className='table-header '>
                   <tr className='table-row'> 
                    <th className='table-cell'>موباۂل نمبر</th>
                    <th className='table-cell'>پتا</th>
                    <th className='table-cell'>شناختی کارڈ نمبر</th>
                    <th className='table-cell'>ولدیت</th>
                    <th className='table-cell'>نام</th>
                    <th className='table-cell'>رکنیت نمبر</th>
                    <th className='table-cell' >نمبر شمار</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-row'>
                        <td>
                        
                        </td>
                        <td>
                        
                        </td><td>
                        
                        </td><td>
                        
                        </td>
                        <td>
                        
                        </td><td>
                        
                        </td>
                        <td>
                        
                        </td>
                        </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default DataScreen