import { makeStyles } from '@mui/styles'

export default makeStyles((theme) => ({
  heading: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3%',
    marginTop: '6%',
  },

  OuterDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  OuterDivMobile: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },

  OuterDivRange: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
  },
  formDiv: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20%',
  },

  formDivMobile: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10%',
  },
  imageDiv: {
    marginRight: '25%',
    paddingTop: '2%',
  },
  imageDivMobile: {
    display: 'flex',
    justifyContent: 'center',
  },
  imageDivRange: {
    display: 'flex',
    justifyContent: 'center',
    paddingRight: '30px',
  },
  Input: {
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'yellow',
      fontSize: 14,
    },
  },
}))
