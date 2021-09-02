import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Moralis from "moralis";

async function connectWallet() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.Web3.authenticate();
  }
  console.log("logged in user: ", user);
  const options = {
    chain: "bsc",
    addresses: "0x3c45a24d36ab6fc1925533c1f57bc7e1b6fba8a4",
  };
  const balances = await Moralis.Web3API.token.getTokenMetadata(options);
  console.log(balances);
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function SiteAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Some Yoke
          </Typography>
          <Button onClick={connectWallet}>Connect Wallet</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
