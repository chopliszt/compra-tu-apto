import React from "react";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Icon } from "semantic-ui-react";

const CartWidget = () => {
  return (
    <div>
      {/* <Icon name="in cart" size="big" /> */}
      <IconButton aria-label="cart">
        <Badge badgeContent={7} color="secondary">
          <ShoppingCartIcon fontSize="medium" />
          {/* <Icon name="in cart" size="big" /> */}
        </Badge>
      </IconButton>
    </div>
  );
};

export default CartWidget;
