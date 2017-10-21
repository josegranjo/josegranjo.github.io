import React from 'react'

const Sides = ({ children }) => {

  const isPhone = () => window.innerWidth <= 450

  const Label = ({ label }) => <div style={styles.title}>{label}</div>

  const side1 = (
    <div style={isPhone() ? {} : styles.side}>
      { isPhone() ? '' : <Label label={'This Side'} /> }
      { children[0] }
    </div>
  )

  const side2 = (
    <div style={isPhone() ? {} : {...styles.side, ...styles.rightAlign}}>
      { isPhone() ? '' : <Label label={'The Other Side'} /> }
      { children[1] }
    </div>
  )

  const content = isPhone()
    ? <div>{side2}{side1}</div>
    : <div>{side1}{side2}</div>

  return (
    <div style={isPhone() ? {} : styles.sideContainer}>
      {content}
    </div>
  )
}

const styles = {
  sideContainer: {
    display: 'flex'
  },
  side: {
    flexBasis: '50%',
    flexGrow: 1
  },
  title: {
    color: '#DDD',
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    margin: '40px auto 12px auto'
  },
  rightAlign: {
    textAlign: 'right'
  }
}

export default Sides
