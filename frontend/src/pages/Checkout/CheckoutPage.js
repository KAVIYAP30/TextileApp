import React from 'react';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { createOrder } from '../../services/orderService';
import emailjs from 'emailjs-com'; // Import EmailJS library
import classes from './checkoutPage.module.css';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import OrderItemsList from '../../components/OrderItemsList/OrderItemsList';

export default function CheckoutPage() {
  const { cart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [order, setOrder] = useState({ ...cart });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submit = async data => {
    await createOrder({ ...order, name: data.name, address: data.address, mobile: data.mobile });

    
    const templateParams = {
      to_name: data.name,
      address: data.address,
      to_email: data.email,
      to_quantity: order.quantity, 
      to_price: order.totalPrice,
      
    };

    emailjs.send("service_w7jjaq1", "template_h9l1lpz", templateParams, "swLGgX2b4zzuUfGvA")
      .then((response) => {
        console.log("Email sent successfully", response);
        toast.success("Order placed Successfully and invoice sent to your mail"); 
      })
      .catch((error) => {
        console.log("Failed to send email", error);
        toast.error("Oops error occurred"); 
      });

    toast.success('Order placed successfully!');
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className={classes.container}>
        <div className={classes.content}>
          <Title title="Order Form" fontSize="1.6rem" />
          <div className={classes.inputs}>
            <Input
              defaultValue={user.name}
              label="Name"
              {...register('name')}
              error={errors.name}
            />
            <Input
              defaultValue={user.address}
              label="Address"
              {...register('address')}
              error={errors.address}
            />
            <Input
              defaultValue={user.email}
              label="Email"
              {...register('email')}
              error={errors.email}
            />
            <Input
              label="Mobile Number"
              {...register('mobile', { required: true })}
              error={errors.mobile}
            />
          </div>
          <OrderItemsList order={order} />
        </div>

        <div className={classes.buttons_container}>
          <div className={classes.buttons}>
            <Button
              type="submit"
              text="Place order and send invoice"
              width="100%"
              height="3rem"
            />
          </div>
        </div>
      </form>
    </>
  );
}
