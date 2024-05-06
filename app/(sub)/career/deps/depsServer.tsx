import Deps from './deps';
// dummyData ---------------------------------
import menuData from '@/dummyData/menu.json';

export default function DepsServer() {
  return <Deps menuData={menuData} />;
}
