import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Avatar from '@material-ui/core/Avatar';

import { useAvatarStyles, usePaginationStyles, useTableStyles } from './CompetitorsTable-styles';
import { competitors } from '../../../utils/mokups';
import DeletePlayerButton from '../DeletePlayerButton';

function TablePaginationActions(props) {
  const classesPagination = usePaginationStyles();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  return (
    <div className={classesPagination.root}>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label='previous page'>
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
    </div>
  );
}

const CompetitorsTable = () => {
  const classesTable = useTableStyles();
  const classesAvatar = useAvatarStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classesTable.table} aria-label='custom pagination table'>
        <TableHead>
          <TableRow>
            <TableCell>Jugador</TableCell>
            <TableCell align='center'>Eliminar jugador</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {competitors.length > 0 ? (
            (rowsPerPage > 0 ?
              competitors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) :
              competitors
            ).map((competitor) => (
              <TableRow key={competitor.name}>
                <TableCell align='center'>
                  <div className='Avatar-content'>
                    <Avatar className={classesAvatar.root} alt={competitor.name} src='/static/images/avatar/1.jpg' />
                    {`${competitor.name} - ${competitor.nickname}`}
                  </div>
                </TableCell>
                <TableCell align='center'>
                  <DeletePlayerButton id={competitor.id} />
                </TableCell>
              </TableRow>
            ))
          ) : <h1>No hay competidores</h1>}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={competitors.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default CompetitorsTable;
