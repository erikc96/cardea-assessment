
import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);

export const ListSlider = ({
  children,
}: {
  children: Array<React.ReactElement>;
}): React.ReactElement => {
  const classes = useStyles()

  const width = window.innerWidth;

  return (
    <div className={classes.root + " listSlider"}>
	    <GridList className={classes.gridList} cols={width < 620 ? 1 : 4} cellHeight={350}>
        {children.map((child, index) => (
          <GridListTile key={index} className="my-4">
		  {child}
          </GridListTile>
        ))}
	}
      </GridList>
    </div>
  );
}

export default ListSlider
