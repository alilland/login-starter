import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { Link } from 'react-router-dom'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
import deepOrange from '@material-ui/core/colors/deepOrange'
import CircularProgress from '@material-ui/core/CircularProgress'

const theme = createMuiTheme({
  palette: {
    primary: deepOrange
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
})

const ForgotPassword = (props) => {
  const classes = useStyles()
  const {
    isLoading,
    email,
    emailError,
    handleChange,
    handleSubmit
  } = props
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='sm'>
        <Grid container spacing={0} alignItems={'center'} justify={'center'}>
          <Box>
            <Card className={classes.card}>
              <CardContent>
                <form onSubmit={e => e.preventDefault()}>
                  <Typography component='h2' gutterBottom className={classes.title}>
                    {'Forgot Password'}
                  </Typography>
                  <TextField
                    required
                    autoFocus
                    disabled={isLoading}
                    error={emailError !== null}
                    id='outlined-email'
                    type='email'
                    label='Email'
                    className={classes.textField}
                    variant='outlined'
                    value={email || ''}
                    onChange={(e) => handleChange('email', e.target.value)}
                    margin='normal'
                  />
                  {!isLoading &&
                    <div style={{ width: '100%', marginTop: 25 }}>
                      <Button
                        size='large'
                        variant='contained'
                        type='submit'
                        style={{ width: '100%' }}
                        classes={{
                          root: props.classes.root, // class name, e.g. `classes-nesting-root-x`
                          label: props.classes.label // class name, e.g. `classes-nesting-label-x`
                        }}
                        onClick={() => handleSubmit()}
                      >
                        {'Request Details'}
                      </Button>
                    </div>
                  }
                  {isLoading &&
                    <div style={{ textAlign: 'center', marginTop: 25 }}>
                      <CircularProgress />
                    </div>
                  }
                </form>
              </CardContent>
              <CardActions style={{ display: 'block', width: '100%', textAlign: 'right' }}>
                <div style={{ float: 'left' }}>
                  <Link to='/registration' style={{ textDecoration: 'none' }}><Button size='small' style={{ marginLeft: 2, marginTop: 10, color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>Create an Account</Button></Link>
                </div>
                <div style={{ width: 'calc(100% - 140px)', float: 'left', textAlign: 'right' }}>
                  <Link to='/login' style={{ textDecoration: 'none' }}><Button size='small' style={{ marginTop: 10 }}>Sign In</Button></Link>
                </div>
                <div style={{ clear: 'both' }} />
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    maxWidth: 380,
    width: 380,
    marginTop: 20
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  subheader: {
    textAlign: 'center'
  },
  textField: {
    width: '100%'
  },
  leftIcon: {
    marginRight: theme.spacing(25)
  }
}))

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  label: {
    textTransform: 'capitalize'
  }
}

export default withStyles(styles)(ForgotPassword)
