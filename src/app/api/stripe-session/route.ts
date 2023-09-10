import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

export const POST = async (request: NextRequest) => {
  const { products, userEmail } = await request.json();

  try {
    let customer;
    try {
      customer = await stripe.customers.list({
        email: userEmail,
        limit: 1,
      });
    } catch (customerError: any) {
      throw new Error(`Error checking customer: ${customerError.message}`);
    }

    let customerId;

    if (customer.data.length > 0) {
      customerId = customer.data[0].id;
    } else {
      try {
        const newCustomer = await stripe.customers.create({
          email: userEmail,
        });
        customerId = newCustomer.id;
      } catch (createCustomerError: any) {
        throw new Error(`Error creating customer: ${createCustomerError.message}`);
      }
    }

    if (products.length > 0) {
      const session = await stripe.checkout.sessions.create({
        customer: customerId,
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1NRZppETgDfVRBAP8A1qcfEz" },
          { shipping_rate: "shr_1NRZpGETgDfVRBAPnPrBVrjZ" },
        ],
        invoice_creation: {
          enabled: true,
        },
        line_items: products.map((item: any) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          };
        }),
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/successPay`,
        cancel_url: `${request.headers.get("origin")}/cart`,
      });
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No products found" });
    }
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
};
