import useSWR from 'swr';

import { swGet } from '../../utils/fetcher';
import Table from '../Table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'films',
    dataIndex: "films",
    render: (films: string[]) => films.length,
    key: 'films',
  },
  {
    title: 'model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'passengers',
    dataIndex: 'passengers',
    key: 'passengers',
  },
  {
    title: 'manufacturer',
    dataIndex: 'manufacturer',
    key: 'manufacturer',
  },
];


const Starships = () => {
  const { data, error } = useSWR('/starships', swGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      Aca va el registro de usuarios!
    </div>
  );
};

export default Starships;
