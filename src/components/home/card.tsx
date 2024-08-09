import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { IoPeopleSharp } from 'react-icons/io5';

const CardComponent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Turma 01</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className=' flex items-center gap-2'>
        <IoPeopleSharp size={18} />
        <p>145</p>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
