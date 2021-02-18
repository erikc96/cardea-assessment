import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  AppBar,
} from "@material-ui/core";
import { List } from "../models.tsx/common";
import { ListCard } from "../components/ListCard";
import { GET_LISTS } from "../apollo/queries";

export const Lists = () => {
  const { loading, error, data } = useQuery(GET_LISTS, {});

  return (
    <>
      <div className="bg-gray-400 col-span-1"></div>
      <main className="bg-gray-500 col-span-8">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6">News</Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        {loading && <h1>Loading</h1>}
        {error && <h1>Error</h1>}
        {data && (
          <div className="py-16 mx-32 grid grid-flowrow md:grid-cols-3 gap-16">
            {data.lists.map((list: List) => {
              return (
                <a href={`/list/${list.id}`}>
                  <ListCard list={list} />
                </a>
              );
            })}
          </div>
        )}
      </main>
      <aside className="bg-gray-600 col-span-3">Aside...</aside>
    </>
  );
};

export default Lists;
