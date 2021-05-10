import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "../../styles/contact.scss";
import NavMenu from "../menu";
import Back from "../Back";
import {
  Typography,
  Container,
  TextField,
  TextareaAutosize,
  Button,
  Avatar,
} from "@material-ui/core";

export default function Contact() {
  return (
    <>
      <Container maxWidth="xs" className="contact-form">
        <div className="paper">
          <Avatar id="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Contact me</Typography>
          <form className="form" noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              placeholder="Username*"
              autoFocus
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              placeholder="Email*"
              autoFocus
              required
            />
            <TextareaAutosize
              aria-label="minimum height"
              placeholder="Message"
              className="message"
            />
            <Button type="submit" fullWidth id="btn-submit">
              Send
            </Button>
          </form>
        </div>
        <NavMenu />
      </Container>
      <Back />
    </>
  );
}
