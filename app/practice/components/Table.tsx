// type ColumType = {
//   name: string;
//   key: string;
//   id: number;
//   type: string | null;
// };

// type DataType = {
//   id: number;
//   value: string;
// };

// type ITableProps = {
//   data: DataType[];
//   columns: ColumType[];
// };
// export default function Table(props: ITableProps) {
//   const { columns, data } = props;
//   return (
//     <table className='min-w-full divide-y divide-gray-200'>
//       <thead className='bg-gray-50'>
//         <tr>
//           {columns.map((col) => (
//             <th
//               key={col.id}
//               scope='col'
//               className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
//             >
//               {col.name}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody className='divide-y divide-gray-200 bg-white'>
//         {data.map((item) => (
//           <tr key={item.id}>
//             <td className='whitespace-nowrap px-6 py-4'>
//               <div className='flex items-center'>

//                 <div className='h-10 w-10 flex-shrink-0'>
//                   <img
//                     className='h-10 w-10 rounded-full'
//                     src={products.title}
//                     alt=''
//                   />
//                 </div>
//                 <div className='ml-4'>
//                   <div className='text-sm font-medium text-gray-900'>
//                     {products.title}
//                   </div>
//                   <div className='text-sm text-gray-500'>{products.title}</div>
//                 </div>
//               </div>
//             </td>
//             <td className='whitespace-nowrap px-6 py-4'>
//               <div className='text-sm text-gray-900'>{products.title}</div>
//               <div className='text-sm text-gray-500'>{products.title}</div>
//             </td>
//             <td className='whitespace-nowrap px-6 py-4'>
//               <span
//                 className='inline-flex rounded-full bg-green-100 px-2
//                       text-xs font-semibold leading-5 text-green-800'
//               >
//                 Active
//               </span>
//             </td>
//             <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
//               {products.title}
//             </td>
//             <td className='whitespace-nowrap px-6 py-4 text-right text-sm font-medium'>
//               <a href='#' className='text-indigo-600 hover:text-indigo-900'>
//                 Edit
//               </a>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
