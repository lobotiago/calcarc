import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function HeaderMenu() {
  return (
    <>
      <header>
        <nav>
          <Container>
            <Grid container direction="row" justify="between" alignItems="center">
              <Link as={Link} to="/">
                <h1>CalcArc</h1>
              </Link>
              {/* TO DO: Ferramenta de busca */}
            </Grid>
          </Container>
        </nav>
      </header>
    </>
  );
}

export default HeaderMenu;