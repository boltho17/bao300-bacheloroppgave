const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { resolve } = require('path');
const env = require('dotenv').config({path: resolve("../../.env")});
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

app.use(express.static("../../client"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    const path = resolve("../../client/index.html")
    res.sendFile(path);
});

// Part 1: hosted Connect Custom Onboarding:
app.post("/create-account-hosted", async (req, res) => {
    const data = req.body;
    try {
        // Create account
        const account = await stripe.accounts.create({
            type: 'custom',
            business_type: 'company',
            company: {
                name: "Navn fra Brreg API",
                tax_id: "913571398",
                address: {
                    line1: "Addresse fra Brreg 12",
                    postal_code: "3044",
                    city: "Drammen",
                    country: "NO"
                },
                phone: "97796274",
            },
            business_profile: {
                mcc: "5462",
                url: "www.example.no"
            },
            requested_capabilities: ['card_payments', 'transfers'],
        });

        // Create accountlink
        var accountLink = await stripe.accountLinks.create({
            account: account.id,
            success_url: 'http://localhost:3000',
            failure_url: 'http://localhost:5000?failure',
            type: 'custom_account_verification',
            collect: 'eventually_due'
        });
    } catch (err) {
        console.log(err);
        res.status(400);
        res.send({error: err});
        return;
    }
    res.send(accountLink);
});

// Part 2: custom onboarding flow:

/* REQUIRED INFO FOR COMPANIES IN NORWAY
    "business_profile.mcc",
    "business_profile.url",
    "business_type",
    "company.address.city",
    "company.address.line1",
    "company.address.postal_code",
    "company.name",
    "company.phone",
    "company.tax_id",
    "external_account",
    "relationship.director",
    "relationship.owner",
    "relationship.representative",
    "tos_acceptance.date",
    "tos_acceptance.ip"
 */

// Not in use:
app.post("/create-account", async(req, res) => {
    const data = req.body;
});

// User Dashboard
app.post("/dashboard", async(req, res) => {
    stripe.accounts.createLoginLink(
        'acct_1GQ6P8JUUzrpfdcv',
        function(err, link) {
            // asynchronously called
        }
    ).then(res => console.log(res))

});


app.listen(5000, function () {
    console.log('Stripe server started on port 5000')
});

