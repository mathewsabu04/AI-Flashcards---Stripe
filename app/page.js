import Image from "next/image";
import getStripe from '@/utils/get-stripe'
import {SignedIn,SignedOut, UserButton} from '@clerk/nextjs'
import {AppBar, Box, Button, Container, Grid, Toolbar, Typography} from '@mui/material'
import Head from 'next/head'

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>FlashCard SaaS</title>
        <meta name = "description" content = 'Create flashcard from your text' />
      </Head>

      <AppBar position ="static">
        <Toolbar>
          <Typography variant = "h6" style= {{flexGrow: 1}}>Flashcard SaaS</Typography>
          <SignedOut>
            <Button color ="inherit" href="/sign-in">Login</Button>
            <Button color ="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{
        textAlign: 'center',
        my: 4,
      }}
      >
        <Typography variant ="h2" gutterBottom>Welcome to Flashcard SaaS</Typography>
        <Typography variant = "h5">
          {' '}
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant ='contained' color ='primary' sx= {{mt: 2}}>Get Started</Button>
      </Box>
      <Box sx={{my: 6}}>
        <Typography variant = "h2" components="h2" gutterBottom>
          Features
        </Typography>
       
        <Grid container spacing ={4}>
          <Grid item xs={12} md={4}>
          <Typography variant ="h6" gutterBottom>Easy Text Input</Typography>
          <Typography>
            {' '}
            Just input your text and let our software do the rest.</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant ="h6">Smart FlashCards</Typography>
          <Typography>
          {' '}
            Simply input your text and let our software do the rest</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant ="h6">Easy Access</Typography>
          <Typography>
          {' '}
            Be able to acess your flashcards from any device.</Typography>
        </Grid>
        </Grid>
      </Box>
      <Box sx={{my:6, textAlign: 'center'}}>
        <Typography variant ="h4" gutterBottom>Pricing</Typography>

        <Grid container spacing={4}>
  <Grid item xs={12} md={4}>
    <Box sx={{
      p: 3,
      border: "1px solid",
      borderColor: 'grey.300',
      borderRadius: 2,
    }}>
      <Typography variant="h5" gutterBottom>Basic</Typography>
      <Typography variant="h6" gutterBottom>$7 for a month</Typography>
      <Typography>Gain access to basic flashcard features and limited storage.</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>Choose Basic</Button>
    </Box>
  </Grid>
  <Grid item xs={12} md={4}>
    <Box sx={{
      p: 3,
      border: "1px solid",
      borderColor: 'grey.300',
      borderRadius: 2,
    }}>
      <Typography variant="h5" gutterBottom>Pro</Typography>
      <Typography variant="h6" gutterBottom>$12 for a month</Typography>
      <Typography>Get twice amount of storage and flashcards.</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>Choose Pro</Button>
    </Box>
  </Grid>
  <Grid item xs={12} md={4}>
    <Box sx={{
      p: 3,
      border: "1px solid",
      borderColor: 'grey.300',
      borderRadius: 2,
    }}>
      <Typography variant="h5" gutterBottom>Founder</Typography>
      <Typography variant="h6" gutterBottom>$20 for a month</Typography>
      <Typography>Get unlimited access to flashcards and storage.</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>Choose Pro</Button>
    </Box>
  </Grid>
</Grid>
      </Box>
</Container>
  )
}
