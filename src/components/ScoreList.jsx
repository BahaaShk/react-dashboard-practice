import React from "react";
import { Card, List, ListItem, Title } from "@tremor/react";

const cities = [
  {
    city: "Athens",
    rating: "Angular / React",
  },
  {
    city: "Luzern",
    rating: "Angular",
  },
  {
    city: "Zürich",
    rating: "React",
  },
  {
    city: "Vienna",
    rating: "React",
  },
  {
    city: "Ermatingen",
    rating: "Vue.Js",
  },
  {
    city: "Lisbon",
    rating: "React",
  },
];

const ScoreList = () => {
  return (
    <Card className="max-w-full">
      <Title className=" mb-2 text-center tracking-[3px]">Popular Frameworks In Hometowns</Title>
      <List>
        {cities.map((item) => (
          <ListItem key={item.city}>
            <span>{item.city}</span>
            <span>{item.rating}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default ScoreList;