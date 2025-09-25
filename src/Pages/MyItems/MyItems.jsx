import React, { Suspense, useContext } from 'react';
import Loading from '../Loading/Loading';
import MyItemsTable from '../../Components/MyItemsTable/MyItemsTable';
import FetchFoods from '../../Api/FetchFoods';
import AuthContext from '../../Context/AuthContext';

const MyItems = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='bg-[#f4f1ea] pb-20 pt-4 px-5'>
            <div className='max-w-[1500px] mx-auto'>

                <div className='bg-[#151515] py-5 rounded-xl'>
                    <h2 className='text-6xl font-extrabold text-center text-primary'>My Food Items</h2>
                    <div className='divider divider-primary w-56 mx-auto'></div>
                </div>

                <div className='bg-white md:p-10 rounded-3xl my-10'>
                    <div className='rounded-3xl py-10 px-5 lg:px-10'>
                        <Suspense fallback={<Loading></Loading>}>
                            <MyItemsTable FetchFoods={FetchFoods(user?.email, user?.accessToken)}></MyItemsTable>
                        </Suspense>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyItems;