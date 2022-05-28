import { makeStyles } from '@mui/styles'

export default makeStyles((theme) => ({
  all: {
    overflowX: 'hidden',
  },

  text: {
    paddingLeft: '100px',
    paddingTop: '100px',
    color: '#713d00',
    fontSize: '24px',
  },

  textMob: {
    paddingLeft: '30px',
    paddingTop: '30px',
    color: '#713d00',
    fontSize: '24px',
  },

  textMob2: {
    paddingLeft: '30px',
    color: '#713d00',
    fontSize: '24px',
  },

  services: {
    marginTop: '100px',
    paddingLeft: '100px',
  },

  servicesMob: {
    marginTop: '50px',
  },

  yellow: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '50px',
  },

  image: {
    width: '100%',
    maxWidth: '1980px',
    height: '200px',
    object: '',
  },

  bigText: {
    paddingTop: '50px',
    paddingBottom: '30px',
    color: '#713d00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '50px',
    fontFamily:"Sora"
  },

  textField: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  center_align: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    backgroundColor: '#feecd1',
    boxShadow: 'black',
    marginBottom: '10px',
    cursor: 'pointer',
    minWidth: 300,
    '&:hover': {
      backgroundColor: '#F9dbb1',
      transform: 'scale(1.05)',
      color: 'black',
      transitionProperty: 'transform, backgroundColor',
      transitionDuration: '1s',
    },
    minHeight: '200px',
    borderRadius: '20px',
    paddingBottom: '100px',
    maxWidth: '200px',
    marginLeft: '50px',
    filter: `drop-shadow(0 0 0.25rem #ebc3ea)`,
    marginTop: '50px',
  },

  cardMob: {
    backgroundColor: '#feecd1',
    boxShadow: 'black',
    marginBottom: '40px',
    cursor: 'pointer',
    minWidth: 275,
    '&:hover': {
      backgroundColor: '#F9dbb1',
      transform: 'scale(1.05)',
      color: 'black',
      transitionProperty: 'transform, backgroundColor',
      transitionDuration: '1s',
    },
    minHeight: '200px',
    borderRadius: '20px',
    paddingBottom: '100px',
    maxWidth: '200px',
    // filter: `drop-shadow(0 0 0.25rem #ebc3ea)`,
    marginTop: '50px',
  },

  header: {
    marginleft: '100px',
  },
}))
