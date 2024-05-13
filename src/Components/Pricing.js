import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import { CheckCircleOutline, } from '@mui/icons-material';
import CancelIcon from '@mui/icons-material/Cancel';
import './Pricing.css';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
    };

    const handlePayment = () => {
        if (selectedPlan) {
            // Perform payment processing logic here
            console.log('Selected plan:', selectedPlan);
        }
    };

    return (
        <div>
            <Box sx={{ backgroundColor: '#131a26', textAlign: 'center' }}>
                <Typography variant="h2" fontFamily="Roboto" fontWeight={800} sx={{ color: 'white', padding: '20px' }}>
                    Uptime Robot Payment Plan
                </Typography></Box>

            <div className='cardentire'>
                {/* <div className='upth1'>
                <Typography variant="h2" color="white" align="center" >
                Uptime Robot Payment Plan
                </Typography>
                </div> */}



                <div className="plan-container">

                    <Card
                        className={`plan ${selectedPlan === 'free' ? 'selected' : ''}`}
                        onClick={() => handlePlanSelect('free')}>


                        <CardContent className='cards-prc'>
                            {/* <Typography className="custom-class" fontFamily="Roboto" variant="h4" component="h1" sx={{ textAlign: 'center', color:"#131a26" }}>
                                Free
                            </Typography> */}

                            <Typography
                                className="custom-class"
                                fontFamily="Roboto"
                                variant="h4"
                                component="h1"
                                sx={{ textAlign: 'center', color: '#131a26' }}
                            >
                                Free
                            </Typography>


                            <Typography variant="subtitle1" sx={{
                                fontWeight: 'bold',
                                fontSize: 24,
                                color: 'primary.main',
                                textAlign: 'center'
                            }}>
                                $10/<span style={{  fontSize: "16px" }}>month</span>

                            </Typography>

                            <ul>
                                <li>
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> Monitor 50 URLs
                                </li>
                                <li>
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> 1-minute monitoring
                                    interval
                                </li>
                                <li>
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> Email support
                                </li>
                                <li>
                                    < CancelIcon fontSize="small" style={{ color: 'red' }} />No login seats available
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card
                        className={`plan ${selectedPlan === 'solo' ? 'selected' : ''}`}
                        onClick={() => handlePlanSelect('solo')}
                    >
                        <CardContent className='cards-prc' >
                            <Typography fontFamily="Roboto" variant="h4" component="h1" sx={{ textAlign: 'center' }}>
                                Solo
                            </Typography>

                            <Typography variant="subtitle1" sx={{
                                fontWeight: 'bold',
                                fontSize: 24,
                                color: 'primary.main',
                                textAlign: 'center'
                            }}>
                                $20/<span style={{  fontSize: "16px" }}>month</span>
                            </Typography>

                            <ul>
                                <li >
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> Monitor 100 URLs
                                </li>
                                <li >
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> 30-second monitoring
                                    interval
                                </li>
                                <li >
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> Email and SMS support
                                </li>
                                <li >
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> SSL certificate
                                    monitoring
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card
                        className={`plan ${selectedPlan === 'team' ? 'selected' : ''}`}
                        onClick={() => handlePlanSelect('team')}
                    >
                        <CardContent className='cards-prc'>
                            {/* <Typography variant="h4" component="h1" align="center">
                            Business Plan
                        </Typography> */}
                            <Typography fontFamily="Roboto" variant="h4" component="h1" sx={{ textAlign: 'center' }}>
                                Team
                            </Typography>

                            <Typography variant="subtitle1" sx={{
                                fontWeight: 'bold',
                                fontSize: 24,
                                color: 'primary.main',
                                textAlign: 'center'
                            }}>
                                $50/<span style={{  fontSize: "16px" }}>month</span>
                            </Typography>

                            <ul>
                                <li>
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> Monitor 500 URLs
                                </li>
                                <li>
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> 15-second monitoring
                                    interval
                                </li>
                                <li>
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> Email, SMS, and phone
                                    support
                                </li>
                                <li>
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> SSL certificate
                                    monitoring
                                </li>
                                <li>
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> Public status pages
                                </li>
                            </ul>
                        </CardContent>
                    </Card>







                    <Card
                        className={`plan ${selectedPlan === 'enterprise' ? 'selected' : ''}`}
                        onClick={() => handlePlanSelect('enterprise')}
                    >
                        <CardContent className='cards-prc'>
                            {/* <Typography variant="h4" component="h1" align="center">
                            Business Plan
                        </Typography> */}
                            <Typography fontFamily="Roboto" variant="h4" component="h1" sx={{ textAlign: 'center' }}>
                                Enterprise
                            </Typography>

                            <Typography variant="subtitle1" sx={{
                                fontWeight: 'bold',
                                fontSize: 24,
                                color: 'primary.main',
                                textAlign: 'center'
                            }}>
                                $100/<span style={{  fontSize: "16px" }}>month</span>
                                
                            </Typography>

                            <ul>
                                <li>
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> Monitor 500 URLs
                                </li>
                                <li>
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> 15-second monitoring
                                    interval
                                </li>
                                <li>
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> Email, SMS, and phone
                                    support
                                </li>
                                <li>
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> SSL certificate
                                    monitoring
                                </li>
                                <li>
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> Public status pages
                                </li>
                                <li>
                                    <CheckCircleOutline fontSize="small" style={{ color: 'red' }} /> All 12 integrations
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div className='uptbutton'>
                    {/* <Button
                        variant="contained"
                        color="primary"
                        onClick={handlePayment}
                        disabled={!selectedPlan}
                        sx={{ mt: 2 }}
                    >
                        Proceed to Payment
                    </Button> */}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handlePayment}
                        disabled={!selectedPlan}
                        sx={{ mt: 2, backgroundColor: '#131a26' }}
                    >
                        Proceed to Payment
                    </Button>
                </div>
                <div>

                    {/* <Typography variant="h2" color="textSecondary" align="center" marginTop={3} > */}
                    <Typography variant="h2" color="textSecondary" align="center" marginTop={3} marginBottom={3} fontFamily="Roboto" fontWeight={700}>
                        Frequently asked questions.
                    </Typography>

                    {/* <Typography variant="h4" color="textSecondary">
                    Can I order SMS / voice call credits separately?
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    You can order extra SMS / voice call credits with your free plan or any paid plan.
                    Pay with a credit card or Paypal.
                    Please note that the confirmation SMS for adding/changing alert contact will also consume one credit.
                    For SMS package pricing,
                    <Link to="your-pricing-link">click here.</Link>
                </Typography>

                <Typography variant="h4" color="textSecondary">
                    How can I pay?
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    You can pay with your Visa, Maestro, MasterCard, Discover/Novus, Diners Club, American Express card, or PayPal.
                </Typography>

                <Typography variant="h4" color="textSecondary">
                    Can I cancel my plan?
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    You can cancel your subscription any time in your account settings and let it expire back to the Free Plan.
                </Typography>

                <Typography variant="h4" color="textSecondary">
                    What's your refund policy?
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    If you’re not satisfied with the service or features, you can request a refund within 10 days of your last payment.
                </Typography> */}








                    {/* <Grid container spacing={8}> */}
                    <Grid container spacing={8} sx={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px', paddingLeft: '16px', paddingRight: '16px' }}>

                        <Grid item xs={12} sm={6}>
                            <Typography variant="h4" color="textSecondary" fontFamily="Roboto">
                                Can I order SMS / voice call credits separately?
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                You can order extra SMS / voice call credits with your free plan or any paid plan.
                                Pay with a credit card or Paypal.
                                Please note that the confirmation SMS for adding/changing alert contact will also consume one credit.

                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h4" color="textSecondary" fontFamily="Roboto">
                                How can I pay?
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                You can pay with your Visa, Maestro, MasterCard, Discover/Novus, Diners Club, American Express card, or PayPal.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h4" color="textSecondary" fontFamily="Roboto">
                                Can I cancel my plan?
                            </Typography>
                            <Typography variant="body1" color="textSecondary" >
                                You can cancel your subscription any time in your account settings and let it expire back to the Free Plan.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h4" color="textSecondary" fontFamily="Roboto">
                                What's your refund policy?
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                If you’re not satisfied with the service or features, you can request a refund within 10 days of your last payment.
                            </Typography>
                        </Grid>
                    </Grid>

                </div>
            </div>
        </div>
    );
};

export default Pricing;
