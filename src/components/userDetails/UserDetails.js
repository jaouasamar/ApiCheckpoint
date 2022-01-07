import React from 'react'
import Icon from '@mui/material/Icon';
const UserDetails = (props) => {
    return (
        <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop:"5px"
        }}
      >
        <Icon>{props.icon}</Icon>
        <span>{props.name}</span>
      </div>
    )
}

export default UserDetails
