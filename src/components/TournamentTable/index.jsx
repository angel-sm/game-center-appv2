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

import { AvatarControllContainer, useAvatarStyles, usePaginationStyles, useTableStyles } from './TournamentTable.styles';

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

const TournamentTable = ({ Competitors }) => {
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
            <TableCell align='center'>Puntos</TableCell>
            <TableCell align='center'>Pago</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0 ?
            Competitors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) :
            Competitors
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell align='center'>
                <AvatarControllContainer>
                  <Avatar className={classesAvatar.root} alt={row.name} src='/static/images/avatar/1.jpg' />
                  {`${row.name} - ${row.nickname}`}
                </AvatarControllContainer>
              </TableCell>
              <TableCell align='center'>
                {row.points}
              </TableCell>
              <TableCell align='center'>
                {row.paid}
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={Competitors.length}
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

export default TournamentTable;
