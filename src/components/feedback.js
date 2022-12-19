import React, { Component } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Rating from "@mui/material/Rating";

export class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback1: 0,
      feedback2: 0,
      feedback1Submitted: true,
      feedback2Submitted: false,
    };
  }

  render() {
    const setFeedback1 = (value) => {
      this.state.feedback1 = value;
      console.log(this.state);
    };

    const { showing } = this.feedback1Submitted | true;
    return (
      <div>
        {showing ? (
          <Card sx={{ maxWidth: "80%", mb: 2 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                gutterBottom
              >
                Feedback
              </Typography>
              <Typography variant="h5" component="div">
                How do you rate this Essay?
              </Typography>
              <Rating
                name="simple-controlled"
                value={this.feedback1}
                onChange={(event, newValue) => {
                  setFeedback1(newValue);
                }}
              />
              <Typography variant="body2"></Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Submit</Button>
            </CardActions>
          </Card>
        ) : null}
      </div>
    );
  }
}
