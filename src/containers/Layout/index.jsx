import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row } from 'react-flexbox-grid';
import { Create, Search, CreditCard, AttachMoney, Settings, Assessment, Face } from '@material-ui/icons';
import { Menu, Option } from './Layout.styles';

import('../../assets/styles/styles.scss');

const options = [
  {
    option: 'Nuevo torneo',
    url: '/new-tournament',
    icon: <Create />,
  }, {
    option: 'Buscar torneo',
    url: '/search',
    icon: <Search />,
  }, {
    option: 'Credito',
    url: '/credit',
    icon: <CreditCard />,
  }, {
    option: 'Jugadores',
    url: '/player',
    icon: <Face />,
  }, {
    option: 'Puntos tienda',
    url: '/store-points',
    icon: <AttachMoney />,
  }, {
    option: 'Config puntos tienda',
    url: '/store-points-config',
    icon: <Settings />,
  }, {
    option: 'Reportes',
    url: '/reports',
    icon: <Assessment />,
  },
];

const Layout = () => {
  return (
    <Grid>
      <Row>
        <Menu className='color_basic'>
          <ul>
            {
              options.map((option) => {
                return (
                  <Link to={option.url} style={{ textDecoration: 'none' }}>
                    <Option>
                      <div>{option.option}</div>
                      <div>{option.icon}</div>
                    </Option>
                  </Link>
                );
              })
            }
          </ul>
        </Menu>
      </Row>
    </Grid>
  );
};

export default Layout;
