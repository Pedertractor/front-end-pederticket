// import { createContext, ReactNode, useEffect, useState } from 'react';
// import { availableOptionsQuery } from '../../pages/visitorRegistration/VisitorRegistrationForm';
// import { getAvailableOptions } from '../../api/api';

// type availableOptionsProviderProps = {
//   children: ReactNode;
// };

// const AvailableOptionsContext = createContext<availableOptionsQuery[]>([]);

// export function AvailableOptionsProvider({
//   children,
// }: availableOptionsProviderProps) {
//   const [options, setOptions] = useState<availableOptionsQuery[]>([]);

//   useEffect(() => {
//     const fetchTicketData = async () => {
//       try {
//         const availableOptions: availableOptionsQuery[] =
//           await getAvailableOptions();

//         setOptions(availableOptions);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchTicketData();
//   }, []);

//   return (
//     <AvailableOptionsContext.Provider value={options}>
//       {children}
//     </AvailableOptionsContext.Provider>
//   );
// }
