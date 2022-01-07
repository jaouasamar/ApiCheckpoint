import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BusinessIcon from "@mui/icons-material/Business";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, Redirect } from "react-router-dom";

import Stack from "@mui/material/Stack";
import UserDetails from "../userDetails/UserDetails";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './UserItem.css'

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const UserItem = ({ user }) => {
  const url = `https://www.${user.website}`;

  return (
    <div>
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <CardHeader
          avatar={<Avatar {...stringAvatar(user.name)} />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={user.name}
          subheader={user.email}
        />

        {/* <CardMedia
          component="img"
          height="140"
          image=
          alt="Nicola Sturgeon on a TED talk stage"
        /> */}

        <CardContent>
          <Typography variant="body2" color="text.secondary" component="p">
            <UserDetails icon={<BusinessIcon />} name={user.company.name} />
            <UserDetails icon={<LocalPhoneIcon />} name={user.phone} />
            <UserDetails icon={<LocationOnIcon />} name={user.address.city} />
          </Typography>
        </CardContent>
        <CardActions>
         
          <a  className="link" href={url}>
           
              Visit website
         
          </a>
        </CardActions>
      </Card>
    </div>
  );
};

export default UserItem;
