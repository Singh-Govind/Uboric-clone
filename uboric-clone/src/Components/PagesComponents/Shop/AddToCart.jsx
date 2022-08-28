import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { AppContextMine } from "../../../Context/AppContextMine";

export default function AddToCart({ id, price }) {
  const { setNumber, setTotalPrice } = useContext(AppContextMine);

  const addToCart = async (id) => {
    //get data from cart
    let res = axios
      .get(`https://uboric-server.herokuapp.com/cart`)
      .then((res) => res.data);
    let data = await res;

    let obj = {};
    let found = false;
    //checkif(cart has data)
    setTimeout(() => {
      if (data.length != 0) {
        data.forEach((item) => {
          found = true;
          if (item.id == id) {
            obj = {
              ...item,
              quantity: +item.quantity + 1,
            };

            axios.patch(`https://uboric-server.herokuapp.com/cart/${item.id}`, {
              ...obj,
            });
            setNumber();
            return;
          }
        });
      }
    }, 1000);

    // setTimeout(() => {
    //   if (!found) {

    //   console.log(obj);
    // }, 1000);

    axios
      .get(`https://uboric-server.herokuapp.com/products/${id}`)
      .then((res) => (obj = { ...res.data, quantity: 1 }));

    // setTimeout(() => data.push(obj), 1000);
    // // setTimeout(() => console.log(...data), 1000);

    if (found) return;

    setTimeout(() => {
      axios.post(`https://uboric-server.herokuapp.com/cart`, {
        ...obj,
      });

      setNumber();
    }, 1500);
  };

  return <Button onClick={() => addToCart(id)}>Add To Cart</Button>;
}
