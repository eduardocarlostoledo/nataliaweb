import { Link, useLocation } from 'react-router-dom';

import { paths, Path } from '../../containers/paths';

const SectionButton = ({ path }: { path: Path }) => {
  const location = useLocation();
  return ( //items-center space-x-8
    <Link className="mx-auto" to={path.href}>
      <div style={{ display: 'inline-block', justifyContent: 'center' }}>
  <div
    className={`px-4 py-2 rounded-lg text-white ${
      path.href === location.pathname ? 'bg-gray-500' : 'bg-gray-700'
    }`}
    style={{ margin: '0 auto' }}
  >
    {path.name}
  </div>
</div>


    </Link>
  );
};

// const SectionButton = ({ path }: { path: Path }) => {
//   const location = useLocation();
//   return ( //items-center space-x-8
//     <Link className="mx-auto" to={path.href}>
//       <div
//         className={`inline-block px-4 py-2 rounded-lg text-white ${
//           path.href === location.pathname ? 'bg-green-500' : 'bg-green-700'
//         }`}
//       >
//         {path.name}
//       </div>
//     </Link>
//   );
// };

const SectionSelector = () => (
  <div className="p-2 space-x-4">
    {Object.keys(paths).map((path) => (
      <SectionButton path={paths[path]} />
    ))}
  </div>
);

export default SectionSelector;
