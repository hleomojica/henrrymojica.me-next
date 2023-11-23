'use client';
import { product } from '@/types/product.type';
import Image from 'next/image';
import useProducts from './hooks/useProducts';

type IproductProps = {
  products: product[];
};

const ProductsList = (props: IproductProps) => {
  const { products } = props;
  // const list = products.map((prod) => <p key={prod.id}>{prod.title}</p>);
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full table-auto divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
            >
              Item
            </th>
            <th
              scope='col'
              className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
            >
              Price
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 bg-white'>
          {products.map((product) => (
            <tr key={product.id}>
              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <div className='h-10 w-10 flex-shrink-0'>
                    <Image
                      className='h-10 w-10 rounded-full'
                      src={product.image}
                      width={100}
                      height={100}
                      alt=''
                    />
                  </div>
                  <div className='ml-4'>
                    <div className='text-sm font-medium text-gray-900'>
                      {product.title}
                    </div>
                    <div className='text-sm text-gray-500'>
                      {product.description}
                    </div>
                  </div>
                </div>
              </td>
              <td className='whitespace-nowrap px-6 py-4'>
                <div className='text-sm text-gray-900'>{product.price}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Page() {
  const { products } = useProducts();

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-2xl font-bold'>Practice</h1>
      <div className='mb-2 flex flex-col'>
        <h2 className='text-xl'> Basic JS</h2>
        <hr />
      </div>
      <div className='flex flex-col'>
        <h2 className='text-xl'> Tables and Arrays</h2>
        <ProductsList products={products} />
      </div>
    </div>
  );
}
