import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Checkbox from "@material-ui/core/Checkbox";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { List } from "../models.tsx/common";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      height: "100%",
      margin: "0rem 1rem",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    checkbox: {
      padding: "5px",
    },
  })
);

export const ListCard = ({
  list,
  checked,
}: {
  list: List;
  checked?: boolean;
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={"listCard"}>
      <div className="absolute bg-gray-100 rounded listCheckBox">
        <Checkbox checked={checked} className={classes.checkbox} />
      </div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={list.image}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body1" color="textPrimary" component="p">
            {list.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {list.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
