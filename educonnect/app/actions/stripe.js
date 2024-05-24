"use server";

import { headers } from "next/headers";
const CURRENCY = "inr";
import { formatAmountForStripe } from "@/lib/stripe-helpers";
import { stripe } from "@/lib/stripe";

export async function createCheckoutSession(data) {
    const ui_mode = "hosted";
    const origin = headers().get("origin");
    const courseId = data.get("courseId");

    const checkoutSession = await stripe.checkout.sessions.create({
        mode: "payment",
        submit_type: "auto",
        line_items: [
            {
                quantity: 1,
                price_data: {
                    currency: CURRENCY,

                    product_data: {
                        name: data.get("courseName"),
                    },

                    unit_amount: formatAmountForStripe(data.get("coursePrice"), CURRENCY),
                },
            },
        ],

        ...(ui_mode === "hosted" && {
            success_url: `${origin}/enroll-success?session_id={CHECKOUT_SESSION_ID}&courseId=${courseId}`,

            cancel_url: `${origin}/courses`,
        }),

        ui_mode,
    });

    return {
        client_secret: checkoutSession.client_secret,

        url: checkoutSession.url,
    };
}

export async function createPaymentIntent(data) {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: formatAmountForStripe(
            data.get("coursePrice"),

            CURRENCY
        ),

        automatic_payment_methods: { enabled: true },

        currency: CURRENCY,
    });

    return { client_secret: paymentIntent.client_secret };
}
