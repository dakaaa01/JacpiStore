import * as React from "react"
import { useState, useEffect } from "react"

import { Card, Typography, Button, CardActionArea } from "@mui/material"

import { GetData } from "../../Api/Requests"
import {
  ParentDiv,
  Imagee,
  CardText,
  ButtonCard,
  GlobalStyles,
  CategoryH1,
} from "../../items.styled"
import NavBar from "../../MUI/NavBar"
import MenTab from "../MenCard/MenTab"

export function Watches() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await GetData()
      console.log(response)
      setData(response)
    }
    fetchData()
  }, [])

  return (
    <>
      <GlobalStyles />
      <NavBar />
      <CategoryH1>Men</CategoryH1>
      <MenTab />
      <ParentDiv>
        {data
          .filter((item) => item.category.toLowerCase() === "mens-watches")
          .map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                height: 550,
                width: 350,
                backgroundColor: "whitesmoke",
                borderRadius: 5,
                margin: "90px 30px",
              }}
            >
              <CardActionArea>
                <Imagee
                  component="img"
                  height="330"
                  width="270"
                  image={item.images[0]}
                  alt={item.title}
                />
                <CardText>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.price}€
                  </Typography>
                </CardText>
              </CardActionArea>
              <ButtonCard>
                <Button size="Medium" color="inherit">
                  Buy
                </Button>
                <Button size="medium" color="inherit">
                  Add to Card
                </Button>
              </ButtonCard>
            </Card>
          ))}
      </ParentDiv>
    </>
  )
}
