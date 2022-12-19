import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export class Essay extends Component {
  render() {
    return (
      <Card sx={{ maxWidth: "80%" }}>
        <CardContent>
          <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
            Lorem Ipsum
          </Typography>

          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus
            neque, sollicitudin non fringilla quis, hendrerit a ipsum. Etiam
            quis tortor sapien. Duis rutrum turpis et orci efficitur, ut sodales
            neque bibendum. Vestibulum auctor nulla risus, quis mollis turpis
            suscipit ac. Ut tristique vestibulum eleifend. Donec sodales
            pulvinar diam, sit amet viverra tellus finibus nec. Ut aliquam
            fermentum magna, pharetra fermentum enim egestas quis. Mauris et
            dapibus ligula. Proin facilisis nulla molestie velit varius, id
            euismod ex egestas. Proin pulvinar porta turpis id condimentum.
            Aenean et luctus lorem. Donec ac ex eu mauris sagittis cursus id non
            lectus. Suspendisse semper ante vel dui ornare ultricies. Aenean ut
            justo urna. Phasellus a neque id sem ultricies auctor. Sed orci
            arcu, dapibus id est eu, dignissim laoreet lorem. Integer mi libero,
            luctus eu magna eget, elementum aliquet est. Sed rutrum quis metus
            vel tincidunt. Donec lobortis urna ut lorem malesuada, sit amet
            porta dolor elementum. Nunc sit amet lectus ac dui aliquam rhoncus.
            Nulla euismod consectetur laoreet. Fusce pretium suscipit iaculis.
            Cras porttitor a dui luctus posuere. Praesent nec mi et ex rutrum
            porta non eget mauris. Nam sit amet lacinia quam. Vivamus tempor
            semper maximus. Aenean id velit ac est convallis gravida ut euismod
            sem. Suspendisse sed vestibulum nisl. Sed libero dolor, interdum non
            lacinia eget, tempus quis erat. Suspendisse a rhoncus lacus. Aenean
            scelerisque eu diam ac ultrices. Phasellus varius ligula mauris.
            Nullam sollicitudin fringilla velit tempor semper. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Praesent semper hendrerit est quis hendrerit. Suspendisse
            potenti. In ultricies laoreet erat at porta. Sed eu quam turpis.
            Vivamus eget neque condimentum, lobortis leo non, scelerisque lacus.
            Praesent id fringilla diam, ut tempus lectus. Donec accumsan at mi
            vitae lacinia. Sed tempor mollis pulvinar. Proin vitae diam gravida,
            efficitur metus et, dapibus ex. Nunc ut euismod ex, in efficitur
            nisi. Nam bibendum accumsan leo, a semper sapien placerat
            condimentum. Fusce dapibus euismod metus ac feugiat. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Aliquam quis lorem odio. Nunc lacus mi, placerat
            venenatis orci ut, lobortis porttitor neque. Sed non mattis sem, ac
            laoreet nunc. Phasellus ultricies mi tristique sapien aliquam
            pharetra. Sed pharetra fringilla tempus. Curabitur eget sagittis
            orci. Sed eu viverra ante, ac condimentum odio. Nulla molestie a
            purus sed pretium. Morbi a vestibulum lectus. Nullam id pellentesque
            elit, ac porta arcu. Suspendisse accumsan, quam eget accumsan
            maximus, felis mauris pretium lorem, et ultricies libero est nec
            tellus. Maecenas et lorem vitae tellus dignissim laoreet. Etiam
            rutrum eros id nulla malesuada euismod. Quisque pharetra nibh ac
            enim dignissim, lacinia euismod nisi eleifend. Suspendisse potenti.
            Vestibulum interdum eros ullamcorper sodales condimentum. Maecenas
            risus risus, iaculis eu vehicula ut, hendrerit vel mi.
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
