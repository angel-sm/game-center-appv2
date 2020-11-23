import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
} from './styles';

const CardInfo = ({ title, data }) => {

  return (
    <Card>
      <CardHeader>
        {title || 'Titulo'}
      </CardHeader>
      <CardBody>
        {data || 'Cargando..'}
      </CardBody>
    </Card>
  );
};

export default CardInfo;

