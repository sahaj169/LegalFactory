import { makeStyles } from '@mui/styles'

export default makeStyles((theme) => ({
  container: {
    height: '100vh',
    color: 'white',
    backgroundColor: '#E5E5E5',
    position: 'sticky',
    // position: "relative",
    top: 0,
  },
  indicator: {
    backgroundColor: 'white',
    left: '0px',
    height: '5',
  },
  tabs: {
    fontSize: '16px',
    position: 'absolute',
    left: '0',
    marginLeft: '14px',
    color: 'black',
    fontFamily: 'Sora',
  },
  tabs1: {
    fontSize: '14px',
    position: 'absolute',
    marginLeft: '14px',
    color: 'black',
    fontFamily: 'Sora',
    fontWeight: 'bolder',
    display: 'flex',
    justifyContent: 'center',
  },
  tabs2: {
    fontSize: '14px',
    position: 'absolute',
    marginLeft: '14px',
    color: 'black',
    fontFamily: 'Sora',
    fontWeight: 'bolder',
    display: 'flex',
    justifyContent: 'center',
  },
  getInTouch: {
    display: 'flex',
    justifyContent: 'center',
  },
  getInTouch2: {
    display: 'flex',
    justifyContent: 'center',
    width: '400px',
  },

  button: {
    position: 'absolute',
    marginTop: '100%',
    zIndex: '1',
  },
  secondHeroRight: {
    width: '100%',
    marginRight: '0px',
  },
}))
